import { createSlice } from "@reduxjs/toolkit";

export const catalogSlice = createSlice({
    name: "catalog",
    initialState: {
        array: [
            {
                id: 0,
                name: "Product 1",
                description: "This is Product 1",
                price: 100,
                isAvailable: true,
            },
            {
                id: 1,
                name: "Product 2",
                description: "This is Product 2",
                price: 200,
                isAvailable: true,
            },
            {
                id: 3,
                name: "Product 3",
                description: "This is Product 3",
                price: 300,
                isAvailable: true,
            },
            {
                id: 2,
                name: "Product 4",
                description: "This is Product 4",
                price: 500,
                isAvailable: true,
            },
        ],
    },
    reducers: {
        addNewProduct: (state, { payload: newProduct }) => {
            if (state.array.includes(newProduct.id)) {
                return;
            }
            console.log(newProduct);
            state.array.push(newProduct);
        },
        removeProduct: (state, { payload: product }) => {
            state.array = state.array.filter(
                (element) => element.id !== product.id
            );
        },
        editProduct: (state, { payload: product }) => {
            if (!state.array.some((element) => element.id === product.id)) {
                return;
            }
            state.array = state.array.filter(
                (element) => element.id !== product.id
            );
            state.array.push(product);
        },
        changeAvailable: (state, { payload: product }) => {
            if (!state.array.some((element) => element.id === product.id)) {
                return;
            }
            state.array = state.array.filter(
                (element) => element.id !== product.id
            );
            state.array.push(product);
        },
    },
});

export const { addNewProduct, removeProduct, editProduct, changeAvailable } =
    catalogSlice.actions;
export default catalogSlice.reducer;
