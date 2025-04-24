import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BurgerMenu from "../../features/layouts/BurgerMenu";
import "./MainTop.scss";

export default function MainTop() {
    const { state } = useLocation();
    const [product, setProduct] = useState(state?.product);

    return (
        <>
            <section className="main-top conteiner">
                <h2 className="main-top__header">NEW ARRIVALS </h2>
                <div className="main-top__menu">
                    <Link to="/" className="main-top__link">
                        HOME
                    </Link>
                    <Link to="#" className="main-top__link">
                        {product ? product.category : "MEN"}
                    </Link>
                    <Link to="#" className="main-top__link">
                        NEW ARRIVALS
                    </Link>
                </div>
                <BurgerMenu />
            </section>
        </>
    );
}
