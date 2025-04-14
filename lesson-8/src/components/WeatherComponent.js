import React, {useEffect, useState} from 'react';
import axios from "axios";

const WeatherComponent = () => {
    const defaultCity = 'Москва';
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(defaultCity);
    const [error, setError] = useState(null);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const getWeather = () => {
        if (!city) return;

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=551689e62080bf6398e7e8c05e48ddcc`;

        axios.get(apiUrl)
            .then(res => {
                setWeatherData(res.data);
                setError(null);
            })
            .catch(err => {
                setError('Город не найден');
                setWeatherData(null);
            });
    };

    useEffect(() => {
        getWeather();
    }, []);

    return (
        <div className="weather-container">
            <input
                type="text"
                placeholder={'Введите город'}
                value={city}
                onChange={handleCityChange}
            />
            <button onClick={getWeather}>Поиск</button>

            {error && <div className="error">{error}</div>}
            {weatherData && (
                <div className="weather-info">
                    <h3>{weatherData.name}</h3>
                    <p>Температура: {Math.round(weatherData.main.temp - 273.15)} C</p>
                    <p>Влажность: {weatherData.main.humidity} %</p>
                    <p>Давлеине: {weatherData.main.pressure} hPa</p>
                    <p>Скорость ветра: {weatherData.wind.speed} m/c</p>
                    <p>Описание: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherComponent;
