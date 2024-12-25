document.getElementById("getWeatherBtn").addEventListener("click", async function () {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const apiKey = 'ded852add39552c66667a956aa3135da'; // Replace with your actual API key
    const url = `https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.current) {
            alert("City not found or API error.");
            return;
        }

        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Error fetching weather data.");
    }
});

function displayWeather(data) {
    const weatherDisplay = document.getElementById("weatherDisplay");
    weatherDisplay.innerHTML = `
        <h2><i class="fas fa-map-marker-alt"></i> ${data.location.name}, ${data.location.country}</h2>
        <p><strong>Temperature:</strong> ${data.current.temperature}°C</p>
        <p><strong>Condition:</strong> ${data.current.weather_descriptions[0]}</p>
        <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.current.wind_speed} km/h</p>
    `;
}
