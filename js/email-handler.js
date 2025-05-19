/**
 * EmailJS Implementation for Max Portfolio
 * Handles contact form submission using EmailJS service
 * 
 * Created: May 19, 2025
 */

// Initialize EmailJS with your user ID (replace with your actual EmailJS user ID)
(function() {
  // Load EmailJS SDK
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
  script.async = true;
  
  script.onload = function() {
    // Initialize EmailJS with your User ID
    emailjs.init("GqKHoHLpcEAgip6pY");
  };
  
  document.head.appendChild(script);
})();

document.addEventListener('DOMContentLoaded', function() {
  // Get the form and message elements
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const formError = document.getElementById('formError');
  const submitButton = contactForm ? contactForm.querySelector('button[type="submit"]') : null;
  
  let isSubmitting = false;
  
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  /**
   * Handle form submission
   * @param {Event} e - The form submit event
   */
  async function handleFormSubmit(e) {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) return;
    isSubmitting = true;
    
    // Show loading state
    if (submitButton) {
      submitButton.innerHTML = '<span>Sending...</span><div class="spinner"></div>';
      submitButton.disabled = true;
    }
    
    try {
      // Get form data
      const name = contactForm.elements['name'].value;
      const email = contactForm.elements['email'].value;
      const message = contactForm.elements['message'].value;
      
      // Validate form data
      if (!validateForm({ name, email, message })) {
        showMessage(formError);
        resetSubmitButton();
        return;
      }
      
      // Send the email using EmailJS
      const emailResult = await sendEmailWithEmailJS({
        name,
        email,
        message
      });
      
      if (emailResult.success) {
        // Reset form and show success message
        contactForm.reset();
        showMessage(formSuccess);
      } else {
        // Show error message
        showMessage(formError);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showMessage(formError);
    } finally {
      resetSubmitButton();
    }
  }
  
  /**
   * Reset submit button to original state
   */
  function resetSubmitButton() {
    if (submitButton) {
      submitButton.innerHTML = '<span>Send Message</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>';
      submitButton.disabled = false;
    }
    isSubmitting = false;
  }
  
  /**
   * Validate form data
   * @param {Object} data - The form data object
   * @returns {boolean} - Whether the form data is valid
   */
  function validateForm(data) {
    // Check if name is provided
    if (!data.name || data.name.trim() === '') {
      return false;
    }
    
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      return false;
    }
    
    // Check if message is provided
    if (!data.message || data.message.trim() === '') {
      return false;
    }
    
    return true;
  }
  
  /**
   * Send email using EmailJS
   * @param {Object} data - The form data object
   * @returns {Promise<Object>} - The result of the email sending
   */
  async function sendEmailWithEmailJS(data) {
    try {
      // Check if EmailJS is loaded
      if (typeof emailjs === 'undefined') {
        console.error('EmailJS not loaded');
        return { success: false, error: 'EmailJS not loaded' };
      }
      
      const now = new Date();
      // Send the email using EmailJS
      const response = await emailjs.send(
        'service_c7ab3ps',
        'template_vzprctq',
        {
          name: data.name,
          email: data.email,
          message: data.message,
          to_email: 'maxlp12@gmail.com',
          date: now.toLocaleDateString(),
          time: now.toLocaleTimeString()
        }
      );
      
      console.log('Email sent successfully:', response);
      return { success: true, response };
      
    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false, error };
    }
  }
  
  /**
   * Show message (success or error)
   * @param {HTMLElement} messageElement - The message element to show
   */
  function showMessage(messageElement) {
    // Hide the form
    contactForm.style.opacity = '0';
    contactForm.style.transform = 'translateY(-20px)';
    contactForm.style.pointerEvents = 'none';
    
    // Show the message
    setTimeout(() => {
      messageElement.classList.add('visible');
    }, 300);
    
    // Hide the message and show the form again after some time
    setTimeout(() => {
      messageElement.classList.remove('visible');
      
      setTimeout(() => {
        contactForm.style.opacity = '1';
        contactForm.style.transform = 'translateY(0)';
        contactForm.style.pointerEvents = 'auto';
      }, 300);
    }, 5000);
  }
});

/**
 * Setup Instructions for EmailJS:
 * 
 * 1. Sign up for EmailJS at https://www.emailjs.com/
 * 
 * 2. Create a service:
 *    - Go to Email Services and connect to your email provider (Gmail, Outlook, etc.)
 *    - Give your service a name and connect it to your email account
 *    - Note the Service ID
 * 
 * 3. Create an email template:
 *    - Go to Email Templates and create a new template
 *    - Design your email using the template variables: {{name}}, {{email}}, {{message}}
 *    - Note the Template ID
 * 
 * 4. Get your User ID:
 *    - Go to the Integration section to get your User ID
 * 
 * 5. Replace the placeholders in this code:
 *    - Replace 'YOUR_USER_ID' with your EmailJS User ID
 *    - Replace 'YOUR_SERVICE_ID' with your EmailJS Service ID
 *    - Replace 'YOUR_TEMPLATE_ID' with your EmailJS Template ID
 * 
 * 6. Include this script in your HTML:
 *    <script src="js/email-handler.js"></script>
 */