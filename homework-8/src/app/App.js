import { StoreProvider } from "./providers/StoreProvider";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
// import { Notifications } from "@/widgets/Notifications";

function App() {
    return (
        <BrowserRouter>
            <StoreProvider>
                <AppRouter />
                {/* <Notifications /> */}
            </StoreProvider>
        </BrowserRouter>
    );
}

export default App;
