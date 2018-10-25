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
      totalGuess: 4,
      hangmanPhrase: [
        {letter: 'V', index: 0, isCorrect: true},
        {letter: '', index: 1, isCorrect: false},
        {letter: 'E', index: 2, isCorrect: true},
        {letter: 'T', index: 3, isCorrect: true},
        {letter: '', index: 4, isCorrect: false},
        {letter: '', index: 5, isCorrect: false},
        {letter: '', index: 6, isCorrect: false},
        {letter: '', index: 7, isCorrect: false},
        {letter: '', index: 8, isCorrect: false},
        {letter: '', index: 9, isCorrect: false},
        {letter: '', index: 10, isCorrect: false},
        {letter: '', index: 11, isCorrect: false},
        {letter: '', index: 12, isCorrect: false},
      ],
      guessedLetters: [
        {letter: 'V', isCorrect: true},
        {letter: 'E', isCorrect: true},
        {letter: 'T', isCorrect: true},
        {letter: 'X', isCorrect: false},
        {letter: 'X', isCorrect: false},
        {letter: 'X', isCorrect: false},
        {letter: 'X', isCorrect: false},
        {letter: 'X', isCorrect: false},
      ]
    }
    this.game = new Game(gameData.category, gameData.hangmanPhrase, gameData.guessedLetters, gameData.isCorrect, gameData.totalGuess);
    this.gameService.setGame(this.game);
  }

  guessClicked = () => {
    console.log('guess clicked');
  }
}
