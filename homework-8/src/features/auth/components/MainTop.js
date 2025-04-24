import BurgerMenu from "../../layouts/BurgerMenu";
import "../style/MainTop.scss";

export default function MainTop() {
    return (
        <>
            <section className="main-top conteiner">
                <h2 className="main-top__header">REGISTRATION</h2>
                <BurgerMenu />
            </section>
        </>
    );
}
