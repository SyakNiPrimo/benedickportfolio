(function () {
  // Future CRM routing can send this lead into HubSpot CRM, Zapier, Make, n8n, or a direct API integration.
  const formAction = 'https://formsubmit.co/benedick.tiaga04@gmail.com';
  const thankYouUrl = 'https://syakniprimo.github.io/benedickportfolio/thank-you.html';

  const funnelMarkup = `
    <div class="lead-funnel-modal" id="lead-funnel-modal" aria-hidden="true">
      <div class="lead-funnel-backdrop" data-funnel-close></div>
      <div class="lead-funnel-dialog" role="dialog" aria-modal="true" aria-labelledby="lead-funnel-title">
        <div class="lead-funnel-topbar">
          <div>
            <p class="lead-funnel-kicker" data-funnel-step-label>Step 1 of 5</p>
            <h2 id="lead-funnel-title">Start Project Inquiry</h2>
            <p>Share the key details first so I can review your needs before any call is booked.</p>
          </div>
          <button class="lead-funnel-close" type="button" aria-label="Close project inquiry" data-funnel-close>X</button>
        </div>

        <form class="lead-funnel-form" action="${formAction}" method="POST" novalidate>
          <input type="hidden" name="_subject" value="New project inquiry from website" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="${thankYouUrl}" />
          <input type="hidden" name="lead_source" value="Website project inquiry funnel" />
          <input type="hidden" name="lead_status" value="New Inquiry" />
          <input class="hidden-field" type="text" name="_honey" tabindex="-1" autocomplete="off" />

          <!-- Suggested CRM fields include service need, urgency, budget, lead source, preferred next step, and lead status. Suggested lead statuses: New Inquiry, Reviewing Fit, Qualified Lead, Call Booked, Proposal Sent, Won, Not Fit or Follow Up Later. -->
          <div class="lead-funnel-progress" aria-hidden="true">
            <span data-funnel-bar></span>
          </div>
          <div class="lead-funnel-error" data-funnel-error role="alert" aria-live="polite"></div>

          <section class="lead-funnel-step is-active" data-funnel-step>
            <h3>Your business details</h3>
            <p>Tell me who you are and where I can review your business online.</p>
            <div class="lead-funnel-field-grid">
              <label class="lead-funnel-field" for="funnel-name"><span>Full name</span><input id="funnel-name" name="full_name" type="text" autocomplete="name" required /></label>
              <label class="lead-funnel-field" for="funnel-email"><span>Email address</span><input id="funnel-email" name="email" type="email" autocomplete="email" required /></label>
              <label class="lead-funnel-field" for="funnel-company"><span>Business or company name</span><input id="funnel-company" name="business_or_company_name" type="text" autocomplete="organization" required /></label>
              <label class="lead-funnel-field" for="funnel-website"><span>Website or social media link</span><input id="funnel-website" name="website_or_social_media_link" type="url" placeholder="https://" /></label>
            </div>
          </section>

          <section class="lead-funnel-step" data-funnel-step>
            <h3>What do you need help with?</h3>
            <p>Select all that apply.</p>
            <div class="lead-funnel-choice-grid lead-funnel-choice-grid-2" data-required-choice="service_need[]">
              <label class="lead-funnel-choice"><input type="checkbox" name="service_need[]" value="Website updates or landing page" /><span>Website updates or landing page</span></label>
              <label class="lead-funnel-choice"><input type="checkbox" name="service_need[]" value="Lead flow or CRM support" /><span>Lead flow or CRM support</span></label>
              <label class="lead-funnel-choice"><input type="checkbox" name="service_need[]" value="Workflow automation" /><span>Workflow automation</span></label>
              <label class="lead-funnel-choice"><input type="checkbox" name="service_need[]" value="Backend admin support" /><span>Backend admin support</span></label>
              <label class="lead-funnel-choice"><input type="checkbox" name="service_need[]" value="Short form content support" /><span>Short form content support</span></label>
              <label class="lead-funnel-choice"><input type="checkbox" name="service_need[]" value="Outsourcing support setup" /><span>Outsourcing support setup</span></label>
              <label class="lead-funnel-choice"><input type="checkbox" name="service_need[]" value="Not sure yet" /><span>Not sure yet</span></label>
            </div>
          </section>

          <section class="lead-funnel-step" data-funnel-step>
            <h3>Timing and budget</h3>
            <p>This helps me understand how urgent the support is and what kind of next step makes sense.</p>
            <fieldset class="lead-funnel-group">
              <legend>What best describes your current situation?</legend>
              <div class="lead-funnel-choice-grid">
                <label class="lead-funnel-choice"><input type="radio" name="current_situation" value="I need help now" required /><span>I need help now</span></label>
                <label class="lead-funnel-choice"><input type="radio" name="current_situation" value="I am planning ahead" /><span>I am planning ahead</span></label>
                <label class="lead-funnel-choice"><input type="radio" name="current_situation" value="I have an ongoing project" /><span>I have an ongoing project</span></label>
                <label class="lead-funnel-choice"><input type="radio" name="current_situation" value="I need ongoing support" /><span>I need ongoing support</span></label>
                <label class="lead-funnel-choice"><input type="radio" name="current_situation" value="I am just exploring" /><span>I am just exploring</span></label>
              </div>
            </fieldset>
            <div class="lead-funnel-field-grid">
              <label class="lead-funnel-field" for="funnel-timeline"><span>How soon do you need support?</span><select id="funnel-timeline" name="support_timeline" required><option value="">Select a timeline</option><option>This week</option><option>This month</option><option>Within 1 to 3 months</option><option>Just exploring</option></select></label>
              <label class="lead-funnel-field" for="funnel-budget"><span>Estimated monthly or project budget</span><select id="funnel-budget" name="estimated_budget" required><option value="">Select a budget range</option><option>Under $300</option><option>$300 to $500</option><option>$500 to $1,000</option><option>$1,000 plus</option><option>Not sure yet</option></select></label>
            </div>
          </section>

          <section class="lead-funnel-step" data-funnel-step>
            <h3>Briefly describe what you need help with</h3>
            <p>Share the problem, task, or goal in your own words.</p>
            <label class="lead-funnel-field" for="funnel-details"><span>Project details</span><textarea id="funnel-details" name="project_details" required></textarea></label>
          </section>

          <section class="lead-funnel-step" data-funnel-step>
            <h3>Preferred next step</h3>
            <p>Your details will be emailed first. After submission, you will see the next page with a booking option.</p>
            <div class="lead-funnel-choice-grid">
              <label class="lead-funnel-choice"><input type="radio" name="preferred_next_step" value="Email me first" required /><span>Email me first</span></label>
              <label class="lead-funnel-choice"><input type="radio" name="preferred_next_step" value="I am open to a discovery call" /><span>I am open to a discovery call</span></label>
              <label class="lead-funnel-choice"><input type="radio" name="preferred_next_step" value="I just want a quote or next step recommendation" /><span>I just want a quote or next step recommendation</span></label>
            </div>
          </section>

          <div class="lead-funnel-actions">
            <button class="button button-outline" type="button" data-funnel-prev>Back</button>
            <button class="button button-primary" type="button" data-funnel-next>Continue</button>
            <button class="button button-primary" type="submit" data-funnel-submit>Submit Project Inquiry</button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', funnelMarkup);

  const modal = document.getElementById('lead-funnel-modal');
  const form = modal.querySelector('.lead-funnel-form');
  const steps = Array.from(modal.querySelectorAll('[data-funnel-step]'));
  const stepLabel = modal.querySelector('[data-funnel-step-label]');
  const progressBar = modal.querySelector('[data-funnel-bar]');
  const error = modal.querySelector('[data-funnel-error]');
  const nextButton = modal.querySelector('[data-funnel-next]');
  const prevButton = modal.querySelector('[data-funnel-prev]');
  const submitButton = modal.querySelector('[data-funnel-submit]');
  let currentStep = 0;
  let lastFocusedElement = null;

  function updateStep(index) {
    currentStep = index;
    steps.forEach((step, stepIndex) => {
      step.classList.toggle('is-active', stepIndex === currentStep);
    });
    stepLabel.textContent = `Step ${currentStep + 1} of ${steps.length}`;
    progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
    prevButton.style.display = currentStep === 0 ? 'none' : 'inline-flex';
    nextButton.style.display = currentStep === steps.length - 1 ? 'none' : 'inline-flex';
    submitButton.style.display = currentStep === steps.length - 1 ? 'inline-flex' : 'none';
    error.textContent = '';
  }

  function getStepFields(step) {
    return Array.from(step.querySelectorAll('input, select, textarea')).filter((field) => field.type !== 'hidden');
  }

  function validateCurrentStep() {
    const step = steps[currentStep];
    const fields = getStepFields(step);
    const radioNames = new Set();
    const requiredChoiceGroup = step.querySelector('[data-required-choice]');

    if (requiredChoiceGroup) {
      const checked = requiredChoiceGroup.querySelector('input:checked');
      if (!checked) {
        return { valid: false, field: requiredChoiceGroup.querySelector('input') };
      }
    }

    for (const field of fields) {
      if (field.type === 'radio') {
        radioNames.add(field.name);
        continue;
      }

      if (field.type === 'checkbox') {
        continue;
      }

      if (!field.checkValidity()) {
        return { valid: false, field };
      }
    }

    for (const name of radioNames) {
      const group = fields.filter((field) => field.name === name);
      const requiresSelection = group.some((field) => field.required);
      const hasSelection = group.some((field) => field.checked);
      if (requiresSelection && !hasSelection) {
        return { valid: false, field: group[0] };
      }
    }

    return { valid: true };
  }

  function showError(field) {
    const message = field && (field.type === 'radio' || field.type === 'checkbox')
      ? 'Please select an option before continuing.'
      : 'Please complete the required field before continuing.';

    error.textContent = message;
    const focusTarget = field && (field.type === 'radio' || field.type === 'checkbox') ? field.closest('.lead-funnel-choice') : field;
    if (focusTarget && typeof focusTarget.focus === 'function') {
      focusTarget.focus();
    }
  }

  function openFunnel() {
    lastFocusedElement = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('funnel-open');
    updateStep(0);
    setTimeout(() => {
      const firstInput = steps[0].querySelector('input, textarea, select, button');
      if (firstInput) firstInput.focus();
    }, 80);
  }

  function closeFunnel() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('funnel-open');
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  function isFunnelLink(link) {
    const href = link.getAttribute('href') || '';
    const text = link.textContent.trim().toLowerCase();
    return text === 'start project inquiry'
      && (href === '#project-inquiry'
        || href === 'contact.html#project-inquiry'
        || href === './contact.html#project-inquiry'
        || href.endsWith('/contact.html#project-inquiry'));
  }

  document.addEventListener('click', (event) => {
    const inquiryLink = event.target.closest('a[href]');
    if (inquiryLink && isFunnelLink(inquiryLink)) {
      event.preventDefault();
      openFunnel();
      return;
    }

    if (event.target.closest('[data-funnel-close]')) {
      closeFunnel();
    }
  });

  nextButton.addEventListener('click', () => {
    const result = validateCurrentStep();
    if (!result.valid) {
      showError(result.field);
      return;
    }
    updateStep(Math.min(currentStep + 1, steps.length - 1));
  });

  prevButton.addEventListener('click', () => {
    updateStep(Math.max(currentStep - 1, 0));
  });

  form.addEventListener('submit', (event) => {
    const result = validateCurrentStep();
    if (!result.valid) {
      event.preventDefault();
      showError(result.field);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeFunnel();
    }
  });

  if (window.location.hash === '#project-inquiry') {
    setTimeout(openFunnel, 250);
  }

  updateStep(0);
})();
