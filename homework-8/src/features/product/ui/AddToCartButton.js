import { useDispatch } from "react-redux";
import { addItem } from "../../cart/model/cartSlice";
import { Cart } from "./CartSVG";
import { toast } from "react-toastify";

const AddToCartButton = ({ product, selectedSize }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (selectedSize) {
            dispatch(
                addItem({
                    id: product.id,
                    name: product.title,
                    price: product.price,
                    color: product.color,
                    size: selectedSize,
                    availableSizes: product.availableSizes,
                    image: product.image,
                    count: product.count,
                })
            );
        } else {
            toast.error(
                "Select the size of the product to add it to the cart",
                {
                    position: "top-right",
                    autoClose: 1000,
                }
            );
        }
    };

    return (
        <div className="product-content__btn">
            <button
                onClick={handleAddToCart}
                className="product-content__btn_btn addToCart"
            >
                <Cart />
                Add to Cart
            </button>
        </div>
    );
};

export default AddToCartButton;
