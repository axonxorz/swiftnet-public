import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { isNil } from "lodash-es";

export async function POST(request) {
    const headersList = headers()
    const referer = headersList.get('referer')
    const {searchParams} = new URL(request.url);
    const [lat, lng] = [searchParams.get('lat'), searchParams.get('lng')]
    if (!referer || !['https://swift-net.vercel.app', 'https://swift-net.ca', 'http://localhost'].some(url => referer.startsWith(url))) {
        return NextResponse.json({error: 'Forbidden'}, {status: 403});
    }

    if (isNil(lat) || isNil(lng)) {
        return NextResponse.json({error: 'lat/lng not provided'}, {status: 400});
    }

    try {
        const apiURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GEOCODE_API}`;
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('Google API responded with an error');
        }
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({error: 'Error processing request', details: error.message}, {status: 500});
    }
}