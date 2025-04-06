import React from 'react';
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <nav>
                <Link to="/about">О нас</Link>
            </nav>
        </div>
    );
}

export default HomePage;