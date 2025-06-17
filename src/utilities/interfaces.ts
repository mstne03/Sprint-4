interface JokeJson {
  id:string,
  joke:string,
  status:number
}

interface JokeJsonChuckNorris {
  icon_url:string,
  id:string,
  url:string,
  value:string
}

interface err {
  name : string,
  message : string
}

interface SaveJoke {
    joke : string,
    score : number | null,
    date : string
}

export type {JokeJson, JokeJsonChuckNorris, err, SaveJoke };
