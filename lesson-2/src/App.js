import "./App.css";
import Counter from "./components/Counter";
import Show from "./components/VisibleJs";
import Timer from "./components/Timer";
import RefExample from "./components/RefExample";
import MessageList from "./components/List";

function App() {
	const userName = "Alex";
	return (
        <div className="App">
            <h1>Hello {userName}</h1>
            <Timer />
            <Counter />
            <Show data="Текст из компонента" />
            <Show data="Другой текст из компонента" />
            <RefExample />
            <MessageList />
        </div>
    );
}

export default App;
