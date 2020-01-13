const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const headerImg = document.querySelector("#cta-img");
const midPageImg = document.querySelector(".middle-img");
headerImg.src = "img/header-img.png";
midPageImg.src = "img/mid-page-accent.jpg";

const navText = document.querySelectorAll("a");
navText[0].textContent = "Services";
navText[1].textContent = "Product";
navText[2].textContent = "Vision";
navText[3].textContent = "Features";
navText[4].textContent = "About";
navText[5].textContent = "Contact";

const navBox = document.querySelector("nav");
const firstLink = document.createElement("a");
firstLink.textContent = "Home";
navBox.prepend(firstLink);
const endLink = document.createElement("a");
endLink.textContent = "End";
navBox.appendChild(endLink);

const navLinkColor = document.querySelectorAll("a");
navLinkColor.forEach(color => color.style.color = "green");

const myButton = document.querySelector("button");
myButton.textContent = "Get Started";

const ctaText = document.querySelector("h1");
ctaText.textContent = "DOM IS AWESOME";

const header4 = document.querySelectorAll("h4");
header4[0].textContent = "Features";
header4[1].textContent = "About";
header4[2].textContent = "Services";
header4[3].textContent = "Product";
header4[4].textContent = "Vision";
header4[5].textContent = "Contact";

const para = document.querySelectorAll("p");
para[0].textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[1].textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[2].textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[3].textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[4].textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[5].textContent = "123 Way 456 Street";
para[6].textContent = "Somewhere, USA";
para[7].textContent = "sales@greatidea.io";
para[8].textContent = "Copyright Great Idea! 2018";

const pColor = document.querySelectorAll('p');
pColor.forEach (color => color.style.color = 'red');
const pFontSize = document.querySelectorAll('p');
pFontSize.forEach(fontSize => fontSize.style.fontSize = '1.5rem');



