
<h1 align="center">
  Hangman Game
  <br>
</h1>

<h4 align="center">Hangman Game created using ReactJS</h4>


<p align="center">
  <a href="#description">Description</a> •
  <a href="#table-of-contents">Table of contents</a> •
  <a href="#about-the-game">About the Game</a> •
  <a href="#installation">Installation</a> •
</p>

![hangman](https://user-images.githubusercontent.com/107998811/219873959-fe4a75a8-e63c-45cb-a423-5cf8dae48161.png)

## Description

An interactive Hangman Game built from scratch using React hooks. The app utilizes a random word generating API to fetch data from. Some of the React concepts used in this app are: components, state management, props, hooks, etc. 

## Table of Contents

* <a href="#description">Description</a>
* <a href="#about-the-game">About the Game</a> 
* <a href="#installation">Installation</a> 
  
## About the Game

The goal of the Hangman Game is to guess a random word letter by letter. The user has to click on the buttons that contain the letters of the alphabet.

![hangman2](https://user-images.githubusercontent.com/107998811/219875007-59679fbf-8616-4b4e-9687-dd7afa263f17.png)

The maximum amount of mistakes a player can make are 10. If the player did not guess the word and reaches 10 mistakes the player lost. 
![hangman3](https://user-images.githubusercontent.com/107998811/219875122-45f539d1-e9c9-4f71-846e-6d26664305c5.png)

If the player guessed the word before making 10 mistakes the game is won.
![hangman4](https://user-images.githubusercontent.com/107998811/219875451-bd643ccd-18fc-4f97-a75c-2b690a945c0b.png)

The See Rules button opens up a modal with the rules of the game.
![hangman-modal](https://user-images.githubusercontent.com/107998811/219875125-a2309f64-53d2-4b97-874c-878048bbac02.png)


## Installation

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/PentekTimi/hangman-game.git

# Go into the repository 
$ cd hangman-game

# Install dependencies
$ npm install

# Run the app
$ npm start
```

