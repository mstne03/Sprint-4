import type { JokeJson, JokeJsonChuckNorris, err } from '../utilities/interfaces.ts'


export default async function getJokes (jokeUrl : string) : Promise<string> {
    try {
        let response : Response = await fetch(jokeUrl, {
            method: 'GET',
            headers: {
            'Accept': 'application/json'
            }
        });

        if (!response.ok ||response === undefined)
            throw new Error(`HTTP error! status: ${response.status}`);

        let jsonJoke : JokeJson | JokeJsonChuckNorris = await response.json();

        if ((jsonJoke as JokeJson).joke) 
            return (jsonJoke as JokeJson).joke;

        return (jsonJoke as JokeJsonChuckNorris).value;
    }
    
    catch (error) {
        return `Error ${(error as err).name}: ${(error as err).message}`;
    }
}
