import { jokeButton, scoreButton } from './getNodes'
import writeJoke from '../logic/domModify'
import rateJoke from '../logic/rateJoke'
import getMeteo from '../get_data/getMeteo'


document.addEventListener('DOMContentLoaded', async () => {
    writeJoke();
    console.log(await getMeteo());
});

jokeButton.addEventListener('click', () => {
    writeJoke();
});

scoreButton.forEach(btn => {
    btn.addEventListener('click', () => {
        rateJoke(btn);
    });
});
