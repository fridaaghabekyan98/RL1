import './App.css'
import Nav from "./components/Nav/Nav.jsx";

const App = (props) => {
    return (
        <div className="navtop">
            <Nav nav={props.nav}/>
        </div>
    )
}

export default App



