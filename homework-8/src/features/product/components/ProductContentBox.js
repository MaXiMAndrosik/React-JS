
export const ProductContentBox = ({ product }) => {
    // Форматирование цены товара
    const currentPrice = new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
    }).format(product.price);

    return (
        <div className="product-content__box">
            <h2 className="product-content__box__chapter">
                {product.category} COLLECTION
            </h2>
            <div className="product-content__box__line"></div>
            <h3 className="product-content__box__name">{product.title}</h3>
            <p className="product-content__box__text">
                {product.bigDescription}
            </p>
            <h4 className="product-content__box__price">{currentPrice}</h4>
        </div>
    );
};
