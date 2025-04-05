import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

// Задание 1: Температурный конвертер с Material UI

// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.

const TemperatureConverter = () => {
    const [celsiusValue, setCelsiusValue] = useState("");
    const [fahrenheitValue, setFahrenheitValue] = useState("");

    let value = 0;

    const handleCelsiusChange = (event) => {
        setCelsiusValue(event.target.value);
        value = (event.target.value * 9) / 5 + 32;
        setFahrenheitValue(value.toFixed(1));
    };

    const handleFahrenheitChange = (event) => {
        setFahrenheitValue(event.target.value);
        value = ((event.target.value - 32) * 5) / 9;
        setCelsiusValue(value.toFixed(1));
    };

    return (
        <div>
            <Grid
                container
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    width: "100%"
                }}
            >
                <TextField
                    label="Celsius"
                    type="number"
                    value={celsiusValue}
                    onChange={handleCelsiusChange}
                />
                <TextField
                    label="Fahrenheit"
                    type="number"
                    value={fahrenheitValue}
                    onChange={handleFahrenheitChange}
                />
            </Grid>
        </div>
    );
};

export default TemperatureConverter;
