import MovieDetails from '@/components/MovieDetails';

const MovieDetailsPage = ({ params: { id, lang } }) => {
	return <MovieDetails lane={lang} id={id} />;
};

export default MovieDetailsPage;
