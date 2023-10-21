import { NextResponse } from "next/server";
import { apiClient } from "@/lib/terek";
import { filterTaranaPlans } from "@/lib/tarana-coverage";


export async function POST(request) {
    const data = await request.json();
    data['company_id'] = process.env.TEREK_COMPANY_ID;
    data['sales_channel_id'] = process.env.TEREK_SALES_CHANNEL_ID;
    try {
        const url = 'api/prequalification/check';
        const response = await apiClient.post(url, data);

        // Special-case handling for Tarana plans. To be removed when Terek #682 is complete.
        const plans = response.data.plans;
        console.log(`${plans.length} plans:${JSON.stringify(plans, null, 2)}`);
        if(plans.map((p) => p.name)
            .some((name) => name.toLowerCase().includes('tarana'))) {
            console.log('Returned plans contain a Tarana plan, attempting filtering');
            response.data.plans = filterTaranaPlans(data.location.lat, data.location.lng, plans);
            console.log(`${response.data.plans.length} plans after filtering`)
        } else {
            console.log('Returned plans do not contain Tarana plans');
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
