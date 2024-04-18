import MoviesList from '@/components/MoviesList';

const Home = async ({ params: { lang } }) => {
	const moviesData = await fetch(`${process.env.BASE_API_URL}/movies`);
	const movies = await moviesData.json();
	return <MoviesList lang={lang} movies={movies} />;
};

export default Home;
