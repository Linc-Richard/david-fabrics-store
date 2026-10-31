"use strict";

const navToggle = document.querySelector("[data-nav-toggle]");
const primaryNav = document.querySelector("[data-primary-nav]");
const currentYear = document.querySelector("[data-current-year]");

function navigationLabel(key) {
  const language = document.documentElement.lang === "sw" ? "sw" : "en";
  return window.DavidFabricTranslations?.[language]?.[key] || key;
}

function closeNavigation() {
  if (!navToggle || !primaryNav) return;

  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", navigationLabel("openNavigation"));
  primaryNav.classList.remove("is-open");
}

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute("aria-label", navigationLabel(isOpen ? "openNavigation" : "closeNavigation"));
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 48rem)").matches) closeNavigation();
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Motion and scroll reveals are handled by js/motion.js.
