import { Link } from "react-router-dom";

export default function BrowseAllProducts() {
    return (
        <>
            <section className="browse-all">
                <h2 style={{ display: "none" }}>Catalog</h2>
                <Link to="/catalog">
                    <button className="browse-all_btn">
                        Browse All Product
                    </button>
                </Link>
            </section>
        </>
    );
}