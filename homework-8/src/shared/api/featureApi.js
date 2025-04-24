export const fetchFeaturedProducts = async (limit) => {
    const url = "/api/featuredData.json";

    try {
        // Искусственная задержка сети
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Имитация 10% вероятности ошибки сети
        if (Math.random() < 0.1) {
            throw new Error("Соединение прервано");
        }

        const response = await fetch(url);

        // Дополнительная проверка для имитации медленного API
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (!response.ok) {
            const error = await response.text();
            throw new Error(error || "Неизвестная ошибка сервера");
        }

        // Проверка Content-Type
        const contentType = response.headers.get("content-type");
        if (!contentType?.includes("application/json")) {
            throw new Error("Неверный формат ответа (ожидался JSON)");
        }

        // Имитация обработки на клиенте
        await new Promise((resolve) => setTimeout(resolve, 300));

        const featuredProducts = await response.json();
        return limit ? featuredProducts.slice(0, limit) : featuredProducts;
    } catch (error) {
        console.error("Error fetching products:", error); // Логирование полной ошибки в консоль
        throw error;
    }
};
