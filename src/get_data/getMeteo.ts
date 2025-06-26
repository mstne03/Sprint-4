import getDate from './getDate'
import type { weatherData } from '../utilities/interfaces'

async function getMeteoObject (lat:string = "41.390205", lng:string = "2.154007") : Promise<weatherData | Error> {
    try {
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,precipitation,rain&forecast_days=1&forecast_hours=1&past_hours=1`;

        console.log(weatherUrl)

        const response = await fetch(weatherUrl);

        let weatherData : weatherData = await response.json();

        weatherData.current.time = getDate();

        return weatherData;
    } catch (error) {
        return (error as Error);
    }
}

export default async function getMeteoData () : Promise<weatherData | Error> {
    if (navigator.geolocation) {

        return new Promise ((resolve, reject) => {

            navigator.geolocation.getCurrentPosition(
                
                async (position) => {
                    let { latitude, longitude } = position.coords;

                    console.log(`Lat: ${latitude}\nLong: ${longitude}`)

                    try {
                        let weatherData : weatherData | Error = await getMeteoObject(
                                                                                    latitude.toString(), 
                                                                                    longitude.toString()
                                                                                    );
                        resolve(weatherData);
                    }catch (error) {
                        reject(error);
                    }
                },

                async (error) => {
                    console.error(`Error getting user location: ${error}`);
                    let weatherData : weatherData | Error = await getMeteoObject();
                    resolve(weatherData);
                }
            );
        });
        
    } else {
        console.error("Geolocation not supported");
        let weatherData : weatherData | Error = await getMeteoObject();
        return weatherData;
    }
}
