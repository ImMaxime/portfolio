// List of icon URLs (will be populated from the content)
let iconUrls = [];
// Function to create carousel items
function createCarouselItems(carouselElement, icons) {
  // Create first set of icons
  icons.forEach((iconUrl) => {
    const item = document.createElement("div");
    item.className = "carousel-item";

    const img = document.createElement("img");
    img.src = iconUrl;
    img.alt = "Tech icon";

    item.appendChild(img);
    carouselElement.appendChild(item);
  });

  // Duplicate icons to ensure smooth infinite scrolling
  const duplicatedItems = carouselElement.innerHTML;
  carouselElement.innerHTML += duplicatedItems;
}

// Function to extract icons from HTML content
function extractIconsFromContent(content) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const imgElements = doc.querySelectorAll("img.clients-image");

  return Array.from(imgElements).map((img) => img.src);
}

// Initialize carousels with icons from the content
document.addEventListener("DOMContentLoaded", function () {
  // Add animation classes to hero elements
  const heroHeading = document.querySelector(".hero .heading-2");
  const heroParagraph = document.querySelector(".hero p");
  const heroButton = document.querySelector(".hero .button-primary");

  if (heroHeading) {
    heroHeading.classList.add("hero-heading");
  }

  if (heroParagraph) {
    heroParagraph.classList.add("hero-paragraph");
  }

  if (heroButton) {
    heroButton.classList.add("hero-button");
  }

  // Add animated class to hero section
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    heroSection.classList.add("animated");
  }

  const iconContent = `<section class="logos-title-large">
    <div class="container">
      <h2 class="clients-title">Proficient in Multiple<br>Programming Languages and Tools</h2>
      <div class="clients-wrapper">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/adonisjs/adonisjs-original.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubcodespaces/githubcodespaces-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-plain.svg" loading="lazy" class="clients-image" />  
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-line.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/filezilla/filezilla-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-plain.svg" loading="lazy" class="clients-image" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" loading="lazy" class="clients-image" />
      </div>
    </div>
  </section>`;

  // Extract icons from the content
  iconUrls = extractIconsFromContent(iconContent);

  // If extraction failed, use a fallback set
  if (iconUrls.length === 0) {
    iconUrls = [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/adonisjs/adonisjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg",
    ];
  }

  // Get carousel elements
  const carouselRight = document.getElementById("carousel-right");
  const carouselLeft = document.getElementById("carousel-left");

  // Create carousel items
  if (carouselRight) createCarouselItems(carouselRight, iconUrls);
  if (carouselLeft) createCarouselItems(carouselLeft, iconUrls);

  // Elements to observe
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  // Options for the observer
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No margin
    threshold: 0.15, // Trigger when at least 15% of the element is visible
  };

  // Callback function to execute when elements enter/exit the viewport
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
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
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});
