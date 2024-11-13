import styles from '../styles/profile.module.scss';
import Ub from '../assets/logo-ub.png';
import Image from 'next/image';

const Me = (props) => {
    return (
        <div className={styles.title}>
            <h1>Education</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="311" height="20" viewBox="0 0 311 20" fill="none">
                <path d="M3 9.99999L18.0732 14.7676C28.6021 18.0978 40.05 16.7978 49.5641 11.1915L50.988 10.3524C61.8866 3.93028 75.3564 3.70035 86.4678 9.74681L89.3599 11.3206C99.1869 16.6681 111.154 16.2003 120.534 10.102V10.102C130.079 3.89622 142.287 3.52925 152.188 9.15058L154.298 10.3485C164.799 16.311 177.699 16.1493 188.048 9.92545V9.92545C198.264 3.7814 210.978 3.53971 221.42 9.29106L222.763 10.031C233.976 16.2071 247.622 15.9843 258.627 9.44531L259.922 8.6759C269.229 3.14606 280.426 1.76293 290.799 4.86163L308 10" stroke="url(#paint0_linear_224_610)" stroke-width="6" stroke-linecap="round" />
                <defs>
                    <linearGradient id="paint0_linear_224_610" x1="81.1097" y1="20" x2="214.268" y2="20" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#95D2FF" />
                        <stop offset="1" stop-color="#ECCFFA" />
                    </linearGradient>
                </defs>
            </svg>

        </div>
    )
}

export default Me;