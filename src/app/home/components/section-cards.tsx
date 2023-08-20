'use client'

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { CardFlagLink } from "@/components/card-flag/card-flag-link";
import { FormatPropsSectionCard } from "../home.props";
import { Routes } from "@/routes/routes";

import '../home.css';

export const SectionCard = ({ ...props }: FormatPropsSectionCard) => {
    const { data } = props;
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class">
                <section
                    className="sections-cards 
                        gap-y-20 grid mt-10 mx-auto justify-center xlc:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-[1440px]">
                    {data.map((item, index) => (
                        <CardFlagLink
                            key={index}
                            data={item}
                            link={`${Routes.get("Flag")?.route}/${item.name.common}`}
                        />

                    ))}
                </section>
            </NextThemesProvider>
        </NextUIProvider>
    )
}