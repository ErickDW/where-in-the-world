import Link from "next/link";
import { CardFlag } from "@/components/card-flag/card-flag";
import { FormatProps } from "./card-flag-link.props";

export const CardFlagLink = ({ ...props} : FormatProps) => {
    const { link, data } = props;

    const linkaActive = (link : any) : string =>{
        return link ? link : '/';
    }

    return (
        <>
            <Link
                href={linkaActive(link)}
            >
                <CardFlag data={data} />
            </Link>
        </>
    )
}