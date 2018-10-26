import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../model/game.model';
// mock
import { one, two, three} from './mock';
import results from './mockresult';

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
    const words = [one, two, three];
    const gameData = words[Math.floor(Math.random()*words.length)];
    this.game = new Game(gameData.id, gameData.category, gameData.hangmanPhrase, gameData.guessedletters, gameData.isCorrect, gameData.totalGuess);
    this.gameService.setGame(this.game);
    // setTimeout(function(){
    //   const words = [one, two, three];
    //   const gameData = words[Math.floor(Math.random()*words.length)];
    //   this.game = new Game(gameData.id, gameData.category, gameData.hangmanPhrase, gameData.guessedletters, gameData.isCorrect, gameData.totalGuess);
    //   this.gameService.setGame(this.game);
    // }, 2000);
  }

  guessClicked = () => {
    console.log('guess clicked');
  }
}
