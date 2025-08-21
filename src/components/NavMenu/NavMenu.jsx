import './NavMenu.css'

const NavMenu = (props) => {
    return (
        <ul className="navtop-menu">
            {props.nav.map((item) => (
                <li key={item.dataAttr}>
                    <a href={item.url} data-attr={item.dataAttr}>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    )
}
export default NavMenu