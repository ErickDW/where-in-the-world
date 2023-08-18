
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
} from "@nextui-org/react";
import { IoChevronDown } from "react-icons/io5";
export const Dropd = () => {

    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

    return (
        <Dropdown placement="bottom-start" className="bg-primary" >
            <DropdownTrigger>
                <Button
                    color="primary"
                    variant="solid"
                    endContent={
                        <IoChevronDown className="text-xs text-primary-400 pointer-events-none flex-shrink-0" />
                    }
                    className="gap-18"
                    
                >
                    Filter by Region
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                {
                    regions.map((val, index) => {
                        return <DropdownItem key={index}>{val}</DropdownItem>
                    })

                }
            </DropdownMenu>
        </Dropdown>
    );
}
