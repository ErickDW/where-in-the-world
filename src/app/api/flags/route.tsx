import { NextResponse } from 'next/server';

console.log(process.env.TOKEN, process.env.SECRET_KEY);

export async function GET() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    return NextResponse.json(data);
}

export async function POST(request : any) {
    const { example } = await request.json();
    console.log(example)

    return NextResponse.json({
        message: "Datos creados"
    });
}

export async function PUT(request : any) {
    const { example } = await request.json();
    console.log(example)

    return NextResponse.json({
        message: "Actulizando datos"
    });
}

export async function DELETE(request : any) {
    const { example } = await request.json();
    console.log(example)

    return NextResponse.json({
        message: "Datos eliminados"
    });
}