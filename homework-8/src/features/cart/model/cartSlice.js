import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const loadFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        const saved = localStorage.getItem("cartState");
        return saved ? JSON.parse(saved) : undefined;
    }
    return undefined;
};

const initialState = loadFromLocalStorage() || {
    items: [],
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                toast.error("The product has already been added to the cart", {
                    position: "top-right",
                    autoClose: 1000,
                });
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
                toast.success(
                    "The product has been successfully added to your cart",
                    {
                        position: "top-right",
                        autoClose: 1000,
                    }
                );
                state.totalPrice = calculateTotal(state.items);
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
            state.totalPrice = calculateTotal(state.items);
        },
        updateQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.quantity = action.payload.quantity;
                state.totalPrice = calculateTotal(state.items);
            }
        },
        changeSize: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.size = action.payload.newSize;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

// Вспомогательная функция для расчета общей суммы
const calculateTotal = (items) => {
    return items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
};

// Селектор для получения всех товаров
export const selectCartItems = (state) => state.cart.items;

// Селектор для количества товаров в корзине (размер массива)
export const selectTotalItemsQuantity = (state) =>
    state.cart?.items?.length || 0;

// // Селектор для общего количества всех единиц товаров
export const selectTotalPrice = (state) =>
    state.cart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

export const { addItem, removeItem, updateQuantity, changeSize, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;
