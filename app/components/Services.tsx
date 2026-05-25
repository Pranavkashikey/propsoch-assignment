"use client";

const services = [
    {
        tag: "End-to-End",
        title: "Guided Home Buying",
        subtitle: "GHB",
        description:
            "9 in 10 homebuyers have bought a home via us within 25 days. Trusted by 1000+ buyers from Google, Amazon, Peak XV etc.",
        features: [
            "Personalized shortlisting based on your lifestyle",
            "Site visit bookings with verified developers",
            "Property comparison with unbiased expert help",
            "Expert negotiation to get you the best deal",
            "Legal document reviews & RERA verification",
        ],
        ctaText: "Start Your Journey",
        ctaHref: "https://www.propsoch.com/get-started",
        icon: (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
            </svg>
        ),
    },
    {
        tag: "Deep Research",
        title: "Peace of Mind Reports",
        subtitle: "POM",
        description:
            "80+ data points per property — India's most comprehensive property report. Know everything before you commit.",
        features: [
            "Connectivity, location & investment assessment",
            "Master plan, tower plan & floor plan analysis",
            "Litigation status & legal risk check",
            "Builder track record & credibility score",
            "Final decision support with zero guesswork",
        ],
        ctaText: "See Sample Report",
        ctaHref: "https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/sample-report.pdf",
        icon: (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
];

const extras = [
    { icon: "💰", title: "Home Loan Offers", desc: "Compare rates from top banks" },
    { icon: "⚖️", title: "Legal Due Diligence", desc: "Complete legal verification" },
    { icon: "📊", title: "Tax Planning", desc: "Optimize your tax benefits" },
    { icon: "🔍", title: "Quality Inspection", desc: "Pre-purchase property checks" },
    { icon: "🧭", title: "Vastu Advisors", desc: "Expert Vastu consultation" },
    { icon: "🎨", title: "Interior Designers", desc: "Vetted design professionals" },
];

export default function Services() {
    return (
        <section id="services" className="py-16 lg:py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <p className="text-orange font-medium text-sm mb-3">
                        Our Services
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
                        Choose the smart way to save{" "}
                        <span className="text-orange">~₹4.78 L</span> &amp; 3 months of your life
                    </h2>
                </div>

                {/* Service Cards */}
                <div className="grid gap-6 lg:grid-cols-2 mb-16">
                    {services.map((service) => (
                        <div
                            key={service.subtitle}
                            className="group rounded-2xl bg-white border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Top bar */}
                            <div className="h-1 bg-orange" />

                            <div className="p-6 lg:p-8">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-5">
                                    <div>
                                        <span className="inline-block text-xs font-bold uppercase tracking-wider text-orange mb-1.5">
                                            {service.tag}
                                        </span>
                                        <h3 className="text-xl font-bold text-text-primary">
                                            {service.title}
                                        </h3>
                                        <span className="text-sm text-text-muted">({service.subtitle})</span>
                                    </div>
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white transition-all">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2.5 mb-6">
                                    {service.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2.5">
                                            <svg className="h-4.5 w-4.5 shrink-0 mt-0.5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            <span className="text-sm text-text-secondary">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href={service.ctaHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-dark hover:shadow-lg active:scale-95"
                                >
                                    {service.ctaText}
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Extra Services */}
                <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-text-primary">
                        From home loans to housewarming invites — we&apos;ve got you covered
                    </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {extras.map((extra) => (
                        <div
                            key={extra.title}
                            className="group rounded-xl bg-white border border-border p-4 text-center transition-all duration-300 hover:shadow-md hover:border-orange/20"
                        >
                            <span className="text-2xl block mb-2">{extra.icon}</span>
                            <h4 className="font-semibold text-text-primary text-sm mb-0.5">{extra.title}</h4>
                            <p className="text-xs text-text-muted">{extra.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
