import type { JokeJson, err } from '../logic/interfaces.ts'

export default async function getJokes () : Promise<string> {
    let jokeUrl : string = 'https://icanhazdadjoke.com/';
    let otherJokeUrl : string = '';

    try {
        let response : Response = await fetch(jokeUrl, {
            method: 'GET',
            headers: {
            'Accept': 'application/json'
            }
        });

        if (!response.ok) 
            throw new Error(`HTTP error! status: ${response.status}`);

        let jsonJoke : JokeJson = await response.json();

        return jsonJoke.joke;
    }
    
    catch (error) {
        return `Error ${(error as err).name}: ${(error as err).message}`;
    }
}
