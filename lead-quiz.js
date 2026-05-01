(function () {
  const inquiryUrl = 'https://formsubmit.co/benedick.tiaga04@gmail.com';
  const bookingUrl = 'https://syakniprimo.github.io/benedickportfolio/book.html';

  const quizMarkup = `
    <div class="quiz-modal" id="lead-quiz-modal" aria-hidden="true">
      <div class="quiz-backdrop" data-quiz-close></div>
      <div class="quiz-dialog" role="dialog" aria-modal="true" aria-labelledby="quiz-title">
        <div class="quiz-topbar">
          <div>
            <p class="quiz-kicker" data-quiz-step-label>Step 1 of 6</p>
            <h2 id="quiz-title">Find the right support path.</h2>
          </div>
          <button class="quiz-close" type="button" aria-label="Close inquiry quiz" data-quiz-close>X</button>
        </div>
        <form class="quiz-form" action="${inquiryUrl}" method="POST" novalidate>
          <input type="hidden" name="_subject" value="New qualified business support inquiry from website" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="${bookingUrl}" />
          <input type="hidden" name="lead_source" value="Website popup quiz" />
          <input type="hidden" name="lead_status" value="New website inquiry" />
          <input class="hidden-field" type="text" name="_honey" tabindex="-1" autocomplete="off" />

          <div class="quiz-progress" aria-hidden="true">
            <span data-quiz-bar></span>
          </div>
          <div class="quiz-error" data-quiz-error role="alert" aria-live="polite"></div>

          <section class="quiz-step is-active" data-quiz-step>
            <h3>What do you need help with first?</h3>
            <p>Choose the closest match. You can explain the details later.</p>
            <div class="quiz-choice-grid quiz-choice-grid-2">
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="primary_service" value="Website or landing page" required /><span>Website or landing page</span></label>
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="primary_service" value="Automation or workflow cleanup" /><span>Automation or workflow cleanup</span></label>
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="primary_service" value="Backend/admin support" /><span>Backend or admin support</span></label>
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="primary_service" value="Short-form content support" /><span>Short-form content support</span></label>
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="primary_service" value="Ongoing outsourcing support" /><span>Ongoing outsourcing support</span></label>
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="primary_service" value="Not sure yet" /><span>Not sure yet</span></label>
            </div>
          </section>

          <section class="quiz-step" data-quiz-step>
            <h3>What business problem should this solve?</h3>
            <p>Share the outcome you want, the bottleneck, or the task you want off your plate.</p>
            <label class="quiz-field" for="quiz-problem">
              <span>Main problem</span>
              <textarea id="quiz-problem" name="main_problem" required></textarea>
            </label>
          </section>

          <section class="quiz-step" data-quiz-step>
            <h3>How soon do you need help?</h3>
            <p>This helps prioritize urgency before a call is booked.</p>
            <div class="quiz-choice-grid">
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="timeline" value="ASAP" required /><span>ASAP</span></label>
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="timeline" value="This week" /><span>This week</span></label>
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="timeline" value="This month" /><span>This month</span></label>
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="timeline" value="Planning ahead" /><span>Planning ahead</span></label>
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="timeline" value="Not sure yet" /><span>Not sure yet</span></label>
            </div>
          </section>

          <section class="quiz-step" data-quiz-step>
            <h3>What type of support are you looking for?</h3>
            <p>Pick the option that feels closest to how you want to start.</p>
            <div class="quiz-choice-grid">
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="project_type" value="Small first task" required /><span>Small first task</span></label>
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="project_type" value="Project sprint" /><span>Project sprint</span></label>
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="project_type" value="Monthly support" /><span>Monthly support</span></label>
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="project_type" value="Long-term outsourcing support" /><span>Long-term outsourcing support</span></label>
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="project_type" value="I need guidance" /><span>I need guidance</span></label>
            </div>
          </section>

          <section class="quiz-step" data-quiz-step>
            <h3>Do you want the lead tracked in a CRM?</h3>
            <p>If yes, I can help route inquiries into a cleaner follow-up pipeline.</p>
            <div class="quiz-choice-grid">
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="crm_interest" value="Yes, I want CRM lead tracking" required /><span>Yes, I want CRM tracking</span></label>
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="crm_interest" value="Maybe, I need recommendations" /><span>Maybe, I need recommendations</span></label>
              <label class="quiz-choice"><input class="quiz-choice-input" type="radio" name="crm_interest" value="No, not right now" /><span>No, not right now</span></label>
            </div>
            <label class="quiz-field" for="quiz-tools">
              <span>Tools, links, or platforms involved</span>
              <textarea id="quiz-tools" name="tools_platforms_or_links" placeholder="Example: WordPress, HubSpot, Google Sheets, Shopify, Canva, CapCut"></textarea>
            </label>
          </section>

          <section class="quiz-step" data-quiz-step>
            <h3>Where should I send the reply?</h3>
            <p>Your answers will be emailed first. After submitting, you can book a 30-minute call.</p>
            <div class="quiz-field-grid">
              <label class="quiz-field" for="quiz-name"><span>Full name</span><input id="quiz-name" name="name" type="text" autocomplete="name" required /></label>
              <label class="quiz-field" for="quiz-email"><span>Email</span><input id="quiz-email" name="email" type="email" autocomplete="email" required /></label>
              <label class="quiz-field" for="quiz-company"><span>Business or company</span><input id="quiz-company" name="company" type="text" autocomplete="organization" required /></label>
              <label class="quiz-field" for="quiz-phone"><span>Phone or WhatsApp</span><input id="quiz-phone" name="phone_or_whatsapp" type="tel" autocomplete="tel" /></label>
            </div>
            <label class="quiz-field" for="quiz-website"><span>Website or profile to review</span><input id="quiz-website" name="website_or_profile" type="url" placeholder="https://" /></label>
            <label class="quiz-field" for="quiz-extra"><span>Anything else I should know?</span><textarea id="quiz-extra" name="additional_context"></textarea></label>
          </section>

          <div class="quiz-actions">
            <button class="button button-outline" type="button" data-quiz-prev>Back</button>
            <button class="button button-primary" type="button" data-quiz-next>Continue</button>
            <button class="button button-primary" type="submit" data-quiz-submit>Submit and Continue</button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', quizMarkup);

  const modal = document.getElementById('lead-quiz-modal');
  const form = modal.querySelector('.quiz-form');
  const steps = Array.from(modal.querySelectorAll('[data-quiz-step]'));
  const stepLabel = modal.querySelector('[data-quiz-step-label]');
  const progressBar = modal.querySelector('[data-quiz-bar]');
  const error = modal.querySelector('[data-quiz-error]');
  const nextButton = modal.querySelector('[data-quiz-next]');
  const prevButton = modal.querySelector('[data-quiz-prev]');
  const submitButton = modal.querySelector('[data-quiz-submit]');
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
    const fields = getStepFields(steps[currentStep]);
    const radioNames = new Set();

    for (const field of fields) {
      if (field.type === 'radio') {
        radioNames.add(field.name);
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
    const message = field && field.type === 'radio'
      ? 'Please select an option before continuing.'
      : 'Please complete the required field before continuing.';

    error.textContent = message;
    const focusTarget = field && field.type === 'radio' ? field.closest('.quiz-choice') : field;
    if (focusTarget && typeof focusTarget.focus === 'function') {
      focusTarget.focus();
    }
  }

  function openQuiz() {
    lastFocusedElement = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('quiz-open');
    updateStep(0);
    setTimeout(() => {
      const firstInput = steps[0].querySelector('input, textarea, button');
      if (firstInput) firstInput.focus();
    }, 80);
  }

  function closeQuiz() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('quiz-open');
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  document.addEventListener('click', (event) => {
    const inquiryLink = event.target.closest('a[href]');
    if (inquiryLink) {
      const href = inquiryLink.getAttribute('href');
      if (href === 'contact.html' || href === './contact.html' || href.endsWith('/contact.html')) {
        event.preventDefault();
        openQuiz();
        return;
      }
    }

    if (event.target.closest('[data-quiz-close]')) {
      closeQuiz();
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
      closeQuiz();
    }
  });

  if (window.location.pathname.endsWith('/contact.html')) {
    setTimeout(openQuiz, 250);
  }

  updateStep(0);
})();
