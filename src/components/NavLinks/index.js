import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.css';

const NavLinks = ({ children, url }) => {
    return(
        <NavLink
        className={({ isActive }) => `
            ${styles.link}
            ${isActive ? styles.linkDestacado : ""}
            `}  
            to={url} end
        >
            {children}
        </NavLink>
    )
}

export default NavLinks;
