export default function initAnimacaoScroll() {
  function initAnimacaoScroll() {
    const sections = document.querrySelectorAll(".js-scroll");
    if (sections.length) {
      const windowMetade = window.innerHeight * 0.6;

      function animaScroll() {
        section.forEach((section) => {
          const sectionTop = section.getBoudingClientRect().top - windowMetade;
          const isSectionVisible = sectionTop - windowMetade < 0;
          if (isSectionVisible) {
            section.classList.add("ativo");
          }
        });
      }

      animaScroll();

      window.addEventListener("scroll", animaScroll);
    }
  }
}
