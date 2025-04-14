export const fetchUserData = () => async (dispatch) => {
    dispatch({ type: "FETCH_USER_START" });

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const userData = await response.json();

        dispatch({ type: "FETCH_USER_SUCCESS", payload: userData });
    } catch (error) {
        dispatch({ type: "FETCH_USER_FALURE", payload: error.message });
    }
};
