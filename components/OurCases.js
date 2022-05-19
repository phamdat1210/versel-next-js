import React from 'react';
import SectionBg from "./SectionBg";
import Slider from "react-slick";
import styles from '../styles/Home.module.css'

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	arrows: false,
	accessibility: false,
	focusOnSelect: false,
	responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
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
					<div className={styles.outCasesItem} key={index}>
						{/* <img src={el.src} alt={el.src}/> */}
						<div style={{
							backgroundImage: `url(${el.src})`,
							width: '100%',
							minHeight: '476px', 
							height: 0, 
							backgroundSize: 'cover',
							backgroundPosition: '50%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							overflow: 'hidden'}}
						/>
						<div>
							<h3>{el.title}</h3>
							<p>{el.description}</p>
							{/* <p>{'Read more'}</p> */}
						</div>
					</div>
				))}
			</Slider>
		</>
	);
};

export default OurCases;