'use client'

import { Button } from '@nextui-org/react';
import Link from "next/link";
import { Routes } from "@/routes/routes";
import { FormatPropsBorder } from '../flag.props';
import '../flag.css'

export const BorderFlags = ({ ...props } : FormatPropsBorder) => {
    const { borderFlags } = props;

    return (
        borderFlags[0] === 'None' ?
            <Button
                color="primary"
                variant="solid"
                className='shadow'
            >
                None
            </Button> :
            borderFlags.map((value, index) => (
                <Link key={index} href={`${Routes.get("Flag")?.route}/${value}`}>
                    <Button
                        color="primary"
                        variant="solid"
                        className='shadow w-full'
                    >
                        {value}
                    </Button>
                </Link>
            ))
    )
}

export default BorderFlags;