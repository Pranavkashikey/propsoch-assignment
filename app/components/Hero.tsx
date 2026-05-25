"use client";

import { useState } from "react";

export default function Hero() {
    const [selectedCity, setSelectedCity] = useState<"bangalore" | "mumbai">("bangalore");

    return (
        <section id="hero" className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="animate-fade-in-up">
                        {/* Tagline */}
                        <p className="text-orange font-medium text-sm sm:text-base mb-4 italic">
                            Stop wasting countless weekends on irrelevant visits
                        </p>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-text-primary">
                            Visit curated homes,
                            <br />
                            negotiate smarter
                            <br />
                            &amp; buy intelligently.
                        </h1>

                        {/* Subtext */}
                        <p className="mt-6 text-base sm:text-lg text-text-secondary leading-relaxed max-w-lg">
                            Get end-to-end guidance from property wizards who&apos;ve helped intelligent
                            homebuyers like you buy 200+ homes in the last year alone.
                        </p>

                        {/* City Selector */}
                        <div className="mt-8">
                            <p className="text-sm font-medium text-text-secondary mb-3">Select City</p>
                            <div className="inline-flex rounded-lg border border-border overflow-hidden">
                                <button
                                    onClick={() => setSelectedCity("bangalore")}
                                    className={`px-6 py-2.5 text-sm font-medium transition-colors ${selectedCity === "bangalore"
                                            ? "bg-white text-orange border-r border-border"
                                            : "bg-surface-alt text-text-secondary border-r border-border hover:bg-white"
                                        }`}
                                >
                                    Bangalore
                                </button>
                                <button
                                    onClick={() => setSelectedCity("mumbai")}
                                    className={`px-6 py-2.5 text-sm font-medium transition-colors ${selectedCity === "mumbai"
                                            ? "bg-white text-orange"
                                            : "bg-surface-alt text-text-secondary hover:bg-white"
                                        }`}
                                >
                                    Mumbai
                                </button>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-6 space-y-3">
                            <a
                                href="https://www.propsoch.com/get-started"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-orange px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange/20 transition-all hover:bg-orange-dark hover:shadow-xl hover:shadow-orange/30 active:scale-95 w-full sm:w-auto"
                            >
                                Book An Appointment
                            </a>
                            <p className="text-sm text-text-muted">
                                Already a member?{" "}
                                <a
                                    href="https://www.propsoch.com/journey"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange font-medium hover:text-orange-dark transition-colors"
                                >
                                    Login
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Right — Decorative Visual */}
                    <div className="animate-fade-in-up delay-200 relative hidden lg:block">
                        <div className="relative">
                            {/* Background blobs */}
                            <div className="absolute -top-8 -right-8 w-72 h-72 bg-orange-bg rounded-full blur-3xl" />
                            <div className="absolute bottom-0 right-16 w-48 h-48 bg-orange/5 rounded-full" />

                            {/* Main card */}
                            <div className="relative bg-surface-warm rounded-3xl p-8 border border-orange/10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-10 w-10 rounded-xl bg-orange flex items-center justify-center">
                                        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-lg font-bold text-text-primary">Propsoch</span>
                                        <p className="text-xs text-text-muted">Guided Homebuying Program</p>
                                    </div>
                                </div>

                                {/* Feature highlights */}
                                <div className="space-y-4">
                                    {[
                                        { icon: "🎯", text: "Personalized property shortlisting" },
                                        { icon: "🔍", text: "80+ data points per property" },
                                        { icon: "🤝", text: "Expert negotiation support" },
                                        { icon: "📋", text: "Legal & financial due diligence" },
                                        { icon: "🏠", text: "9 in 10 buyers close within 25 days" },
                                    ].map((item) => (
                                        <div key={item.text} className="flex items-center gap-3">
                                            <span className="text-lg">{item.icon}</span>
                                            <span className="text-sm text-text-secondary">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Play button overlay */}
                                <div className="mt-6 flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-orange/10 flex items-center justify-center cursor-pointer hover:bg-orange/20 transition-colors">
                                        <svg className="h-5 w-5 text-orange ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-text-secondary">Watch how it works</span>
                                </div>
                            </div>

                            {/* Floating star decoration */}
                            <div className="absolute -top-4 right-8 text-orange animate-float">
                                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l2.09 6.26L20.18 9l-5.09 3.74L17.18 19 12 15.27 6.82 19l2.09-6.26L3.82 9l6.09-.74L12 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
