import type { SaveJoke } from './interfaces.ts'

export default function addJoke(jokeText: string, jokeReports: Array<SaveJoke>, jokeDate:string): void {
    let jokeObject: SaveJoke = {
        joke: jokeText,
        score: null,
        date: jokeDate
    }
    
    jokeReports.push(jokeObject);

    console.log(jokeReports);
}
