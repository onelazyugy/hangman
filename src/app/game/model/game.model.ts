export class Game {
    public category: string;
    public totalAttempt: number;
    public hangmanWordCount: number;
    public guessedLetter: string[];
    public guessedCorrectLetter: string[];
    public isCorrectGuess: boolean

    constructor(category: string, totalAttempt: number, hangmanWordCount: number, guessedLetter: string[], guessedCorrectLetter: string[], isCorrectGuess: boolean) {
        this.category = category;
        this.totalAttempt = totalAttempt;
        this.hangmanWordCount = hangmanWordCount;
        this.guessedLetter = guessedLetter;
        this.guessedCorrectLetter = guessedCorrectLetter;
        this.isCorrectGuess = isCorrectGuess;
    }
}