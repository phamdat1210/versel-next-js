import { Grid, Container } from "@mui/material";
import styles from '../styles/header.module.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconText from "./IconText";

const Header = () => {
	return ( 
		<Container maxWidth={'sm'}>
			<Grid container className={styles.headerTopBar}>
				<Grid item xs={8} md={8}>
					<div className={styles.headerWrapper}>
						<IconText icon={<AccessTimeIcon/>} text={'Mon - Sun 10:00-18:00'}/>
						<IconText icon={<PhoneIcon/>} text={'+1-3454-5678-77'}/>
					</div>
				</Grid>
				<Grid item xs={4} md={4}>
					<div className={styles.headerWrapper}>
						<IconText icon={<EmailIcon/>} text={'Sales@GoodLayers.com'}/>
						<FacebookIcon/>
						<GoogleIcon/>
						<PinterestIcon/>
						<TwitterIcon/>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Header;
