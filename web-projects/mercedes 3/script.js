/* =========================================
   Mercedes-Benz Concept Website
   JavaScript
   ========================================= */

"use strict";

/* -----------------------------------------
   Model data
   ----------------------------------------- */

const models = {
    "amg-gt": {
        name: "Mercedes-AMG GT 63 4MATIC+",
        category: "AMG Performance",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes_AMG_GT_(42341538014).jpg?width=1600",
        power: "585 л.с.",
        engine: "4.0 V8 biturbo",
        acceleration: "3,2 сек",
        topSpeed: "315 км/ч",
        description:
            "Спортивный гран-турер с выразительным характером, полным приводом 4MATIC+ и сочетанием высокой динамики с комфортом для дальних поездок."
    },

    "s-class": {
        name: "Mercedes-Benz S-Class",
        category: "Luxury Sedan",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/MERCEDES-BENZ_S-CLASS_(W223)_China_(22).jpg?width=1600",
        power: "503 л.с.",
        engine: "3.0 рядный 6-цилиндровый + EQ Boost",
        acceleration: "4,4 сек",
        topSpeed: "250 км/ч",
        description:
            "Флагманский седан Mercedes-Benz, в котором цифровые технологии, тишина салона и внимание к пассажирам превращаются в единый опыт премиального путешествия."
    },

    "g-class": {
        name: "Mercedes-AMG G 63",
        category: "Performance SUV",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes_Benz_G_Class_W463_in_Lane_11,_Xindong_Street_20140420.jpg?width=1600",
        power: "585 л.с.",
        engine: "4.0 V8 biturbo",
        acceleration: "4,4 сек",
        topSpeed: "240 км/ч",
        description:
            "Узнаваемый силуэт G-Class соединяет внедорожную архитектуру, роскошный интерьер и мощный характер AMG."
    },

    "amg-sl": {
        name: "Mercedes-AMG SL 63 4MATIC+",
        category: "AMG Roadster",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes-AMG_SL_63_(R232)_IMG_1279_(cropped).jpg?width=1600",
        power: "585 л.с.",
        engine: "4.0 V8 biturbo",
        acceleration: "3,6 сек",
        topSpeed: "315 км/ч",
        description:
            "Современная интерпретация легендарного родстера: открытый кузов, полный привод, выразительные пропорции и динамика AMG."
    },

    "eqs": {
        name: "Mercedes-Benz EQS",
        category: "Electric Luxury",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/24_Mercedes-Benz_EQS_V297_1.jpg?width=1600",
        power: "до 658 л.с.",
        engine: "Электрическая силовая установка",
        acceleration: "от 3,8 сек",
        topSpeed: "до 250 км/ч",
        description:
            "Электрический флагман с аэродинамичным силуэтом, интеллектуальными системами и цифровой архитектурой салона."
    },

    "cle": {
        name: "Mercedes-AMG CLE 53 4MATIC+ Coupé",
        category: "Performance Coupé",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes-Benz_CLE_300_Coup%C3%A9_(C236,_2025)_(55012870355).jpg?width=1600",
        power: "449 л.с.",
        engine: "3.0 рядный 6-цилиндровый + электрический компрессор",
        acceleration: "4,2 сек",
        topSpeed: "270 км/ч",
        description:
            "Элегантное купе с длинным капотом, низкой посадкой и технологичной силовой установкой, ориентированной на динамичное гран-туризмо."
    }
};

/* -----------------------------------------
   Gallery data
   ----------------------------------------- */

const galleryImages = [
    {
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes_AMG_GT_(42341538014).jpg?width=1600",
        alt: "Mercedes-Benz — фронтальный ракурс"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/MERCEDES-BENZ_S-CLASS_(W223)_China_(22).jpg?width=1600",
        alt: "Mercedes-Benz — боковой профиль"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes_Benz_G_Class_W463_in_Lane_11,_Xindong_Street_20140420.jpg?width=1600",
        alt: "Mercedes-Benz — задняя часть автомобиля"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes-Benz_EQS450_interior.jpg?width=1600",
        alt: "Mercedes-Benz — интерьер"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/The_interior_of_Mercedes-Benz_EQS_450_4MATIC_SUV_(X296).jpg?width=1600",
        alt: "Mercedes-Benz — руль и детали салона"
    },
    {
        src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes-AMG_SL_63_(R232)_IMG_1279_(cropped).jpg?width=1600",
        alt: "Mercedes-Benz — движение по дороге"
    }
];

/* -----------------------------------------
   DOM helpers
   ----------------------------------------- */

const body = document.body;
const header = document.getElementById("siteHeader");
const burgerButton = document.getElementById("burgerButton");
const mobileMenu = document.getElementById("mobileMenu");

const vehicleModal = document.getElementById("vehicleModal");
const modalCloseButton = document.getElementById("modalCloseButton");
const modalGalleryButton = document.getElementById("modalGalleryButton");

const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPower = document.getElementById("modalPower");
const modalEngine = document.getElementById("modalEngine");
const modalAcceleration = document.getElementById("modalAcceleration");
const modalTopSpeed = document.getElementById("modalTopSpeed");

const lightbox = document.getElementById("lightbox");
const lightboxCloseButton = document.getElementById("lightboxCloseButton");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");

const heroImage = document.getElementById("heroImage");
const modelCards = [...document.querySelectorAll(".model-card")];
const filterButtons = [...document.querySelectorAll(".filter-button")];
const emptyState = document.getElementById("emptyState");

let currentGalleryIndex = 0;
let lastFocusedElement = null;

/* -----------------------------------------
   Scroll lock
   ----------------------------------------- */

function updateScrollLock() {
    const overlayIsOpen =
        vehicleModal.classList.contains("is-open") ||
        lightbox.classList.contains("is-open") ||
        mobileMenu.classList.contains("is-open");

    body.classList.toggle("no-scroll", overlayIsOpen);
}

/* -----------------------------------------
   Header on scroll
   ----------------------------------------- */

function updateHeader() {
    header.classList.toggle("is-scrolled", window.scrollY > 30);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

/* -----------------------------------------
   Burger menu
   ----------------------------------------- */

function setMobileMenu(open) {
    mobileMenu.classList.toggle("is-open", open);
    burgerButton.classList.toggle("is-active", open);
    burgerButton.setAttribute("aria-expanded", String(open));
    burgerButton.setAttribute(
        "aria-label",
        open ? "Закрыть меню" : "Открыть меню"
    );

    updateScrollLock();
}

burgerButton.addEventListener("click", () => {
    const shouldOpen = !mobileMenu.classList.contains("is-open");
    setMobileMenu(shouldOpen);
});

mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMobileMenu(false));
});

/* -----------------------------------------
   Smooth navigation
   ----------------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

/* -----------------------------------------
   Image fallback
   ----------------------------------------- */

function enableImageFallbacks() {
    document.querySelectorAll("img").forEach((image) => {
        image.addEventListener("error", () => {
            image.classList.add("is-missing");
        });
    });
}

enableImageFallbacks();

/* -----------------------------------------
   Hero parallax / zoom
   ----------------------------------------- */

let parallaxTicking = false;

function updateHeroParallax() {
    if (!heroImage) {
        return;
    }

    const scroll = Math.min(window.scrollY, window.innerHeight);
    const translate = scroll * 0.11;
    const scale = 1.04 + scroll / window.innerHeight * 0.035;

    heroImage.style.transform =
        `translate3d(0, ${translate}px, 0) scale(${scale})`;
}

window.addEventListener(
    "scroll",
    () => {
        if (parallaxTicking) {
            return;
        }

        parallaxTicking = true;

        window.requestAnimationFrame(() => {
            updateHeroParallax();
            parallaxTicking = false;
        });
    },
    { passive: true }
);

/* -----------------------------------------
   Models filter
   ----------------------------------------- */

function filterModels(filter) {
    let visibleCount = 0;

    modelCards.forEach((card) => {
        const categories = card.dataset.category.split(" ");
        const shouldShow =
            filter === "all" || categories.includes(filter);

        card.classList.toggle("is-hidden", !shouldShow);

        if (shouldShow) {
            visibleCount += 1;
        }
    });

    emptyState.classList.toggle("is-visible", visibleCount === 0);
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((item) => {
            item.classList.remove("is-active");
        });

        button.classList.add("is-active");
        filterModels(button.dataset.filter);
    });
});

/* Footer AMG filter */
document.querySelectorAll("[data-filter-link]").forEach((link) => {
    link.addEventListener("click", () => {
        const filter = link.dataset.filterLink;

        filterButtons.forEach((button) => {
            button.classList.toggle(
                "is-active",
                button.dataset.filter === filter
            );
        });

        filterModels(filter);
    });
});

/* -----------------------------------------
   Vehicle modal
   ----------------------------------------- */

function openVehicleModal(modelId, trigger = null) {
    const model = models[modelId];

    if (!model) {
        return;
    }

    lastFocusedElement = trigger || document.activeElement;

    modalImage.src = model.image;
    modalImage.alt = model.name;
    modalImage.classList.remove("is-missing");

    modalCategory.textContent = model.category;
    modalTitle.textContent = model.name;
    modalDescription.textContent = model.description;
    modalPower.textContent = model.power;
    modalEngine.textContent = model.engine;
    modalAcceleration.textContent = model.acceleration;
    modalTopSpeed.textContent = model.topSpeed;

    vehicleModal.classList.add("is-open");
    vehicleModal.setAttribute("aria-hidden", "false");

    updateScrollLock();

    window.setTimeout(() => {
        modalCloseButton.focus();
    }, 50);
}

function closeVehicleModal() {
    vehicleModal.classList.remove("is-open");
    vehicleModal.setAttribute("aria-hidden", "true");

    updateScrollLock();

    if (lastFocusedElement instanceof HTMLElement) {
        lastFocusedElement.focus();
    }
}

document.querySelectorAll("[data-open-model]").forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        openVehicleModal(button.dataset.openModel, button);
    });
});

modalCloseButton.addEventListener("click", closeVehicleModal);

vehicleModal.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeVehicleModal);
});

modalGalleryButton.addEventListener("click", () => {
    closeVehicleModal();

    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

/* -----------------------------------------
   Gallery lightbox
   ----------------------------------------- */

function renderLightboxImage() {
    const item = galleryImages[currentGalleryIndex];

    lightboxImage.src = item.src;
    lightboxImage.alt = item.alt;
    lightboxImage.classList.remove("is-missing");
    lightboxCaption.textContent =
        `${String(currentGalleryIndex + 1).padStart(2, "0")} / ` +
        `${String(galleryImages.length).padStart(2, "0")} — ${item.alt}`;
}

function openLightbox(index, trigger = null) {
    currentGalleryIndex = index;
    lastFocusedElement = trigger || document.activeElement;

    renderLightboxImage();

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");

    updateScrollLock();

    window.setTimeout(() => {
        lightboxCloseButton.focus();
    }, 50);
}

function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");

    updateScrollLock();

    if (lastFocusedElement instanceof HTMLElement) {
        lastFocusedElement.focus();
    }
}

function showPreviousGalleryImage() {
    currentGalleryIndex =
        (currentGalleryIndex - 1 + galleryImages.length) %
        galleryImages.length;

    renderLightboxImage();
}

function showNextGalleryImage() {
    currentGalleryIndex =
        (currentGalleryIndex + 1) % galleryImages.length;

    renderLightboxImage();
}

document.querySelectorAll("[data-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => {
        openLightbox(Number(button.dataset.galleryIndex), button);
    });
});

lightboxCloseButton.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", showPreviousGalleryImage);
lightboxNext.addEventListener("click", showNextGalleryImage);

lightbox.querySelectorAll("[data-close-lightbox]").forEach((element) => {
    element.addEventListener("click", closeLightbox);
});

/* -----------------------------------------
   Interior lightbox
   ----------------------------------------- */

const interiorButtons = [
    ...document.querySelectorAll("[data-interior-image]")
];

interiorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const src = button.dataset.interiorImage;
        const image = button.querySelector("img");

        const customIndex = galleryImages.findIndex(
            (galleryItem) => galleryItem.src === src
        );

        if (customIndex >= 0) {
            openLightbox(customIndex, button);
            return;
        }

        lastFocusedElement = button;

        lightboxImage.src = src;
        lightboxImage.alt =
            image?.alt || "Интерьер Mercedes-Benz";
        lightboxImage.classList.remove("is-missing");
        lightboxCaption.textContent =
            image?.alt || "Интерьер Mercedes-Benz";

        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");

        updateScrollLock();

        window.setTimeout(() => {
            lightboxCloseButton.focus();
        }, 50);
    });
});

document
    .getElementById("exploreInteriorButton")
    .addEventListener("click", () => {
        const firstInteriorButton = interiorButtons[0];

        if (firstInteriorButton) {
            firstInteriorButton.click();
        }
    });

/* -----------------------------------------
   Escape and keyboard controls
   ----------------------------------------- */

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        if (lightbox.classList.contains("is-open")) {
            closeLightbox();
            return;
        }

        if (vehicleModal.classList.contains("is-open")) {
            closeVehicleModal();
            return;
        }

        if (mobileMenu.classList.contains("is-open")) {
            setMobileMenu(false);
        }
    }

    if (!lightbox.classList.contains("is-open")) {
        return;
    }

    if (event.key === "ArrowLeft") {
        showPreviousGalleryImage();
    }

    if (event.key === "ArrowRight") {
        showNextGalleryImage();
    }
});

/* -----------------------------------------
   AMG counters
   ----------------------------------------- */

let countersStarted = false;

function animateCounter(element) {
    const target = Number(element.dataset.target);
    const decimals = Number(element.dataset.decimals || 0);
    const duration = 1400;
    const startTime = performance.now();

    function frame(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;

        element.textContent = value.toFixed(decimals);

        if (progress < 1) {
            window.requestAnimationFrame(frame);
        } else {
            element.textContent = target.toFixed(decimals);
        }
    }

    window.requestAnimationFrame(frame);
}

const counterSection = document.getElementById("amgCounters");

const counterObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting || countersStarted) {
                return;
            }

            countersStarted = true;

            document.querySelectorAll(".counter").forEach((counter) => {
                animateCounter(counter);
            });

            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.45
    }
);

if (counterSection) {
    counterObserver.observe(counterSection);
}

/* -----------------------------------------
   Reveal on scroll
   ----------------------------------------- */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    },
    {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.08
    }
);

revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(element);
});

/* -----------------------------------------
   Initial state
   ----------------------------------------- */

filterModels("all");
updateHeroParallax();
