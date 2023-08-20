'use client'

import { Image } from "@nextui-org/react";
import { FormatProps } from "../flag.props";

export const ContImg = ({ ...props }: FormatProps) => {
    const { data } = props;

    return (
        <div className="container-img min-w-[320px] max-w-[730px]">
            <Image
                shadow="sm"
                radius="sm"
                width="100%"
                alt={data.name.common}
                className="w-full object-cover h-full"
                src={data.flags.svg}
            />
        </div>
    )
}