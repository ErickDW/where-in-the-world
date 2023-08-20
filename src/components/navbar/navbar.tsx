'use client'
import { ThemeSwitcher } from "../theme-switcher/themeSwitcher";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Link from "next/link";
import { Routes } from "@/routes/routes";
import './navbar.css';

export const Navbar = () => {
    return (
        <>
            <NextUIProvider>
                <NextThemesProvider attribute="class">
                    <header className="shadow">
                        <nav className="flex justify-between items-center max-w-[1350px] m-auto">
                            <Link href={`${Routes.get("Home")?.route}`}>
                                <h1 className="title">Where in the world?</h1>
                            </Link>
                            <ThemeSwitcher />
                        </nav>
                    </header>
                </NextThemesProvider>
            </NextUIProvider >
        </>
    )
};