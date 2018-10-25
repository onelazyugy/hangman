import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GameService } from '../../game.service';
import { Game } from '../../model/game.model';
import _ from 'lodash';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {
  game: Game = null;
  guessedLetter = '';
  letterAlreadyTaken = false;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    console.log('gameService:', this.gameService);
    this.game = this.gameService.getGame();
  }

  guess = (form: NgForm) => {
    this.guessedLetter = form.value.guessLetter;
    this.letterAlreadyTaken = _.find(this.game.guessedLetters, {letter: this.guessedLetter}) !== undefined ? true : false;
    if(!this.letterAlreadyTaken) {
      // send to backend and receive new game state, then set the game state
      this.gameService.setGuessedLetters({letter: this.guessedLetter, isCorrect: false});
    }
  }

}
