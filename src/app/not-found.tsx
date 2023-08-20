import Link from "next/link"

export default function NotFound(){
    return (
        <div className="text-center h-[calc(100vh-20rem)] flex flex-col justify-center">
            <h1>Not Found | 404</h1>
            <h3>Back <Link href={"/"}>Home</Link></h3>
        </div>
    )
}