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
