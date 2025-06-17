import type { SaveJoke } from '../utilities/interfaces.ts'
import jokeReport from '../storage/jokeReport.ts'
import getDate from '../get_data/getDate.ts'

export default async function addJoke(jokeText: string): Promise<void> {
    let jokeObject: SaveJoke = {
        joke: jokeText,
        score: null,
        date: getDate()
    }
    
    jokeReport.push(jokeObject);

    console.log(jokeReport);
}
