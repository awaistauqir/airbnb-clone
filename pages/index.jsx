import Head from 'next/head';
import Banner from '../components/Banner';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardsData }) {
	return (
		<>
			<Head>
				<title>AirBnb Clone</title>
			</Head>
			<div>
				<Banner />
				<main className="max-w-7xl mx-auto p-5">
					<section className="">
						<h2 className="text-2xl font-semibold mb-5">Explore Nearby</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
							{exploreData?.map(({ location, img, distance }) => (
								<SmallCard
									location={location}
									distance={distance}
									img={img}
									key={img}
								/>
							))}
						</div>
					</section>
					<section>
						<h2 className="text-4xl font-semibold my-8">Live Anywhere</h2>
						<div className="flex space-x-3 overflow-x-scroll overflow-y-hidden scrollbar-hide p-3 mx-3 rounded-xl ">
							{cardsData.map(({ img, title }) => (
								<MediumCard key={img} img={img} title={title} />
							))}
						</div>
					</section>
					<LargeCard
						img="https://links.papareact.com/4cj"
						title={'The Greatest Outdoors'}
						description="Wishlists curated by Airbnb"
						buttonText={'Get Inspired'}
					/>
				</main>
			</div>
		</>
	);
}
export async function getServerSideProps() {
	const cardsData = await fetch('https://jsonkeeper.com/b/VHHT');
	const jsonCardData = await cardsData.json();
	const exploreData = await fetch('https://jsonkeeper.com/b/4G1G');
	const jsonExploreData = await exploreData.json();
	if (!jsonExploreData || !jsonCardData) {
		return {
			props: {},
			notFound: true,
		};
	}
	return {
		props: {
			exploreData: jsonExploreData,
			cardsData: jsonCardData,
		},
	};
}
