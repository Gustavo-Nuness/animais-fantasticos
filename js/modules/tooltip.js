export default function initializeTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]")

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver)
  })

  function onMouseOver(event) {
    const tooltipBox = createTooltipBox(this)
    tooltipBox.style.top = event.pageY + "px"
    tooltipBox.style.left = event.pageX + "px"

    onMouseLeave.tooltipBox = tooltipBox
    onMouseLeave.elementWithTooltip = this
    this.addEventListener("mouseleave", onMouseLeave)

    onMouseMove.tooltipBox = tooltipBox
    onMouseMove.elementWithTooltip = this
    this.addEventListener("mousemove", onMouseMove)
  }

  const onMouseLeave = {
    tooltipBox: null,
    handleEvent() {
      this.tooltipBox.remove()
      this.elementWithTooltip.removeEventListener("mouseleave", onMouseLeave)
    },
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = 15 + event.pageY + "px"
      this.tooltipBox.style.left = 15 + event.pageX + "px"
    },
  }

  function createTooltipBox(element) {
    const tooltipBox = document.createElement("div")

    tooltipBox.innerText = element.getAttribute("aria-label")
    tooltipBox.classList.add("tooltip")

    document.body.appendChild(tooltipBox)

    return tooltipBox
  }
}
