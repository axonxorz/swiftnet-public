import { NextResponse } from 'next/server'
import { apiClient } from "@/lib/terek";


const cleanOutage = (outage) => {
    // Remove unnecessary props from Outage records
    return {
        uuid: outage.uuid,
        created_on: outage.created_on,
        message: outage.message
    }
}

  
export async function POST() {
    try {
        const url = 'api/outages/list';
        const params = {
            active: true
        }
        console.log(`url=${process.env.TEREK_BASE_URL}/${url}`);
        const response = await apiClient.get(url, {params});
        const data = response.data;
        console.log('response', response);
        console.log('response.data', response.data);
        if(!data.result) {
            console.log('Error result');
            throw new Error(data);
        }
        const outages = data.objects.map((outage) => cleanOutage(outage));
        console.log(`Active outages: ${outages.length}`)
        return NextResponse.json(outages);
    } catch(error) {
        console.error('Error fetching outages', error);
        return NextResponse.json({error: true})
    }
}
