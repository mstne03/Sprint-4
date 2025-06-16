import type { SaveJoke } from './interfaces.ts'

export default function addJoke(jokeText: string, jokeReports: Array<SaveJoke>, jokeDate:string): void {
    let jokeObject: SaveJoke = {
        joke: jokeText,
        score: null,
        date: jokeDate
    }

    if (jokeReports.some(joke => joke === jokeObject)) return console.log(`This joke ${jokeObject} is already in ${jokeReports}`);
    
    jokeReports.push(jokeObject);

    console.log(jokeReports);
}
