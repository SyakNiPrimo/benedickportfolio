param(
  [string]$Message = "Update portfolio",
  [string]$Owner = "SyakNiPrimo",
  [string]$Repo = "benedickportfolio",
  [string]$Branch = "main"
)

$ErrorActionPreference = "Stop"
Set-Location -LiteralPath $PSScriptRoot

$localGit = Join-Path $PSScriptRoot ".tools\git\cmd\git.exe"
if (Test-Path -LiteralPath $localGit) {
  $env:PATH = "$(Split-Path -Parent $localGit);$env:PATH"
}

$siteFiles = @(
  "index.html",
  "Profile.JPG",
  "cupofjoy-preview.png",
  "sold3x-preview.png",
  ".nojekyll"
)

function Get-ApiPath {
  param([string]$Path)
  return (($Path -split "/") | ForEach-Object { [uri]::EscapeDataString($_) }) -join "/"
}

function Invoke-GitHubApi {
  param(
    [string]$Method,
    [string]$Uri,
    [object]$Body = $null
  )

  $token = $env:GITHUB_TOKEN
  if (-not $token) {
    $token = $env:GH_TOKEN
  }

  if (-not $token) {
    throw "Set GITHUB_TOKEN or GH_TOKEN to a GitHub token with Contents read/write access, then run this script again. Do not paste the token into chat."
  }

  $headers = @{
    Authorization = "Bearer $token"
    Accept = "application/vnd.github+json"
    "X-GitHub-Api-Version" = "2022-11-28"
  }

  if ($null -eq $Body) {
    return Invoke-RestMethod -Method $Method -Uri $Uri -Headers $headers
  }

  return Invoke-RestMethod -Method $Method -Uri $Uri -Headers $headers -ContentType "application/json" -Body ($Body | ConvertTo-Json -Depth 8)
}

if ((Get-Command git -ErrorAction SilentlyContinue) -and (Test-Path -LiteralPath ".git")) {
  $changes = git status --porcelain

  if (-not $changes) {
    Write-Host "No local changes to deploy."
    exit 0
  }

  git add .
  git commit -m $Message
  git push origin $Branch

  Write-Host "Changes pushed. GitHub Pages will update from https://github.com/$Owner/$Repo."
  exit 0
}

foreach ($file in $siteFiles) {
  if (-not (Test-Path -LiteralPath $file)) {
    throw "Missing required site file: $file"
  }
}

foreach ($file in $siteFiles) {
  $apiPath = Get-ApiPath $file
  $contentUri = "https://api.github.com/repos/$Owner/$Repo/contents/$apiPath"
  $sha = $null

  try {
    $existing = Invoke-GitHubApi -Method "GET" -Uri "$contentUri`?ref=$Branch"
    $sha = $existing.sha
  }
  catch {
    if ($_.Exception.Response.StatusCode.value__ -ne 404) {
      throw
    }
  }

  $bytes = [System.IO.File]::ReadAllBytes((Resolve-Path -LiteralPath $file))
  $body = @{
    message = $Message
    content = [Convert]::ToBase64String($bytes)
    branch = $Branch
  }

  if ($sha) {
    $body.sha = $sha
  }

  Invoke-GitHubApi -Method "PUT" -Uri $contentUri -Body $body | Out-Null
  Write-Host "Published $file"
}

Write-Host "Published files to https://github.com/$Owner/$Repo on $Branch."
Write-Host "Live site should refresh shortly: https://syakniprimo.github.io/benedickportfolio/"
