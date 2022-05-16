import styles from '../styles/Home.module.css'
import { Container, Grid } from "@mui/material";
import BoxIconMain from './BoxIconMain';

const serviceBox = [
	{srcIcon: '/service_ic_1.png', title: 'Capital Markets', content: 'Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.'},
	{srcIcon: '/service_ic_2.png', title: 'Insurance', content: 'Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.'},
	{srcIcon: '/service_ic_3.png', title: 'Blockchain', content: 'Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.'},
	{srcIcon: '/service_ic_4.png', title: 'Blockchain', content: 'Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.'},
	{srcIcon: '/service_ic_5.png', title: 'Blockchain', content: 'Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.'},
	{srcIcon: '/service_ic_6.png', title: 'Blockchain', content: 'Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses.'},
]


const ServiceComponent = () => {

	return ( 
		<div className={styles.serviceMainWrapper}>
			<Grid container>
				<Container>
					<div className={styles.middlePaddingDiv}>
						<h3 className={styles.titleSection}>{'Services We Provide'}</h3>
						<p style={{textAlign: 'center'}} className={styles.textContent}>{'Covered in these areas'}</p>
					</div>
					<Grid container spacing={5}>
						{serviceBox.map((it, index)=>(
							<Grid item md={4} lg={4} xs={12} sm={4} key={index}>
								<div className={styles.boxCoreWrapper}>
									<img src={it.srcIcon} alt={it.srcIcon}/>
									<h3>{it.title}</h3>
									<p>{it.content}</p>
								</div>
							</Grid>
						))}
					</Grid>
				</Container>
			</Grid>
		</div>
    );
}

export default ServiceComponent;