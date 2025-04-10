export default function openAndCloseQuestionsInFaq() {
  const titlesQuestions = document.querySelectorAll(".faq-lista dt")
  const answerQuestions = document.querySelectorAll(".faq-lista dd")

  function openOrCloseAnswerEvent() {
    this.nextElementSibling.classList.toggle("ativo")
    this.classList.toggle("ativo")
  }

  if (titlesQuestions.length && answerQuestions.length) {
    titlesQuestions.forEach((dt) => {
      dt.addEventListener("click", openOrCloseAnswerEvent)
    })
  }
}
