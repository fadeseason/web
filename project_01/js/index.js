import { getWeatherDta } from "./api.js"

const app = async () => {
    const weather = await getWeatherDta('Москва');
    console.log(weather);
}

app();