import { NextResponse } from 'next/server'
import { apiClient } from "@/lib/terek";
  
export async function GET(request, {params}) {
    try {
        const outage_uuid = params.uuid;
        const url = `api/outages/geometry/${outage_uuid}`;
        const response = await apiClient.get(url, {params});
        const data = response.data;
        return NextResponse.json(data);
    } catch(error) {
        console.error('Error fetching outage geometry', error);
        return NextResponse.json({error: true})
    }
}
