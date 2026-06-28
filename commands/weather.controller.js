// Import
const mapsView = require("../utils/weather/weatherMap");
const RenderWeatherMessage = require("../message/weather.view")

async function getWeather(telegramClient, callback, match) {
    const chatId = callback.chat.id;
    const cityName = match[1];

    // ENV Required
    const WEATHER_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPENWEATHER_KEY}&units=metric&lang=id`;

    try {
        const response = await fetch(WEATHER_ENDPOINT);

        if (!response.ok) {
            return telegramClient.sendMessage(chatId, "❌ Kota tidak ditemukan.");
        }

        const weatherData = await response.json();

        const pesanWeather = RenderWeatherMessage(weatherData)

        await telegramClient.sendPhoto(
            chatId,
            mapsView(weatherData.coord.lon, weatherData.coord.lat),
            {
                caption: pesanWeather,
                parse_mode: 'Markdown'
            }
        );

    } catch (error) {
        console.error("Weather Error:", error);
        telegramClient.sendMessage(chatId, "⚠️ Terjadi kesalahan saat mengambil data cuaca.");
    }
}

// Export function
module.exports = { getWeather };