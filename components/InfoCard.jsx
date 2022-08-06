import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
const InfoCard = ({
	img,
	location,
	title,
	description,
	star,
	price,
	total,
}) => {
	return (
		<div className="flex flex-col md:flex-row py-7 px-2 border-b cursor-pointer rounded-xl hover:opacity-80 hover:shadow-lg transition duration-150 ease-out">
			<div className="relative h-40 w-100 md:h-52 md:w-52">
				<Image src={img} layout="fill" objectFit="cover" />
			</div>
			<div className="flex flex-col flex-grow py-5 md:pl-5">
				<div className="flex justify-between">
					<p>{location}</p>
					<HeartIcon className="h-7 cursor-pointer " />
				</div>
				<h4 className="text-xl">{title}</h4>
				<div className="border-b w-10 pt-2"></div>

				<p className="mt-2 text-sm text-gray-500 flex-grow">{description}</p>

				<div className="flex justify-between items-end">
					<p className="flex items-center">
						<StarIcon className="h-5 text-red-400" />
						{star}
					</p>
					<div>
						<p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
						<p className="text-right font-extralight">{total}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
