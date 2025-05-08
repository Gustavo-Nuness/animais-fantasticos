export default class ChangeAnimalDescription {

  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu)
    this.tabContent = document.querySelectorAll(content)
    this.activeClass = "ativo"
    this.disabledClass = "desativo"
  }


  activeTabAnimalDescription(animal) {
    this.tabContent.forEach((section) => {
      if (section.dataset.animal === animal) {
        section.classList.add(this.activeClass)
        section.classList.remove(this.disabledClass)
        section.classList.add(section.dataset.anime)
      } else {
        section.classList.remove(this.activeClass)
        section.classList.add(this.disabledClass)
      }
    })
  }

  addClickEventToTabMenu() {
    this.tabMenu.forEach((li) => {
      li.addEventListener("click", () => {
        this.activeTabAnimalDescription(li.dataset.animal)
      })
    })
  }

  init() {
    if (this.tabMenu.length > 0 && this.tabContent.length > 0) {
      this.addClickEventToTabMenu()
    }
    return this
  }

}
