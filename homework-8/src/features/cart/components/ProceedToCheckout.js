import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearCart } from "../model/cartSlice";
import { selectIsDeliveryValid } from "../model/deliverySlice";
import { validateAllCartItems } from "../utils/orderValidation";

export const ProceedToCheckout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Получаем данные из разных слайсов
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const delivery = useSelector((state) => state.delivery);
    const isDelivery = useSelector(selectIsDeliveryValid);
    const { items, totalPrice } = useSelector((state) => state.cart);

    // Обработчик отправки заказа
    const handleSubmitOrder = async (e) => {
        e.preventDefault();

        if (!isAuthenticated) {
            toast.error("To place an order, you must be registered!");
            navigate("/auth");
            return;
        }

        if (!isDelivery) {
            toast.error("Fill in the shipping address details!");
            return;
        }

        if (!validateAllCartItems(items)) {
            toast.error(
                "Not all data for the products is filled in. Perhaps you have not specified the sizes for the products.!"
            );
            return;
        }


        try {
            // Формируем объект заказа
            const orderData = {
                user: {
                    name: `${user.firstName} ${user.lastName}`,
                    email: user.email,
                },
                delivery,
                items: items,
                total: totalPrice,
                orderDate: new Date().toISOString(),
            };

            // Здесь будет запрос к API для отправки заказа
            // const response = await api.post('/orders', orderData);

            // Временная заглушка для демонстрации
            console.log("Order submitted:", orderData);

            // Очищаем корзину
            dispatch(clearCart());

            // Показываем уведомление об успехе
            toast.success(
                `Заказ для пользователя ${orderData.user.name} успешно оформлен!`
            );

            // Перенаправляем на главную страницу (но лучше на страницу подтверждения)
            navigate("/");
        } catch (error) {
            toast.error("Ошибка при оформлении заказа");
            console.error("Order submission error:", error);
        }
    };

    return (
        <button onClick={handleSubmitOrder} className="shipping-total__btn">
            PROCEED TO CHECKOUT
        </button>
    );
};
