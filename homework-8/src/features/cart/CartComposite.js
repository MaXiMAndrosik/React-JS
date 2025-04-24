import { useSelector } from "react-redux";
import { selectTotalItemsQuantity } from "./model/cartSlice";
import CartBox from "./components/CartBox";
import MainTop from "./components/MainTop";
import { EmptyCart } from "./components/EmptyCart";
import { ClearCartButton } from "./ui/ClearCartBtn";
import { ContinueShoppingButton } from "./ui/ContinueShoppingBtn";
import DeliveryAddress from "./components/DeliveryAddress";
import { TotalPrice } from "./components/TotalPrice";

import "./style/CartPage.scss";
import { ProceedToCheckout } from "./components/ProceedToCheckout";


export default function CartComposite() {
    const totalItems = useSelector(selectTotalItemsQuantity);

    // Если корзина пуста предлагаем перейти в каталог
    if (totalItems === 0) {
        return <EmptyCart />;
    }

    return (
        <>
            <MainTop />
            <section className="cart-products conteiner">
                <div className="cart-products__leftPart">
                    <CartBox />
                    <div className="cart-products__buttons">
                        <ClearCartButton />
                        <ContinueShoppingButton />
                    </div>
                </div>

                <div className="cart-products__rightPart">
                    <DeliveryAddress />

                    <div className="shipping-total">
                        <TotalPrice />
                        <ProceedToCheckout />

                    </div>
                </div>
            </section>
        </>
    );
}
