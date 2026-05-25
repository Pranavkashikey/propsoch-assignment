"use client";

import { useState } from "react";

const comparisonData = [
    {
        feature: "Information Depth",
        propsoch: "80+ data points",
        others: "20-40 data points",
    },
    {
        feature: "Transparency",
        propsoch: "Detailed pros & cons",
        others: "Only pros highlighted",
    },
    {
        feature: "Data Accuracy",
        propsoch: "Verified by architects",
        others: "Loose verification",
    },
    {
        feature: "Service Validity",
        propsoch: "Till you find your home",
        others: "Based on no. of contacts",
    },
    {
        feature: "Data Sources",
        propsoch: "RERA, GMaps, CDP etc.",
        others: "Added by developer & broker",
    },
    {
        feature: "Negotiation Support",
        propsoch: "Expert negotiation on your behalf",
        others: "No negotiation support",
    },
];

type Tab = "portals" | "brokers";

export default function Comparison() {
    const [activeTab, setActiveTab] = useState<Tab>("portals");

    return (
        <section id="comparison" className="py-16 lg:py-24 bg-surface-alt">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left — Header */}
                    <div>
                        <p className="text-orange font-medium text-sm mb-3">
                            What makes us different?
                        </p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
                            Our homebuyers say we&apos;re refreshing, intelligent and supportive.{" "}
                            <span className="text-text-secondary">Here&apos;s why.</span>
                        </h2>
                    </div>

                    {/* Right — Tab selector */}
                    <div className="lg:text-right">
                        <p className="text-sm text-text-muted mb-3">Compare our services with</p>
                        <div className="inline-flex rounded-full border border-border overflow-hidden">
                            <button
                                onClick={() => setActiveTab("portals")}
                                className={`px-5 py-2.5 text-sm font-medium transition-colors ${activeTab === "portals"
                                        ? "bg-orange text-white"
                                        : "bg-white text-text-secondary hover:bg-surface-alt"
                                    }`}
                            >
                                Online Portals
                            </button>
                            <button
                                onClick={() => setActiveTab("brokers")}
                                className={`px-5 py-2.5 text-sm font-medium transition-colors ${activeTab === "brokers"
                                        ? "bg-orange text-white"
                                        : "bg-white text-text-secondary hover:bg-surface-alt"
                                    }`}
                            >
                                Local Brokers
                            </button>
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="mt-10 rounded-2xl border border-border overflow-hidden bg-white">
                    {/* Table Header */}
                    <div className="grid grid-cols-3 bg-surface-alt border-b border-border">
                        <div className="px-6 py-4 text-sm font-medium text-text-secondary">
                            What you care about
                        </div>
                        <div className="px-6 py-4 text-sm font-bold text-orange border-l border-border bg-orange-bg">
                            <div className="flex items-center gap-2">
                                <div className="h-5 w-5 rounded bg-orange flex items-center justify-center">
                                    <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                                    </svg>
                                </div>
                                Propsoch
                            </div>
                        </div>
                        <div className="px-6 py-4 text-sm font-medium text-text-secondary border-l border-border">
                            {activeTab === "portals"
                                ? "Online portals (Housing/99Acres/Magicbricks)"
                                : "Local Brokers"}
                        </div>
                    </div>

                    {/* Table Rows */}
                    {comparisonData.map((row, i) => (
                        <div
                            key={row.feature}
                            className={`grid grid-cols-3 ${i < comparisonData.length - 1 ? "border-b border-border" : ""
                                } hover:bg-surface-alt/50 transition-colors`}
                        >
                            <div className="px-6 py-4 text-sm text-text-primary font-medium">
                                {row.feature}
                            </div>
                            <div className="px-6 py-4 text-sm text-orange font-medium border-l border-border bg-orange-bg/50">
                                {row.propsoch}
                            </div>
                            <div className="px-6 py-4 text-sm text-text-muted border-l border-border">
                                {row.others}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
