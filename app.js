//Sélection
const form = document.querySelector(".formulaire");
const questions = document.querySelectorAll(".blockQuestion input");
const titreResulat = document.querySelector(".resultats h2");
const texteResultat = document.querySelector(".note");
const aideResultat = document.querySelector(".aide");
const toutesLesQuestions = document.querySelectorAll(".blockQuestion");
//Données
const bonneReponses = ["b", "c", "b", "c", "a"];
const emojis = ["🧙", "✨", "👀", "😭", "👎"];
let tabResultats = [];
let verifTableau = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(document.querySelector('input[name="q1"]:checked').value); Autre façon
  for (const question of questions) {
    if (question.checked) {
      tabResultats.push(question.value);
    }
  }
  verifFunc(tabResultats);
  tabResultats = [];
});

let verifFunc = (tabAverifier) => {
  for (let i = 0; i < toutesLesQuestions.length; i++) {
    if (tabAverifier[i] == bonneReponses[i]) {
      verifTableau.push(true);
    } else {
      verifTableau.push(false);
    }
  }
  console.log(verifTableau);
  verifTableau = [];
};
