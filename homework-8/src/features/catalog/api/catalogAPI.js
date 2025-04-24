export const fetchProducts = async () => {
    const url = "/api/catalogData.json";

    try {
        // Искусственная задержка сети
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Загружаем весь JSON файл
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Не удалось загрузить данные");
        }

        const products = await response.json();

        // Дополнительная проверка для имитации медленного API
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Проверка Content-Type
        const contentType = response.headers.get("content-type");
        if (!contentType?.includes("application/json")) {
            throw new Error("Неверный формат ответа (ожидался JSON)");
        }

        // Имитация обработки на клиенте
        await new Promise((resolve) => setTimeout(resolve, 300));

        return products;
    } catch (error) {
        console.error("Ошибка при загрузке продукта:", error);
        throw error;
    }
};
