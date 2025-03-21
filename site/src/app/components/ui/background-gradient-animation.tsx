'use client';

import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
    gradientBackgroundStart = "rgb(108, 0, 162)",
    gradientBackgroundEnd = "rgb(0, 17, 82)",
    firstColor = "18, 113, 255",
    secondColor = "221, 74, 255",
    thirdColor = "100, 220, 255",
    fourthColor = "200, 50, 50",
    fifthColor = "180, 180, 50",
    size = "80%",
    blendingValue = "hard-light",
    children,
    className,
    interactive = true,
    containerClassName,
}: {
    gradientBackgroundStart?: string;
    gradientBackgroundEnd?: string;
    firstColor?: string;
    secondColor?: string;
    thirdColor?: string;
    fourthColor?: string;
    fifthColor?: string;
    size?: string;
    blendingValue?: string;
    children?: React.ReactNode;
    className?: string;
    interactive?: boolean;
    containerClassName?: string;
}) => {
    const interactiveRef = useRef<HTMLDivElement>(null);

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [cursorMoving, setCursorMoving] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const moveCursor = (x: number, y: number) => {
        setCursorPosition({ x, y });
    };

    useEffect(() => {
        if (!interactive) return;

        const handleMouseMove = (event: MouseEvent) => {
            const rect = interactiveRef.current?.getBoundingClientRect();
            if (rect) {
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                setMousePosition({ x, y });
                setCursorMoving(true);
            }
        };

        const handleMouseLeave = () => {
            setCursorMoving(false);
        };

        const interactiveElement = interactiveRef.current;
        if (interactiveElement) {
            interactiveElement.addEventListener("mousemove", handleMouseMove);
            interactiveElement.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (interactiveElement) {
                interactiveElement.removeEventListener("mousemove", handleMouseMove);
                interactiveElement.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, [interactive]);

    useEffect(() => {
        let animationFrameId: number;

        const animateCursor = () => {
            if (cursorMoving) {
                const dx = mousePosition.x - cursorPosition.x;
                const dy = mousePosition.y - cursorPosition.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance > 1) {
                    moveCursor(
                        cursorPosition.x + dx * 0.1,
                        cursorPosition.y + dy * 0.1
                    );
                }
            }
            animationFrameId = requestAnimationFrame(animateCursor);
        };

        animationFrameId = requestAnimationFrame(animateCursor);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [cursorMoving, mousePosition, cursorPosition]);

    return (
        <div
            className={cn(
                "relative flex h-[50rem] overflow-hidden [--gradient-background-start:rgb(0,0,0)] [--gradient-background-end:rgb(0,0,0)]",
                containerClassName
            )}
            style={{
                background: `linear-gradient(to bottom right, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
            }}
        >
            <svg className="absolute inset-0 h-full w-full">
                <defs>
                    <filter id="blurFilter" x="-100%" y="-100%" width="400%" height="400%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
                    </filter>
                </defs>
            </svg>
            <div
                className={cn(
                    "absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2",
                    className
                )}
                style={{
                    opacity: 0.3,
                    mixBlendMode: blendingValue,
                }}
            >
                <div
                    ref={interactive ? interactiveRef : undefined}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                            width: size,
                            aspectRatio: "1/1",
                        }}
                    >
                        {/* Gradient circles */}
                        <div
                            className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4090ff]"
                            style={{
                                boxShadow: `0 0 150px 100px rgba(${firstColor}, 0.5)`,
                                transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
                            }}
                        />
                        <div
                            className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff4040]"
                            style={{
                                boxShadow: `0 0 150px 100px rgba(${secondColor}, 0.5)`,
                                transform: `translate(${cursorPosition.x * 0.8}px, ${cursorPosition.y * 0.8}px)`,
                            }}
                        />
                        <div
                            className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#40ff40]"
                            style={{
                                boxShadow: `0 0 150px 100px rgba(${thirdColor}, 0.5)`,
                                transform: `translate(${cursorPosition.x * 0.6}px, ${cursorPosition.y * 0.6}px)`,
                            }}
                        />
                        <div
                            className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff40ff]"
                            style={{
                                boxShadow: `0 0 150px 100px rgba(${fourthColor}, 0.5)`,
                                transform: `translate(${cursorPosition.x * 0.4}px, ${cursorPosition.y * 0.4}px)`,
                            }}
                        />
                        <div
                            className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#40ffff]"
                            style={{
                                boxShadow: `0 0 150px 100px rgba(${fifthColor}, 0.5)`,
                                transform: `translate(${cursorPosition.x * 0.2}px, ${cursorPosition.y * 0.2}px)`,
                            }}
                        />
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};
