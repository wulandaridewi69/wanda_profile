import styles from '../styles/header.module.scss';

export default function Header () {
    return (
        <div className={styles.headers}>
        <div className={styles.menuHeader}>
            <a>INTRODUCTION</a>
            <a>PROFILE</a>
            <a>SKILLS</a>
            <a>PROJECTS</a>
            <a>SOCIAL MEDIA</a>
        </div>
        </div>
    )
}