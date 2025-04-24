import { useState } from "react";

export const ChooseSizeSelector = ({ availableSizes, onSizeSelected }) => {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeChange = (e) => {
        const newSize = e.target.value;
        setSelectedSize(newSize);
        // Передаем выбранный размер в родительский компонент
        if (onSizeSelected) {
            onSizeSelected(newSize);
        }
    };

    return (
        <div className="choice-box__box">
            {availableSizes.map((size) => (
                <label
                    key={size}
                    htmlFor={`size-${size.toLowerCase()}`}
                    className="choice-box__box_item"
                >
                    <input
                        id={`size-${size.toLowerCase()}`}
                        type="checkbox"
                        name="size"
                        value={size}
                        checked={selectedSize === size}
                        onChange={handleSizeChange}
                    />
                    {size}
                </label>
            ))}
        </div>
    );
};
