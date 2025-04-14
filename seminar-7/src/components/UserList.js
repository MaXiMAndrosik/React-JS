import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "../actions/userActions";

const UserList = () => {
    const dispatch = useDispatch();
    const { loading, users, error } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    // console.log(users);
    return (
        <div>
            {loading ? <p>Loading...</p> : error ? <p>Error: {error}</p> : (
                <ul>
                    {users?.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;