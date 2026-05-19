const whatsappNumber = "966551234567";

const messages = {
  price: "Hello Saudi Masala, I am interested in wholesale spice supply. Please share the wholesale price list.",
  catalogue:
    "Hello Saudi Masala, I am interested in wholesale spice supply. Please share the product catalogue and price list.",
  bulk: "Hello Saudi Masala, I want to place a bulk order for Indian and Kerala spice brands. Please share availability and wholesale pricing.",
  restaurant:
    "Hello Saudi Masala, I am interested in spice supply for a restaurant or hotel. Please share product options and wholesale pricing.",
  dealer: "Hello Saudi Masala, I am interested in becoming a dealer. Please share dealership details.",
};

function openWhatsApp(message) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

const header = document.querySelector("#site-header");
const nav = document.querySelector("#primary-nav");
const menuToggle = document.querySelector(".menu-toggle");

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    nav.classList.remove("is-open");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

const revealItems = [...document.querySelectorAll(".reveal")];
revealItems.forEach((item, index) => {
  item.style.setProperty("--delay", `${Math.min(index % 6, 5) * 90}ms`);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
);

revealItems.forEach((item) => revealObserver.observe(item));

const statNumbers = document.querySelectorAll("[data-count]");
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = Number(entry.target.dataset.count);
      const duration = 1100;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        entry.target.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      statsObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.55 }
);

statNumbers.forEach((number) => statsObserver.observe(number));

const sections = [...document.querySelectorAll("main section[id], footer[id]")];
const navLinks = [...document.querySelectorAll(".primary-nav a[href^='#']")];

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.toggle("active", href === `#${id}` || (id === "products" && href === "#categories"));
      });
    });
  },
  { threshold: 0.36, rootMargin: "-120px 0px -45% 0px" }
);

sections.forEach((section) => activeObserver.observe(section));

document.querySelectorAll(".enquire-product").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest(".product-card").dataset.product;
    openWhatsApp(
      `Hello Saudi Masala, I am interested in ${product}. Please share wholesale price and availability.`
    );
  });
});

const chatButton = document.querySelector("#whatsapp-float");
const chatPanel = document.querySelector("#whatsapp-panel");
const closeChat = document.querySelector("#close-chat");

function setChatOpen(isOpen) {
  chatPanel.hidden = !isOpen;
  chatButton.setAttribute("aria-expanded", String(isOpen));
}

chatButton.addEventListener("click", () => setChatOpen(chatPanel.hidden));
closeChat.addEventListener("click", () => setChatOpen(false));

document.querySelectorAll("[data-whatsapp]").forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.whatsapp;
    openWhatsApp(messages[type] || messages.catalogue);
  });
});

document.querySelector("#enquiry-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = new FormData(form);
  const message = [
    "Hello Saudi Masala, I would like to make a B2B wholesale enquiry.",
    "",
    `Name: ${data.get("name")}`,
    `Company: ${data.get("company")}`,
    `Phone / WhatsApp: ${data.get("phone")}`,
    `City: ${data.get("city")}`,
    `Business Type: ${data.get("businessType")}`,
    `Interested Products: ${data.get("products")}`,
    `Message: ${data.get("message") || "Please share catalogue, price list and availability."}`,
  ].join("\n");

  openWhatsApp(message);
});

document.querySelector(".subscribe-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector("input");
  input.value = "";
  input.placeholder = "Thank you for subscribing";
});
