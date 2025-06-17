import jokeReport from '../storage/jokeReport'
import getDate from '../get_data/getDate'
import jokeInstance from '../storage/jokeInstance'

export default async function addJoke(jokeText: string): Promise<void> {
    jokeInstance.joke = jokeText
    jokeInstance.date = getDate()
    
    jokeReport.push(jokeInstance);

    console.log(jokeReport);
}
