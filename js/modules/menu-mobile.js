import outsideClick from "./outside-menu-click.js"

export default class MenuMobile {

  constructor(menuButton, menuList, events) {

    this.menuButton = document.querySelector(menuButton)
    this.menuList = document.querySelector(menuList)
    this.activeClass = "active"

    if (events === undefined) {
      this.events = ["touchstart", "click"]
    } else {
      this.events = events
    }

    this.openMenu = this.openMenu.bind(this)

  }

  addEventsToMenuButton() {
    this.events.forEach((event) => this.menuButton.addEventListener(event, this.openMenu))
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEventsToMenuButton()
    }
    return this
  }

  openMenu() {
    this.menuButton.classList.add(this.activeClass)
    this.menuList.classList.add(this.activeClass)

    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass)
      this.menuButton.classList.remove(this.activeClass)
    })
  }

}
