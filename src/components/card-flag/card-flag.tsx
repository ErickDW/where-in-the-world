import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import './card-flag.css';
import { FormatProps } from "./card-flag-link.props";
import { formatNumberWithCommas, isNone } from "@/utils/utils";

export const CardFlag = ({ ...props }: FormatProps) => {
    const { data } = props;
    return (
        <>
            <Card shadow="sm" isPressable className="bg-primary w-[16.7rem] m-auto h-full">
                <CardBody className="overflow-visible p-0">
                    <Image
                        radius="sm"
                        width="100%"
                        alt={data.name.common}
                        className="w-full object-cover h-[180px]"
                        src={data.flags.svg}
                    />
                    <div className="container-card-description mb-3">
                        <h2>
                            {data.name.common}
                        </h2>
                        <article className="span">
                            <p>Population: <span>{formatNumberWithCommas(data.population)}</span></p>
                            <p>Region: <span>{data.region}</span></p>
                            <p>Capital: <span>{isNone(data.capital)}</span></p>
                        </article>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}