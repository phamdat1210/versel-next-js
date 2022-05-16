import React from 'react';
import {Container, Grid} from "@mui/material";
import styles from "../styles/Home.module.css";

const SectionBg = ({
	uri = '',
	title = '',
	smallTitle = '',
	children,
}) => {

	const mainStyle = {
		backgroundImage: `url(${uri})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundPositionY: 'top'
	}

	return (
		<div style={mainStyle}>
			<Grid container>
				<Container>
					<div className={styles.middlePaddingDiv}>
						<h3 className={styles.titleSection}>{title}</h3>
						<p style={{textAlign: 'center'}} className={styles.textContent}>{smallTitle}</p>
					</div>
					{children}
				</Container>
			</Grid>
		</div>
	);
};

export default SectionBg;