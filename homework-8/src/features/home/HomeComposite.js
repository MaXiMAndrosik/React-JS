import MainContent from "./components/MainContent";
import ForSale from "./components/ForSale";
import BrowseAllProducts from "./components/BrowseAllProducts";
import Feature from "../../widgets/Feature/Feature";
import HomeTemplate from "./components/HomeTemplate";
import "./style/HomePage.scss";


export default function HomeComposite() {
    return (
        <>
            <MainContent />
            <ForSale />
            <HomeTemplate />
            <BrowseAllProducts />
            <Feature />
        </>
    );
}
