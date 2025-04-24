import { useDispatch } from "react-redux";
import { clearCart } from "../model/cartSlice";

export const ClearCartButton = () => {
    const dispatch = useDispatch();

    const clearShoppingCart = (e) => {
        dispatch(clearCart());
        window.location.href = "/";
    };

    return (
        <button
            className="cart-products__buttons_btn clear_cart"
            onClick={clearShoppingCart}
        >
            CLEAR SHOPPING CART
        </button>
    );
};
