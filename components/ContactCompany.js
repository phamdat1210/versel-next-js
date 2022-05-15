import { Container, Grid } from "@mui/material";
import ServiceTime from "./ServiceTime";


const styles = {
	wrapper: {
		padding: '76px 0px 28px 0px',
		borderColor: '#e6e6e6',
		backgroundColor: '#e6e6e6'
	}
}

const serviceTimes = [
	{srcIcon: '/home-icon-1.png', title: 'On Time Service.', content: 'Transforming distribution and marketing with key capabilities in customer insight and analytics.'},
	{srcIcon: '/home-icon-2.png', title: 'On Time Service.', content: 'Transforming distribution and marketing with key capabilities in customer insight and analytics.'},
	{srcIcon: '/home-icon-3.png', title: 'On Time Service.', content: 'Transforming distribution and marketing with key capabilities in customer insight and analytics.'}
]


const ContactCompany = () => {

	return ( 
		<Grid container style={styles.wrapper}>
			<Container>
				<Grid container spacing={4}>
					{serviceTimes.map((el, index)=>(
						<Grid md={4} item lg={4} xs={12} sm={4} key={index}>
							<ServiceTime title={el.title} content={el.content} srcIcon={el.srcIcon}/>
						</Grid>
					))}
				</Grid>
			</Container>
		</Grid>
    );
}


export default ContactCompany;