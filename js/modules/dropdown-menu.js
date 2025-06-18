import outsideClick from "./outside-menu-click.js"

export default class DropdownMenu {

  constructor(dropdownMenus, events) {

    this.dropdownMenus = document.querySelectorAll(dropdownMenus)
    this.activeClass = "active"

    if (events === undefined) {
      this.events = ["touchstart", "click"]
    } else {
      this.events = events
    }

    this.handleClickMenu = this.handleClickMenu.bind(this)
  }

  addEventsToDropDownMenu() {

    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.handleClickMenu)
      })
    })
  }

  init() {

    if (this.dropdownMenus.length) {
      this.addEventsToDropDownMenu()
    }

    return this

  }
  //Torna o menu visível quando o usuário clica, em um dos itens do menu de navegação do site.

  handleClickMenu(event) {
    event.preventDefault()
    const { currentTarget } = event

    currentTarget.classList.add(this.activeClass)
    outsideClick(currentTarget, this.events, () => {
      currentTarget.classList.remove(this.activeClass)
    })
  }
}
