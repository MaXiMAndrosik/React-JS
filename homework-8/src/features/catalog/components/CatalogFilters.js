import { useState, useEffect } from "react";
import { DetailsArrow } from "../../../shared/ui/DetailsArrowSVG";
import { ChooseSizeSelector } from "../../../shared/ui/ChooseSizeSelector";

export const CatalogFilters = ({ onFilterChange }) => {
    const [selectedSize, setSelectedSize] = useState([]);

    // При изменении фильтров вызываем колбэк
    useEffect(() => {
        onFilterChange({ sizes: selectedSize });
    }, [selectedSize, onFilterChange]);

    return (
        <section className="catalog-nav conteiner">
            <h2 style={{ display: "none" }}>Catalog navigation</h2>
            <div className="catalog-nav__conteiner">
                <div className="catalog-nav__filter">
                    <details className="filter-box">
                        <summary className="filter-box__summary">
                            <span className="filter-box__header">FILTER</span>
                            <svg
                                width="15.000000"
                                height="10.000000"
                                viewBox="0 0 15 10"
                                fill="none"
                            >
                                <defs />
                                <path
                                    d="M0.83 10L4.16 10C4.62 10 5 9.62 5 9.16C5 8.7 4.62 8.33 4.16 8.33L0.83 8.33C0.37 8.33 0 8.7 0 9.16C0 9.62 0.37 10 0.83 10ZM0 0.83C0 1.29 0.37 1.66 0.83 1.66L14.16 1.66C14.62 1.66 15 1.29 15 0.83C15 0.37 14.62 0 14.16 0L0.83 0C0.37 0 0 0.37 0 0.83ZM0.83 5.83L9.16 5.83C9.62 5.83 10 5.45 10 5C10 4.54 9.62 4.16 9.16 4.16L0.83 4.16C0.37 4.16 0 4.54 0 5C0 5.45 0.37 5.83 0.83 5.83Z"
                                    fill="#6F6E6E"
                                    fillOpacity="1.000000"
                                    fillRule="nonzero"
                                />
                            </svg>
                        </summary>

                        <div className="filter-box__box">
                            <details className="filter-box__details">
                                <summary className="filter-box__item summary_autoclose">
                                    CATEGORY
                                </summary>
                                <ul className="filter-box__list">
                                    <li>Accessories</li>
                                    <li>Bags</li>
                                    <li>Denim</li>
                                    <li>Hoodies & Sweatshirts</li>
                                    <li>Jackets & Coats</li>
                                    <li>Polos</li>
                                    <li>Shirts</li>
                                    <li>Shoes</li>
                                    <li>Sweaters & Knits</li>
                                    <li>T-Shirts</li>
                                    <li>Tanks</li>
                                </ul>
                            </details>
                            <details className="filter-box__details">
                                <summary className="filter-box__item summary_autoclose">
                                    BRAND
                                </summary>
                                <ul className="filter-box__list">
                                    <li>Accessories</li>
                                    <li>Bags</li>
                                    <li>Denim</li>
                                    <li>Hoodies & Sweatshirts</li>
                                    <li>Jackets & Coats</li>
                                    <li>Polos</li>
                                    <li>Shirts</li>
                                    <li>Shoes</li>
                                    <li>Sweaters & Knits</li>
                                    <li>T-Shirts</li>
                                    <li>Tanks</li>
                                </ul>
                            </details>
                            <details className="filter-box__details">
                                <summary className="filter-box__item summary_autoclose">
                                    DESIGNER
                                </summary>
                                <ul className="filter-box__list">
                                    <li>Accessories</li>
                                    <li>Bags</li>
                                    <li>Denim</li>
                                    <li>Hoodies & Sweatshirts</li>
                                    <li>Jackets & Coats</li>
                                    <li>Polos</li>
                                    <li>Shirts</li>
                                    <li>Shoes</li>
                                    <li>Sweaters & Knits</li>
                                    <li>T-Shirts</li>
                                    <li>Tanks</li>
                                </ul>
                            </details>
                        </div>
                    </details>
                </div>

                <div className="catalog-nav__choice">
                    <details className="choice-box">
                        <summary className="choice-box__item summary_autoclose">
                            TRENDING NOW
                            <DetailsArrow />
                        </summary>
                    </details>
                    <details className="choice-box">
                        <summary className="choice-box__item summary_autoclose">
                            SIZE
                            <DetailsArrow />
                        </summary>
                        <ChooseSizeSelector
                            availableSizes={["XS", "S", "M", "L"]}
                            onSizeSelected={setSelectedSize}
                        />
                    </details>
                    <details className="choice-box">
                        <summary className="choice-box__item summary_autoclose">
                            PRICE
                            <DetailsArrow />
                        </summary>
                    </details>
                </div>
            </div>
        </section>
    );
};
