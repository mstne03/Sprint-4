import { jokeButton, jokeOutput, scoreButton } from './getNodes.ts'
import getJokes from '../get_data/getJokes.ts'
import addJoke from '../logic/addJoke.ts'
import getDate from '../get_data/getDate.ts'
import writeJoke from '../logic/domModify.ts'
import jokeReport from '../get_data/jokeReport.ts'

document.addEventListener('DOMContentLoaded', async () => {
    const pNode = document.createElement('p');
    let joke = await getJokes();
    let jokeText = document.createTextNode(joke);
    let date = getDate();

    writeJoke(jokeOutput, pNode, jokeText);
    addJoke(joke, jokeReport, date);
});

jokeButton.addEventListener('click', async () => {
    const pNode = document.createElement('p');
    let joke = await getJokes();
    let jokeText = document.createTextNode(joke);
    let date = getDate();

    jokeOutput.innerHTML = "";

    writeJoke(jokeOutput, pNode, jokeText);
    addJoke(joke, jokeReport, date);
});

scoreButton.forEach(btn => {
    btn.addEventListener('click', () => {
        let joke = jokeReport[jokeReport.length-1];
        
        if (!joke) return alert("No jokes shown yet");

        joke.score = parseInt(btn.id);

        console.log(jokeReport);
    });
});
