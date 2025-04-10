export default function numbersAnimations() {
  const numbersSpan = document.querySelectorAll("[data-numero]")

  function animateNumbers() {
    numbersSpan.forEach((numberSpan) => {
      const endNumber = +numberSpan.innerText
      let startNumber = 0
      const incrementNumber = Math.ceil(endNumber / 100)

      const timer = setInterval(() => {
        startNumber += incrementNumber
        numberSpan.innerText = startNumber

        if (startNumber > endNumber) {
          numberSpan.innerText = endNumber
          clearInterval(timer)
        }
      }, 25 * Math.random())
    })
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect()
      animateNumbers()
    }
  }
  const observer = new MutationObserver(handleMutation)
  const observerTarget = document.querySelector(".numeros")

  observer.observe(observerTarget, { attributes: true })
}
