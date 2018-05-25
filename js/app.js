const container = document.querySelector('.deck')
/*
 * Create a list that holds all of your cards
 */
const deck = ['fa fa-paper-plane-o', 'fa fa-paper-plane-o', 'fa fa-diamond', 'fa fa-diamond', 'fa fa-bicycle', 'fa fa-bicycle', 'fa fa-anchor', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-bolt', 'fa fa-cube', 'fa fa-cube', 'fa fa-leaf', 'fa fa-leaf', 'fa fa-bomb', 'fa fa-bomb']

function displayCards() {

    for (let i = 0; i < deck.length; i++) {
        const card = document.createElement('li')
        card.classList.add('card')
        card.innerHTML = `<i class="${deck[i]}"></i>`
        container.appendChild(card)
        click(card)
    }

    //     const card = document.getElementsByClassName('card');

}

function click(target) {
    target.addEventListener('click', function(event) {
        showCard(this)
        
    })
}
function openCards(card) {
    const openCards = []
    let firstCard = openCards[0];
    let secondCard = card.innerHTML
    if (openCards.length === 1) {
        if (firstCard === secondCard) {
            card.classList.add('match')
            console.log(card)
        } else {
            openCards.pop();
        }
    } else {
        openCards.push(card)
    }
    console.log(card)

}

//     openCards(card)

function showCard(card) {
    card.classList.add('open', 'show')
    openCards(card)
}
displayCards()
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }

    return array
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
*  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
