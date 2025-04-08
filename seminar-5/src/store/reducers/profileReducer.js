import { UPDATE_NAME, UPDATE_EMAIL } from "../actionTypes/profileTypes";
import { combineReducers } from "redux";

const initialState = {
    name: "Гость",
    email: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload,
            };
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        default:
            return state;
    }
};

export default combineReducers({
  profile: profileReducer
});