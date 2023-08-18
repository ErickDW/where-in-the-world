import { Dropd } from "@/app/components/dropd/dropd";
import { Input } from "@nextui-org/react";
import { IoSearchSharp } from "react-icons/io5";
import { CardFlagLink } from "@/app/components/card-flag/card-flag-link";
import { Routes } from "@/app/routes/routes";
import { FlagsMock } from "@/app/utils/mocks";
import './home.css';

export default function Home() {

    return (
        <>
            <section className="flex flex-wrap justify-between gap-4">
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
                />
                <Dropd />
            </section>
            <section className="sections-cards gap-20 grid 
            mt-10 justify-center xlc:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {FlagsMock.map((item, index) => (
                    <CardFlagLink
                        key={index}
                        data={item} 
                        link={`${Routes.get("Flag")?.route}/${index}`} 
                    />

                ))}
            </section>
        </>
    );
}