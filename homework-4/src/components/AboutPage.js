import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <div>
            <h1>About Page</h1>
            <nav>
                <Link to="/">Главная</Link>
            </nav>
        </div>
    );
}

export default AboutPage;
