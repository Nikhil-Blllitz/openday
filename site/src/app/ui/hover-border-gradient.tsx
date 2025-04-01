"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverBorderGradient = ({
    children,
    containerClassName,
    borderClassName,
    as: Component = "button",
    className,
    ...props
}: {
    children?: React.ReactNode;
    containerClassName?: string;
    borderClassName?: string;
    as?: any;
    className?: string;
    [key: string]: any;
}) => {
    return (
        <Component
            className={cn(
                "group relative inline-flex h-12 items-center justify-center rounded-full border border-transparent bg-white px-8 transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",
                containerClassName
            )}
            {...props}
        >
            <div
                className={cn(
                    "pointer-events-none absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-[#FF8A00] via-[#99E265] to-[#FF8A00] opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    borderClassName
                )}
            />
            <div className={cn("relative", className)}>{children}</div>
        </Component>
    );
}; 