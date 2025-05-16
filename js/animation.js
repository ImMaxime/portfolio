document.addEventListener('DOMContentLoaded', () => {
  // Elements to observe
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  // Options for the observer
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.15 // Trigger when at least 15% of the element is visible
  };
  
  // Callback function to execute when elements enter/exit the viewport
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      // If the element is in the viewport
      if (entry.isIntersecting) {
        // Add the appropriate animation class based on data attribute
        const animationType = entry.target.dataset.animation;
        entry.target.classList.add(animationType);
        
        // Stop observing the element once it's animated
        observer.unobserve(entry.target);
      }
    });
  };
  
  // Create the observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  // Start observing each animated element
  animatedElements.forEach(element => {
    observer.observe(element);
  });
});