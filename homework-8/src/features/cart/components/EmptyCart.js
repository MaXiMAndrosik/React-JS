import { Link } from "react-router-dom";

export const EmptyCart = () => {
    return (
        <section
            style={{ display: "block" }}
            className="cart-products conteiner"
        >
            <div className="cart-products__basket_empty">
                <h3 className="cart-products__basket_empty__title">
                    The basket is currently empty
                </h3>
                <p className="cart-products__basket_empty__text">
                    Browse the catalog to select products or&nbsp;find what you
                    need in the search
                </p>
                <Link
                    to="/catalog"
                    className="cart-products__basket_empty__btn"
                >
                    GO TO CATALOG
                </Link>
            </div>
        </section>
    );
};
