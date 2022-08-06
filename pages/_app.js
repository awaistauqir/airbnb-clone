import Header from '../components/Header';
import Footer from '../components/Footer';
import Router from 'next/router';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import ProgressBar from '@badrap/bar-of-progress';

const progress = new ProgressBar({
	size: 4,
	color: '#FE595E',
	className: 'z-50',
	delay: 100,
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />;
			<Footer />
		</>
	);
}

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

export default MyApp;
