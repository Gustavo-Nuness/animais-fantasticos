export default function initializeModal() {
  const linkThatOpensModal = document.querySelector("[data-modal='abrir']")

  const buttonThatClosesModal = document.querySelector("[data-modal='fechar']")

  const containerModal = document.querySelector("[data-modal='container']")

  function toggleModal(event) {
    event.preventDefault()
    containerModal.classList.toggle("ativo")
  }
  function clickOutsideModal(event) {
    if (event.target === this) {
      toggleModal(event)
    }
  }

  if (linkThatOpensModal && buttonThatClosesModal && containerModal) {
    linkThatOpensModal.addEventListener("click", toggleModal)
    buttonThatClosesModal.addEventListener("click", toggleModal)
    containerModal.addEventListener("click", clickOutsideModal)

  }
}
