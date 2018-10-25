export class Game {
    public category: string;
    public hangmanPhrase: object;
    public guessedLetters: object;
    public isCorrect: boolean;
    public totalGuess: number;

    constructor(category: string, hangmanPhrase: object, guessedLetters: object, isCorrect: boolean, totalGuess: number) {
        this.category = category;
        this.hangmanPhrase = hangmanPhrase;
        this.guessedLetters = guessedLetters;
        this.isCorrect = isCorrect;
        this.totalGuess = totalGuess;
    }
}