import styles from '../styles/Home.module.css'
import { Container, Grid } from "@mui/material";
import BoxIconMain from './BoxIconMain';


const serviceBoxs = [
	{srcIcon: '/home-icon-1.png', title: 'On Time Service.', content: 'Transforming distribution and marketing with key capabilities in customer insight and analytics.'},
	{srcIcon: '/home-icon-2.png', title: 'On Time Service.', content: 'Transforming distribution and marketing with key capabilities in customer insight and analytics.'},
	{srcIcon: '/home-icon-3.png', title: 'On Time Service.', content: 'Transforming distribution and marketing with key capabilities in customer insight and analytics.'}
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
					<Grid container spacing={4}>
						{serviceBoxs.map((el, index)=>(
							<Grid md={4} item lg={4} xs={12} sm={4} key={index}>
								<BoxIconMain srcIcon={el.srcIcon} title={el.title} content={el.content}/>
							</Grid>
						))}
					</Grid>
				</Container>
			</Grid>
		</div>
    );
}

export default ServiceComponent;