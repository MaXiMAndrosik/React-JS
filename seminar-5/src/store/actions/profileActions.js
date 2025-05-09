import { UPDATE_NAME, UPDATE_EMAIL } from "../actionTypes/profileTypes";

export const updateName = (name) => ({
    type: UPDATE_NAME,
    payload: name,
});

export const updateEmail = (email) => ({
    type: UPDATE_EMAIL,
    payload: email,
});
