import BurgerMenu from "../../layouts/BurgerMenu";
import Hero from "../../../shared/assets/images/Hero.webp";

export default function MainContent() {
    return (
        <>
            <section className="main-content-top">
                <div className="main-content-top__hide">
                    <img src={Hero} alt="hero" />
                </div>
                <div className="main-content-top__title">
                    <h2>THE BRAND</h2>
                    <h3>
                        OF LUXERIOUS <span className="red_title">FASHION</span>
                    </h3>
                </div>
                <BurgerMenu />
            </section>
        </>
    );
}
