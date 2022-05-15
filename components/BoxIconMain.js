import styles from '../styles/Home.module.css'


const BoxIconMain = (
	srcIcon,
	title = '',
	content = ''
) => {

	console.log('srcIcon', srcIcon)

	return (
		<div className={styles.boxCoreWrapper}>
			<img style={{height: 72}} src={srcIcon}/>
			{/* <h3>{title}</h3> */}
			{/* <p>{content}</p> */}
		</div>
	);
}
 
export default BoxIconMain;