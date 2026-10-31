/* Theme controller — light/dark, persisted, system-aware, flash-free. */
(() => {
  const root = document.documentElement;
  const storageKey = "david-fabrics-theme";
  const toggle = document.querySelector("[data-theme-toggle]");
  const system = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  const reduce = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  let timer;

  function stored() {
    try {
      const value = localStorage.getItem(storageKey);
      return value === "light" || value === "dark" ? value : null;
    } catch (error) {
      return null;
    }
  }

  function labelKey(theme) {
    return theme === "dark" ? "themeToLight" : "themeToDark";
  }

  function label(theme) {
    const lang = root.lang === "sw" ? "sw" : "en";
    const copy = window.DavidFabricTranslations && window.DavidFabricTranslations[lang];
    return (copy && copy[labelKey(theme)]) || (theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }

  function sync(theme) {
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#121110" : "#FAF9F6");

    if (!toggle) return;
    toggle.setAttribute("aria-pressed", String(theme === "dark"));
    toggle.setAttribute("aria-label", label(theme));
    toggle.dataset.i18nAriaLabel = labelKey(theme);
  }

  function apply(theme, persist) {
    sync(theme);
    if (persist) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (error) {
        // The theme still works when storage is unavailable.
      }
    }
  }

  function transition(theme, persist) {
    if (reduce && reduce.matches) {
      apply(theme, persist);
      return;
    }
    root.classList.add("theme-transition");
    void root.offsetWidth;
    apply(theme, persist);
    clearTimeout(timer);
    timer = setTimeout(() => root.classList.remove("theme-transition"), 320);
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      transition(next, true);
    });
  }

  if (system) {
    const onSystemChange = (event) => {
      if (stored()) return;
      transition(event.matches ? "dark" : "light", false);
    };
    if (system.addEventListener) system.addEventListener("change", onSystemChange);
    else if (system.addListener) system.addListener(onSystemChange);
  }

  sync(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
})();
