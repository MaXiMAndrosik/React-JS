import { StoreProvider } from "./providers/StoreProvider";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import ScrollToTop from "./providers/ScrollProvider";
// import { Notifications } from "@/widgets/Notifications";

function App() {
    return (
        <BrowserRouter>
            <StoreProvider>
                <ScrollToTop />
                <AppRouter />
            </StoreProvider>
        </BrowserRouter>
    );
}

export default App;
