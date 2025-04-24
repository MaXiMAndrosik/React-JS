import { Link } from "react-router-dom";

export const CatalogPagination = () => {
    return (
        <section className="catalog-pages">
            <h2 style={{ display: "none" }}>Catalog pages</h2>
            <div className="catalog-pages__box">
                <Link className="catalog-pages__arrow" href="#">
                    <svg
                        width="8.000000"
                        height="14.000000"
                        viewBox="0 0 8 14"
                        fill="none"
                    >
                        <defs />
                        <path
                            d="M8 2L3 7L8 12L7 14L0 7L7 0L8 2Z"
                            fill="#000000"
                            fillOpacity="1.000000"
                            fillRule="nonzero"
                        />
                    </svg>
                </Link>
                <Link href="#" className="catalog-pages__link">
                    1
                </Link>
                <Link href="#" className="catalog-pages__link">
                    2
                </Link>
                <Link href="#" className="catalog-pages__link">
                    3
                </Link>
                <Link href="#" className="catalog-pages__link">
                    4
                </Link>
                <Link href="#" className="catalog-pages__link">
                    5
                </Link>
                <Link href="#" className="catalog-pages__link">
                    6
                </Link>
                <p>.....</p>
                <Link href="#" className="catalog-pages__link">
                    20
                </Link>
                <Link className="catalog-pages__arrow" href="#">
                    <svg
                        width="8.000000"
                        height="14.000000"
                        viewBox="0 0 8 14"
                        fill="none"
                    >
                        <defs />
                        <path
                            d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z"
                            fill="#000000"
                            fillOpacity="1.000000"
                            fillRule="nonzero"
                        />
                    </svg>
                </Link>
            </div>
        </section>
    );
};
