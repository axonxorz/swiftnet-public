import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
  
export async function GET(request) {
    const headersList = headers()
    const referer = headersList.get('referer')
    const { searchParams } = new URL(request.url)
    const address = searchParams.get('address')
    const latlng = searchParams.get('latlng')
    if (!referer || !['https://swift-net.vercel.app', 'https://swift-net.ca', 'http://localhost'].some(url => referer.startsWith(url))) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // If we made it here, the request is from an allowed origin
    // Now, we forward the request to the Google Maps Geocoding API
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

        // Parse the response as JSON
        const data = await response.json();

        // Forward the response from Google Maps back to the client
        return NextResponse.json(data);
    } catch (error) {
        // Handle any errors
        return NextResponse.json({ error: 'Error processing request', details: error.message }, { status: 500 });
    }
}
