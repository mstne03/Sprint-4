import getJokes from '../get_data/getJokes'
import randomizeUrl from '../utilities/urls'

export default async function displayJoke () {
    let url: string = randomizeUrl();
    return await getJokes(url);
}
