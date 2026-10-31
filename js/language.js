"use strict";

const translations = {
  en: {
    skipToContent: "Skip to main content",
    conceptNotice: "Independent concept preview — not yet affiliated with or approved by David Fabrics Store.",
    openNavigation: "Open navigation",
    closeNavigation: "Close navigation",
    primaryNavigation: "Primary navigation",
    footerNavigation: "Footer navigation",
    chooseLanguage: "Choose language",
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme",
    heroImagePlaceholder: "Editorial fashion image placeholder",
    heroTitle: "Elegance, Tailored to You.",
    heroSwahili: "Umaridadi unaokutengenezwa kwa ajili yako.",
    heroCopy: "Tailoring and fabric selections presented with an eye for detail, personal style, and considered elegance.",
    heroWork: "Explore Our Work",
    heroContact: "Contact Us",
    navAbout: "About",
    navServices: "Services",
    navWork: "Work",
    navContact: "Contact",
    introEyebrow: "The House of David Fabrics",
    introTitle: "Crafted With Elegance",
    introLead: "David Fabrics Store brings tailoring and fabrics together for personal style, considered details, and elegance that feels distinctly yours.",
    introCopy: "The collection and tailoring experience can be explored through a selection of fabrics and made-to-order ideas, presented here as a concept for consideration.",
    craftEyebrow: "Proposed categories",
    craftTitle: "Our Craft",
    craftNote: "Service details and availability are subject to confirmation.",
    mensTailoring: "Men's Tailoring",
    mensTailoringNote: "Proposed tailoring category for consideration.",
    customSuits: "Custom Suits",
    customSuitsNote: "Proposed custom tailoring category for consideration.",
    mensSuits: "Men's Suits",
    mensSuitsNote: "Provisional category for tailored men's occasion and formalwear.",
    weddingAttire: "Wedding & Groom Attire",
    weddingAttireNote: "Provisional category for wedding and groom styling concepts.",
    customTailoring: "Custom Tailoring",
    customTailoringNote: "Provisional category for individually considered tailoring ideas.",
    modernFashion: "Modern Fashion Designs",
    modernFashionNote: "Provisional category for contemporary, style-led fashion concepts.",
    serviceEnquire: "Enquire",
    mensCollection: "Men's Collection",
    mensCollectionNote: "Fashion inspiration for refined men's tailoring concepts.",
    womensCollection: "Women's Collection",
    womensCollectionNote: "Fashion inspiration for elegant women's occasionwear.",
    weddingCollection: "Wedding Collection",
    weddingCollectionNote: "Fashion inspiration for coordinated wedding styling concepts.",
    tailoringCraftsmanship: "Tailoring Craftsmanship",
    tailoringCraftsmanshipNote: "Fashion inspiration celebrating detail, fitting and handmade techniques.",
    fashionInspiration: "Fashion Inspiration",
    burgundyCream: "Burgundy & Cream",
    burgundyCreamDesc: "A burgundy jacket paired with cream trousers for a warm formal contrast.",
    blackBurgundy: "Black & Burgundy",
    blackBurgundyDesc: "A black jacket balanced by burgundy trousers for a deep, refined look.",
    navyGrey: "Navy & Grey",
    navyGreyDesc: "A navy jacket matched with grey trousers for a composed modern balance.",
    chocolateCream: "Chocolate & Cream",
    chocolateCreamDesc: "A chocolate jacket combined with cream trousers for soft, rich contrast.",
    emeraldBlack: "Emerald & Black",
    emeraldBlackDesc: "An emerald jacket paired with black trousers for confident evening elegance.",
    burgundyPresidentialSuit: "Burgundy Presidential Suit",
    burgundyPresidentialSuitDesc: "A commanding burgundy blazer and trouser suit shaped for polished authority.",
    ivoryExecutiveSuit: "Ivory Executive Suit",
    ivoryExecutiveSuitDesc: "An ivory blazer and skirt suit that balances executive tailoring with refined ease.",
    galleryEyebrow: "The Portfolio",
    galleryTitle: "Selected Creations",
    galleryLink: "View Full Gallery",
    approvedImageRequired: "Approved work image required",
    tailoringPlaceholder: "Tailoring concept placeholder",
    fabricPlaceholder: "Fabric concept placeholder",
    suitPlaceholder: "Custom suit concept placeholder",
    contactEyebrow: "Begin a Conversation",
    contactTitle: "Let's Create Something Elegant.",
    contactButton: "Enquire on WhatsApp",
    contactCopy: "Speak with David Fabrics Store about tailoring ideas, fabrics and your personal style.",
    whatsappLabel: "WhatsApp",
    instagramLabel: "Instagram",
    instagramButton: "Visit Instagram",
    whatsappMessage: "Hello David Fabrics Store, I visited your website and would like to enquire about your tailoring services.",
    pageTitle: "David Fabrics Store | Elegance, Tailored to You"
  },
  sw: {
    skipToContent: "Ruka hadi kwenye maudhui kuu",
    conceptNotice: "Huu ni uonyesho wa dhana huru — bado haujahusishwa wala kuidhinishwa na David Fabrics Store.",
    openNavigation: "Fungua menyu",
    closeNavigation: "Funga menyu",
    primaryNavigation: "Menyu kuu",
    footerNavigation: "Menyu ya chini",
    chooseLanguage: "Chagua lugha",
    themeToDark: "Badilisha kuwa mandhari ya giza",
    themeToLight: "Badilisha kuwa mandhari ya mwanga",
    heroImagePlaceholder: "Picha ya mfano ya mitindo",
    heroTitle: "Umaridadi Unaokufaa.",
    heroSwahili: "Umaridadi ulioshonwa kwa kipimo chako.",
    heroCopy: "Ushonaji na uteuzi wa vitambaa kwa umakini, mtindo wako binafsi na umaridadi unaokufaa.",
    heroWork: "Tazama Mitindo Yetu",
    heroContact: "Wasiliana Nasi",
    navAbout: "Kuhusu",
    navServices: "Huduma",
    navWork: "Kazi",
    navContact: "Wasiliana",
    introEyebrow: "Nyumba ya David Fabrics",
    introTitle: "Ulioundwa kwa Umaridadi",
    introLead: "David Fabrics Store inaunganisha ushonaji na vitambaa kwa mtindo wako binafsi, undani uliozingatiwa na umaridadi unaokufaa.",
    introCopy: "Mkusanyiko na uzoefu wa ushonaji unaweza kuchunguzwa kupitia uteuzi wa vitambaa na mawazo ya mavazi yaliyoshonwa kwa ajili yako, yakiwasilishwa hapa kama dhana ya kuzingatiwa.",
    craftEyebrow: "Jamii zinazopendekezwa",
    craftTitle: "Sanaa Yetu ya Kushona",
    craftNote: "Maelezo na upatikanaji wa huduma yanategemea uthibitisho.",
    mensTailoring: "Mavazi ya Wanaume",
    mensTailoringNote: "Jamii ya ushonaji inayopendekezwa kwa ajili ya kuzingatiwa.",
    customSuits: "Suti Maalumu",
    customSuitsNote: "Jamii ya ushonaji maalumu inayopendekezwa kwa ajili ya kuzingatiwa.",
    mensSuits: "Suti za Wanaume",
    mensSuitsNote: "Mavazi ya wanaume yaliyoshonwa kwa matukio na nafasi rasmi.",
    weddingAttire: "Mavazi ya Harusi",
    weddingAttireNote: "Mawazo ya mitindo ya harusi kwa bwana na hata mwenzi wake.",
    customTailoring: "Ushonaji Kawaida ya Mteja",
    customTailoringNote: "Mavazi yaliyopangwa kulingana na mtindo na kipimo cha mteja.",
    modernFashion: "Mitindo ya Kisasa",
    modernFashionNote: "Mawazo ya mitindo ya kisasa, kali na ya kifahari.",
    serviceEnquire: "Uliza",
    mensCollection: "Mavazi ya Wanaume",
    mensCollectionNote: "Mawazo ya mitindo ya ushonaji wa wanaume.",
    womensCollection: "Mavazi ya Wanawake",
    womensCollectionNote: "Mawazo ya mitindo ya kifahari kwa wanawake.",
    weddingCollection: "Mavazi ya Harusi",
    weddingCollectionNote: "Mawazo ya mitindo ya harusi inayolingana kwa wanandoa.",
    tailoringCraftsmanship: "Ushonaji kwa Umakini",
    tailoringCraftsmanshipNote: "Mitindo inayoangazia undani, upimaji na ufundi wa mikono.",
    fashionInspiration: "Msukumo wa Mitindo",
    burgundyCream: "Burgundy na Cream",
    burgundyCreamDesc: "Jaketi ya burgundy imeunganishwa na suruali ya rangi ya cream kwa mwonekano rasmi wenye kupendeza.",
    blackBurgundy: "Nyeusi na Burgundy",
    blackBurgundyDesc: "Jaketi nyeusi na suruali ya burgundy huleta mchanganyiko mzuri na wa kifahari.",
    navyGrey: "Navy na Kijivu",
    navyGreyDesc: "Jaketi ya navy na suruali ya kijivu huunda uwiano safi na wa kisasa.",
    chocolateCream: "Chocolate na Cream",
    chocolateCreamDesc: "Jaketi ya chocolate na suruali ya cream huunda mchanganyiko laini na wenye kina.",
    emeraldBlack: "Emerald na Nyeusi",
    emeraldBlackDesc: "Jaketi ya emerald na suruali nyeusi huleta mtindo mkali unaofaa kwa tukio la usiku.",
    burgundyPresidentialSuit: "Suti ya Burgundy ya Kisharafi",
    burgundyPresidentialSuitDesc: "Suti ya burgundy yenye jaketi na suruali iliyoundwa kwa mwonekano wa mamlaka na umaridadi.",
    ivoryExecutiveSuit: "Suti ya Ivory ya Biashara",
    ivoryExecutiveSuitDesc: "Suti ya ivory yenye sketi inayochanganya umaridadi na mtindo safi wa kikazi.",
    galleryEyebrow: "Mkusanyiko wa Kazi",
    galleryTitle: "Mitindo Iliyochaguliwa",
    galleryLink: "Tazama Mkusanyiko Wote",
    approvedImageRequired: "Inahitajika picha iliyoidhinishwa",
    tailoringPlaceholder: "Mfano wa mtindo wa ushonaji",
    fabricPlaceholder: "Mfano wa mtindo wa vitambaa",
    suitPlaceholder: "Mfano wa suti maalumu",
    contactEyebrow: "Tuanzishe Mazungumzo",
    contactTitle: "Tuunde Kitu cha Kifahari.",
    contactButton: "Uliza kwa WhatsApp",
    contactCopy: "Zungumza na David Fabrics Store kuhusu mawazo ya ushonaji, vitambaa na mtindo wako binafsi.",
    whatsappLabel: "WhatsApp",
    instagramLabel: "Instagram",
    instagramButton: "Tembelea Instagram",
    whatsappMessage: "Habari David Fabrics Store, nimetembelea tovuti yenu na ningependa kuuliza kuhusu huduma za ushonaji.",
    pageTitle: "David Fabrics Store | Umaridadi Unaokufaa"
  }
};

window.DavidFabricTranslations = translations;

const languageButtons = document.querySelectorAll("[data-language]");
const storageKey = "david-fabrics-language";

function savedLanguage() {
  try {
    return localStorage.getItem(storageKey) === "sw" ? "sw" : "en";
  } catch (error) {
    return "en";
  }
}

function setLanguage(language) {
  const selectedLanguage = translations[language] ? language : "en";
  const copy = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (copy[element.dataset.i18n]) element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (copy[key]) element.setAttribute("aria-label", copy[key]);
  });
  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === selectedLanguage));
  });

  const whatsappLink = document.querySelector("[data-whatsapp-link]");
  if (whatsappLink) {
    whatsappLink.href = `https://wa.me/255658414173?text=${encodeURIComponent(copy.whatsappMessage)}`;
  }

  const navToggle = document.querySelector("[data-nav-toggle]");
  if (navToggle) {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-label", copy[expanded ? "closeNavigation" : "openNavigation"]);
  }

  document.title = copy.pageTitle;
  try {
    localStorage.setItem(storageKey, selectedLanguage);
  } catch (error) {
    // Language switching still works when storage is unavailable.
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

setLanguage(savedLanguage());
