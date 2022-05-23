import React from 'react';
import {Grid} from "@mui/material";
import styles from '../styles/Home.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {

	return (
		<footer className={styles.wrapperFooter}>
			<Grid container justifyContent="space-between">
				<Grid item lg={6}>
					<h3>{'About SEA International Group'}</h3>
				</Grid>
				<Grid item lg={6} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '20px'}}>
					<a className={styles.linkAWrapper}>
						<FacebookIcon/>
					</a>
					<a className={styles.linkAWrapper}>
						<GoogleIcon />
					</a>
					<a className={styles.linkAWrapper}>
						<PinterestIcon />
					</a>
					<a className={styles.linkAWrapper}>
						<TwitterIcon />
					</a>
				</Grid>
			</Grid>
		</footer>
	);
};

export default Footer;