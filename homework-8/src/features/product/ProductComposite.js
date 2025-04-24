import ProductTemplate from "./components/ProductTemplate";
import MainTop from "../../widgets/Main/MainTop";
import FeatureProducts from "./components/FeatureProducts";
import "./style/ProductPage.scss";

export default function ProductComposite() {
    return (
        <>
            <MainTop />
            <ProductTemplate />
            <FeatureProducts />
        </>
    );
}
