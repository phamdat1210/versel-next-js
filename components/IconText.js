const IconText = ({icon, text = ''}) => {
    return ( 
		<span style={{
			display: 'flex',
			alignItems: 'center',
			gap: 10
		}}>
			{icon}
			<p>{text}</p>
		</span>
    );
}
 
export default IconText;