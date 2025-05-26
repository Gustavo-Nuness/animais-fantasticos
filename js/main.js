import SmoothScroll from "./modules/animations/smooth-scroll.js"
import OpenAndCloseQuestionsInFaq from "./modules/animations/open-and-close-questions-in-faq.js"
import ChangeAnimalDescription from "./modules/animations/change-animal-description.js"
import animateSectionsOnScroll from "./modules/animations/animate-section-on-scroll.js"

import Modal from "./modules/modal.js"
import Tooltip from "./modules/tooltip.js"
import initializeDropdownMenu from "./modules/dropdown-menu.js"
import initializeMenuMobile from "./modules/menu-mobile.js"
import initializeOpeningStatus from "./modules/opening-status.js"
import fetchAnimals from "./modules/fetch-animals-api.js"
import fetchBitcoin from "./modules/fetch-bitcoin.js"

function initializeAnimations() {
  const smoothScroll = new SmoothScroll(".menu a[href^='#']")
  smoothScroll.init()

  const toggleQuestionsInFaq = new OpenAndCloseQuestionsInFaq(".faq-lista dt", ".faq-lista dd")
  toggleQuestionsInFaq.init()

  const changeAnimalDescription = new ChangeAnimalDescription(".animais-lista li", ".animais-descricao section")
  changeAnimalDescription.init()

  animateSectionsOnScroll()
}

initializeAnimations()

const modal = new Modal("[data-modal='abrir']", "[data-modal='fechar']", "[data-modal='container']")
modal.init()

const tooltip = new Tooltip("[data-tooltip]")
tooltip.init()

initializeDropdownMenu()
initializeMenuMobile()
initializeOpeningStatus()
fetchAnimals("./../animals-api.json", ".numeros-grid")
fetchBitcoin(".bitcoin-goal")
