import NumbersAnimations from "./animations/numbers-animations.js"

export default async function fetchAnimalsApi() {
  try {
    const response = await fetch("./../../animals-api.json")
    const animals = await response.json()
    const numerosGrid = document.querySelector(".numeros-grid")

    animals.forEach((animal) => {
      const divAnimal = createAnimal(animal)
      numerosGrid.appendChild(divAnimal)
    })

    const numbersAnimations = new NumbersAnimations("[data-numero]", ".numeros", "ativo")
    numbersAnimations.init()

  } catch (error) {
    console.log(error)
  }

  function createAnimal(animal) {
    const div = document.createElement("div")
    div.classList.add("numero-animal")
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    return div
  }
}
