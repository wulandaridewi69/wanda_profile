import styles from '../styles/box.module.scss';
import React from 'react';


const Box = (props) => {
    return (
        <>
            <a href={props.url} className={styles.miniBox}>
                <div className={styles.box}>
                    <p>{props.title}</p>
                </div>
            </a>
        </>
    )
}


const longBox = (props) => {
    return (
        <div className=' text-white'>
            <div>
                {props.children}
            </div>
        </div>
    )
}


export { Box };
export default longBox;
