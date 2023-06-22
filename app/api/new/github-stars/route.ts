import { type NextRequest, NextResponse } from 'next/server';
import { fetchGithubStars } from '../../../../shared/fetch-github-stars';

export async function GET(request: NextRequest) {
    console.log('fetch github stars from app router', new Date());
    const library = request.nextUrl.searchParams.get('library');
    const stars = await fetchGithubStars(library || 'vercel/next.js');

    return NextResponse.json({
        stars
    });
}