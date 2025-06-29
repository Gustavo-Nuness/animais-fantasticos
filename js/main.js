import SmoothScroll from "./modules/animations/smooth-scroll.js"
import OpenAndCloseQuestionsInFaq from "./modules/animations/open-and-close-questions-in-faq.js"
import ChangeAnimalDescription from "./modules/animations/change-animal-description.js"
import AnimateSectionsOnScroll from "./modules/animations/animate-section-on-scroll.js"

import Modal from "./modules/modal.js"
import Tooltip from "./modules/tooltip.js"
import DropdownMenu from "./modules/dropdown-menu.js"
import MenuMobile from "./modules/menu-mobile.js"
import OpeningStatus from "./modules/opening-status.js"
import fetchAnimals from "./modules/fetch-animals-api.js"
import fetchBitcoin from "./modules/fetch-bitcoin.js"


function initializeAnimations() {
  const smoothScroll = new SmoothScroll(".menu a[href^='#']")
  smoothScroll.init()

  const toggleQuestionsInFaq = new OpenAndCloseQuestionsInFaq(".faq-lista dt", ".faq-lista dd")
  toggleQuestionsInFaq.init()

  const changeAnimalDescription = new ChangeAnimalDescription(".animais-lista li", ".animais-descricao section")
  changeAnimalDescription.init()

  const animateSectionsOnScroll = new AnimateSectionsOnScroll(".animate-section-on-scroll")
  animateSectionsOnScroll.init()
}

initializeAnimations()

const modal = new Modal("[data-modal='abrir']", "[data-modal='fechar']", "[data-modal='container']")
modal.init()

const tooltip = new Tooltip("[data-tooltip]")
tooltip.init()


const dropdownMenu = new DropdownMenu("[data-dropdown]")
dropdownMenu.init()

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']")
menuMobile.init()

const openingStatus = new OpeningStatus("[data-semana]", "[data-horario]")
openingStatus.init()

fetchAnimals("./../animals-api.json", ".numeros-grid")
fetchBitcoin(".bitcoin-goal")
