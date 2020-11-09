const form = document.querySelector(".formulaire");
const questions = document.querySelectorAll(".blockQuestion input");
let tabResultats = [];


form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(document.querySelector('input[name="q1"]:checked').value); Autre façon
  for (const question of questions) {
    if(question.checked) {
      tabResultats.push(question.value);
    }
  }
  console.log(tabResultats);
  tabResultats = [];
});
