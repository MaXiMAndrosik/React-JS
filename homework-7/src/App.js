import { Provider } from "react-redux";
import store from "./app/store";
import TasksList from "./features/tasks/TasksList";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <TasksList />
            </div>
        </Provider>
    );
}

export default App;
