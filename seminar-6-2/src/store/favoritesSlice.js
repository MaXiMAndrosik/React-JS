import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    items: [],
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (!existingItem) {
                state.items.push(action.payload);
                toast.success(`${action.payload.name} добавлен в избранное!`, {
                    position: "top-right",
                    autoClose: 2000,
                });
            } else {
                toast.info(`${action.payload.name} уже в избранном`, {
                    position: "top-right",
                    autoClose: 2000,
                });
            }
        },
        removeFromFavorites: (state, action) => {
            const removedItem = state.items.find(
                (item) => item.id === action.payload
            );
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
            if (removedItem) {
                toast.error(`${removedItem.name} удален из избранного`, {
                    position: "top-right",
                    autoClose: 2000,
                });
            }
        },
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
