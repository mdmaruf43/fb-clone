
import Head from 'next/head';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';

const HomePage: React.FC = () => {
	return (
		<div>
			<Head>
				<title>Facebook: Home Page</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/assets/images/fb.png" />
			</Head>
			<Header />
			<Home />
		</div>
	)
}

export default HomePage;
