/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function () {
  const cards = ["fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-diamond", "fa fa-diamond", "fa fa-bicycle", "fa fa-bicycle", "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bomb", "fa fa-bomb"];
  // let timer = new Timer();

  let openCards = [];
  let count = 0;
  let matchCounter = 0;

  const h1 = document.querySelector("h1");
  const stars = document.querySelector(".stars");
  const timer = document.getElementById('timer');
  const gameTimer = document.querySelector("#gameTimer");
  const counter = document.querySelector(".moves");
  const container = document.querySelector(".container");

  let watch = new Stopwatch(timer);

  function displayCards() {
    rsetCounters();
    let deck = shuffle(cards);
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
    restartGame();
  }

  function click(target) {
    target.addEventListener("click", function () {
      watch.isOn ? console.log('lupa') : watch.start();
      compare(this);
    });
  }

  function compare(card) {
    openCards.push(card);
    if (!card.classList.contains('open') && !card.classList.contains('show')) {
      console.log('bla');
      card.classList.add('open', 'show');
      if (openCards.length == 2) {
        moves();
        if (openCards[0].innerHTML === openCards[1].innerHTML) {
          openCards[0].classList.add('match');
          openCards[1].classList.add('match');
          openCards = [];
          matchCounterFn();

        } else {
          setTimeout(function () {
            openCards.forEach(function (card) {
              card.classList.remove('open', 'show')
            })
            openCards = [];

          }, 800)
        }
      }

    }
  }


  function moves() {
    counter.innerHTML = ++count;
    removeStar();
  }

  function matchCounterFn() {
    matchCounter += 1;
    console.log(matchCounter);
    gameOver();
  }

  function restartGame() {
    let restart = document.querySelector(".restart");
    restart.addEventListener("click", function () {
      if (container.querySelector(".deck")) {
        container.removeChild(container.querySelector(".deck"));

        displayCards();
      } else {

        displayCards();
      }
    });
  }

  function removeStar() {
    const star = '<li><i class="fa fa-star"></i></li>';
    count < 20 ? (stars.innerHTML = star.repeat(3)) : count < 25 ? (stars.innerHTML = star.repeat(2)) : count < 30 ? (stars.innerHTML = star.repeat(1)) : (h1.innerHTML = "Find a match!");
  }

  function rsetCounters() {
    document.querySelector('.score-panel').style.display = 'block';
    openCards = [];
    count = 0;
    matchCounter = 0;
    starCount = 0;
    counter.innerHTML = count;
    removeStar();
    watch.stop();
    watch.reset();
  }

  function gameOver() {
    if (matchCounter === 8) {
      youWin();
      endSummary();
    }
  }

  function youWin() {
    watch.stop();
    h1.innerHTML = `You Won in ${count} moves!`;
  }

  function endSummary() {
    // function that displays the end modal/results
    console.log(container);
    console.log(stars.innerHTML);
    if (document.querySelector(".deck")) {
      document.querySelector(".deck").style.display = "none";
      document.querySelector(".score-panel").style.display = "none";
    }
    const star = '<i class="fa fa-star">';

    const modal = document.createElement("ul");
    modal.classList.add("modal");

    const endRating = document.createElement("li");
    endRating.classList.add("yourTime");

    const endTime = document.createElement("li");
    endTime.classList.add("yourRating");

    const endMoves = document.createElement('li');
    endMoves.classList.add('yourMoves');

    const playAgain = document.createElement("button");
    playAgain.classList.add("playAgain");

    endRating.innerHTML = `Yo've earned: ${star.repeat(stars.childElementCount)}`;
    endTime.innerHTML = `Your time is: ${timer.innerHTML}`;
    playAgain.innerHTML = "Play Again !?";
    endMoves.innerHTML = `Game completed in ${count} moves`;
    playAgain.addEventListener("click", function () {
      container.removeChild(modal);
      container.removeChild(document.querySelector('.deck'))
      displayCards();
      document.querySelector('h1').innerText = 'Find a Match!';
    });
    modal.appendChild(endRating);
    modal.appendChild(endTime);
    modal.appendChild(endMoves);
    modal.appendChild(playAgain);

    container.appendChild(modal);
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

}, false);