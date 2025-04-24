import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/model/cartSlice";

const AddToCartButton = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(
            addItem({
                id: product.id,
                name: product.title,
                price: product.price,
                color: product.color,
                size: null,
                availableSizes: product.availableSizes,
                image: product.image,
                count: product.count,
            })
        );
    };

    return (
        <button
            onClick={handleAddToCart}
            className="product-card__btn addToCart"
        >
            <img src="/images/basket.svg" alt="cart" />
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
