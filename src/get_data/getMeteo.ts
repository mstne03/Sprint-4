import getDate from './getDate'

export default async function getMeteo () {
    try {
        const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=41.3888&longitude=2.159&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,precipitation,rain&forecast_days=1&forecast_hours=1&past_hours=1';

        const response = await fetch(weatherUrl);

        const weatherData = response.json()

        return weatherData;
    } catch (error) {
        return error
    }
}
