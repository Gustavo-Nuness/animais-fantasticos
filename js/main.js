import SmoothScroll from "./modules/animations/smooth-scroll.js"
import OpenAndCloseQuestionsInFaq from "./modules/animations/open-and-close-questions-in-faq.js"
import ChangeAnimalDescription from "./modules/animations/change-animal-description.js"
import animateSectionsOnScroll from "./modules/animations/animate-section-on-scroll.js"

import initializeModal from "./modules/modal.js"
import initializeTooltip from "./modules/tooltip.js"
import initializeDropdownMenu from "./modules/dropdown-menu.js"
import initializeMenuMobile from "./modules/menu-mobile.js"
import initializeOpeningStatus from "./modules/opening-status.js"
import initializeFetchAnimalsApi from "./modules/fetch-animals-api.js"
import initializeFetchBitcoinApi from "./modules/fetch-bitcoin.js"

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
initializeModal()
initializeTooltip()
initializeDropdownMenu()
initializeMenuMobile()
initializeOpeningStatus()
initializeFetchAnimalsApi()
initializeFetchBitcoinApi()
