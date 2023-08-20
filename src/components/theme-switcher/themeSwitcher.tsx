import { useState } from 'react';

import { Button } from "@nextui-org/react";
import { IoMoonOutline } from "react-icons/io5";
// components/ThemeSwitcher.tsx
import { useTheme } from "next-themes";

import './themeSwitcher.css';

export const ThemeSwitcher = () => {
    const [themeChange, setThemeChange] = useState(true);
    const { setTheme } = useTheme();

    const handleClick = () => {
        setThemeChange(!themeChange);
        themeChange ? setTheme('light') : setTheme('dark');
    }

    return (
        <>
            <div className="flex gap-4">
                <Button
                    color="primary"
                    variant="solid"
                    onClick={handleClick}
                    className='font-weight-bold'
                >
                    <IoMoonOutline className="lg"/>
                    Dark Mode
                </Button>
                
            </div>
        </>
    )
};