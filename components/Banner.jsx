import Image from 'next/image';
const Banner = () => {
	return (
		<div className="relative h-[300px] sm-[h-400px] lg:h-[500px] xl:[h-600px] 2xl:-h-[700px]">
			<Image
				src={
					'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				}
				layout="fill"
				objectFit="cover"
				priority
			/>
			s
			<div className="absolute grid place-content-center h-full w-full">
				<p className="text-sm sm:text-lg text-white">Not sure where to go?</p>
				<button className="text-purple-500 bg-white px-10 py-4 shoadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition  duration-150">
					I am flexible
				</button>
			</div>
		</div>
	);
};

export default Banner;
