export class Game {
    public category: string;
    // public totalAttempt: number;
    // public hangmanWordCount: number;
    // public guessedLetter: string[];
    // public guessedCorrectLetter: string[];
    public guessedCorrectLetter: object;
    public isCorrect: boolean;

    constructor(category: string, guessedCorrectLetter: object, isCorrect: boolean) {
        this.category = category;
        // this.totalAttempt = totalAttempt;
        // this.hangmanWordCount = hangmanWordCount;
        // this.guessedLetter = guessedLetter;
        // this.guessedCorrectLetter = guessedCorrectLetter;
        this.isCorrect = isCorrect;
        this.guessedCorrectLetter = guessedCorrectLetter;
    }
}