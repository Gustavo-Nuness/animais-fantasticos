import NumbersAnimations from "./animations/numbers-animations.js"

export default async function fetchAnimals(animalsUrl, target) {

  const numerosGrid = document.querySelector(target)

  async function getAnimalsWithFetch() {
    try {

      const response = await fetch(animalsUrl)
      const animals = await response.json()

      animals.forEach((animal) => addAnimalDivToDom(animal))

      initNumbersAnimations()

    } catch (error) {
      console.log(error)
    }
  }

  function addAnimalDivToDom(animal) {
    const divAnimal = createAnimalDiv(animal)
    numerosGrid.appendChild(divAnimal)
  }

  function createAnimalDiv(animal) {
    const div = document.createElement("div")
    div.classList.add("numero-animal")
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    return div
  }

  function initNumbersAnimations() {
    const numbersAnimations = new NumbersAnimations("[data-numero]", ".numeros", "ativo")
    numbersAnimations.init()
  }


  getAnimalsWithFetch()
}
