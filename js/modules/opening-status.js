export default class OpeningStatus {


  /*
    openingDays -> um paramêtro que deve ser setado com o seletor de css para localizar
    o elemento HTML que possui o atributo data-semana.

    openingHours -> um paramêtro que deve ser setado com o seletor de css para localizar
    o elemento HTML que possui o atributo data-horario.
  */
  constructor(openingDays, openingHours) {
    this.openingDays = document
      .querySelector(openingDays)
      .dataset.semana.split(",")
      .map(Number)

    this.openingHours = document
      .querySelector(openingHours)
      .dataset.horario.split(",")
      .map(Number)

    this.liWorkingStatus = document.querySelector("[data-semana]")

    this.openedClass = "opened"
    this.closedClass = "closed"
  }

  getCurrentTime() {

    this.currentDate = new Date()
    this.currentDay = this.currentDate.getDay()
    this.currentHour = this.currentDate.getUTCHours() - 3

  }

  checkOpeningStatus() {

    this.getCurrentTime()

    const isOpenInCurrentDay = this.openingDays.includes(this.currentDay)
    const isOpenInCurrentHour =
      this.currentHour >= this.openingHours[0] && this.currentHour < this.openingHours[1]

    if (isOpenInCurrentDay && isOpenInCurrentHour) {
      this.toogleOpeningStatus(this.openedClass)
    } else {
      this.toogleOpeningStatus(this.closedClass)
    }

    return isOpenInCurrentDay && isOpenInCurrentHour

  }

  toogleOpeningStatus(cssClass) {
    this.liWorkingStatus.classList.add(cssClass)
  }


  init() {

    if (this.openingDays && this.openingHours) {
      this.checkOpeningStatus()
    }
    return this

  }

}
