import React, {useEffect, useState} from 'react';
import axios from "axios";

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(null);
    const [currency, setCurrency] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    }

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    }

    const getConvertedCurrency = () => {
        if (!currency) return;

        const apiUrl = `https://v6.exchangerate-api.com/v6/8c9e2508745fcc7a3352a22a/latest/${currency}`;

        axios.get(apiUrl)
            .then(response => {
                const fetchData = response.data;
                const value = (amount / fetchData.conversion_rates.RUB).toFixed(2);
                setResult(value);
                setError(null);
            })
            .catch(error => {
                setError('Произошла какая-то дичь..');
                setResult(null);
            });
    }

    useEffect(() => {
        getConvertedCurrency();
    }, []);

    return (
        <div className="currency-container">
            <input type="text" onChange={handleAmountChange} value={amount} placeholder={'Количество рублей:'} />
            <input type="text" onChange={handleCurrencyChange} value={currency} placeholder={'Код валюты для конвертации:'} />
            <button onClick={getConvertedCurrency}>Конвертировать</button>
            {amount && <p>{amount} RUB = {result} {currency}</p>}
        </div>
    );
};

export default CurrencyConverter;
