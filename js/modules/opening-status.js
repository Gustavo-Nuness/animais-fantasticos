export default function initializeOpeningStatus() {
  const openingDays = document
    .querySelector("[data-semana]")
    .dataset.semana.split(",")
    .map(Number)

  const openingHours = document
    .querySelector("[data-horario]")
    .dataset.horario.split(",")
    .map(Number)

  const currentDate = new Date()
  const currentDay = currentDate.getDay()
  const currentHour = currentDate.getHours()

  const isOpenInCurrentDay = openingDays.includes(currentDay)
  const isOpenInCurrentHour =
    currentHour >= openingHours[0] && currentHour < openingHours[1]

  const liWorkingStatus = document.querySelector("[data-semana]")

  if (isOpenInCurrentDay && isOpenInCurrentHour) {
    liWorkingStatus.classList.add("opened")
  } else {
    liWorkingStatus.classList.add("closed")
  }
}
