import outsideClick from "./outside-menu-click.js"

export default function initializeDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]")

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClickMenu)
    })
  })

  function handleClickMenu(event) {
    event.preventDefault()
    this.classList.add("active")
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active")
    })
  }
}
