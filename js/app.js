const deck = [
  "fa fa-paper-plane-o",
  "fa fa-paper-plane-o",
  "fa fa-diamond",
  "fa fa-diamond",
  "fa fa-bicycle",
  "fa fa-bicycle",
  "fa fa-anchor",
  "fa fa-anchor",
  "fa fa-bolt",
  "fa fa-bolt",
  "fa fa-cube",
  "fa fa-cube",
  "fa fa-leaf",
  "fa fa-leaf",
  "fa fa-bomb",
  "fa fa-bomb"
];

let openCards = [];
let count = 0;
let matchCounter = 0;

const counter = document.querySelector('.moves')
const container = document.querySelector(".deck");

function displayCards() {
  for (let i = 0; i < deck.length; i++) {
    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `<i class="${deck[i]}"></i>`;
    container.appendChild(card);
    click(card);
  }
}
function click(target) {
  target.addEventListener("click", function(event) {
    moves();
    showCard(this);
    compare(this);
  });
}
function compare(card) {
  if (openCards.length === 1) {
    if (openCards[0].innerHTML === card.innerHTML) {
      openCards[0].classList.add("match");
      card.classList.add("match", 'disabled');
      openCards = [];
      matchCounterFn();
    } else {
      setTimeout(function() {
        card.classList.remove("show", "open");
      }, 500);
    }
  } else {
    card.classList.add('disabled');
    openCards.push(card);
  }
}

function showCard(card) {
  card.classList.add("open", "show");
}

function moves () {
  
  count += 1;
  counter.innerHTML = count;
}

function matchCounterFn (){
  matchCounter += 1;
  console.log(matchCounter)
}

displayCards();

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
