import displayJoke from '../logic/displayJoke'
import { jokeOutput } from '../UI/getNodes'
import addJoke from './addJoke'

export default async function writeJoke () {
    const pNode = document.createElement('p');
    let joke = await displayJoke();
    let jokeText = document.createTextNode(joke);

    jokeOutput.innerHTML = "";
    pNode.appendChild(jokeText);
    jokeOutput.appendChild(pNode);
    addJoke(joke);
}
