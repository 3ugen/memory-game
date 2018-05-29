const deck = ["fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-diamond", "fa fa-diamond", "fa fa-bicycle", "fa fa-bicycle", "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bomb", "fa fa-bomb"];

let openCards = [];
let count = 0;
let matchCounter = 0;
let starCount = 0;
let tens = 00;
let seconds = 00
let minutes = 00
const h1 = document.querySelector("h1");
const sec = document.querySelector('#seconds');
const min = document.querySelector('#minutes');


const counter = document.querySelector(".moves");
const container = document.querySelector(".container");
// const container = document.querySelector(".deck");

function displayCards() {
    rsetCounters();

    const deckUl = document.createElement("ul");
    deckUl.classList.add("deck");
    container.appendChild(deckUl);

    for (let i = 0; i < deck.length; i++) {
        const card = document.createElement("li");
        card.classList.add("card");
        card.innerHTML = `<i class="${deck[i]}"></i>`;
        deckUl.appendChild(card);
        click(card);
    }
    setInterval(timer, 10);

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
            card.classList.add("match", "disabled");
            openCards = [];
            matchCounterFn();
        } else {
            setTimeout(function() {
                card.classList.remove("show", "open");
            }, 500);
        }
    } else {
        card.classList.add("disabled");
        openCards.push(card);
    }
}

function showCard(card) {
    card.classList.add("open", "show");
}

function moves() {
    count += 1;
    counter.innerHTML = count;
    removeStar();
}

function matchCounterFn() {
    matchCounter += 1;
    console.log(matchCounter);
    gameOver();
}

function restart() {
    let restart = document.querySelector(".restart");
    restart.addEventListener("click", function() {
        if (container.querySelector(".deck")) {
            container.removeChild(container.querySelector(".deck"));
            displayCards();
        } else {
            displayCards();
        }
    });
}

function removeStar() {
    const stars = document.querySelector(".stars");
    const star = '<li><i class="fa fa-star"></i></li>';
    count < 17 ? (stars.innerHTML = star.repeat(3)) : count < 25 ? (stars.innerHTML = star.repeat(2)) : count < 30 ? (stars.innerHTML = star.repeat(1)) : (h1.innerHTML = "Find a match!");
}

function rsetCounters() {
    count = 0;
    matchCounter = 0;
    starCount = 0;
    counter.innerHTML = count;
    removeStar();
}

function gameOver() {
    matchCounter == 8 ? (h1.innerHTML = `You Won in ${count} moves!`) : (h1.innerHTML = "Find a match!");
}

restart();
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

function timer () {
    tens++; 
    
//     if(tens < 9){
//       time.innerHTML = "0" + tens;
//     }
    
//     if (tens > 9){
//       time.innerHTML = tens;
      
//     } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      sec.innerHTML = "0" + seconds;
      tens = 0;
//       appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      sec.innerHTML = seconds;
    }

  }