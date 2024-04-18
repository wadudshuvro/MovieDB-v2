import { getDictionary } from '@/app/[lang]/dictionaries';
import Image from 'next/image';

const MovieDetails = async ({ id, lang }) => {
	const movieDetailsData = await fetch(
		`${process.env.BASE_API_URL}/movies/${id}`
	);
	const movieDetails = await movieDetailsData.json();
	const {
		backdrop_path,
		poster_path,
		title,
		overview,
		release_date,
		vote_average,
		vote_count,
		popularity,
	} = movieDetails;
	const dict = await getDictionary(lang);
	return (
		<section>
			<div>
				<Image
					className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
					src={backdrop_path}
					width={1920}
					height={1080}
					alt=""
				/>
			</div>
			<div className="grid grid-cols-12 py-12 gap-8">
				<div className="col-span-2">
					<Image src={poster_path} width={200} height={300} alt="" />
				</div>
				<div className="col-span-8">
					<h2 className="font-bold text-slate-300 text-2xl">
						{title}
					</h2>
					<p className="my-2 text-slate-400 italic">{overview}</p>
					<ul className="text-slate-300 space-y-2 my-8">
						<li>Release Date : {release_date}</li>
						<li>Average Vote : {vote_average}</li>
						<li>Vote Count : {vote_count}</li>
						<li>Popularity : {popularity}</li>
					</ul>
				</div>
				<div className="col-span-2 space-y-4">
					<button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
						{dict.stream}
					</button>
					<button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
						{dict.download}
					</button>
				</div>
			</div>
		</section>
	);
};

export default MovieDetails;
