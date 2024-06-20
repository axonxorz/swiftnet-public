import { NextResponse } from 'next/server'
import { apiClient } from "@/lib/terek";
  
export async function GET(request) {
    try {
        const url = 'api/outages/list';
        const params = {
            active: true
        }
        console.log(process.env.TEREK_BASE_URL);
        console.log('url', url);
        const response = await apiClient.get(url, {params});
        console.log('response', response);
        const data = response.data;
        console.log('response.data', response.data);
        if(!data.result) {
            console.log('error result');
            throw new Error(data);
        }
        const outages = data.objects;
        console.log('outages.length', outages.length)
        return NextResponse.json(outages);
    } catch(error) {
        console.error('Error fetching outages', error);
        return NextResponse.json({error: true})
    }
}
