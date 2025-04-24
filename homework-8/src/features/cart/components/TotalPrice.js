import { useSelector } from "react-redux";
import { selectTotalPrice } from "../model/cartSlice";

export const TotalPrice = () => {
    const totalPrice = useSelector(selectTotalPrice);

    return (
        <div className="shipping-total__line">
            <p className="shipping-total__sub">
                SUB TOTAL
                <span className="shipping-total__sub_select">
                    {new Intl.NumberFormat("en", {
                        style: "currency",
                        currency: "USD",
                    }).format(totalPrice)}
                </span>
            </p>
            <p className="shipping-total__grand">
                GRAND TOTAL
                <span className="shipping-total__grand_select">
                    {new Intl.NumberFormat("en", {
                        style: "currency",
                        currency: "USD",
                    }).format(totalPrice)}
                </span>
            </p>
        </div>
    );
};
