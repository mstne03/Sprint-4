import { jokeButton, scoreButton } from './getNodes'
import writeJoke from '../logic/domModify'
import rateJoke from '../logic/rateJoke'


document.addEventListener('DOMContentLoaded', () => {
    writeJoke();
});

jokeButton.addEventListener('click', () => {
    writeJoke();
});

scoreButton.forEach(btn => {
    btn.addEventListener('click', () => {
        rateJoke(btn);
    });
});
