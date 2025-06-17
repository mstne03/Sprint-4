import { jokeButton, scoreButton } from './getNodes.ts'
import writeJoke from '../logic/domModify.ts'
import rateJoke from '../logic/rateJoke.ts'


document.addEventListener('DOMContentLoaded', async () => {
    writeJoke();
});

jokeButton.addEventListener('click', async () => {
    writeJoke();
});

scoreButton.forEach(btn => {
    btn.addEventListener('click', () => {
        rateJoke(btn);
    });
});
