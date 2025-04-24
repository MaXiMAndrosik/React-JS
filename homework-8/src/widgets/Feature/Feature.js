import featureCar from "../../shared/assets/images/feature_car.svg";
import featurePerscent from "../../shared/assets/images/feature_perscent.svg";
import featureCrown from "../../shared/assets/images/feature_crown.svg";
import "./Feature.scss"

const Feature = () => {
    return (
        <section className="feature conteiner">
            <h2 style={{ display: "none" }}>Feature</h2>
            <div className="feature__card">
                <img src={featureCar} alt="Free Delivery" />
                <div className="feature__text">
                    <h4>Free Delivery</h4>
                    <p>
                        Worldwide delivery on all. Authorit tively morph
                        next-generation innov tion with extensive models.
                    </p>
                </div>
            </div>
            <div className="feature__card">
                <img src={featurePerscent} alt="Sales & discounts" />
                <div className="feature__text">
                    <h4>Sales & discounts</h4>
                    <p>
                        Worldwide delivery on all. Authorit tively morph
                        next-generation innov tion with extensive models.
                    </p>
                </div>
            </div>
            <div className="feature__card">
                <img src={featureCrown} alt="Quality assurance" />
                <div className="feature__text">
                    <h4>Quality assurance</h4>
                    <p>
                        Worldwide delivery on all. Authorit tively morph
                        next-generation innov tion with extensive models.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Feature;
