'use client'
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Home from "./layout/home/page";

export default function App() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class">
        <Home />
      </NextThemesProvider>
    </NextUIProvider>
  );
}