import './App.css';
import PublicGists from "./components/PublicGistsEx2";
import GistListEx2 from "./components/GistListsEx2";
import GistsList from "./components/GistLists";
import WeatherComponent from "./components/WeatherComponent";
import {useEffect, useState} from "react";
import axios from "axios";
import ImageList from "./components/ImageList";

function App() {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');

    const onInputChange = (e) => {
        setQuery(e.target.value);
        console.log(query);
    }

    const searchImages = async () => {
        const url = query
            ? `https://api.unsplash.com/search/photos/?client_id=pfPbQ9pw7sT9S8YwqR7mvMDWToiL41KWqMqAvzcDC6w&&query=${query}`
            : 'https://api.unsplash.com/photos/random/?client_id=pfPbQ9pw7sT9S8YwqR7mvMDWToiL41KWqMqAvzcDC6w&&count=10';

        try {
            const response = await axios.get(url, {
                // headers: {
                //     Authorization: `pfPbQ9pw7sT9S8YwqR7mvMDWToiL41KWqMqAvzcDC6w`
                // }
            });

            const imagesData = query ? response.data.results : response.data;
            setImages(imagesData);
        } catch (error) {
            console.error('Ошибка при выполнении запроса ', error)
        }
    }

    useEffect(() => {
        searchImages();
    }, []);

    return (
        <div className="App">
            Шапка приложения с заголовком
            <header>
                <h1>Список Gists с Github</h1>
            </header>
            <h2>Основная часть приложения, где будет отображаться список gits</h2>
            <main className="main">
                {/* <GistListEx2 /> */}
                {/* <PublicGists /> */}
                <GistsList/>
                {/* <WeatherComponent/> */}
            </main>
            {/* <section>
                <div style={{textAlign: "center", padding: "10px"}}>
                    <h2 style={{fontSize: '2rem', }}>Unsplash Gallary</h2>
                    <input type={'text'} value={query} onChange={onInputChange} placeholder={'Search...'} />
                    <button onClick={searchImages}>Search</button>
                    <ImageList images={images} />
                </div>
            </section> */}
        </div>
    );
}

export default App;
