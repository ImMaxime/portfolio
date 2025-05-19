/**
 * Handles real-time contact form validation
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get the form and form fields
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  // Add character counter to message field
  if (messageInput) {
    // Create character counter element
    const charCount = document.createElement('div');
    charCount.className = 'character-count';
    messageInput.parentNode.style.position = 'relative';
    messageInput.parentNode.appendChild(charCount);
    
    // Update character count on input
    messageInput.addEventListener('input', function() {
      const remaining = 1000 - this.value.length; // Assuming max length is 1000
      charCount.textContent = `${this.value.length} / 1000`;
      
      // Change color when approaching limit
      if (remaining < 50) {
        charCount.style.color = 'var(--warning)';
      } else if (remaining < 0) {
        charCount.style.color = 'var(--danger)';
      } else {
        charCount.style.color = 'var(--medium-light)';
      }
    });
  }
  
  // Add real-time validation
  if (nameInput) {
    nameInput.addEventListener('blur', validateName);
    nameInput.addEventListener('input', function() {
      if (nameInput.classList.contains('invalid')) {
        validateName();
      }
    });
  }
  
  if (emailInput) {
    emailInput.addEventListener('blur', validateEmail);
    emailInput.addEventListener('input', function() {
      if (emailInput.classList.contains('invalid')) {
        validateEmail();
      }
    });
  }
  
  if (messageInput) {
    messageInput.addEventListener('blur', validateMessage);
    messageInput.addEventListener('input', function() {
      if (messageInput.classList.contains('invalid')) {
        validateMessage();
      }
    });
  }
  
  /**
   * Validate name field
   * @returns {boolean} - Whether the name is valid
   */
  function validateName() {
    const name = nameInput.value.trim();
    const isValid = name.length >= 2;
    
    updateValidationState(nameInput, isValid, 'Please enter your name (at least 2 characters)');
    return isValid;
  }
  
  /**
   * Validate email field
   * @returns {boolean} - Whether the email is valid
   */
  function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    
    updateValidationState(emailInput, isValid, 'Please enter a valid email address');
    return isValid;
  }
  
  /**
   * Validate message field
   * @returns {boolean} - Whether the message is valid
   */
  function validateMessage() {
    const message = messageInput.value.trim();
    const isValid = message.length >= 10;
    
    updateValidationState(messageInput, isValid, 'Please enter your message (at least 10 characters)');
    return isValid;
  }
  
  /**
   * Update validation state of an input
   * @param {HTMLElement} input - The input element
   * @param {boolean} isValid - Whether the input is valid
   * @param {string} errorMessage - The error message to show if invalid
   */
  function updateValidationState(input, isValid, errorMessage) {
    // Remove existing error message
    const existingError = input.parentNode.querySelector('.error-text');
    if (existingError) {
      existingError.remove();
    }
    
    // Toggle classes based on validity
    if (isValid) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
      
      // Add error message
      const errorElement = document.createElement('div');
      errorElement.className = 'error-text';
      errorElement.textContent = errorMessage;
      input.parentNode.appendChild(errorElement);
    }
  }
  
  /**
   * Validate the entire form
   * @returns {boolean} - Whether the form is valid
   */
  function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    
    return isNameValid && isEmailValid && isMessageValid;
  }
  
  // Add form submit validation
  contactForm.addEventListener('submit', function(e) {
    if (!validateForm()) {
      e.preventDefault();
      
      // Scroll to the first invalid field
      const firstInvalid = contactForm.querySelector('.invalid');
      if (firstInvalid) {
        firstInvalid.focus();
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });
  
  // Add validation styles
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .contact-form input.invalid,
    .contact-form textarea.invalid {
      border-color: var(--danger);
    }
    
    .contact-form input.valid,
    .contact-form textarea.valid {
      border-color: var(--success);
    }
    
    .error-text {
      color: var(--danger);
      font-size: 12px;
      margin-top: 5px;
      animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  
  document.head.appendChild(styleElement);
});
