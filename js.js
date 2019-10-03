var td = document.getElementsByClassName("card");
var iIndiv = document.getElementsByTagName("I");

function randomArray(array) {
  let currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var ic = ["glass-cheers", "skull-crossbones", "money-bill-alt", "lemon", "cookie", "bomb", "shield-alt", "rocket", "glass-cheers", "skull-crossbones", "money-bill-alt", "lemon", "cookie", "bomb", "shield-alt", "rocket"];

ic = randomArray(ic);

var etat1 = false;
var etat2 = false;
var card1;
var card2;
var etat3;
var cards = [];
var element1;
var element2;
var indiv1;
var indiv2;

class Card {
  constructor(element) {
    this.frontface = "question";
    this.backface = ic[i];
    this.iIndiv = iIndiv[i]
    element.addEventListener("click", () => {
      tdclick(this, element);
    });
    this.element = element;
  }
}

for (var i = 0; i < td.length; i++) {
  cards.push(new Card(td[i]));
}



function tdclick(letd, element) {
  if (element.style.backgroundColor) {
    if (element.style.backgroundColor == "rgba(255, 0, 207, 0)") {
      if (etat1 == false) {
        etat1 = true;
        card1 = letd.backface;
        element1 = element;
        element.style.backgroundColor = "red";
        letd.iIndiv.className = "fas fa-" + card1;
        indiv1 = letd.iIndiv;
        istrue(letd, element, indiv1, indiv2);
        return;
      }
    if (etat2 == false) {
      etat2 = true;
      card2 = letd.backface;
      element2 = element;
      element.style.backgroundColor = "red";
      letd.iIndiv.className = "fas fa-" + card2;
      indiv2 = letd.iIndiv;
      istrue(letd, element, indiv1, indiv2);
      return;
    }
    }
} else {
  element.style.backgroundColor = "rgba(255, 0, 207, 0)";
  console.log("color");
  tdclick(letd, element);
}
}


function istrue(letd, element, indiv1, indiv2) {
  if (etat1 == true && etat2 == true) {
    if (card1 == card2) {
      element1.style.backgroundColor = "rgba(255, 0, 207, 1)";
      element2.style.backgroundColor = "rgba(255, 0, 207, 1)";
      etat1 = false;
      etat2 = false;
    }
    if (!(card1 == card2)) {
      setTimeout(function() {
        element1.style.backgroundColor = "rgba(255, 0, 207, 0)";
        element2.style.backgroundColor = "rgba(255, 0, 207, 0)";
        indiv1.className = "fas fa-question";
        indiv2.className = "fas fa-question";
        etat1 = false;
        etat2 = false;
      }, 1000);

    }
    return;
  }
}
