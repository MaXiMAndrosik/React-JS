import ForWomen from "../../../shared/assets/images/for_women.jpeg";
import ForMan from "../../../shared/assets/images/for_man.jpeg";
import ForKids from "../../../shared/assets/images/for_kids.jpeg";
import Accesories from "../../../shared/assets/images/accesories.jpeg";

export default function ForSale() {
    return (
        <>
            <section className="for-sale conteiner">
                <div className="for-sale__card">
                    <img src={ForWomen} alt="for women" />
                    <div className="for-sale__backGround">
                        <h4>30% OFF</h4>
                        <h3>FOR WOMEN</h3>
                    </div>
                </div>
                <div className="for-sale__card">
                    <img src={ForMan} alt="for man" />
                    <div className="for-sale__backGround">
                        <h4>HOT DEAL</h4>
                        <h3>FOR MEN</h3>
                    </div>
                </div>
                <div className="for-sale__card">
                    <img src={ForKids} alt="for kids" />
                    <div className="for-sale__backGround">
                        <h4>NEW ARRIVALS</h4>
                        <h3>FOR KIDS</h3>
                    </div>
                </div>
                <div className="for-sale__card_accesories">
                    <img src={Accesories} alt="accesories" />
                    <div className="for-sale__backGround">
                        <h4>LUXIROUS & TRENDY</h4>
                        <h3>ACCESORIES</h3>
                    </div>
                </div>
            </section>
        </>
    );
}
