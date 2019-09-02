const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.getElementsByTagName('a');
let cta = document.getElementsByClassName('cta-text');
let ctaImage = document.getElementById("cta-img");
let mainContent = document.querySelector('.main-content div:nth-child(1) h4');
let mainContentText = document.querySelector('.main-content div:nth-child(1) p');
let mainContent2 = document.querySelector('.main-content div:nth-child(2) h4');
let mainContentText2 = document.querySelector('.main-content div:nth-child(2) p');
let mainImage = document.querySelector('.main-content img');
let bottomContent = document.querySelector('.bottom-content div:nth-child(1) h4');
let bottomContentText = document.querySelector('.bottom-content div:nth-child(1) p');
let bottomContent2 = document.querySelector('.bottom-content div:nth-child(2) h4');
let bottomContentText2 = document.querySelector('.bottom-content div:nth-child(2) p');
let bottomContent3 = document.querySelector('.bottom-content div:nth-child(3) h4');
let bottomContentText3 = document.querySelector('.bottom-content div:nth-child(3) p');

let contactH4 = document.querySelector('.contact h4');
let contactP1 = document.querySelector('.contact p:nth-child(2)');
let contactP2 = document.querySelector('.contact p:nth-child(3)');
let contactP3 = document.querySelector('.contact p:nth-child(4)');

let footerP = document.querySelector('footer p');

