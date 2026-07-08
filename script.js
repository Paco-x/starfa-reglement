const accordions = document.querySelectorAll(".rule-accordion");
const searchInput = document.querySelector("#ruleSearch");
const expandButton = document.querySelector(".expand-all");
const scrollTopButton = document.querySelector(".scroll-top");

accordions.forEach((accordion) => {
    const toggle = accordion.querySelector(".accordion-toggle");

    toggle?.addEventListener("click", () => {
        accordion.classList.toggle("open");
    });
});

searchInput?.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    accordions.forEach((accordion) => {
        const text = accordion.textContent.toLowerCase();
        accordion.hidden = query.length > 0 && !text.includes(query);
    });
});

expandButton?.addEventListener("click", () => {
    const shouldOpen = [...accordions].some((accordion) => !accordion.classList.contains("open"));

    accordions.forEach((accordion) => {
        accordion.classList.toggle("open", shouldOpen);
    });

    expandButton.textContent = shouldOpen ? "Tout replier" : "Tout déplier";
});

scrollTopButton?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
