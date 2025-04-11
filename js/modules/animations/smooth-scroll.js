/*
export default function smoothScroll() {
  const internalLinks = document.querySelectorAll(".menu a[href^='#']")

  function internaLinkClickEvent(event) {
    event.preventDefault()
    const sectionSelected = this.getAttribute("href")
    const elementSelected = document.querySelector(sectionSelected)

    // Primeira forma de realizar o scroll
    //window.scrollTo({ behavior: "smooth", top: elementSelected.offsetTop })

    // Segunda forma de realizar o scroll
    elementSelected.scrollIntoView({ behavior: "smooth", block: "start" })
  }
  internalLinks.forEach((link) => {
    link.addEventListener("click", internaLinkClickEvent)
  })
}
*/

export default class SmoothScroll {

  constructor(source, options) {

    this.internalLinks = document.querySelectorAll(source)

    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" }
    } else {
      this.options = options
    }
    this.scrollToSection = this.scrollToSection.bind(this)
  }
  scrollToSection(event) {
    event.preventDefault()
    const sectionSelected = event.currentTarget.getAttribute("href")
    const elementSelected = document.querySelector(sectionSelected)

    // Primeira forma de realizar o scroll
    //window.scrollTo({ behavior: "smooth", top: elementSelected.offsetTop })

    // Segunda forma de realizar o scroll
    elementSelected.scrollIntoView(this.options)
  }
  addLinkEvent() {
    this.internalLinks.forEach((link) => {
      link.addEventListener("click", this.scrollToSection)
    })
  }

  init() {

    if (this.internalLinks.length) {
      this.addLinkEvent()
    }
    return this
  }

}
