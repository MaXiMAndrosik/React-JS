import React, {Component} from 'react';
import axios from "axios";

class GistListEx2 extends Component {
    state = {
        gists: []
    };

    componentDidMount() {
        axios.get('https://api.github.com/gists')
            .then(response => {
                this.setState({gists: response.data});
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            })
    }

    render() {
        const {gists} = this.state;
        return (
            <div>
                <h1>Список Gists на GitHub</h1>
                <ul>
                    {gists.map((gist) => (
                        <li key={gist.id}>
                            <a href={gist.html_url} target={"_blank"} rel={"noopener noreferrer"}>
                                {gist.description || 'Без описания'}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default GistListEx2;