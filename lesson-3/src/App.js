import "./App.css";
import ParentCounter from "./components/Parent";
import InputForm from "./components/Form";
import Nav from "./components/Menu";
import HoverRating from "./components/Rating";
import TransferList from "./components/ListSuper";
import Student from "./components/PropTypes";

function App() {
    return (
        <div className="App">
            <HoverRating />
            <Nav />
            <ParentCounter />
            <InputForm />
            <TransferList />
            <Student name={'Николай'} age={30} isStudent={true} />
        </div>
    );
}

export default App;
