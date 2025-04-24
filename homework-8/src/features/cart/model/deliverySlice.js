import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    country: '',
    state: '',
    postcode: '',
};

const deliverySlice = createSlice({
    name: "delivery",
    initialState,
    reducers: {
        setCountry: (state, action) => {
            state.country = action.payload;
        },
        setState: (state, action) => {
            state.state = action.payload;
        },
        setPostcode: (state, action) => {
            state.postcode = action.payload;
        },
        resetDelivery: () => initialState,
    },
});

export const { setCountry, setState, setPostcode, resetDelivery } =
    deliverySlice.actions;

export const selectDelivery = (state) => state.delivery;

// Селектор для проверки заполненности всех полей
export const selectIsDeliveryValid = (state) => {
    const { country, state: stateValue, postcode } = state.delivery;
    return (
        country.trim() !== "" &&
        stateValue.trim() !== "" &&
        postcode.trim() !== ""
    );
};

export default deliverySlice.reducer;
