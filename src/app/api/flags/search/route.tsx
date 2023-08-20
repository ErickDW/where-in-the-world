import { NextResponse } from 'next/server';
import { flagsInterface } from '@/utils/interfaces';

export async function GET(request: any, { params }: any) {
    const { searchParams } = new URL(request.url);
    let name = searchParams.get('name');
    let region = searchParams.get('region');

    let data: flagsInterface[] = [];
    
    const isEmpty = (dat:any): boolean => {
        return (dat === undefined || dat === null || dat === '')
    }

    const notNull = (dat:any): string => {
        return !isEmpty(dat) ? dat : '';
    }

    if (isEmpty(name) && isEmpty(region)) {
        return NextResponse.json({
            status: 404
        });
    }

    if (!isEmpty(region)) {
        const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        data = await res.json() as flagsInterface[];
        if (!isEmpty(name)) {
            const filteredData = data.filter(item => item.name.common.toLowerCase().includes(notNull(name)));
            data = filteredData;

        }
    } else if (!isEmpty(name)){
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        data = await res.json() as flagsInterface[];
    }
    return NextResponse.json(data);
}