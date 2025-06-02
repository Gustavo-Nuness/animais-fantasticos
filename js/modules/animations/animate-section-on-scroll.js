export default class AnimateSectionsOnScroll {

  constructor(sections) {
    this.sections = document.querySelectorAll(sections)

    this.animateOnScrollEvent = this.animateOnScrollEvent.bind(this)

  }

  animateOnScrollEvent() {
    this.sections.forEach((section) => {
      const sectionDistanceFromTop = section.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      const halfWindownHeight = windowHeight * 0.65

      const isSectionOpenable = sectionDistanceFromTop - halfWindownHeight < 0

      if (isSectionOpenable) {
        section.classList.add("ativo")
      }
    })
  }

  init() {
    this.animateOnScrollEvent()
    window.addEventListener("scroll", this.animateOnScrollEvent)

  }
}
