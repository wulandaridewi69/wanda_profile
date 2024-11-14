import Image from 'next/image';

import Gloding from '../assets/gloding.png';
import styles from '../styles/experienced.module.scss';
import Amimono from '../assets/amimono.png';
import Mirai from '../assets/mirai.png';
import Art from '../assets/art.png';
import Vogue from '../assets/vogue.png';

const techList = {
    result: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'Javascript'
        },
        {
            id: 3,
            title: 'Atlassian (Jira)'
        },
        {
            id: 4,
            title: 'Jquerry'
        },
        {
            id: 5,
            title: 'React.js'
        },
        {
            id: 6,
            title: 'Java'
        },
        {
            id: 7,
            title: 'CSS'
        },
        {
            id: 8,
            title: 'SASS'
        },
        {
            id: 9,
            title: 'MUI'
        },
        {
            id: 10,
            title: 'Figma'
        },
        {
            id: 11,
            title: 'Payara'
        },
        {
            id: 12,
            title: 'Vercel'
        },
        {
            id: 13,
            title: 'Netbeans'
        },
        {
            id: 14,
            title: 'VS Code'
        },
        {
            id: 15,
            title: 'Sourch Tree'
        },
        {
            id: 16,
            title: 'NPM'
        },
        {
            id: 17,
            title: 'Git/Github'
        },
        {
            id: 18,
            title: 'Slack'
        },
    ]
}

const Experienced = () => {
    return (
        <div>
            <div className={styles.sub}>
                <h4>Experienced</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="311" height="20" viewBox="0 0 311 20" fill="none">
                    <path d="M3 9.99999L18.0732 14.7676C28.6021 18.0978 40.05 16.7978 49.5641 11.1915L50.988 10.3524C61.8866 3.93027 75.3564 3.70035 86.4678 9.74681L89.3599 11.3206C99.1869 16.6681 111.154 16.2003 120.534 10.102V10.102C130.079 3.89622 142.287 3.52925 152.188 9.15057L154.298 10.3485C164.799 16.311 177.699 16.1493 188.048 9.92545V9.92545C198.264 3.78139 210.978 3.53971 221.42 9.29106L222.763 10.031C233.976 16.2071 247.622 15.9843 258.627 9.4453L259.922 8.6759C269.229 3.14605 280.426 1.76293 290.799 4.86162L308 10" stroke="url(#paint0_linear_515_1533)" stroke-width="6" stroke-linecap="round" />
                    <defs>
                        <linearGradient id="paint0_linear_515_1533" x1="81.1097" y1="20" x2="214.268" y2="20" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#95D2FF" />
                            <stop offset="1" stop-color="#ECCFFA" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className={styles.desc}>
                <div className={styles.logo}>
                    <Image src={Gloding} />
                    <p className={styles.descYear}>2022-2023</p>
                </div>
                <div>
                    <p className={styles.descLogo}>
                        Gloding Inc. is a consulting + creating company specializing in IT, made up of a team that transcends national borders,
                        including Japan, Indonesia, France, the United States, and the United Kingdom.
                        Our members with a global perspective provide support in every phase,
                        from various types of consulting to realize business improvements, to system design and construction,
                        to post-installation operation and maintenance.
                    </p>
                </div>

                <div className='mb-12'>
                    <p className={styles.title}>Tasks</p>
                    <p className={styles.titleDesc}>On the Amimono, JHIA, Handmate and Nihonvogue projects,
                        the  tasks I worked on were improving typhography, making layouts,  making them responsive,
                        making user menus for mobile  frames, making public menus for mobile frames, making Jquerry for conditioning,
                        learning advanced CSS, learning to use Java with the IDE used is Netbeans.
                        In the Mirai project, I created an appList layout using the tech stack, namely next.js, Bootstrap, MUI, Vercel.
                        I work on SEO tasks on the Amimono, JHIA, Nihonvogue, and Handmate projects to make it easier for search engines
                        to find pages/websites and place them on the first page in search engines with keywords specified by the user.
                        In the project above, I also learned about UI/UX and the use of Figma, so that later I could equate the resulting
                        layout with the existing design.
                    </p>
                </div>
                <div>
                    <p className={styles.title}>Tech Stack</p>
                    <div className={styles.techLists}>
                        {techList.result.map((item) => {
                            return <div className={styles.listItem} key={item.id}>
                                <p>{item.title}</p>
                            </div>
                        })}
                    </div>
                </div>
                <div>
                    <p className={styles.title}>Projects</p>
                    <div className={styles.project}>
                        <Image src={Amimono} className='bg-white' />
                        <Image src={Art} />
                        <Image src={Vogue} className='bg-white' />
                        <Image src={Mirai} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experienced;