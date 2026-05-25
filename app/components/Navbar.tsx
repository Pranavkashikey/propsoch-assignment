"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
    { label: "Properties", href: "#stats" },
    { label: "Services", href: "#services" },
    { label: "Resources", href: "#resources" },
    { label: "Company", href: "#footer" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Top Banner */}
            <div className="bg-orange-300 text-white-500 text-center py-2 px-4 text-sm font-medium">
                Check any property&apos;s{" "}
                <a
                    href="https://www.propsoch.com/fair-price-calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold hover:text-orange-bg transition-colors"
                >
                    fair price
                </a>{" "}
                &amp; negotiate confidently.
            </div>

            {/* Main Nav */}
            <nav
                className={`sticky top-0 z-50 transition-all duration-300 bg-white ${scrolled ? "shadow-md" : "shadow-sm"
                    }`}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange text-white">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-text-primary tracking-tight">
                                Propsoch
                            </span>
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm font-medium text-text-secondary hover:text-orange transition-colors flex items-center gap-1"
                                >
                                    {link.label}
                                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </a>
                            ))}
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center gap-3">
                            <button className="p-2 rounded-full hover:bg-surface-alt transition-colors text-text-secondary" aria-label="Search">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                            <button className="p-2 rounded-full hover:bg-surface-alt transition-colors text-text-secondary" aria-label="Share">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                                </svg>
                            </button>
                            <button className="p-2 rounded-full hover:bg-surface-alt transition-colors text-text-secondary" aria-label="Wishlist">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </button>
                            <a
                                href="https://www.propsoch.com/get-started"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-orange px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-orange-dark hover:shadow-lg active:scale-95"
                            >
                                Get Started
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 rounded-lg text-text-primary"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                {mobileOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="bg-white border-t border-border px-4 py-3 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-lg px-4 py-3 text-sm font-medium text-text-secondary hover:bg-surface-alt hover:text-orange transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-3 border-t border-border">
                            <a
                                href="https://www.propsoch.com/get-started"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-full bg-orange px-4 py-3 text-sm font-semibold text-white text-center hover:bg-orange-dark transition-colors"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
