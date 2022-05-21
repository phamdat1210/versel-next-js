import Head from 'next/head'
import ContactCompany from '../components/ContactCompany'
import Header from '../components/Header'
import ServiceComponent from '../components/ServiceComponent'
import SliderHeader from '../components/SliderHeader'
import ContactParallax from "../components/ContactParallax";
import OurCases from "../components/OurCases";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUsParallax from '../components/AboutUsParallax'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'

export default function Home() {
	return (
		<>
			<Head>
				<title>SEA International Group</title>
				<meta name="description" content="SEA International Group" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header/>
			<SliderHeader/>
			<main>
				<ContactCompany/>
				<AboutUsParallax/>
				<AboutUs/>
				<ServiceComponent/>
				<ContactParallax/>
				<ContactUs/>
				<OurCases/>
			</main>
			<Footer/>
		</>
	)
}
