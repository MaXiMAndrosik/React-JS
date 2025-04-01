import { useEffect, useState } from "react";

function Timer({info}) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    // useEffect(() => {
    //     console.log("like didMount");
    // }, []);

    // useEffect(() => {
    //     console.log("like didUpdate");
    // });

    return (
        <div>
            <p>Время {time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timer;
