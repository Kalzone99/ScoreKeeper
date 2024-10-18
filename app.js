const button_1 = document.getElementById("b1");
console.log(button_1);
const button_2 = document.getElementById("b2");
console.log(button_2);
const reset = document.getElementById("reset");
console.log(reset);
const player1 = document.getElementById("score_1");
console.log(player1);
const player2 = document.getElementById("score_2");
console.log(player2);

//reset button va réactiver les buttons +1 et va effacer le score
reset.addEventListener("click", () => {
  document.getElementById("score_1").innerHTML = 0;
  document.getElementById("score_2").innerHTML = 0;
  button_1.addEventListener("click", increment_1);
  button_2.addEventListener("click", increment_2);
  //les scores doivent redevenir de taille et couleur normale
  player1.style.color = "black";
  player1.style.fontSize = "24px";
  player2.style.color = "black";
  player2.style.fontSize = "24px";
});
// fonction pour incrémenter de 1 le score du joueur 1
const increment_1 = () => {
  const element = document.getElementById("score_1");

  let score = parseInt(element.innerHTML);
  score++;

  console.log(score);
  element.innerHTML = score;
  checkScore();
};

button_1.addEventListener("click", increment_1);

// fonction pour le joueur 2
const increment_2 = () => {
  const element = document.getElementById("score_2");

  let score = parseInt(element.innerHTML);
  score++;

  console.log(score);
  element.innerHTML = score;
  checkScore();
};

button_2.addEventListener("click", increment_2);
// fonction qui permet d'arreter le comptage et désigner un vainqueur
// A insérer dans les incrémentations sinon il continue sans faire de checks
const checkScore = () => {
  const score1 = parseInt(score_1.innerHTML);
  const score2 = parseInt(score_2.innerHTML);

  if (score1 + score2 >= 5) {
    button_1.removeEventListener("click", increment_1);
    button_2.removeEventListener("click", increment_2);
    if (score1 > score2) {
      document.getElementById("score_1").style.color = "green";
      document.getElementById("score_2").style.color = "red";
      player1.style.fontSize = "35px";
    } else {
      document.getElementById("score_2").style.color = "green";
      document.getElementById("score_1").style.color = "red";
      player2.style.fontSize = "35px";
    }
  }
};
