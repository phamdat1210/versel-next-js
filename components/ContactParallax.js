import React from 'react';
import ParallaxBg from "./ParallaxBg";
import {Container, Grid} from "@mui/material";
import styles from '../styles/Home.module.css'

const ContactParallax = () => {
	return (
		<ParallaxBg uri={'/cat_bg.jpg'}>
			<Container style={{
				padding: '95px 0 65px 0'
			}}>
				<div className={styles.contactParallaxWrapper}>
					<div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
						<h3>{'Wanna Talk To Us?'}</h3>
						<p>{'Please feel free to contact us. We’re super happy to talk to you. Feel free to ask anything.'}</p>
					</div>
					<div className={styles.actionItemButton}>
						<a>{'CONTACT US'}</a>
					</div>
				</div>
			</Container>
		</ParallaxBg>
	);
};

export default ContactParallax;