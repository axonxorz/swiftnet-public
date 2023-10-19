import { NextResponse } from "next/server";
import { apiClient } from "@/lib/terek";
import { filterTaranaPlans } from "@/lib/lloydminster";


export async function POST(request) {
    const data = await request.json();
    data['company_id'] = process.env.TEREK_COMPANY_ID;
    data['sales_channel_id'] = process.env.TEREK_SALES_CHANNEL_ID;
    try {
        const url = 'api/prequalification/check';
        const response = await apiClient.post(url, data);

        // Special-case handling for Tarana plans in Lloydminster. To be removed when Terek #682 is complete.
        const plans = response.data.plans;
        if(plans.map((p) => p.name)
            .some((name) => name.toLowerCase().includes('tarana'))) {
            response.data.plans = filterTaranaPlans(data.location.lat, data.location.lng, plans);
        }

        return NextResponse.json(response.data);
    } catch(error) {
        console.error('Error in Prequalification check', error);
        // Fake a "successful" prequalification
        const prequalResponse = {
            serviceable: true,
            plans: []
        }
        return NextResponse.json(prequalResponse);
    }
}
