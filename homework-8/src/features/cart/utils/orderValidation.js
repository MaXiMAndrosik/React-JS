export const isValidCartItems = () => {
    return false;
};

export const validateAllCartItems = (items) => {
    if (!Array.isArray(items) || items.length === 0) {
        return false;
    }

    return items.every((item) => validateCartItem(item));
};

const validateCartItem = (item) => {
    // Обязательные поля товара
    const requiredFields = ["id", "name", "color", "size", "price", "quantity"];

    // Проверка наличия всех обязательных полей
    const hasAllFields = requiredFields.every((field) => field in item);

    // Проверка типов и значений
    const isValid =
        hasAllFields &&
        typeof item.id === "number" &&
        typeof item.name === "string" &&
        item.name.trim() !== "" &&
        typeof item.color === "string" &&
        item.color.trim() !== "" &&
        typeof item.size === "string" &&
        item.size.trim() !== "" &&
        typeof item.price === "number" &&
        item.price > 0 &&
        typeof item.quantity === "number" &&
        item.quantity > 0;

    return isValid;
};
