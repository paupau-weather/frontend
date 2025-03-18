import { fetchWeatherApi } from 'openmeteo';


export async function requestCurrentWeather(){
    const params = {
        "latitude": 55.7522,
        "longitude": 37.6156,
        "current": ["temperature_2m", "relative_humidity_2m", "surface_pressure"],
        "timezone": "Europe/Moscow"
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    // Helper function to form time ranges
    // const range = (start: number, stop: number, step: number) =>
    //     Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    // const timezone = response.timezone();
    // const timezoneAbbreviation = response.timezoneAbbreviation();
    // const latitude = response.latitude();
    // const longitude = response.longitude();

    const current = response.current()!;

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
        time: new Date((Number(current.time())) * 1000),
        temperature2m: parseFloat(current.variables(0)!.value().toFixed(1)),
        relativeHumidity2m: parseFloat(current.variables(1)!.value().toFixed(1)),
        surfacePressure: parseFloat(current.variables(2)!.value().toFixed(1)),
    };
    console.log(weatherData);
    return weatherData;
};

// `weatherData` now contains a simple structure with arrays for datetime and weather data