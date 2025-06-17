import jokeReport from '../storage/jokeReport'

export default function rateJoke (btn : HTMLButtonElement) {
    let joke = jokeReport[jokeReport.length-1];

    joke.score = parseInt(btn.id);

    console.log(jokeReport);
}
