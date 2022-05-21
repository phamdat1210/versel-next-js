import styles from '../styles/Home.module.css'
import React from 'react';

const ServiceTime = ({
    srcIcon,
    title = '',
    content = ''
}) => {
    return ( 
        <div className={styles.serviceTimeWrapper}>
            <img style={{height: 75}} src={srcIcon}/>
            <div className={styles.serviceTimeChildWrap}>
                <h3 style={{
                    color: '#3740b0'
                }}>{title}</h3>
                <p className={styles.textContent}>{content}</p>
            </div>
        </div>
    );
}

export default ServiceTime;