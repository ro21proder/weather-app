document.getElementById("getWeatherBtn").addEventListener("click", async function() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const apiKey = 'ded852add39552c66667a956aa3135da';  // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === "404") {
            alert("City not found.");
            return;
        }
        displayWeather(data);
    } catch (error) {
        alert("Error fetching weather data.");
    }
});

function displayWeather(data) {
    const weatherDisplay = document.getElementById("weatherDisplay");
    weatherDisplay.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
}
