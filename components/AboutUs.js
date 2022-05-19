import { Container, Grid } from "@mui/material";
import React from "react";
import styles from '../styles/Home.module.css'


const AboutUs = () => {
    return (
		<Container>
			<Grid container className={styles.wrapperAboutUsContext}>
				<h3>{'About SEA Internaltional Group'}</h3>
				<p>{'SEA Internaltional Group isn’t just an ordinary online marketing company. With the team of highly trained individuals, the company provides services while exceeding the clients’ expectations. Every task, every job, and every campaign is surely done professionally and accurately.'}</p>
				{/* <img src={'./about_team_bg.jpg'} style={{
					minHeight: '430px'
				}}/> */}
				<div className={styles.contentImage}/>
				<p>{'Our winning formulas are defined with the combination of Advanced Infrastructure, Technology and Talented Workforce. Consist of management and operation team , SEA Internaltional Group has delivered exceptional result to our growing number of international customers. SEA Internaltional Group has proved its expertise in a short period of time by being one of the fastest growing BPO companies in the world. Being able to deliver high quality services, attracting high end and top companies in the industry made it stand out with its competitors.Ismart Asia Technology Inc doesn’t only value customers but also the employees to make sure that they are motivated and well compensated which will inspire them more to be passionate with their skills and jobs.'}</p>
			</Grid>
		</Container>
	);
}
 
export default AboutUs;