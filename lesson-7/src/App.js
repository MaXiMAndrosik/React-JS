import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import MyButton from "./components/ButtonEx2";
import FetchButtonEx3 from "./components/FetchButtonEx3";
import ThunkComponent from "./components/ThunkEx4";
import SagaButton from "./components/SagaButton";

//EX1
// смотрим store

function App() {
    const dispatch = useDispatch();
    
	//EX2
    useEffect(() => {
        dispatch({ type: "TEST_ACTION" });
    }, [dispatch]);

    return (
        <div className="example">
            <div>
                Необходимо открыть консоль, чтобы увидеть результат работы
            </div>
            {/* //EX2 // смотрим store */}
            <MyButton />
            {/* //EX3 // смотрим asyncMiddleware */}
            <FetchButtonEx3 />
            {/* //EX4 // смотрим ThunkEx4, actions */}
            <ThunkComponent />
            {/* //EX4 // смотрим store */}
            <SagaButton />
        </div>
    );
}

export default App;
