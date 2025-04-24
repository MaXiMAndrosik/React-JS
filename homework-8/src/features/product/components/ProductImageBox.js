import { toast } from "react-toastify";
import { LeftArrowSVG, RightArrowSVG } from "../ui/ArrowsSVG";

export const ProductImageBox = ({ product }) => {
    // Меняем путь (ссылку) к изображению товара на более крупный
    const originalImagePath = product.image;
    const modifiedPath = originalImagePath.replace(/\.(\w+)$/, "(1).$1");

    // Сорри но изображений товара больше нет
    const handleArrowClick = (e) => {
        toast.info("Sorry, there are no more product images in the test app", {
            position: "top-right",
            autoClose: 1500,
        });
    };

    return (
        <div className="product-box">
            <button onClick={handleArrowClick} className="product-box__btn">
                <LeftArrowSVG />
            </button>
            <img
                className="product-box__image"
                src={modifiedPath}
                alt="product"
            />
            <button onClick={handleArrowClick} className="product-box__btn">
                <RightArrowSVG />
            </button>
        </div>
    );
};
