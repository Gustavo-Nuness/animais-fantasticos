export default function changeAnimalDescription() {
  const tabMenu = document.querySelectorAll(".animais-lista li")
  const tabContent = document.querySelectorAll(".animais-descricao section")

  function activeTabAnimalDescription(animal) {
    tabContent.forEach((section) => {
      if (section.dataset.animal === animal) {
        section.classList.add("ativo")
        section.classList.remove("desativo")
        addAnimationClassToSection(section)
      } else {
        section.classList.remove("ativo")
        section.classList.add("desativo")
      }
    })
  }

  function addAnimationClassToSection(section) {
    if (section.dataset.anime === "show-down") {
      section.classList.add("show-down")
    } else {
      section.classList.add("show-right")
    }
  }

  if (tabMenu.length > 0 && tabContent.length > 0) {
    tabMenu.forEach((li) => {
      li.addEventListener("click", function () {
        activeTabAnimalDescription(li.dataset.animal)
      })
    })
  }
}
