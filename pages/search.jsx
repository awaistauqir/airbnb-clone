import { format } from 'date-fns';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import InfoCard from '../components/InfoCard';
import MapBox from '../components/MapBox';
const SearchPage = ({ searchedPlaces, error }) => {
	const router = useRouter();
	const { location, startDate, endDate, numOfGuests } = router.query;

	const formattedStartDate = new Date(startDate).toLocaleDateString('en-UK');
	const formattedEndDate = new Date(endDate).toLocaleDateString('en-UK');
	const range = `${formattedStartDate} - ${formattedEndDate}`;
	return (
		<>
			<Head>
				<title>Search</title>
			</Head>
			<div className="max-w-7xl mx-auto p-5 md:px-10">
				{location && (
					<p className="text-xs">
						{`300+stays -  ${range && ''} -  for ${
							numOfGuests && ''
						} number of guests`}
					</p>
				)}
				<h1 className="text-3xl font-semibold mt-2 mb-6">
					Stays in {location}
				</h1>
				<div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
					<p className="filter-button">Cancellation Flexibility</p>
					<p className="filter-button">Type of Place</p>
					<p className="filter-button">Price</p>
					<p className="filter-button">Rooms and Beds</p>
					<p className="filter-button">More filters</p>
				</div>
				<div className="border-b w-full my-2"></div>
				{!error && (
					<main className="md:flex md:space-x-7">
						<section className="xl:w-[50%]">
							<div className="flex flex-col space-y-4">
								{searchedPlaces?.map(
									({
										img,
										location,
										title,
										description,
										star,
										price,
										total,
									}) => {
										return (
											<InfoCard
												key={img}
												location={location}
												title={title}
												star={star}
												price={price}
												description={description}
												total={total}
												img={img}
											/>
										);
									}
								)}
							</div>
						</section>
						<section className="hidden xl:inline-flex xl:w-[50%] xl:py-5">
							<MapBox searchResults={searchedPlaces} />
						</section>
					</main>
				)}
			</div>
		</>
	);
};

export default SearchPage;
export async function getStaticProps() {
	try {
		const response = await fetch('https://jsonkeeper.com/b/5NPS');
		const fetchedPlaces = await response.json();
		return {
			props: {
				searchedPlaces: fetchedPlaces,
				error: false,
			},
		};
	} catch (e) {
		return {
			props: {
				searchedPlaces: [],
				error: true,
			},
		};
	}
}
