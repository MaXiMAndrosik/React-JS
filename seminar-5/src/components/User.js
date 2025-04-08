import React from "react";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
    const userName = useSelector((state) => state);
    const userEmail = useSelector((state) => state);
    const dispatch = useDispatch();

    const updateName = () => {
        dispatch({ type: "UPDATE_NAME" });
    };
    const updateEmail = () => {
        dispatch({ type: "UPDATE_EMAIL" });
    };

    return (
        <div>
            <h1>Имя пользователя: {userName}</h1>
            <h1>Email: {userEmail}</h1>
            <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={updateName}
            ></input>
        </div>
    );
};

export default User;
