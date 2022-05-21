import { Container, Grid, Snackbar } from "@mui/material";
import React, { useState } from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from '../styles/Home.module.css'
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";

const ContactUs = () => {

	const {control, handleSubmit} = useForm()

	const onSubmit = (data) => {
		// try{
		// 	client.send({
		// 		text: data.message,
		// 		from: 'recruitment.seagroup@gmail.com',
		// 		to: data.email,
		// 		subject: data.subject,
		// 	})
		// } catch(e) {
		// 	return;
		// }
	}

	const onError = (err) => {
		console.log(err)
		setSnackBarState({...snackBarState, open: true})
	}

	const [snackBarState, setSnackBarState] = useState({
		open: false,
		vertical: 'top',
		horizontal: 'center',
	});

	const { vertical, horizontal, open } = snackBarState;

	const handleClose = () => {
		setSnackBarState({ ...snackBarState, open: false });
	};

    return (
		<Container>
			<Grid container spacing={1}>
				<Grid className={styles.wrapperItemContact} item lg={4} md={4} sm={4} xs={12}>
					<LocalPhoneIcon fontSize={"large"}/>
					<h3>{'Phone'}</h3>
					<p>{'A wonderful serenity has taken possession of my entire soul, like these.'}</p>
					<a target="_blank" rel="noreferrer" href="tel:+66 85 541 8670">{'+66 85 541 8670'}</a>
				</Grid>
				
				<Grid className={styles.wrapperItemContact} item lg={4} md={4} sm={4} xs={12}>
					<EmailIcon fontSize={"large"}/>
					<h3>{'Email'}</h3>
					<p>{'A wonderful serenity has taken possession of my entire soul, like these.'}</p>
					<a target="_blank" rel="noreferrer" href="mailto:recruitment.seagroup@gmail.com">{'recruitment.seagroup@gmail.com'}</a>
				</Grid>

				<Grid className={styles.wrapperItemContact} item lg={4} md={4} sm={4} xs={12}>
					<LocationOnIcon fontSize={"large"}/>
					<h3>{'Location'}</h3>
					<p>{'A wonderful serenity has taken possession of my entire soul, like these.'}</p>
					<a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Mae+Sot,+Tak+63110,+Th%C3%A1i+Lan/@16.7158792,98.5742383,14z/data=!3m1!4b1!4m5!3m4!1s0x30ddbda33d818e6d:0x30346c5fa8a7750!8m2!3d16.7124054!4d98.5746649">
						{'View on google map'}
					</a>
				</Grid>
			</Grid>
			<Grid style={{marginTop: '20px'}} container spacing={3}>
				{/* Form send to mail */}
					<Grid item lg={24} className={styles.titleFormSend}>
						<h3>{'Leave us your info'}</h3>
						<p>{'and we will get back to you.'}</p>
					</Grid>
					<Grid item lg={6} xs={12}>
						<FormInput 
							rules={{
								required: 'Full name is required!',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        							message: "Invalid email address!"
								}}} 
								label={'Full Name *'} 
								control={control} 
								name={'fullname'}
						/>
					</Grid>
					<Grid item lg={6} xs={12}>
						<FormInput rules={{required: 'Email is required!'}} label={'Email *'} control={control} name={'email'}/>
					</Grid>
					<Grid item lg={12} xs={12}>
						<FormInput rules={{required: 'Subject is required!'}} label={'Subject *'} control={control} name={'subject'}/>
					</Grid>
					<Grid item lg={12} xs={12}>
						<FormInput rules={{required: 'Message is required!'}} label={'Message *'} control={control} name={'message'}/>
					</Grid>
					<Grid item lg={12} xs={12}>
						<div className={styles.submitButton} onClick={handleSubmit(onSubmit, onError)} onTouchEnd={handleSubmit(onSubmit, onError)}>
							{'Submit Now'}
						</div>
					</Grid>
			</Grid>
			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				open={open}
				onClose={handleClose}
				message="I love snacks"
      		/>
		</Container>
    );
}

export default ContactUs;