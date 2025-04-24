import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useMenu } from "../../app/providers/MenuProvider";

const BurgerMenu = () => {
    const { isMenuOpen, closeMenu } = useMenu();

    const handleClick = (e) => {
        e.preventDefault();
        toast.info("Not supported in test application 😜", {
            position: "top-right",
            autoClose: 1000,
        });
    };

    return (
        <div className={`burgerMenu ${isMenuOpen ? "" : "hidden"}`}>
            <button onClick={closeMenu} className="burgerMenu__exit">
                <svg
                    viewBox="0 0 32 32"
                    fill="black"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2px"
                >
                    <title />
                    <g id="cross">
                        <line className="cls-1" x1="7" x2="25" y1="7" y2="25" />
                        <line className="cls-1" x1="7" x2="25" y1="25" y2="7" />
                    </g>
                </svg>
            </button>
            <h3>MENU</h3>
            <div className="burgerMenu__card">
                <div>
                    <Link className="burgerMenu__chapter" onClick={handleClick}>
                        MAN
                    </Link>
                    <div className="burgerMenu__chapter_items">
                        <Link onClick={handleClick}>Accessories</Link>
                        <Link onClick={handleClick}>Bags</Link>
                        <Link onClick={handleClick}>Denim</Link>
                        <Link onClick={handleClick}>T-Shirts</Link>
                    </div>
                </div>
                <div>
                    <Link className="burgerMenu__chapter" onClick={handleClick}>
                        WOMAN
                    </Link>
                    <div className="burgerMenu__chapter_items">
                        <Link onClick={handleClick}>Accessories</Link>
                        <Link onClick={handleClick}>BJackets & Coatsags</Link>
                        <Link onClick={handleClick}>Polos</Link>
                        <Link onClick={handleClick}>T-Shirts</Link>
                        <Link onClick={handleClick}>Shirts</Link>
                    </div>
                </div>
                <div>
                    <Link className="burgerMenu__chapter" onClick={handleClick}>
                        KIDS
                    </Link>
                    <div className="burgerMenu__chapter_items">
                        <Link onClick={handleClick}>Accessories</Link>
                        <Link onClick={handleClick}>Jackets & Coats</Link>
                        <Link onClick={handleClick}>Polos</Link>
                        <Link onClick={handleClick}>T-Shirts</Link>
                        <Link onClick={handleClick}>Shirts</Link>
                        <Link onClick={handleClick}>Bags</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
