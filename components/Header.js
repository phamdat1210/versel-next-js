import { Container, Grid } from "@mui/material";
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
		<Grid container>
			<Container>
				<Grid container className={styles.headerTopBar}>
					<Grid item lg={8} md={7}>
						<div className={styles.headerWrapper}>
							<IconText icon={<AccessTimeIcon />} text={'Mon - Sun 10:00-18:00'} />
							<IconText icon={<PhoneIcon />} text={'+1-3454-5678-77'} />
						</div>
					</Grid>
					<Grid item lg={4} md={5}>
						<div className={styles.headerWrapper}>
							<IconText icon={<EmailIcon />} text={'Sales@GoodLayers.com'} />
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
