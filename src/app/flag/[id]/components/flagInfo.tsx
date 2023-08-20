
import { concatenateStrings, formatNumberWithCommas, isNone } from "@/utils/utils";
import BorderFlags from "./border-flags";
import { FormatProps } from "../flag.props";
import { ContImg } from "./cont-img";
import { ButtonBack } from "./button-back";
import { flagsInterface } from '@/utils/interfaces';

import '../flag.css';

async function loadBordersFlag(id: string) {
    const res = await fetch(`http://localhost:3000/api/flags/search/border/${id}`);
    const data: flagsInterface[] = await res.json();
    return data[0].name.common;
}

async function borderCountries(border: any) {
    const nameBorders: string[] = [];
    if (border) {
        const bord: string[] = border;
        bord.map(async function (value) {
            const data: string = await loadBordersFlag(value);
            nameBorders.push(data)
        })
        await new Promise((resolve) => setTimeout(resolve, 500))
        return nameBorders;
    }
    return ['None'];
}

async function FlagInfo({ ...props }: FormatProps) {
    const { data } = props;
    const borders: string[] = await borderCountries(data.borders);



    return (
        <>
            <ButtonBack />
            <section className="section-info flex flex-wrap items-center justify-center gap-10 xl:gap-28">
                <ContImg data={data} />
                <article>
                    <h1 className="mb-7">
                        {data.name.common}
                    </h1>
                    <section className="flex flex-wrap mb-10 gap-10 xl:gap-28">
                        <article className="span">
                            <p>Native Name: <span>{data.name.common}</span></p>
                            <p>Population: <span>
                                {formatNumberWithCommas(data.population)}
                            </span></p>
                            <p>Region: <span>{data.region}</span></p>
                            <p>Sub Region: <span>{data.subregion}</span></p>
                            <p>Capital: <span>{isNone(data.capital)}</span></p>
                        </article>
                        <article className="span">
                            <p>Top Level Domain: <span> {isNone(data.tld)}</span></p>
                            <p>{`Currencies: `}
                                {Object.entries(data.currencies).map(([currencyCode, currencyData]) => (
                                    <span key={currencyCode}>
                                        {currencyData.name}
                                    </span>
                                ))}
                            </p>
                            <p className="max-w-[250px]">{`Languages: `}
                                <span>{concatenateStrings(data.languages)}</span>
                            </p>
                        </article>
                    </section>
                    <article className="flex flex-wrap gap-4 max-w-custom">
                        <h3 className="custom-font">Border Countries: </h3>
                        <div className="grid grid-cols-3 gap-2">
                            {<BorderFlags borderFlags={borders} />}
                        </div>
                    </article>
                </article>

            </section>

        </>
    )
}

export default FlagInfo;