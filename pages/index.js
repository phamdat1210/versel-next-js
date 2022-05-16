import Head from 'next/head'
import ContactCompany from '../components/ContactCompany'
import Header from '../components/Header'
import ServiceComponent from '../components/ServiceComponent'
import SliderHeader from '../components/SliderHeader'
import ContactParallax from "../components/ContactParallax";
import OurCases from "../components/OurCases";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Financity</title>
				<meta name="description" content="Financity" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
			</Head>
			<Header/>
			 <SliderHeader/>
			<main>
				<ContactCompany/>
				<ServiceComponent/>
				<ContactParallax/>
				<OurCases/>
			</main>
			<Footer/>
		</>
	)
}
