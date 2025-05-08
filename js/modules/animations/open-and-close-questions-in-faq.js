export default class OpenAndCloseQuestionsInFaq {

  constructor(listTitles, listContents) {
    if (listTitles && listContents) {
      this.titlesQuestions = document.querySelectorAll(listTitles)
      this.answerQuestions = document.querySelectorAll(listContents)
    }
    this.activeClassName = "ativo"
  }

  openOrCloseAnswerEvent(dt) {
    dt.nextElementSibling.classList.toggle(this.activeClassName)
    dt.classList.toggle(this.activeClassName)
  }

  init() {

    if (this.titlesQuestions.length && this.answerQuestions.length) {
      this.titlesQuestions.forEach((dt) => {
        dt.addEventListener("click", () => this.openOrCloseAnswerEvent(dt))
      })
    }
    return this
  }
}
