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
      isCorrect: false,
      guessedCorrectLetter: [
        {letter: 'V', index: 0, isCorrect: false},
        {letter: '', index: 1, isCorrect: true},
        {letter: 'E', index: 2, isCorrect: false},
        {letter: 'T', index: 3, isCorrect: true},
        {letter: '', index: 4, isCorrect: false},
      ]

    }
    this.game = new Game(gameData.category, gameData.guessedCorrectLetter, gameData.isCorrect);
    this.gameService.setGame(this.game);
  }

  guessClicked = () => {
    console.log('guess clicked');
  }
}
