import styles from '../styles/header.module.scss';

export default function Header() {
    return (
        <div className={styles.headers}>
            <div className={styles.menuHeader}>
                <a href='/'>HOME</a>
                <a href='/portofolio'>ACADEMIC</a>
                <a href='/feedback'>FEEDBACK</a>
                <a href='/experienced'>EXPERIENCED</a>
                <a href='/website'>WEBSITE</a>
            </div>
        </div>
    )
}