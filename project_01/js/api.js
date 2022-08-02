export const getWeatherDta = async (city) => {
    try {
        const response = await fetch (
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=565f6a092e360571eb5dfbd861a5741c&lang=ru&units=metric`
        );

        return await response.json();
    } catch (error) {
        console.error(error); 
    }
}

