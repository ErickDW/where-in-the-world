'use client'

import { SectionCard } from "./section-cards";
import { SectionFilters } from "./section-filters";
import { FormatPropsSectionCard } from "../home.props";
import { useEffect, useState } from "react";
import { flagsInterface } from "@/utils/interfaces";

import '../home.css';


export const HomeFull = ({ ...props }: FormatPropsSectionCard) => {
    const { data } = props;
    const [name, setName] = useState<string>();
    const [flags, setFlags] = useState<flagsInterface[]>(data);
    const [region, setRegion] = useState<string>('');

    const t = (top : any): string =>{
        return top ? top : "";
    }

    useEffect(() => {
        if (name === undefined) {
            setName('');
            return;
        }
        if (region === undefined ) {
            setRegion('');
            return;
        }
        fetch(`/api/flags/search?name=${t(name)}&region=${t(region)}`)
            .then(async function (res) {
                const search = await res.json();
                if(search.status === 404){
                    setFlags(data);
                    return;
                }
                setFlags(search);
            })
    }, [name, data, region])




    const handleSearhDataName = (data: string) => {
        setName(data);
    };

    const handleSearhDataRegion = (data: string) => {
        setRegion(data);
    };

    return (
        <>
            <SectionFilters
                searchName={handleSearhDataName}
                searchRegion={handleSearhDataRegion}
            />
            <SectionCard
                data={flags}
            />
        </>
    );
}
