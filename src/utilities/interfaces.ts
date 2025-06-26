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

interface weatherData {
  current: {
    apparent_temperature: number,
    interval: number,
    is_day:number,
    precipitation: number,
    rain: number,
    relative_humidity_2m: number,
    temperature_2m: number,
    time: string,
    weather_code: number
  },
  current_units: {
    apparent_temperature: string,
    interval: string,
    is_day: string,
    precipitation: string,
    rain: string,
    relative_humidity_2m: string,
    temperature_2m: string,
    time: string,
    weather_code: string
  },
  elevation: number,
  generationtime_ms: number,
  latitude: number,
  longitude: number,
  timezone: string,
  timezone_abbreviation: string,
  utc_offset_seconds: number,
}

export type {JokeJson, JokeJsonChuckNorris, err, SaveJoke, weatherData };
