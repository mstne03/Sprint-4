import jokeReport from '../storage/jokeReport.ts'

export default function rateJoke (btn : HTMLButtonElement) {
    let joke = jokeReport[jokeReport.length-1];

    joke.score = parseInt(btn.id);

    console.log(jokeReport);
}
