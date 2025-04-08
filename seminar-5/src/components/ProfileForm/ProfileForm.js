import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName, updateEmail } from "../../store/actions/profileActions";

const ProfileForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) dispatch(updateName(name));
        if (email) dispatch(updateEmail(email));
        setName("");
        setEmail("");
    };

    return (
        <div>
            <h2>Текущий профиль</h2>
            <p>Имя: {profile.name}</p>
            <p>Email: {profile.email || "не указан"}</p>

            <h3>Обновить профиль</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Новое имя:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Новый email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Обновить профиль</button>
            </form>
        </div>
    );
};

export default ProfileForm;
