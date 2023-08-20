import { NextResponse } from 'next/server';


export async function GET(request: any, { params }: any) {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.border}`);
    const data = await res.json();
    return NextResponse.json(data);
}