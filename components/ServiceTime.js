import Image from 'next/image'
import styles from '../styles/Home.module.css'

const ServiceTime = ({
    srcIcon,
    title = '',
    content = ''
}) => {
    return ( 
        <div className={styles.serviceTimeWrapper}>
            <img style={{height: 72}} src={srcIcon}/>
            <div className={styles.sericeTimeChildWrap}>
                <h3 style={{
                    color: '#3740b0'
                }}>{title}</h3>
                <p className={styles.textContent}>{content}</p>
            </div>
        </div>
    );
}

export default ServiceTime;