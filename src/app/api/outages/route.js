import { NextResponse } from 'next/server'
import { apiClient } from "@/lib/terek";
import { cleanOutage } from "@/app/api/outages/util";
  
export async function GET(request) {
    try {
        const url = 'api/outages/list';
        const params = {
            active: true
        }
        const response = await apiClient.get(url, {params});
        const data = response.data;
        if(!data.result) {
            throw new Error(data);
        }
        const outages = data.objects.map((obj) => cleanOutage(obj));
        return NextResponse.json(outages);
    } catch(error) {
        console.error('Error fetching outages', error);
        return NextResponse.json({error: true})
    }
}
