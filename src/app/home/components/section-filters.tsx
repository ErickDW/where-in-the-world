'use client'
import { Input, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { IoSearchSharp } from "react-icons/io5";
import { Dropd } from "@/components/dropd/dropd";

import '../home.css';
import { FormatPropsSectionFilters } from "../home.props";

export const SectionFilters = ({ ...props }: FormatPropsSectionFilters) => {
    const { searchName, searchRegion } = props;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        searchName(event.target.value);
    };

    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class">
                <section className="flex flex-wrap justify-between gap-4 max-w-[1350px] m-auto">
                    <Input
                        type="search"
                        label=""
                        placeholder="Search for a country..."
                        labelPlacement="outside"
                        startContent={
                            <IoSearchSharp className="text-2xl text-primary-400 pointer-events-none flex-shrink-0" />
                        }
                        className="max-w-sm min-w-max"
                        classNames={{
                            inputWrapper: [
                                "bg-primary-500",
                                "data-[hover=true]:bg-primary-500",
                                "group-data-[focus=true]:bg-primary-500"
                            ],
                            input: [
                                "placeholder:text-primary-400",
                                "text-primary-400"
                            ],

                        }}
                        onChange={handleInputChange}
                    />
                    <Dropd search={searchRegion}/>
                </section>
            </NextThemesProvider>
        </NextUIProvider>
    )
}