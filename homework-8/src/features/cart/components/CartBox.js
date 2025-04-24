import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../model/cartSlice";
import CartItem from "./CartItem";

const CartBox = () => {
    const cartItems = useSelector(selectCartItems);

    return (
        <div className="cart-products__productCards">
            {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CartBox;
