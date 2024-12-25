const API_KEY = "ded852add39552c66667a956aa3135da"; // Your actual WeatherStack API key
const BASE_URL = "https://api.weatherstack.com/current";

document.getElementById("getWeatherButton").addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    try {
        const response = await fetch(`${BASE_URL}?access_key=${API_KEY}&query=${city}`);
        const data = await response.json();

        if (data.error) {
            document.getElementById("weatherResult").innerHTML = `
                <p>Error: ${data.error.info}</p>
            `;
        } else {
            document.getElementById("weatherResult").innerHTML = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${data.current.temperature}°C</p>
                <p>Weather: ${data.current.weather_descriptions[0]}</p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Wind Speed: ${data.current.wind_speed} km/h</p>
            `;
        }
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = `
            <p>Unable to fetch weather data. Please try again later.</p>
        `;
    }
});
