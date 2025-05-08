export default class Modal {

  constructor(linkThatOpensModal, buttonThatClosesModal, containerModal) {
    this.linkThatOpensModal = document.querySelector(linkThatOpensModal)

    this.buttonThatClosesModal = document.querySelector(buttonThatClosesModal)

    this.containerModal = document.querySelector(containerModal)

    this.toggleModal = this.toggleModal.bind(this)
    this.clickOutsideModal = this.clickOutsideModal.bind(this)
  }

  toggleModal(event) {
    event.preventDefault()
    this.containerModal.classList.toggle("ativo")
  }
  clickOutsideModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event)
    }
  }

  init() {
    if (this.linkThatOpensModal && this.buttonThatClosesModal && this.containerModal) {
      this.linkThatOpensModal.addEventListener("click", this.toggleModal)
      this.buttonThatClosesModal.addEventListener("click", this.toggleModal)
      this.containerModal.addEventListener("click", this.clickOutsideModal)

    }
    return this
  }
}
