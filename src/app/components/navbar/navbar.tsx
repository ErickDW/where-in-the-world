'use client'
import { ThemeSwitcher } from "../theme-switcher/themeSwitcher";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Link from "next/link";
import { Routes } from "@/app/routes/routes";
import './navbar.css';

export const Navbar = () => {
    return (
        <>
            <NextUIProvider>
                <NextThemesProvider attribute="class">
                    <header>
                        <nav className="flex justify-between shadow items-center">
                            <Link href={`${Routes.get("Home")?.route}`}>
                                <h1>Where in the world?</h1>
                            </Link>
                            <ThemeSwitcher />
                        </nav>
                    </header>
                </NextThemesProvider>
            </NextUIProvider >
        </>
    )
};