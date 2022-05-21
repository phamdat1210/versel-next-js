import { Container, Grid } from "@mui/material";
import ServiceTime from "./ServiceTime";

const styles = {
	wrapper: {
		padding: '76px 0px 28px 0px',
		borderColor: '#e6e6e6',
		backgroundColor: '#e6e6e6',
		marginTop: '50px'
	}
}

const serviceTimes = [
	{srcIcon: '/home-icon-1.png', title: 'Business Process', content: 'Extending efficient business process outsourcing by means of exceptional customer service level and swift business process automation . Business Process'},
	{srcIcon: '/home-icon-2.png', title: 'Product Development', content: 'Bringing ideas to reality with constant development of conceptual product and turning them into opportunities for our business partners.'},
	{srcIcon: '/home-icon-3.png', title: 'IT Infrastructure', content: 'Providing constant 24/7 network monitoring services and ensuring a secure, rapid and reliable connectivity for our product end-users .'}
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