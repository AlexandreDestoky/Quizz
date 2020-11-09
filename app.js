//Sélection
const form = document.querySelector(".formulaire");
const questions = document.querySelectorAll(".blockQuestion input");
const titreResultat = document.querySelector(".resultats h2");
const noteResultat = document.querySelector(".note");
const aideResultat = document.querySelector(".aide");
const toutesLesQuestions = document.querySelectorAll(".blockQuestion");
//Données
const bonneReponses = ["b", "c", "b", "c", "a"];
const emojis = ["🧙", "✨", "👀", "😭", "👎"];
let tabResultats = [];
let verifTableau = [];

//lorsque l'on clique sur le bouton
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

//Vérifie les données envoyé avec les données correctes
let verifFunc = (tabAverifier) => {
  for (let i = 0; i < toutesLesQuestions.length; i++) {
    if (tabAverifier[i] == bonneReponses[i]) {
      verifTableau.push(true);
    } else {
      verifTableau.push(false);
    }
  }
  afficherResultats(verifTableau);
  verifTableau = [];
};

let afficherResultats = (tabCheck) => {
  let nbrFautes = tabCheck.filter((el) => el == false).length;
  switch (nbrFautes) {
    case 0:
      titreResultat.innerText = `🧙 Bravo, c'est un sans faute ! 🧙`;
      aideResultat.innerText = "";
      noteResultat.innerText = "5/5";
      break;
    case 1:
      titreResultat.innerText = `✨ Vous y êtes presque ! ✨`;
      aideResultat.innerText = "Retentez une autre réponse dans la case rouge, puis re-validez !";
      noteResultat.innerText = "4/5";
      break;
    case 2:
      titreResultat.innerText = `✨ Encore un effort ... 👀`;
      aideResultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      noteResultat.innerText = "3/5";
      break;
    case 3:
      titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`;
      aideResultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      noteResultat.innerText = "2/5";
      break;
    case 4:
      titreResultat.innerText = `😭 Peux mieux faire ! 😭`;
      aideResultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      noteResultat.innerText = "1/5";
      break;
    case 5:
      titreResultat.innerText = `👎 Peux mieux faire ! 👎`;
      aideResultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      noteResultat.innerText = "0/5";
      break;
  
    default:
      "Wops, cas innatendu.";
  }
};

