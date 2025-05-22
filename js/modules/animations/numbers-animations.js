export default class NumbersAnimations {

  constructor(numbersSpan, observerTarget, observerActivatedClass) {

    this.numbersSpan = document.querySelectorAll(numbersSpan)

    this.handleMutation = this.handleMutation.bind(this)

    this.observer = new MutationObserver(this.handleMutation)
    this.observerTarget = document.querySelector(observerTarget)
    this.observerActivatedClass = observerActivatedClass;


  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerActivatedClass)) {
      this.observer.disconnect()
      this.animateNumbers()
    }
  }

  animateNumbers() {
    this.numbersSpan.forEach((numberSpan) => {
      this.constructor.incrementNumber(numberSpan)
    })
  }

  static incrementNumber(numberSpan) {
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
  }

  addMutationObserver() {
    this.observer.observe(this.observerTarget, { attributes: true })
  }

  init() {

    if (this.numbersSpan.length && this.observerTarget) {

      this.addMutationObserver()
    }

    return this;
  }
}
