interface JokeJson {
  id:string,
  joke:string,
  status:number
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

export type {JokeJson, err, SaveJoke };