import { jokeButton, scoreButton } from './getNodes'
import writeJoke from '../logic/domModify'
import rateJoke from '../logic/rateJoke'
import getMeteoData from '../get_data/getMeteo'


document.addEventListener('DOMContentLoaded', async () => {
    writeJoke();
    console.log("Meteo: ",await getMeteoData());
});

jokeButton.addEventListener('click', () => {
    writeJoke();
});

scoreButton.forEach(btn => {
    btn.addEventListener('click', () => {
        rateJoke(btn);
    });
});
