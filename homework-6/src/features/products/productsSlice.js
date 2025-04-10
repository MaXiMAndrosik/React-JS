import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    items: [
        {
            id: uuidv4(),
            name: "iPhone 13",
            description: "Смартфон от Apple",
            price: 79990,
            available: true,
        },
        {
            id: uuidv4(),
            name: "Samsung Galaxy S21",
            description: "Флагман от Samsung",
            price: 69990,
            available: true,
        },
    ],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.items.push({
                id: uuidv4(),
                ...action.payload,
            });
        },
        deleteProduct: (state, action) => {
            state.items = state.items.filter(
                (product) => product.id !== action.payload
            );
        },
        updateProduct: (state, action) => {
            const index = state.items.findIndex(
                (product) => product.id === action.payload.id
            );
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        toggleAvailability: (state, action) => {
            const product = state.items.find(
                (product) => product.id === action.payload
            );
            if (product) {
                product.available = !product.available;
            }
        },
    },
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailability } =
    productsSlice.actions;
export default productsSlice.reducer;
