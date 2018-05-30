# Memory Game Project

This project is part of Udacity's Front End Nanodegree Program.

## Game description:

This a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn.

## The game's rating logic:

* If you match all cards in less than 10 moves you get 3 starts
* If you match all cards in more than 10 and less than 15 moves you get 2 stars.
* If you match all cards in more than 15 moves you get 1 star.

## Code dependencies

This Project uses [Google Fonts](https://fonts.google.com/) for the game fonts and [Font Awesome](https://fontawesome.com/) for card icons.

## TO-DO
- [x] Display the cards on the page
  - [x] shuffle the list of cards using the provided "shuffle" method below
  - [x] loop through each card and create its HTML
  - [x] add each card's HTML to the page
- [x] Set up the event listener for a card. If a card is clicked:
  - [x] display the card's symbol (put this functionality in another function that you call from this one)
  - [x] add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
    - [x] if the list already has another card, check to see if the two cards match
  - [x] if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
  - [x] if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
  - [x] increment the move counter and display it on the page (put this functionality in another function that you call from this one)
  - [x] if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)


[//]: # (## Table of Contents)

[//]: # (## Instructions)

[//]: # (The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.)

[//]: # (To get started, open `js/app.js` and start building out the app's functionality)

[//]: # (For specific, detailed instructions, look at the project instructions in the Udacity Classroom * https://classroom.udacity.com/me.)
