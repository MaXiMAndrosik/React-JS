import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggler from "./components/ThemeToggler";
import "./App.css";

function App() {
    return (
        <ThemeProvider>
            <ThemeToggler />
        </ThemeProvider>
    );
}

export default App;
