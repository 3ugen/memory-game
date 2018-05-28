# Memory Game Project

# TO-DO
- [x] Display the cards on the page
  - [ ] shuffle the list of cards using the provided "shuffle" method below
  - [x] loop through each card and create its HTML
  - [x] add each card's HTML to the page
- [x] Set up the event listener for a card. If a card is clicked:
  - [x] display the card's symbol (put this functionality in another function that you call from this one)
  - [x] add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
    - [x] if the list already has another card, check to see if the two cards match
  - [x] if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
  - [x] if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
  - [x] increment the move counter and display it on the page (put this functionality in another function that you call from this one)
  - [ ] if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).
