import { Container, Grid } from "@mui/material";
import React from "react";
import ParallaxBg from "./ParallaxBg";
import styles from '../styles/Home.module.css'


const AboutUsParallax = () => {
    return (
		<ParallaxBg uri={'/about_us_bg.jpg'}>
			<Container style={{
				padding: '95px 40px 65px 40px'
			}}>
				<Grid container justifyContent={'center'} alignItems={'center'} className={styles.aboutUsWrapper} flexDirection={'column'}>
					<h3>{'About Us'}</h3>
					<p>{'WE PROVIDE THE SOLUTION FOR ASSET MANAGEMENT'}</p>
				</Grid>
			</Container>
		</ParallaxBg>
    );
}
 
export default AboutUsParallax;
