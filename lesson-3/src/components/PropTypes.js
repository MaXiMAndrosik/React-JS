import React from "react";
import PropTypes from "prop-types";

const Student = ({ name, age, isStudent }) => {
    Student.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        isStudent: PropTypes.bool,
    };

    return (
        <div>
            <h2>{name}</h2>
            <p>Возраст: {age}</p>
            <p>{isStudent ? "Студент" : "Не студент"}</p>
        </div>
    );
};

export default Student;
