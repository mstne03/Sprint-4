import displayJoke from '../logic/displayJoke.ts'
import { jokeOutput } from '../UI/getNodes.ts'
import addJoke from './addJoke.ts'

export default async function writeJoke () {
    const pNode = document.createElement('p');
    let joke = await displayJoke();
    let jokeText = document.createTextNode(joke);

    jokeOutput.innerHTML = "";
    pNode.appendChild(jokeText);
    jokeOutput.appendChild(pNode);
    addJoke(joke);
}
