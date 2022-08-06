import Image from 'next/image';
import {
	GlobeAltIcon,
	MenuIcon,
	SearchIcon,
	UserCircleIcon,
	UserIcon,
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Header = () => {
	const router = useRouter();
	const [searchInput, setSearchInput] = useState('');
	const [openCalendar, setOpenCalendar] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [numOfGuests, setNumofGuests] = useState(1);

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: 'selection',
	};
	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};
	const closeCalendar = () => {
		setOpenCalendar(false);
		setSearchInput('');
		setNumofGuests(1);
	};
	const search = () => {
		router.push({
			pathname: '/search',
			query: {
				location: searchInput,
				startDate: startDate.toISOString(),
				endDate: endDate.toISOString(),
				numOfGuests,
			},
		});
		setOpenCalendar(false);
	};

	return (
		<header className="sticky top-0 z-50 md:grid md: grid-cols-[200px_auto_250px] bg-white p-5 md:px-10">
			{/* Left */}
			<Link href={'/'} passHref>
				<div className="relative hidden md:flex items-center h-10 cursor-pointer my-auto">
					<Image
						src={
							'https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png'
						}
						layout="fill"
						objectFit="contain"
						objectPosition="left"
					/>
				</div>
			</Link>
			<div className=" md:w-auto flex items-center border-2 rounded-full px-3 py-2 shadown-lg ">
				<input
					value={searchInput}
					onChange={(e) => {
						setSearchInput(e.target.value);
					}}
					onFocus={() => {
						setOpenCalendar(true);
					}}
					type="text"
					placeholder={'Start your search'}
					className="bg-transparent ml-1 outline-none flex-grow text-gray-600 plceholder-gray-400 "
				/>
				<SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 " />
			</div>

			<div className="hidden md:flex space-x-2 items-center justify-end rounded-full text-gray-500">
				<p className="hidden md:inline cursor-pointer rounded-full hover:bg-gray-100 p-2">
					Become a host
				</p>
				<GlobeAltIcon className="h-10 cursor-pointer p-2 rounded-full hover:bg-gray-100" />
				<div className="flex items-center space-x-2 p-2 rounded-full border-2 hover:shadow-lg cursor-pointer">
					<MenuIcon className="h-5" />
					<UserCircleIcon className="h-5" />
				</div>
			</div>
			{searchInput.length > 1 && openCalendar ? (
				<div className="flex flex-col col-span-3 mx-auto">
					<DateRangePicker
						ranges={[selectionRange]}
						minDate={new Date()}
						rangeColors={['#FD5B61']}
						onChange={handleSelect}
					/>
					<div className="flex items-center border-b mb-4 justify-between">
						<h2 className="text-2xl flex-grow font-semibold">
							Number of guests
						</h2>
						<div className="flex items-center">
							<UserIcon className="h-5" />
							<input
								type="number"
								className="w-12 ml-2 text-lg outline-none text-red-400"
								min={1}
								value={numOfGuests}
								onChange={(e) => {
									setNumofGuests(+e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="flex">
						<button onClick={closeCalendar} className="flex-grow text-gray-500">
							Cancel
						</button>
						<button className="flex-grow text-red-400" onClick={search}>
							Search
						</button>
					</div>
				</div>
			) : (
				''
			)}
		</header>
	);
};

export default Header;
