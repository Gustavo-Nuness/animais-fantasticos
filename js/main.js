import SmoothScroll from "./modules/animations/smooth-scroll.js"
import changeAnimalDescription from "./modules/animations/change-animal-description.js"
import openAndCloseQuestionsInFaq from "./modules/animations/open-and-close-questions-in-faq.js"
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

  changeAnimalDescription()
  openAndCloseQuestionsInFaq()
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
