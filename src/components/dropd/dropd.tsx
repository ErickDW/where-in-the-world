
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
} from "@nextui-org/react";
import { IoChevronDown } from "react-icons/io5";
import { FormatProps } from "./drop.props";
import { useState } from "react";


export const Dropd = ({ ...props }: FormatProps) => {

    const { search } = props;
    const regionsDefault = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const titleButtonDefault = 'Filter by Region';

    const [regions, setRegions] = useState<string[]>(regionsDefault);
    const [titleButton, settitleButton] = useState<string>(titleButtonDefault);


    const handleSearch = (key: React.Key) => {
        const pos: number = key as number;
        search(regions[pos]);

        if (regions[pos] === 'All') {
            setRegions(regionsDefault);
            settitleButton(titleButtonDefault);
        } else {
            const filteredArray = regions.filter(item => !item.includes(regions[pos]));
            filteredArray.push('All');
            setRegions(filteredArray);
            settitleButton(regions[pos]);
        }
    }

    return (
        <Dropdown placement="bottom-start" className="bg-primary" >
            <DropdownTrigger>
                <Button
                    color="primary"
                    variant="solid"
                    endContent={
                        <IoChevronDown className="text-sm text-primary-400 " />
                    }
                    className="gap-16"
                >
                    {titleButton}
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" onAction={handleSearch}>
                {
                    regions.map((val, index) => {
                        return <DropdownItem key={index}>{val}</DropdownItem>
                    })

                }
            </DropdownMenu>
        </Dropdown>
    );
}
