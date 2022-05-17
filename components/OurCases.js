import React from 'react';
import SectionBg from "./SectionBg";
import Slider from "react-slick";

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	arrows: false
};

const outCases = [
	{
		src: '/out_cases_1.jpg',
		title: 'Startup Funding',
		description: 'Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses'
	},
	{
		src: '/out_cases_2.jpg',
		title: 'Startup Funding',
		description: 'Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses'
	},
	{
		src: '/out_cases_3.jpg',
		title: 'Startup Funding',
		description: 'Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses'
	},
	{
		src: '/out_cases_4.jpg',
		title: 'Startup Funding',
		description: 'Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses'
	},
	{
		src: '/out_cases_5.jpg',
		title: 'Startup Funding',
		description: 'Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses'
	}
]

const OurCases = () => {
	return (
		<>
			<SectionBg uri={'/cases_bg.png'} title={'Our Cases'} smallTitle={'WHAT WE HAVE DONE'}/>
			<Slider {...settings}>
				{outCases.map((el, index)=>(
					<>
						<img src={el.src} alt={el.src}/>
						<h3>{el.title}</h3>
						<p>{el.description}</p>
						<p>{'Read more'}</p>
					</>
				))}
			</Slider>
		</>
	);
};

export default OurCases;