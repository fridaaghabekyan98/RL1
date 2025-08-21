import Logo from "../Logo/Logo.jsx";
import NavMenu from "../NavMenu/NavMenu.jsx";
import StartButton from "../StartButton/StartButton.jsx";
import './Nav.css'

const Nav = (props) => {
    return (
        <div className="container">
            <Logo/>
            <NavMenu nav={props.nav}/>
            <StartButton/>
        </div>
    );
};

export default Nav