export const ContinueShoppingButton = () => {
    const continueShopping = (e) => {
        window.location.href = "/catalog";
    };

    return (
        <button
            className="cart-products__buttons_btn"
            onClick={continueShopping}
        >
            CONTINUE SHOPPING
        </button>
    );
};
