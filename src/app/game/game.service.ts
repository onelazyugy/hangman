import { Injectable } from '@angular/core';
import { Game } from './model/game.model';

@Injectable()
export class GameService {
    private game: Game = null;

    setGame = (game: Game) => {
        this.game = game;
    }

    setCategory = (category) => {
        this.game.category = category;
    }

    setIsCorrect = (isCorrect) => {
        this.game.isCorrect = isCorrect; 
    }

    setTotalGuess = (totalGuess) => {
        this.game.totalGuess = totalGuess;
    }

    setHangmanPhrase = (hangmanPhrase) => {
        this.game.hangmanPhrase = hangmanPhrase;
    }

    setGuessedLetters = (guessedLetter) => {
        this.game.guessedLetters.push(guessedLetter);
    }

    getGame = () => {
        return this.game;
    }
}