import type { JokeJson, JokeJsonChuckNorris, err } from '../logic/interfaces.ts'

export default async function getJokes () : Promise<string> {
    let jokeUrl : string = 'https://icanhazdadjoke.com/';
    let otherJokeUrl : string = 'https://api.chucknorris.io/jokes/random';
    let randNum : number = (Math.random()*10)+1;

    try {
        let url : string = randNum >= 5 ? jokeUrl : otherJokeUrl;

        let response : Response = await fetch(url, {
            method: 'GET',
            headers: {
            'Accept': 'application/json'
            }
        });

        if (!response.ok ||response === undefined)
            throw new Error(`HTTP error! status: ${response.status}`);

        let jsonJoke : JokeJson | JokeJsonChuckNorris = await response.json();

        if ((jsonJoke as JokeJson).joke) return (jsonJoke as JokeJson).joke;

        return (jsonJoke as JokeJsonChuckNorris).value;
    }
    
    catch (error) {
        return `Error ${(error as err).name}: ${(error as err).message}`;
    }
}
