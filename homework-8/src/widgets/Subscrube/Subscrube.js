import subscribeLayer from "../../shared/assets/images/subscribeLayer.webp";
import subscribefoto from "../../shared/assets/images/subscribefoto.png";
import { toast } from "react-toastify";
import "./Subscrube.scss";

const Subscrube = () => {
    const handleClick = (e) => {
        e.preventDefault();
        toast.info("Not supported in test application 😜", {
            position: "top-right",
            autoClose: 1000,
        });
    };

    return (
        <section className="subscrube">
            <h2 style={{ display: "none" }}>Subscrube</h2>
            <img src={subscribeLayer} alt="Layer" />
            <div className="subscribe_layer">
                <div className="subscribe-content conteiner">
                    <div className="subscribe-content__left">
                        <img src={subscribefoto} alt="foto" />
                        <p>
                            “Vestibulum quis porttitor dui! Quisque viverra nunc
                            mi, a pulvinar purus condimentum“
                        </p>
                    </div>

                    <div className="subscribe-content__right">
                        <h3>SUBSCRIBE</h3>
                        <h4>FOR OUR NEWLETTER AND PROMOTION</h4>
                        <form className="subscribe-form">
                            <input
                                type="email"
                                className="subscribe-form_input"
                                placeholder="Enter Your Email"
                                required=""
                            />
                            <button
                                className="subscribe-form_btn"
                                onClick={handleClick}
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscrube;
