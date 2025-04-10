import outsideClick from "./outside-menu-click.js"

export default function initializeMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="list"]')
  const events = ["click", "touchstart"]

  function openMenu() {
    menuButton.classList.add("active")
    menuList.classList.add("active")

    outsideClick(menuList, events, () => {
      menuList.classList.remove("active")
      menuButton.classList.remove("active")
    })
  }

  if (menuButton) {
    events.forEach((event) => menuButton.addEventListener(event, openMenu))
  }
}
