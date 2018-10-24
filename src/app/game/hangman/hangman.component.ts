import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../model/game.model';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {
  game: Game = null;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    //load fetch a game session that will include a category, a hangman puzzle
    //populate the game service with these data
    let gameData = {
      category: "movie",
      totalAttempt: 0,
      hangmanWordCount: 5,
      guessedLetter: ['V', 'T', 'A', 'Y'],
      guessedCorrectLetter: ['A', 'V'],
      isCorrectGuess: false
    }
    this.game = new Game(gameData.category, gameData.totalAttempt, gameData.hangmanWordCount, gameData.guessedLetter, gameData.guessedCorrectLetter, gameData.isCorrectGuess);
    this.gameService.setGame(this.game);
  }

  guessClicked = () => {
    console.log('guess clicked');
  }
}
