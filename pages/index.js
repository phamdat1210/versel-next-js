import Head from 'next/head'
import ContactCompany from '../components/ContactCompany'
import Header from '../components/Header'
import ServiceComponent from '../components/ServiceComponent'
import SliderHeader from '../components/SliderHeader'

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
			{/* <SliderHeader/> */}
			<body>

			</body>
			<main>
				<ContactCompany/>
				<ServiceComponent/>
			</main>
			<footer>
				{/* <a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a> */}
			</footer>
		</>
	)
}
