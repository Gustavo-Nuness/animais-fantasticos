export default function animateSectionsOnScroll() {
  const sections = document.querySelectorAll(".animate-section-on-scroll")

  function animateOnScrollEvent() {
    sections.forEach((section) => {
      const sectionDistanceFromTop = section.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      const halfWindownHeight = windowHeight * 0.65

      const isSectionOpenable = sectionDistanceFromTop - halfWindownHeight < 0

      if (isSectionOpenable) {
        section.classList.add("ativo")
      }
    })
  }
  animateOnScrollEvent()
  window.addEventListener("scroll", animateOnScrollEvent)
}
