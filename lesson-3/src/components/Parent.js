import React, { useState } from "react";
import Button from "@mui/material/Button";

const ParentCounter = () => {
    const [count, setCount] = useState(0);
    console.log("parent");
    function upCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Родитель</h2>
            <ChildCount count={count} />
            <Button variant="contained" onClick={upCount}>
                +1
            </Button>
        </div>
    );
};

function ChildCount({ count }) {
    console.log("click");
    return (
        <div>
            <p>Счетчик дочерний</p>
            <p>Значение счетчика {count} </p>
        </div>
    );
}

export default ParentCounter;
