import styles from '../styles/Home.module.css'
import { Grid } from "@mui/material";
import SectionBg from "./SectionBg";
import Image from 'next/image';

const serviceBox = [
	{srcIcon: '/service_ic_1.png', title: 'Bespoke service', content: 'Our relationship managers can offer you a bespoke service tailored to your needs. We adapt our service to suit your requirements'},
	{srcIcon: '/service_ic_2.png', title: 'Expert friendly team', content: 'Our friendly team are here to answer any questions you may have, or solve any problems that arise'},
	{srcIcon: '/service_ic_3.png', title: 'Protected and safe', content: 'Your money is held in a segregated bank account, at a regulated institution'},
	{srcIcon: '/service_ic_4.png', title: '3 years experience', content: 'The SEA International Group of companies has been servicing traders since 2019'},
	{srcIcon: '/service_ic_5.png', title: 'Educational content', content: 'We have content to suit all needs. Whether you are new to trading or an experienced trader looking for market analysis. We have content for everyone'},
	{srcIcon: '/service_ic_6.png', title: 'Market Reports', content: 'Learn to trade with us. We have a comprehensive library of resources, and if you get stuck our relationship managers are here to guide you if you have questions'},
]


const ServiceComponent = () => {
	return ( 
		<SectionBg uri={'/services_bg.png'} title={'Services We Provide'} smallTitle={'Covered in these areas'}>
			<Grid container spacing={5}>
				{serviceBox.map((it, index)=>(
					<Grid item md={4} lg={4} xs={12} sm={4} key={index}>
						<div className={styles.boxCoreWrapper}>
							<Image width={75} height={75} src={it.srcIcon} alt={it.srcIcon}/>
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