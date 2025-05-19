// Language Translation System

// Configuration
const translations = {
  en: {
    // Header Navigation
    NAV_HOME: "Home",
    NAV_HIGHLIGHTS: "Highlights",
    NAV_PROJECTS: "Projects",
    NAV_ABOUT: "About",
    CTA_WORK_TOGETHER: "Let's work together!",
    
    // Hero Section
    HERO_TITLE: "Website & application Creator you need",
    HERO_DESCRIPTION_1: "A full-stack programmer skilled in PHP, JavaScript, and SQL can create dynamic web applications from front to back.",
    HERO_DESCRIPTION_2: "I can design interactive interfaces, build server-side functionality, and manage data.",
    HERO_CTA: "let's work together",
    
    // Highlights Section
    ROLLBACK8_DESCRIPTION: "One-click ultra-realistic 8MM Film Emulation effect for Adobe After Effect & Adobe Premiere Pro.",
    ROLLBACK8_FOOTER: "*Made for Adobe After Effect & Adobe Premiere Pro",
    CRT_TITLE: "CRT Emulator",
    CRT_DESCRIPTION: "Get the coveted CRT effect in the click of a button.",
    CRT_DESCRIPTION_FULL: "Our CRT Emulator gets the need for a bulky, tedious setup out of the way and gives you complete control of every individual element of the CRT look.",
    CRT_FOOTER: "*Made for Adobe After Effect",
    
    // About Section
    ABOUT_TITLE: "About Me",
    ABOUT_HELLO: "Hello! I'm",
    ABOUT_INTRO: "a full-stack developer specializing in both front-end and back-end development, with expertise in JavaScript, Python, and SQL technologies.",
    ABOUT_FRONTEND_START: "On the front-end, I excel in creating",
    ABOUT_FRONTEND_HIGHLIGHT: "responsive and interactive interfaces",
    ABOUT_FRONTEND_REST: "using React, Angular, and Flutter. My UI/UX skills ensure beautiful, user-centric designs with expert-level wireframing and responsive design implementation.",
    ABOUT_BACKEND: "For back-end development, I leverage Python, Node.js, and PHP to build robust server-side applications. My database management skills include MySQL, Redis, and Prometheus, ensuring efficient data handling and system monitoring.",
    ABOUT_SUMMARY: "Whether it's crafting beautiful user interfaces, implementing complex backend logic, or optimizing database performance, I bring a comprehensive skill set to every project. My commitment to clean code and performance optimization ensures scalable, maintainable solutions.",
    
    // Skills Section
    SKILLS_TITLE_1: "Proficient in Multiple",
    SKILLS_TITLE_2: "Programming Languages and Tools",
    SKILLS_FRONTEND: "Front-End Development",
    SKILLS_UI_UX: "UI/UX Design",
    SKILLS_BACKEND: "Back-End Development",
    SKILLS_DATABASE: "Database Management",
    SKILL_LEVEL_EXPERT: "Expert",
    SKILL_LEVEL_ADVANCED: "Advanced",
    SKILL_LEVEL_PROFICIENT: "Proficient",
    SKILL_UX: "User Experience",
    SKILL_RESPONSIVE: "Responsive Design",
    SKILL_WIREFRAMING: "Wireframing",
    
    // Experience Section
    EXPERIENCE_TITLE: "Professional Experience",
    JOB_TITLE_FULLSTACK: "Full-Stack Developer",
    JOB_TITLE_TECH_SUPPORT: "Tech Support Level 1",
    JOB_DESC_FULLSTACK_1: "Full-stack programmer specializing in creating responsive websites and mobile applications, delivering intuitive user interfaces and reliable back-end systems.",
    JOB_DESC_FULLSTACK_2: "Specialized in developing Adobe extensions, backend servers and desktop applications, delivering seamless user experiences and robust functionality.",
    JOB_DESC_FULLSTACK_3: "Developed and maintained various web applications using PHP, JavaScript, and MySQL. Implemented responsive designs and improved application performance.",
    JOB_DESC_TECH_SUPPORT: "Provided technical support for software and hardware issues. Assisted customers in troubleshooting and resolving technical problems effectively.",
    
    // Why Me Section
    WHY_ME_TITLE: "Why should we work together ?",
    WHY_ME_FEATURES: "Features",
    WHY_ME_TIME: "Time Management",
    WHY_ME_BENEFITS: "Benefits",
    WHY_ME_FEATURES_DESC: "I design beautiful & engaging hand made websites with a user-centric approach that can be easily custiomized & updated.",
    WHY_ME_TIME_DESC: "Effectively allocate resources, meet deadlines, and prioritize tasks, ensuring timely project completion.",
    WHY_ME_BENEFITS_DESC: "I design websites that help businesses increase their yearly revenue, scale to have more financial peace & provide owners free time to be with their loved ones.",
    
    // Contact Section
    CONTACT_TITLE: "Let's Work Together",
    CONTACT_SUBTITLE: "Get in Touch",
    CONTACT_DESC: "Need someone experienced and skilled with your projects? Fill out the form to get a free consultation.",
    FORM_NAME: "Name",
    FORM_EMAIL: "Email",
    FORM_MESSAGE: "Message",
    FORM_NAME_PLACEHOLDER: "Enter your name",
    FORM_EMAIL_PLACEHOLDER: "Enter your email",
    FORM_MESSAGE_PLACEHOLDER: "Tell me about your project...",
    FORM_SUBMIT: "Send Message",
    FORM_SUCCESS: "Thank you! Your message has been sent successfully.",
    FORM_ERROR: "Oops! Something went wrong. Please try again later.",
    
    // Footer
    FOOTER_TAGLINE: "Full-stack developer based in Montreal, Canada",
    FOOTER_NAV: "Navigation",
    FOOTER_CONTACT: "Contact",
    FOOTER_COPYRIGHT: "Copyright ©",
    
    // Project cards content
    PROJECT_TYPE_APP: "Application",
    PROJECT_TYPE_DESKTOP: "Desktop App",
    PROJECT_TYPE_API: "API",
    PROJECT_TYPE_AE: "AFTER EFFECT",
    PROJECT_TYPE_PR: "PREMIERE PRO",
    PROJECT_DINNER_DESC: "An AI-powered app suggesting recipes based on ingredients you have, using text, voice, or image input.",
    PROJECT_FREDPELLE_DESC: "A desktop app for downloading products, accessing purchase links, and streaming FredPelle's YouTube videos seamlessly.",
    PROJECT_TELEMETRY_DESC: "A real-time telemetry system using WebSocket, Redis, and MySQL for tracking driver positions.",
    PROJECT_RB8_DESC: "Achieve Ultra-Realistic Super 8 Film Emulations with the press of a button, then easily tweak it to your liking from an easy to use interface.",
    PROJECT_CRT_DESC_1: "Achieve the CRT effect effortlessly. Previously available on",
    PROJECT_CRT_DESC_2: "it was removed after being rebought. A remake is planned, with free downloads still circulating online.",
    PROJECT_RB16_DESC: "Achieve Ultra-Realistic 16MM Film Emulations with the press of a button, then easily tweak settings like Grain, Halation, Filmstock and more from an easy to use interface.",
    PROJECT_STATUS_COMING: "Comming Soon",
    PROJECT_STATUS_PRIVATE: "Private",
    PROJECT_VIEW: "View Project",
    PROJECT_STATUS_DISCONTINUED: "Discontinued",
    PROJECT_STATUS_WIP: "Work in Progress",
    
    // Misc
    ABOUT_IMAGE_ALT: "That is me!",
    PROJECT_TITLE_CRT: "CRT Emulator",
    PROJECT_TITLE_RB8: "Rollback 8",
    PROJECT_TITLE_DINNER: "Whats for Dinner",
    PROJECT_TITLE_FREDPELLE: "FredPelle Dashboard",
    PROJECT_TITLE_TELEMETRY: "Telemetry API",
    PROJECT_TITLE_ROLLBACK8: "Rollback8",
    PROJECT_TITLE_ROLLBACK16: "Rollback16"
  },
  
  fr: {
    // Header Navigation
    NAV_HOME: "Accueil",
    NAV_HIGHLIGHTS: "En Vedette",
    NAV_PROJECTS: "Projets",
    NAV_ABOUT: "À propos",
    CTA_WORK_TOGETHER: "Travaillons ensemble !",
    
    // Hero Section
    HERO_TITLE: "Créateur web & d'Applications dont vous avez besoin",
    HERO_DESCRIPTION_1: "Un programmeur full-stack compétent en PHP, JavaScript et SQL peut créer des applications web dynamiques de bout en bout.",
    HERO_DESCRIPTION_2: "Je peux concevoir des interfaces interactives, créer des fonctionnalités côté serveur et gérer des données.",
    HERO_CTA: "travaillons ensemble",
    
    // Highlights Section
    ROLLBACK8_DESCRIPTION: "Effet d'émulation de film 8MM ultra-réaliste en un clic pour Adobe After Effect et Adobe Premiere Pro.",
    ROLLBACK8_FOOTER: "*Conçu pour Adobe After Effect et Adobe Premiere Pro",
    CRT_TITLE: "Émulateur CRT",
    CRT_DESCRIPTION: "Obtenez l'effet CRT convoité en un clic.",
    CRT_DESCRIPTION_FULL: "Notre émulateur CRT élimine le besoin d'une configuration encombrante et fastidieuse et vous donne un contrôle complet sur chaque élément du look CRT.",
    CRT_FOOTER: "*Conçu pour Adobe After Effect",
    
    // About Section
    ABOUT_TITLE: "À propos de moi",
    ABOUT_HELLO: "Bonjour ! Je suis",
    ABOUT_INTRO: "un développeur full-stack spécialisé dans le développement front-end et back-end, avec une expertise en JavaScript, Python et technologies SQL.",
    ABOUT_FRONTEND_START: "Côté front-end, j'excelle dans la création d'",
    ABOUT_FRONTEND_HIGHLIGHT: "interfaces réactives et interactives",
    ABOUT_FRONTEND_REST: "utilisant React, Angular et Flutter. Mes compétences en UI/UX garantissent des designs élégants et centrés sur l'utilisateur avec une implémentation experte des wireframes et du design responsive.",
    ABOUT_BACKEND: "Pour le développement back-end, j'utilise Python, Node.js et PHP pour construire des applications robustes côté serveur. Mes compétences en gestion de bases de données incluent MySQL, Redis et Prometheus, assurant une gestion efficace des données et une surveillance des systèmes.",
    ABOUT_SUMMARY: "Qu'il s'agisse de créer de belles interfaces utilisateur, d'implémenter une logique backend complexe ou d'optimiser les performances des bases de données, j'apporte un ensemble complet de compétences à chaque projet. Mon engagement envers un code propre et l'optimisation des performances garantit des solutions évolutives et maintenables.",
    
    // Skills Section
    SKILLS_TITLE_1: "Compétent en multiples",
    SKILLS_TITLE_2: "langages de programmation et outils",
    SKILLS_FRONTEND: "Développement Front-End",
    SKILLS_UI_UX: "Conception UI/UX",
    SKILLS_BACKEND: "Développement Back-End",
    SKILLS_DATABASE: "Gestion de bases de données",
    SKILL_LEVEL_EXPERT: "Expert",
    SKILL_LEVEL_ADVANCED: "Avancé",
    SKILL_LEVEL_PROFICIENT: "Compétent",
    SKILL_UX: "Expérience utilisateur",
    SKILL_RESPONSIVE: "Design responsive",
    SKILL_WIREFRAMING: "Maquettage",
    
    // Experience Section
    EXPERIENCE_TITLE: "Expérience professionnelle",
    JOB_TITLE_FULLSTACK: "Développeur Full-Stack",
    JOB_TITLE_TECH_SUPPORT: "Support technique niveau 1",
    JOB_DESC_FULLSTACK_1: "Programmeur full-stack spécialisé dans la création de sites web réactifs et d'applications mobiles, offrant des interfaces utilisateur intuitives et des systèmes back-end fiables.",
    JOB_DESC_FULLSTACK_2: "Spécialisé dans le développement d'extensions Adobe, de serveurs backend et d'applications de bureau, offrant des expériences utilisateur fluides et des fonctionnalités robustes.",
    JOB_DESC_FULLSTACK_3: "A développé et maintenu diverses applications web utilisant PHP, JavaScript et MySQL. A implémenté des designs réactifs et amélioré les performances des applications.",
    JOB_DESC_TECH_SUPPORT: "A fourni un support technique pour les problèmes logiciels et matériels. A aidé les clients à diagnostiquer et résoudre efficacement les problèmes techniques.",
    
    // Why Me Section
    WHY_ME_TITLE: "Pourquoi devrions-nous travailler ensemble ?",
    WHY_ME_FEATURES: "Fonctionnalités",
    WHY_ME_TIME: "Gestion du temps",
    WHY_ME_BENEFITS: "Avantages",
    WHY_ME_FEATURES_DESC: "Je conçois des sites web beaux et attrayants faits à la main avec une approche centrée sur l'utilisateur qui peuvent être facilement personnalisés et mis à jour.",
    WHY_ME_TIME_DESC: "Allocation efficace des ressources, respect des délais et priorisation des tâches, garantissant la réalisation des projets dans les temps.",
    WHY_ME_BENEFITS_DESC: "Je conçois des sites web qui aident les entreprises à augmenter leur chiffre d'affaires annuel, à se développer pour avoir plus de tranquillité financière et à offrir aux propriétaires du temps libre pour être avec leurs proches.",
    
    // Contact Section
    CONTACT_TITLE: "Travaillons ensemble",
    CONTACT_SUBTITLE: "Entrer en contact",
    CONTACT_DESC: "Besoin de quelqu'un d'expérimenté et qualifié pour vos projets ? Remplissez le formulaire pour obtenir une consultation gratuite.",
    FORM_NAME: "Nom",
    FORM_EMAIL: "Courriel",
    FORM_MESSAGE: "Message",
    FORM_NAME_PLACEHOLDER: "Entrez votre nom",
    FORM_EMAIL_PLACEHOLDER: "Entrez votre courriel",
    FORM_MESSAGE_PLACEHOLDER: "Parlez-moi de votre projet...",
    FORM_SUBMIT: "Envoyer le message",
    FORM_SUCCESS: "Merci ! Votre message a été envoyé avec succès.",
    FORM_ERROR: "Oups ! Quelque chose s'est mal passé. Veuillez réessayer plus tard.",
    
    // Footer
    FOOTER_TAGLINE: "Développeur full-stack basé à Montréal, Canada",
    FOOTER_NAV: "Navigation",
    FOOTER_CONTACT: "Contact",
    FOOTER_COPYRIGHT: "Tous droits réservés ©",
    
    // Project cards content
    PROJECT_TYPE_APP: "Application",
    PROJECT_TYPE_DESKTOP: "Application bureau",
    PROJECT_TYPE_API: "API",
    PROJECT_TYPE_AE: "AFTER EFFECT",
    PROJECT_TYPE_PR: "PREMIERE PRO",
    PROJECT_DINNER_DESC: "Une application alimentée par l'IA suggérant des recettes basées sur les ingrédients que vous avez, en utilisant du texte, de la voix ou des images.",
    PROJECT_FREDPELLE_DESC: "Une application de bureau pour télécharger des produits, accéder aux liens d'achat et diffuser les vidéos YouTube de FredPelle de manière fluide.",
    PROJECT_TELEMETRY_DESC: "Un système de télémétrie en temps réel utilisant WebSocket, Redis et MySQL pour suivre les positions des conducteurs.",
    PROJECT_RB8_DESC: "Obtenez des émulations de film Super 8 ultra-réalistes en appuyant sur un bouton, puis modifiez-les facilement selon vos préférences à partir d'une interface facile à utiliser.",
    PROJECT_CRT_DESC_1: "Obtenez l'effet CRT sans effort. Auparavant disponible sur",
    PROJECT_CRT_DESC_2: "il a été supprimé après avoir été racheté. Une refonte est prévue. Des liens gratuits circulant toujours en ligne.",
    PROJECT_RB16_DESC: "Obtenez des émulations de film 16MM ultra-réalistes en appuyant sur un bouton, puis modifiez facilement les paramètres comme le grain, le halo, le type de film et plus encore à partir d'une interface facile à utiliser.",
    PROJECT_STATUS_COMING: "Bientôt en ligne",
    PROJECT_STATUS_PRIVATE: "Privé",
    PROJECT_VIEW: "Voir le projet",
    PROJECT_STATUS_DISCONTINUED: "Discontinué",
    PROJECT_STATUS_WIP: "En développement",
    
    // Misc
    ABOUT_IMAGE_ALT: "C'est moi !",
    PROJECT_TITLE_CRT: "Émulateur CRT",
    PROJECT_TITLE_RB8: "Rollback 8",
    PROJECT_TITLE_DINNER: "Whats for Dinner",
    PROJECT_TITLE_FREDPELLE: "Tableau de bord FredPelle",
    PROJECT_TITLE_TELEMETRY: "API de Télémétrie",
    PROJECT_TITLE_ROLLBACK8: "Rollback8",
    PROJECT_TITLE_ROLLBACK16: "Rollback16"
  }
};

// Current language state
let currentLanguage = 'en';
let isTranslating = false;
let languageToggleAdded = false;

// Add language toggle button to the header
function addLanguageToggle() {
  // Prevent adding duplicate buttons
  if (languageToggleAdded) return;
  
  const nav = document.querySelector('.main-nav .nav-list');
  if (!nav) return;
  
  // Check if toggle already exists
  if (document.getElementById('languageToggle')) return;
  
  const languageToggle = document.createElement('li');
  languageToggle.innerHTML = `<a href="#" class="nav-item language-toggle" id="languageToggle">EN | FR</a>`;
  nav.appendChild(languageToggle);
  
  document.getElementById('languageToggle').addEventListener('click', function(e) {
    e.preventDefault();
    if (!isTranslating) {
      toggleLanguage();
    }
  });
  
  languageToggleAdded = true;
}

// Find all elements with data-i18n attributes
function getTranslatableElements() {
  const elements = [];
  
  // Find elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    elements.push({
      element: el,
      type: 'element',
      key: el.getAttribute('data-i18n')
    });
  });
  
  // Find input elements with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    elements.push({
      element: el,
      type: 'placeholder',
      key: el.getAttribute('data-i18n-placeholder')
    });
  });
  
  // Fallback: Process all text nodes if no data-i18n elements found
  if (elements.length === 0) {
    processNodeForTextContent(document.body);
  }
  
  return elements;
  
  // Helper function for fallback mode
  function processNodeForTextContent(node) {
    // Skip certain nodes
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = node.tagName.toLowerCase();
      if (tagName === 'script' || tagName === 'style' || tagName === 'noscript') {
        return;
      }
      
      // Process child nodes
      Array.from(node.childNodes).forEach(processNodeForTextContent);
      
    } else if (node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue.trim();
      if (text.length > 0) {
        // Try to find a matching key
        const key = findKeyByText(text);
        if (key) {
          elements.push({
            element: node,
            type: 'textNode',
            key: key
          });
        }
      }
    }
  }
}

// Helper function to find a translation key by its text value
function findKeyByText(text) {
  if (!text || typeof text !== 'string' || text.trim() === '') return null;
  
  // Check if text matches any translation in current language
  for (const [key, value] of Object.entries(translations[currentLanguage])) {
    if (value === text) {
      return key;
    }
  }
  
  // If no exact match, try to find partial matches
  let bestMatch = null;
  let bestMatchLength = 0;
  
  for (const [key, value] of Object.entries(translations[currentLanguage])) {
    if (text.includes(value) && value.length > bestMatchLength) {
      bestMatch = key;
      bestMatchLength = value.length;
    }
  }
  
  return bestMatch;
}

// Toggle language - key-based version
function toggleLanguage() {
  if (isTranslating) return;
  isTranslating = true;
  
  // Add fade effect to the body during translation
  document.body.style.opacity = '0.95';
  
  const targetLanguage = currentLanguage === 'en' ? 'fr' : 'en';
  
  // Update language toggle button text
  const languageToggle = document.getElementById('languageToggle');
  if (languageToggle) {
    languageToggle.textContent = targetLanguage === 'en' ? 'EN | FR' : 'FR | EN';
  }
  
  // Small timeout to allow the fade effect to be visible
  setTimeout(() => {
    // Get all translatable elements
    const translatableElements = getTranslatableElements();
    
    // Update each element based on its type
    translatableElements.forEach(({element, type, key}) => {
      if (!key || !translations[targetLanguage][key]) return;
      
      const translation = translations[targetLanguage][key];
      
      if (type === 'element') {
        element.textContent = translation;
      } else if (type === 'placeholder') {
        element.placeholder = translation;
      } else if (type === 'textNode') {
        element.nodeValue = translation;
      }
    });
    
    // Update current language
    currentLanguage = targetLanguage;
    
    // Store language preference in local storage
    localStorage.setItem('preferredLanguage', currentLanguage);
    
    // Restore opacity after translation
    document.body.style.opacity = '1';
    
    // Reset translating flag
    isTranslating = false;
  }, 50);
}

// Add data-i18n attributes to all elements
function addTranslationAttributes() {
  // Process all text nodes
  function processNode(node) {
    // Skip certain nodes
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = node.tagName.toLowerCase();
      if (tagName === 'script' || tagName === 'style' || tagName === 'noscript') {
        return;
      }
      
      // Process child nodes
      Array.from(node.childNodes).forEach(processNode);
      
    } else if (node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue.trim();
      if (text.length > 0) {
        // Try to find a matching key
        for (const [key, value] of Object.entries(translations[currentLanguage])) {
          if (value === text && node.parentNode) {
            // Don't add data-i18n if it's a mixed text node with other content
            if (node.parentNode.childNodes.length === 1) {
              node.parentNode.setAttribute('data-i18n', key);
              break;
            }
          }
        }
      }
    }
  }
  
  // Process input elements with placeholders
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
    const placeholder = el.placeholder.trim();
    if (placeholder) {
      for (const [key, value] of Object.entries(translations[currentLanguage])) {
        if (value === placeholder) {
          el.setAttribute('data-i18n-placeholder', key);
          break;
        }
      }
    }
  });
  
  // Start processing from body
  processNode(document.body);
}

// Initialize language system
function initializeLanguageSystem() {
  // Only add the toggle once
  if (!languageToggleAdded) {
    addLanguageToggle();
  }
  
  // Add data-i18n attributes for easier future translations
  addTranslationAttributes();
  
  // Check for stored language preference
  const storedLanguage = localStorage.getItem('preferredLanguage');
  if (storedLanguage && storedLanguage !== currentLanguage) {
    // Set initial language without animation
    currentLanguage = storedLanguage === 'en' ? 'fr' : 'en'; // Set to opposite so toggle works
    toggleLanguage();
  }
}

// Initialize when DOM is loaded (only once)
document.addEventListener('DOMContentLoaded', initializeLanguageSystem);

// Helper function to update the translation for a specific element
window.updateTranslation = function(element, key) {
  if (!element || !key || !translations[currentLanguage][key]) return;
  
  if (element.hasAttribute('placeholder')) {
    element.placeholder = translations[currentLanguage][key];
    element.setAttribute('data-i18n-placeholder', key);
  } else {
    element.textContent = translations[currentLanguage][key];
    element.setAttribute('data-i18n', key);
  }
};