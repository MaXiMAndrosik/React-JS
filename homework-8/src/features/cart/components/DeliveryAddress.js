import { useSelector, useDispatch } from "react-redux";
import {
    setCountry,
    setState,
    setPostcode,
    selectDelivery,
} from "../model/deliverySlice";
import { toast } from "react-toastify";

const DeliveryAddress = () => {
    const dispatch = useDispatch();
    const delivery = useSelector(selectDelivery);

    const handleClick = (e) => {
        e.preventDefault();
        toast.info("Not supported in test application 😜", {
            position: "top-right",
            autoClose: 1000,
        });
    };

    return (
        <div className="shipping-address">
            <h3 className="shipping-address__title">SHIPPING address</h3>
            <div className="shipping-address__content">
                <input
                    type="text"
                    className="shipping-address__input"
                    placeholder="Bangladesh"
                    value={delivery.country}
                    onChange={(e) => dispatch(setCountry(e.target.value))}
                />
                <input
                    type="text"
                    className="shipping-address__input"
                    placeholder="State"
                    value={delivery.state}
                    onChange={(e) => dispatch(setState(e.target.value))}
                />
                <input
                    type="text"
                    className="shipping-address__input"
                    placeholder="Postcode / Zip"
                    value={delivery.postcode}
                    onChange={(e) => dispatch(setPostcode(e.target.value))}
                />
                <button className="shipping-address__btn" onClick={handleClick}>
                    GET A QUOTE
                </button>
            </div>
        </div>
    );
};

export default DeliveryAddress;
