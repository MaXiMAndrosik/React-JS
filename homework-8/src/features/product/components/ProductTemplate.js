import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchProductById } from "../api/productById";
import { ProductImageBox } from "./ProductImageBox";
import { ProductContentBox } from "./ProductContentBox";
import AddToCartButton from "../ui/AddToCartButton";
import { DetailsArrow } from "../../../shared/ui/DetailsArrowSVG";
import { ChooseSizeSelector } from "../../../shared/ui/ChooseSizeSelector";

function ProductTemplate() {
    const { id } = useParams(); // Получаем ID из URL
    const { state } = useLocation();
    const [product, setProduct] = useState(state?.product);

    // Получаем выбранный пользователем размер 
    const [selectedSize, setSelectedSize] = useState(null);

    // устраняет проблемы с роутингом
    if (product && (product.id !== Number(id))) {
        window.location.href = `/product/${id}`;
    }

    // Резервная загрузка
    useEffect(() => {
        if (!product && id) {
            fetchProductById(id).then(setProduct);
        }
    }, [product, id]);

    if (!product) return <div>Loading...</div>;

    return (
        <>
            <section className="product">
                <h2 style={{ display: "none" }}>Product image</h2>
                <ProductImageBox product={product} />

                <div className="product-content conteiner">
                    <ProductContentBox product={product} />

                    <div className="product-content__choice">
                        <details className="choice-box">
                            <summary className="choice-box__item summary_autoclose">
                                CHOOSE COLOR
                                <DetailsArrow />
                            </summary>
                        </details>

                        <details className="choice-box">
                            <summary className="choice-box__item summary_autoclose">
                                CHOOSE SIZE
                                <DetailsArrow />
                            </summary>
                            <ChooseSizeSelector
                                availableSizes={product?.availableSizes || null}
                                onSizeSelected={setSelectedSize}
                            />
                        </details>

                        <details className="choice-box">
                            <summary className="choice-box__item summary_autoclose">
                                QUANTITY
                                <DetailsArrow />
                            </summary>
                        </details>
                    </div>
                    <AddToCartButton
                        product={product}
                        selectedSize={selectedSize}
                    />
                </div>
            </section>
        </>
    );
}

export default ProductTemplate;
