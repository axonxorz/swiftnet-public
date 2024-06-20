import { NextResponse } from 'next/server'
import { apiClient } from "@/lib/terek";
  
export async function GET(request) {
    try {
        const url = 'api/outages/list';
        const params = {
            active: true
        }
        console.debug(process.env.TEREK_BASE_URL);
        console.debug('url', url);
        const response = await apiClient.get(url, {params});
        console.debug('response', response);
        const data = response.data;
        console.debug('response.data', response.data);
        if(!data.result) {
            console.log('error result');
            throw new Error(data);
        }
        const outages = data.objects;
        console.debug('outages.length', outages.length)
        return NextResponse.json(outages);
    } catch(error) {
        console.error('Error fetching outages', error);
        return NextResponse.json({error: true})
    }
}
