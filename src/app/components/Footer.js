import react from "react";
import Image from "next/image";

import styles from '../styles/footer.module.scss';
import Linkedin from '../assets/linkedin.png'
import Whatsapp from '../assets/whatsapp.png'
import Twitter from '../assets/twitter.png'
import Instagram from '../assets/instagram.png'
import Email from '../assets/email.png'


export default function Footer () {
    return (
        <div className={styles.footer}>
            <div className={styles.menuFooter}>
                <a href="https://www.linkedin.com/in/dewi-wulandari-970590136"><Image src={Linkedin}/></a>
                <a href="08233442054"><Image src={Whatsapp}/></a>
                <a href="https://twitter.com/DewiWul32790486"><Image src={Twitter}/></a>
                <a href="https://www.instagram.com/wanda_1437/"><Image src={Instagram}/></a>
                <a href="dewi.wulandari.ruslan@gmail.com"><Image src={Email}/></a>
            </div>
            <p>Copyright © 2023 Wanda. All rights reserved.</p>
        </div>
    )
}