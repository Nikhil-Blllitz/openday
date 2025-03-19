"use client";

import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [active, setActive] = useState("HOME");

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white border-b-4 border-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="font-display text-xl font-black tracking-tighter">
            <span className="text-purple-600">INTUIT</span>
            <span className="text-black">_CIT</span>
          </div>
          <div className="hidden md:flex space-x-1">
            {["HOME", "ABOUT", "BOOK A STALL", "RSVP"].map((item, index) => (
              <Link
                key={index}
                href={
                  item === "HOME"
                    ? "/"
                    : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                }
                className={`
                    px-3 py-2 font-display text-sm font-black tracking-wider
                    ${
                      active === item
                        ? "bg-purple-600 text-white"
                        : "hover:bg-black hover:text-white transition-colors duration-100"
                    }
                    border-2 border-black hover:border-purple-600
                  `}
                onClick={() => setActive(item)}
              >
                {item}
              </Link>
            ))}
          </div>
          <button className="md:hidden">
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
