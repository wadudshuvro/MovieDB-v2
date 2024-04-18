import { getMovieById } from '@/lib/moviedb';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
	const movieId = params?.id;
	const data = await getMovieById(movieId);
	return NextResponse.json(data);
}
