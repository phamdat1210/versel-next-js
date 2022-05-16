import React from 'react';

const ParallaxBg = ({children, uri}) => {

	const wrapperParallax = {
		backgroundImage: `url(${uri})`,
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover'
	}

	return (
		<div style={wrapperParallax}>
			{children}
		</div>
	);
};

export default ParallaxBg;