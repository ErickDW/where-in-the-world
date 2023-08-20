'use client'
import { HomeFull } from "./components/home";
import { useState } from "react";

import './home.css';
import { FormatPropsSectionCard } from "./home.props";

export const Home = ({ ...props }: FormatPropsSectionCard) => {
    const { data } = props;
    return (
        <>
            <HomeFull data={data} />
        </>
    );
}

