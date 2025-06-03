export default class AnimateSectionsOnScroll {

  constructor(sections) {

    this.sections = document.querySelectorAll(sections)

    const windowHeight = window.innerHeight
    this.halfWindownHeight = windowHeight * 0.65

    this.checkSectionsDistanceFromPageStart =
      this.checkSectionsDistanceFromPageStart.bind(this)

  }

  getSectionsDistanceFromPageStart() {

    this.sectionsDistanceFromTop = [...this.sections].map((section) => {
      const offsetTop = section.offsetTop
      return {
        section,
        offsetTop: Math.floor(offsetTop - this.halfWindownHeight)
      }
    })
  }

  checkSectionsDistanceFromPageStart() {

    this.sectionsDistanceFromTop.forEach((element) => {
      const isSectionOpenable = window.pageYOffset > element.offsetTop

      if (isSectionOpenable) {
        element.section.classList.add("ativo")
      }
    })

  }


  init() {
    if (this.sections.length) {

      this.getSectionsDistanceFromPageStart()
      this.checkSectionsDistanceFromPageStart()
      window.addEventListener("scroll", this.checkSectionsDistanceFromPageStart)

    }

    return this
  }

}


