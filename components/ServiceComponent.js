import styles from '../styles/Home.module.css'
import { Grid } from "@mui/material";
import SectionBg from "./SectionBg";

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
		<SectionBg uri={'/services_bg.png'} title={'Services We Provide'} smallTitle={'Covered in these areas'}>
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
		</SectionBg>
    );
}

export default ServiceComponent;