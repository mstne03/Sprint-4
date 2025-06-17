import type { SaveJoke } from '../utilities/interfaces'
import jokeReport from '../storage/jokeReport'
import getDate from '../get_data/getDate'

export default async function addJoke(jokeText: string): Promise<void> {
    let jokeInstance : SaveJoke = {
        joke: jokeText,
        score: null,
        date: getDate()
    }
    
    jokeReport.push(jokeInstance);

    console.log(jokeReport);
}
