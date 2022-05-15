import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1
};

const SliderHeader = () => {
	return (
		<>
			<Slider {...settings}>
				<img src={'/slider_1.jpg'}/>
				<img src={'/slider_2.jpg'}/>
			</Slider>
		</>
	);
}

export default SliderHeader;