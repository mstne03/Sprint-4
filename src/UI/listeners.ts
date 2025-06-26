import { jokeButton, scoreButton } from './getNodes'
import { writeJoke, writeWeather } from '../logic/domModify'
import rateJoke from '../logic/rateJoke'


document.addEventListener('DOMContentLoaded', () => {
    writeJoke();
    writeWeather();
});

jokeButton.addEventListener('click', () => {
    writeJoke();
});

scoreButton.forEach(btn => {
    btn.addEventListener('click', () => {
        rateJoke(btn);
    });
});
