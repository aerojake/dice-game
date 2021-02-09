<!-- PROJECT LOGO -->
<br />

  <h1 align="center">Risk Dice Game</h1>

  <h3 align="center">
    Execute your Risk board game battles in an app.

  </h3>




<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#how-to-play">How to Play</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<p align="center">
  <img src="images/screenshot.png" width="500" title="Risk Dice">
</p>

This project takes the dice battle element from the strategy board game Risk and implements it in a digital format.  The primary focus of this project is implementing JavaScript classes.  After finishing a read through of the Clean Code book, refactoring and descriptive variable names are a strong focus in the code also.

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [JavaScript](https://www.ecma-international.org/technical-committees/tc39/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - no framework used
* [Jest](https://jestjs.io) - for testing


<!-- GETTING STARTED -->
## Getting Started

Visit the [link](http://jakesimmens.com) to checkout the game.

<!-- USAGE EXAMPLES -->
### How to Play

1.  Click *New Battle* in the upper right corner.
2.  Type in the number of armies for the attacking player.
3.  Type in the number of armies for the defending player.
4.  Click *Start Battle*.
5.  Each player picks 1, 2, or 3 armies to battle.
6.  Each player presses *Roll*.
7.  Results are displayed at the bottom.
8.  Return to step 5 for another round with the current army counts.
9.  Return to step 1 to start a new battle.



#### Number of Dice to Roll

The number of dice to roll may vary from 1 to 3 dice.  A pop up window will alert the player if they rolling too many dice.
*  The attacker must always roll at least one die count less than the army count.
  *  Attacker has 3 armies remaining.  The most dice that may be rolled is 2
*  The defender must always roll less than or equal to the army count.
  *  Defender has 2 armies remaining.  The most dice that may be rolled is 2.
  


#### Scoring
1.  The loser of a roll loses 1 army.
2.  The highest roll of each player is compared.  The higher die wins.
3.  Ties go to the defender.
4.  If each player rolled at least 2 die, the second highest die for each player is compared.
5.  If either player rolls more total die than the second player,  the lowest unmatched rolls are ignored.
    *  Example:
        *  Attacker rolls 3 dice.
        *  Defender rolls 2 dice.
        *  Only the attacker's top 2 die are used, the 3rd die is ignored.


<!-- CONTACT -->
## Contact

Jake Simmens - [LinkedIn](https://linkedin.com/in/jakesimmens) - jake@jakesimmens.com

<!--Project Link: [http://jakesimmens.com](http://jakesimmens.com) -->


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Othneil Drew](https://github.com/othneildrew/Best-README-Template) - Readme template

