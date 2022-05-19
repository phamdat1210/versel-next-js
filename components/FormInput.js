import { TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";
import styles from '../styles/Home.module.css'

const FormInput = props => {

	const {name, placeholder, label, rules, control, defaultValue = '', ...inputProps} = props

	const {field, fieldState} = useController({name, control: control, rules, defaultValue})

    return (
		<>
			<TextField
				inputProps={{
					className: styles.inputStyleCustom
				}}
				style={{
					width: '100%',
					backgroundColor: '#ffffff',
					color: `var(--text-content-color)`,
					fontWeight: 700,
					fontFamily: 'Montserrat',
					boxShadow: '0 0 74px rgb(10 10 10 / 7%)'
				}}
				id={label}
				label={label}
				onChange={field.onChange}
				onBlur={field.onBlur}
				ref={field.ref}
				name={field.name}
				error={fieldState.error&&true}
				helperText={fieldState.error&&(fieldState.error.message)}
				{...inputProps}
			/>
		</>
	);
}

export default FormInput;