import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { guardGisEndpoint } from "@/lib/gis";
import axios from "axios";
  
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
        const apiURL = 'https://maps.googleapis.com/maps/api/geocode/json';
        const params = {key: process.env.GEOCODE_API}
        if (address) {
            params.address = address
        } else if (latlng) {
            params.latlng = latlng
        } else {
            return NextResponse.json({ error: 'Bad request: Please provide either an address or latitude and longitude' }, { status: 400 });
        }
        try {
            const response  = await axios.get(apiURL, {params: params})
            return NextResponse.json(response.data);
        } catch (e) {
            throw new Error('Google API responded with an error');
        }

    } catch (error) {
        // Handle any errors
        return NextResponse.json({ error: 'Error processing request', details: error.message }, { status: 500 });
    }
}
