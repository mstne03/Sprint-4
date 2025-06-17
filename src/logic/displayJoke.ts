import getJokes from '../get_data/getJokes.ts'
import randomizeUrl from '../utilities/urls.ts'


export default async function displayJoke () {
    let url: string = randomizeUrl();
    return await getJokes(url);
}
