function RenderWeatherMessage(data) {
    return `📍 *Lokasi & Kondisi*
Kota                     : ㅤ${data.name}, ${data.sys.country}
Cuaca                  : ㅤ${data.weather[0].description}
Awan                   : ㅤ${data.clouds.all}%

🌡 *Informasi Suhu*
Suhu                    : ㅤ${data.main.temp}°C
Terasa                 : ㅤ${data.main.feels_like}°C
Suhu Min/Max   : ㅤ${data.main.temp_min}°C / ${data.main.temp_max}°C
Kelembapan       : ㅤ${data.main.humidity}%
Tekanan              : ㅤ${data.main.pressure} hPa

💨 *Informasi Angin*
Angin                   : ㅤ${data.wind.speed} m/s
Arah Angin         : ㅤ${data.wind.deg}°

🌅 *Matahari (Waktu Lokal)*
Terbit                  : ㅤ${new Date(data.sys.sunrise * 1000).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
Terbenam           : ㅤ${new Date(data.sys.sunset * 1000).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}`;
}

// Export function
module.exports = RenderWeatherMessage