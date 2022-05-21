import { Container, Grid } from "@mui/material";
import styles from '../styles/header.module.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconText from "./IconText";

const Header = () => {
	return (
		<Grid container>
			<Container>
				<Grid justifyContent={'center'} container className={styles.headerTopBar}>
					<Grid item lg={8} md={6} sm={12}>
						<div className={styles.headerWrapper} style={{gap: 10}}>
							<IconText icon={<AccessTimeIcon />} text={'Mon - Sun 10:00-18:00'} />
							<IconText icon={<PhoneIcon />} text={'+66 85 541 8670'} />
						</div>
					</Grid>
					<Grid item lg={4} md={6} sm={12}>
						<div className={styles.headerWrapper} style={{gap: 20, justifyContent: 'flex-end'}}>
							<FacebookIcon />
							<GoogleIcon />
							<PinterestIcon />
							<TwitterIcon />
						</div>
					</Grid>
				</Grid>
			</Container>
		</Grid>
	);
}

export default Header;
