import { NextResponse } from 'next/server'
import { apiClient } from "@/lib/terek";
import { cleanOutage } from "@/app/api/outages/util";
  
export async function GET(request, {params}) {
    try {
        const outage_uuid = params.uuid;
        const url = `api/outages/get/${outage_uuid}`;
        const response = await apiClient.get(url, {params});
        const data = response.data;
        if(!data.result) {
            throw new Error(data);
        }
        return NextResponse.json(cleanOutage(data.object));
    } catch(error) {
        console.error('Error fetching outage geometry', error);
        return NextResponse.json({error: true})
    }
}
