import React, {useEffect, useState} from 'react';

export const API_URL_JOKES = 'https://api.chucknorris.io/jokes/random';

const RandomJoke = () => {
    const [joke, setJoke] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const requestJoke = async () => {
        try {
            setLoading(true);
            const response = await fetch(API_URL_JOKES);

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const result = await response.json();
            setJoke(result);
        } catch (error) {
            setError(true);
            console.warn(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        requestJoke();
    }, []);

    return (
        <div>
            {/*{joke.length === 0 && <p>No jokes available</p>}*/}
            <h3>Jokes about Chuck Norris</h3>
            <ul>
                {error ? <p>{error}</p> : null}
                {!joke ? <button onClick={requestJoke}>Попробовать еще раз</button> : <p>{joke.value}</p>}
            </ul>
            <button onClick={requestJoke} disabled={loading}>More jokes...</button>
        </div>
    );
};

export default RandomJoke;
