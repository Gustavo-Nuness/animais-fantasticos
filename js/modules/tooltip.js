export default class Tooltip {

  constructor(tooltipContainers) {

    this.tooltipContainers = document.querySelectorAll(tooltipContainers)
    this.tooltipBox = null

    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
  }

  init() {
    if (this.tooltipContainers.length) {
      this.addTooltipContainerEvents()
    }
  }

  addTooltipContainerEvents() {

    this.tooltipContainers.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver)
    })
  }

  onMouseOver(event) {
    this.createTooltipBox(event.currentTarget)
    this.tooltipBox.style.top = event.pageY + "px"
    this.tooltipBox.style.left = event.pageX + "px"

    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave)

    event.currentTarget.addEventListener("mousemove", this.onMouseMove)
  }


  createTooltipBox(element) {
    const tooltipBox = document.createElement("div")

    tooltipBox.innerText = element.getAttribute("aria-label")
    tooltipBox.classList.add("tooltip")

    document.body.appendChild(tooltipBox)

    this.tooltipBox = tooltipBox
  }

  onMouseLeave(event) {

    this.tooltipBox.remove()
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave)
    event.currentTarget.removeEventListener("mousemove", this.onMouseMove)

  }


  onMouseMove(event) {

    this.tooltipBox.style.top = 15 + event.pageY + "px"

    // Verificando se  TooltipBox alcançou a extremidade à esquerda, para invertê-la
    // para a afastá-la dessa extremidade.
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = (event.pageX - 190) + "px"

    } else {
      this.tooltipBox.style.left = 15 + event.pageX + "px"
    }
  }


}
