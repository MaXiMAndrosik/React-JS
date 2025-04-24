import { LoyalityContent } from "./components/LoyalityContent";
import MainTop from "./components/MainTop";
import RegistrationForm from "./components/RegistrationForm";
import "./style/AuthPage.scss";

export default function AuthComposite() {
    return (
        <>
            <MainTop />
            <section className="registration-form conteiner">
                <h2 style={{ display: "none" }}>Registration form</h2>

                <RegistrationForm />

                <div className="registration-form__rightPart">
                    <LoyalityContent />
                </div>
            </section>
        </>
    );
}
