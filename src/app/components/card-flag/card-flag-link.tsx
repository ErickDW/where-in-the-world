import Link from "next/link";
import { CardFlag } from "@/app/components/card-flag/card-flag";

export const CardFlagLink = ({ ...props }: any) => {
    const { data, link } = props;
    return (
        <>
            <Link
                href={link}
            >
                <CardFlag data={data} />
            </Link>
        </>
    )
}