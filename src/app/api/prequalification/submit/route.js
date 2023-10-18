import { NextResponse } from "next/server";
import { apiClient } from "@/lib/terek";


export async function POST(request) {
    const data = await request.json();
    try {
        const url = 'api/prequalification/submit';
        const response = await apiClient.post(url, data);
        return NextResponse.json(response.data);
    } catch(error) {
        return NextResponse.json({message: error?.message || 'Unknown server error'}, {status: 400});
    }
}
