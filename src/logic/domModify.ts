import displayJoke from '../logic/displayJoke'
import { jokeOutput, weatherOutputTemp, weatherOutputHumidity, weatherOutputRain } from '../UI/getNodes'
import getMeteoData from '../get_data/getMeteo'
import type { weatherData } from '../utilities/interfaces'
import addJoke from './addJoke'

async function writeJoke () {
    const pNode = document.createElement('p');
    let joke = await displayJoke();
    let jokeText = document.createTextNode(joke);

    jokeOutput.innerHTML = "";
    pNode.appendChild(jokeText);
    jokeOutput.appendChild(pNode);
    addJoke(joke);
}

async function writeWeather () {
    const pNode = document.createElement('p');
    let weatherDataResult : weatherData | Error = await getMeteoData();

    console.log(weatherDataResult);

    if (weatherDataResult instanceof Error) {
        let error = document.createTextNode('Could not fetch weather data');
        weatherOutputTemp.appendChild(error);

        return;
    }
    
    let time = weatherDataResult.current.time;
    let temperature = `${weatherDataResult.current.temperature_2m} ${weatherDataResult.current_units.temperature_2m}`;
    let humidity = `${weatherDataResult.current.relative_humidity_2m} ${weatherDataResult.current_units.relative_humidity_2m}`;
    let rain = `${weatherDataResult.current.rain} ${weatherDataResult.current_units.rain}`;
    let isDay = weatherDataResult.current.is_day;

    weatherOutputTemp.textContent = `Temp: ${temperature}`;
    weatherOutputHumidity.textContent = `Humidity: ${humidity}`;
    weatherOutputRain.textContent = `Rain: ${rain}`;
}

export { writeJoke, writeWeather }
