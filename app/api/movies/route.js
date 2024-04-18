import { getAllMovies } from '@/lib/moviedb';
import { NextResponse } from 'next/server';

export async function GET() {
	const moviesData = await getAllMovies();
	return NextResponse.json(moviesData);
}
