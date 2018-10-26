export class Game {
    public id: number;
    public category: string;
    public hangmanPhrase: object;
    public guessedLetters: [];
    public isCorrect: boolean;
    public totalGuess: number;

    constructor(id: number, category: string, hangmanPhrase: object, guessedLetters: [], isCorrect: boolean, totalGuess: number) {
        this.id = id;
        this.category = category;
        this.hangmanPhrase = hangmanPhrase;
        this.guessedLetters = guessedLetters;
        this.isCorrect = isCorrect;
        this.totalGuess = totalGuess;
    }
}