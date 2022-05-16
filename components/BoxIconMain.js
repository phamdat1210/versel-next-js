import styles from '../styles/Home.module.css'
import React from 'react'

const BoxIconMain = (
	srcIcon = '',
	title = '',
	content = ''
) => {

	return (
		<div className={styles.boxCoreWrapper}>
			<img style={{height: 72}} src={srcIcon}/>
			{/* <h3>{title}</h3> */}
			{/* <p>{content}</p> */}
		</div>
	);
}
 
export default BoxIconMain;