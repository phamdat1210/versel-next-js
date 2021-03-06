import Slider from "react-slick";

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	arrows: false
};

const SliderHeader = () => {
	return (
		<Slider {...settings}>
			<img src={'/slider_1.jpg'}/>
			<img src={'/slider_2.jpg'}/>
		</Slider>
	);
}

export default SliderHeader;