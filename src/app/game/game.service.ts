import { Injectable } from '@angular/core';
import { Game } from './model/game.model';

@Injectable()
export class GameService {
    private game: Game = null;

    setGame = (game: Game) => {
        this.game = game;
    }

    getGame = () => {
        return this.game;
    }
}