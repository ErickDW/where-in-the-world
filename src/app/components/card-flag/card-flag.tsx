import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import './card-flag.css';

export const CardFlag = ({data} : any) => {
    return (
        <>
            <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} className="bg-primary w-80 m-auto">
                <CardBody className="overflow-visible p-0">
                    <Image
                        shadow="sm"
                        radius="sm"
                        width="100%"
                        alt={data.title}
                        className="w-full object-cover h-[180px]"
                        src={data.img}
                    />
                </CardBody>
                <CardFooter className="containert-card-description">
                    <div>
                        <h3>
                            {data.title}
                        </h3>
                        <article>
                            <p>Population: <span>{data.population}</span></p>
                            <p>Region: <span>{data.region}</span></p>
                            <p>Capital: <span>{data.capital}</span></p>
                        </article>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}