import { ToastContainer } from "react-toastify";
import { MenuProvider } from "../../app/providers/MenuProvider";
import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";
import Subscrube from "../../widgets/Subscrube/Subscrube";
import { Outlet } from "react-router-dom";
import DeviceInfo from "../../shared/hooks/DeviceInfo";

const MainLayout = () => {
    return (
        <>
            <MenuProvider>
                <DeviceInfo />
                <ToastContainer />
                <Header />
                <main className="max_conteiner">
                    <Outlet />
                    <Subscrube />
                </main>
                <Footer />
            </MenuProvider>
        </>
    );
};

export default MainLayout;
