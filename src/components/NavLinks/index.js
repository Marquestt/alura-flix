import { Link } from 'react-router-dom';
import styles from './NavLinks.module.css';

const NavLinks = ({ children, url }) => {
    return(
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default NavLinks;
