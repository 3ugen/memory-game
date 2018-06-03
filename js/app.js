/*jshint esversion: 6 */
document.addEventListener("DOMContentLoaded", function() {
  const cards = ["fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-diamond", "fa fa-diamond", "fa fa-bicycle", "fa fa-bicycle", "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bomb", "fa fa-bomb"];
  // let timer = new Timer();

  let openCards = [];
  let count = 0;
  let matchCounter = 0;
  let starCount = 0;
  let tens = 0;
  let seconds = 0;
  let minutes = 0;
  let movesCount = 0;

  const h1 = document.querySelector("h1");
  const sec = document.querySelector("#seconds");
  const min = document.querySelector("#minutes");
  const stars = document.querySelector(".stars");
  const timer = document.getElementById('timer');
  const gameTimer = document.querySelector("#gameTimer");
  const counter = document.querySelector(".moves");
  const container = document.querySelector(".container");

  let watch = new Stopwatch(timer);
  // const container = document.querySelector(".deck");
  function startTimer() {
    console.log("oohhoooohhohoho");
    timer.addEventListener("secondsUpdated", function(e) {
      gameTimer.innerHTML = timer.getTimeValues().toString();
    });
  }

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
    //     setInterval(timer, 10);
    restartGame();
  }
  function click(target) {
    target.addEventListener("click", function(event) {
      watch.isOn ? console.log('lupa') : watch.start();
//       moves();
      //       showCard(this);
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
//           moves();
          setTimeout(function() {
            openCards.forEach(function(card) {
              card.classList.remove('open', 'show')
            })
            openCards = [];

          }, 800)
        }
      }

    }
  }

  function showCard(card) {
    card.classList.add("open", "show");
    setTimeout(function() {
      card.classList.remove("show", "open");
    }, 500);
  }

  function moves() {
//     count += 1;

//     if (count % 2 == 0) {
//       movesCount++;
//     }
//     counter.innerHTML = movesCount;
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
    const star = '<li><i class="fa fa-star"></i></li>';
    count < 20 ? (stars.innerHTML = star.repeat(3)) : count < 25 ? (stars.innerHTML = star.repeat(2)) : count < 30 ? (stars.innerHTML = star.repeat(1)) : (h1.innerHTML = "Find a match!");
  }

  function rsetCounters() {
    document.querySelector('.score-panel').style.display = 'block';

    count = 0;
    matchCounter = 0;
    starCount = 0;
    counter.innerHTML = count;
    removeStar();
    watch.stop();
    watch.reset();
    //       timer.reset();
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
    playAgain.addEventListener("click", function() {
      // document.querySelector(".modal").style.display = "none";
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

  //   timer.start();

  // function timer() {
  //   tens++;
  //
  //   //     if(tens < 9){
  //   //       time.innerHTML = "0" + tens;
  //   //     }
  //
  //   //     if (tens > 9){
  //   //       time.innerHTML = tens;
  //
  //   //     }
  //
  //   if (tens > 99) {
  //     console.log("seconds");
  //     seconds++;
  //     sec.innerHTML = "0" + seconds;
  //     tens = 0;
  //     //       appendTens.innerHTML = "0" + 0;
  //   }
  //
  //   if (seconds > 9) {
  //     sec.innerHTML = seconds;
  //   }
  // }
}, false);
