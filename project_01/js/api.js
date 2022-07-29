export const getWeatherDta = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f46497dbc3e8e2744f14a776fd0a4e5a&lang=ru`);

        return await response.json();
    } catch (error) {
        console.error(error); 
    }
}