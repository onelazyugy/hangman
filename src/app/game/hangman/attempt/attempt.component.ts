import { Component, OnInit } from '@angular/core';
import { Game } from '../../model/game.model';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {
  game: Game;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.game = this.gameService.getGame();
  }

}
