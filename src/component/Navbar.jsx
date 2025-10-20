import { motion } from "motion/react";
import React, { useState } from "react";
import { cn } from "../lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "About", id: "about" },
        { label: "Work", id: "work" },
        { label: "Contact", id: "contact" },
    ];

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // close menu on click
        }
    };

    return (
        <motion.nav
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="w-contain font-neue py-4 relative"
        >
            <div className="flex md:items-start items-center justify-between text-3xl">
                {/* Left: Name (Desktop Only) */}
                <h2>Olayinka D. Adeyefa</h2>

                {/* Right Section */}
                <div className="md:flex hidden items-start gap-[10rem]">
                    <p className="text-left">
                        <span>Probably:</span>
                        <br />
                        <span className="text-primary">At the Gym</span>
                    </p>
                    {/* Desktop Nav Links */}
                    <div className="flex items-center gap-3">
                        {navLinks.map((link, idx) => (
                            <span
                                key={idx}
                                onClick={() => handleScroll(link.id)}
                                className="cursor-pointer hover:text-primary transition"
                            >
                                {link.label}
                                {idx !== navLinks.length - 1 && ","}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Mobile Toggle Button (Right aligned) */}
                <button
                    type="button"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen ? "true" : "false"}
                    className="md:hidden inline-flex items-center justify-center size-10"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <div className="flex items-center *:transition-all *:duration-300 [--bar-width:1.5rem]">
                        {/* Top bar */}
                        <div
                            className={cn(
                                "h-0.5 bg-white w-[var(--bar-width)] translate-x-full",
                                { "-translate-y-2": !isOpen },
                            )}
                        />
                        {/* Middle bar */}
                        <div
                            className={cn(
                                "h-0.5 bg-white w-[var(--bar-width)]",
                            )}
                        />
                        {/* Bottom bar */}
                        <div
                            className={cn(
                                "h-0.5 bg-white w-[var(--bar-width)] -translate-x-full",
                                { "translate-y-2": !isOpen },
                            )}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Nav Menu */}
            <div
                className={cn(
                    "md:hidden absolute inset-x-0 translate-y-4 z-50 bg-black transition-all duration-300",
                    isOpen
                        ? "[clip-path:inset(0_0_0_0)] max-h-dvh py-6"
                        : "[clip-path:inset(0_0_100%_0)] max-h-0 py-0",
                )}
            >
                <ul className="flex flex-col items-center gap-4">
                    {navLinks.map((link, idx) => (
                        <span key={idx} onClick={() => handleScroll(link.id)}>
                            {link.label}
                        </span>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
