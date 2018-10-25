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
  constructor(private gameService: GameService) { }

  ngOnInit() {
    console.log('gameService:', this.gameService);
    this.game = this.gameService.getGame();
  }

  guess = (form: NgForm) => {
    console.log(form);
  }

}
