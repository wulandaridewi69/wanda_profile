import { Box } from '../components/Box';

import styles from '../styles/design.module.scss';

const data = {
    result: [
        {
            id: 1,
            title: 'Portfolio',
            url: 'https://www.figma.com/file/D9REeL5DkRka0y7ZSPK7J3/Wanda-profile-(Copy)?type=design&node-id=0-1&mode=design&t=0hQXy5O8bNKfYwWs-0'
        },
        {
            id: 2,
            title: 'Readtoon',
            url: 'https://www.figma.com/file/ZEI8muK61oYX914rgvzsSD/Comics?type=design&mode=design&t=3JP3sod42C6F9hCI-0'
        },
        {
            id: 3,
            title: 'Gomeet App',
            url: 'https://www.figma.com/file/RpyPbg2aVxe31HTImofTAc/GOMEET-APP?type=design&mode=design&t=3JP3sod42C6F9hCI-0'
        },
        {
            id: 4,
            title: 'MN-Room',
            url: 'https://www.figma.com/file/csEl6bp8EOtDn1a8Ja1r3y/MN-Room?type=design&mode=design&t=3JP3sod42C6F9hCI-0'
        },
        {
            id: 5,
            title: 'AD Smart Private',
            url: 'https://www.figma.com/file/yGNH6vhqRw2498HED3MGWL/Untitled?type=design&node-id=0-1&mode=design&t=3JP3sod42C6F9hCI-0'
        },
        {
            id: 6,
            title: 'Seebooks',
            url: 'https://www.figma.com/file/PuTCw3nZD70JqZLGKsbGau/SEEBOOKS?type=design&node-id=42-468&mode=design&t=3JP3sod42C6F9hCI-0'
        },
        {
            id: 7,
            title: 'Angkoot',
            url: 'https://www.figma.com/design/Bpfvyg2FfSTFyHjFnb8vr3/ANGKOOT?node-id=0-1&t=m8lBkcNrZ0pFqy0N-1'
        },
        {
            id: 8,
            title: 'Bodys Weight',
            url: 'https://www.figma.com/design/0LeAESwN6jxFM5wa1gHjxr/bodys-weight?node-id=0-1&t=zNrjqrk9DSLmPXy8-1'
        }

    ]
}

const Design = () => {
    return (
        <>
            <div className={styles.titlePage}>
                <h4>Design</h4>
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
            <div className={styles.contentPage}>
                {data.result.map((item) => {
                    return <Box key={item.id}
                    id={item.id} 
                    url={item.url}
                    title={item.title}
                    />
                })}
            </div>

        </>
    )
}

export default Design;