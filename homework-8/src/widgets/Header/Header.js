import Logo from "../../shared/assets/images/Logo.svg";
import Find from "../../shared/assets/images/find.svg";
import Burger from "../../shared/assets/images/burger.svg";
import Login from "../../shared/assets/images/login.svg";
import Basket from "../../shared/assets/images/basket.svg";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { selectTotalItemsQuantity } from "../../features/cart/model/cartSlice";
import { useMenu } from "../../app/providers/MenuProvider";
import { selectIsAuth } from "../../features/auth/model/authSlice";
import "./Header.scss";

const Header = () => {
    const { toggleMenu } = useMenu(); // Используем хук контекста
    const itemsCount = useSelector(selectTotalItemsQuantity);
    const isAuth = useSelector(selectIsAuth);

    const handleClick = (e) => {
        e.preventDefault();
        toast.info("Not supported in test application 😜", {
            position: "top-right",
            autoClose: 1000,
        });
    };

    const handleAuthClick = (e) => {
        if (isAuth) {
            e.preventDefault();
            toast.info("User has already registered", {
                position: "top-right",
                autoClose: 1000,
            });
        }
    };

    return (
        <header className="max_conteiner">
            <nav className="header-navi conteiner">
                <h2 style={{ display: "none" }}>Header navigation</h2>
                <div className="header-navi__left">
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                    <button onClick={handleClick}>
                        <img src={Find} alt="Find" />
                    </button>
                </div>

                <div className="header-navi__right">
                    <button
                        onClick={toggleMenu}
                        className="menu"
                        aria-label="menu"
                    >
                        <img src={Burger} alt="burger_menu" />
                    </button>
                    <Link to="/auth" onClick={handleAuthClick}>
                        <button className="hide" aria-label="login">
                            <img src={Login} alt="" />
                        </button>
                    </Link>
                    <Link to="/cart">
                        <button
                            className="header-navi__cart hide"
                            aria-label="cart"
                        >
                            <img src={Basket} alt="" />
                            {itemsCount > 0 ? (
                                <span className="header-navi__cart_sales">
                                    {itemsCount}
                                </span>
                            ) : null}
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
