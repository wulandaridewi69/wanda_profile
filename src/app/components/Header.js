import Link from 'next/link'

import styles from '../styles/header.module.scss';

const Header = () => {
    return (
        <div className={styles.headers}>
            <div className={styles.menuHeader}>
                <Link href='/'>HOME</Link>
                <Link href='/academic'>ACADEMIC</Link>                
                <Link href='/experienced'>EXPERIENCED</Link>
                <Link href='/projects'>PROJECT</Link>
                <Link href='/feedback'>FEEDBACK</Link>
            </div>
        </div>
    )
}

export default Header;