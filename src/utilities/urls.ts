let jokeUrl1 : string = 'https://icanhazdadjoke.com/'
let jokeUrl2 : string = 'https://api.chucknorris.io/jokes/random'

export default function randomizeUrl ():string {
    return ((Math.random()*10)+1) >= 5 ?  jokeUrl1 : jokeUrl2
}
