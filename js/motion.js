/* Motion layer — vanilla JS, reduced-motion aware. */
(() => {
  window.__dfMotion = true;
  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)");
  const parallax = matchMedia("(min-width: 64rem) and (hover: hover) and (pointer: fine)");
  const desktop = matchMedia("(min-width: 48rem)");
  const toggle = $("[data-nav-toggle]");
  const themeToggle = $("[data-theme-toggle]");
  const header = $("[data-site-header]");
  const nav = $("[data-primary-nav]");
  const hero = $("[data-motion-hero]");
  const media = hero && $(".hero-media", hero);
  const photo = $(".intro-photo");
  const links = $$(".primary-nav a");
  const secs = $$("main section[id]");
  const revs = $$("[data-reveal]");
  const stagger = () => parseFloat(getComputedStyle(root).getPropertyValue("--stagger")) || 90;
  const reveal = (el) => {
    if (el.classList.contains("is-revealed")) return;
    const kids = el.parentElement ? $$("[data-reveal]", el.parentElement) : [];
    el.style.setProperty("--reveal-delay", Math.min(Math.max(0, kids.indexOf(el)), 4) * stagger() + "ms");
    el.classList.add("is-revealed");
  };

  if (reduce.matches || !("IntersectionObserver" in window)) {
    revs.forEach(reveal);
  } else {
    try {
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const clip = ["line", "rise", "mask"].includes(e.target.dataset.reveal);
          if (!clip && e.intersectionRatio < 0.15) return;
          reveal(e.target);
          obs.unobserve(e.target);
        });
      }, { threshold: [0, 0.15], rootMargin: "0px 0px -8% 0px" });
      revs.forEach((el) => io.observe(el));
      setTimeout(() => {
        revs.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (!el.classList.contains("is-revealed") && r.bottom > 0 && r.top < innerHeight) reveal(el);
        });
      }, 4000);
    } catch (e) {
      revs.forEach(reveal);
    }
  }

  let ticking = false;
  const scroll = () => {
    ticking = false;
    if (header) header.classList.toggle("is-scrolled", scrollY > 8);
    let active = "";
    secs.forEach((s) => {
      const r = s.getBoundingClientRect();
      if (r.top <= innerHeight * 0.4 && r.bottom > innerHeight * 0.2) active = s.id;
    });
    links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + active));
    const can = parallax.matches && !reduce.matches;
    if (media && hero) {
      const r = hero.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)));
      media.style.transform = can ? `translate3d(0, ${p * 40}px, 0)` : "";
    }
    if (photo) {
      const r = photo.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight - r.top) / Math.max(1, innerHeight + r.height)));
      photo.style.transform = can ? `translate3d(0, ${(p - 0.5) * 24}px, 0)` : "";
    }
  };
  const queue = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(scroll);
  };
  addEventListener("scroll", queue, { passive: true });
  queue();

  const lock = (on) => {
    root.classList.toggle("menu-open", on);
    document.body.classList.toggle("menu-open", on);
  };
  const focus = () => [...$$("a,button", nav), themeToggle, toggle].filter(Boolean);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      lock(open);
      if (open && !desktop.matches) requestAnimationFrame(() => focus()[0]?.focus({ preventScroll: true }));
    });
    $$("a", nav).forEach((a) => a.addEventListener("click", () => {
      lock(false);
      const href = a.getAttribute("href");
      const target = href && href[0] === "#" ? $(href) : null;
      if (target && !reduce.matches) setTimeout(() => {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
      }, 0);
    }));
    document.addEventListener("keydown", (e) => {
      if (!root.classList.contains("menu-open")) return;
      if (e.key === "Escape") {
        e.preventDefault();
        toggle.click();
        lock(false);
        toggle.focus({ preventScroll: true });
        return;
      }
      if (e.key !== "Tab") return;
      const items = focus();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
    const leave = (e) => { if (e.matches) lock(false); };
    if (desktop.addEventListener) desktop.addEventListener("change", leave);
    const brand = $(".brand");
    if (brand) brand.addEventListener("click", () => {
      if (root.classList.contains("menu-open")) { toggle.click(); lock(false); }
    });
  }

  const orig = window.setLanguage;
  if (typeof orig === "function") {
    let swap, settle, busy = false;
    const clean = () => {
      root.classList.remove("lang-in");
      $$(".lang-target").forEach((el) => el.classList.remove("lang-target"));
      busy = false;
    };
    window.setLanguage = (lang) => {
      const next = lang === "sw" ? "sw" : "en";
      if (reduce.matches || next === root.lang || busy) {
        if (busy) { clearTimeout(swap); clearTimeout(settle); clean(); }
        orig(next);
        return;
      }
      busy = true;
      root.classList.remove("lang-in");
      $$("[data-i18n]").filter((el) => {
        const box = el.closest("[data-reveal]");
        if (box && !box.classList.contains("is-revealed")) return false;
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.bottom > 0 && r.top < innerHeight;
      }).forEach((el) => el.classList.add("lang-target"));
      swap = setTimeout(() => {
        orig(next);
        root.classList.add("lang-in");
        settle = setTimeout(clean, 650);
      }, 240);
    };
  }
})();
