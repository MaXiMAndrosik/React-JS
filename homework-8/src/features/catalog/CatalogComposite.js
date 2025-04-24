import MainTop from "../../widgets/Main/MainTop";
import Feature from "../../widgets/Feature/Feature";
import CatalogTemplate from "./components/CatalogTemplate";
import "./style/CatalogPage.scss";
import { CatalogPagination } from "./components/CatalogPagination";

export default function CatalogComposite() {
    return (
        <>
            <MainTop />
            <CatalogTemplate />
            <CatalogPagination />
            <Feature />
        </>
    );
}
