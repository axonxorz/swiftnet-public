import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { guardGisEndpoint } from "@/lib/gis";
  
export async function GET(request) {
    const headersList = headers()
    const referer = headersList.get('referer')
    const { searchParams } = new URL(request.url)
    const address = searchParams.get('address')
    const latlng = searchParams.get('latlng')

    try {
        guardGisEndpoint(referer)
    } catch(e) {
        console.warn(`Referer ACL failure: ${referer}`);
        return NextResponse.json({error: 'Forbidden'}, {status: 403});
    }

    try {
        let apiURL;
        if (address) {
            apiURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.GEOCODE_API}`;
        } else if (latlng) {
            apiURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${encodeURIComponent(latlng)}&sensor=true&key=${process.env.GEOCODE_API}`;
        } else {
            return NextResponse.json({ error: 'Bad request: Please provide either an address or latitude and longitude' }, { status: 400 });
        }
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error('Google API responded with an error');
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        // Handle any errors
        return NextResponse.json({ error: 'Error processing request', details: error.message }, { status: 500 });
    }
}
