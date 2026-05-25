"use client";

const journeySteps = [
    {
        id: "01",
        title: "Share Your Requirements",
        description:
            "Tell us your preferred location, budget, lifestyle needs, and investment goals so we can narrow down the right homes for you.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
        ),
    },
    {
        id: "02",
        title: "Explore Curated Properties",
        description:
            "Browse handpicked projects based on builder reputation, pricing, location advantages, and future appreciation potential.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        ),
    },
    {
        id: "03",
        title: "Schedule Guided Site Visits",
        description:
            "Visit shortlisted properties with our experts and get real insights into pricing, layouts, amenities, and neighborhood value.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
    },
    {
        id: "04",
        title: "Evaluate Risks & Documentation",
        description:
            "We help analyze legal approvals, hidden charges, construction quality, ventilation, and long-term resale factors.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        id: "05",
        title: "Close the Best Deal",
        description:
            "Our team negotiates directly with builders to help you secure better pricing, exclusive offers, and smoother booking.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
            </svg>
        ),
    },
    {
        id: "06",
        title: "Get Expert Assistance",
        description:
            "From legal verification to loan support and agreement reviews, we connect you with trusted professionals at every stage.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
    },
];

export default function HomeBuyingJourney() {
    return (
        <section
            id="journey"
            className="py-20 bg-gradient-to-b from-white to-orange-50/30"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="inline-flex rounded-full bg-orange/10 px-4 py-1 text-sm font-medium text-orange mb-4">
                        How It Works
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight">
                        Finding your dream property doesn’t have to feel overwhelming.
                    </h2>

                    <p className="mt-5 text-text-secondary leading-relaxed">
                        We simplify every step — from discovery to documentation —
                        with expert guidance tailored to your needs.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {journeySteps.map((step) => (
                        <div
                            key={step.id}
                            className="group rounded-3xl border border-border bg-white/80 backdrop-blur-sm p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <span className="text-5xl font-extrabold text-gray-100 transition-colors group-hover:text-orange/10">
                                    {step.id}
                                </span>

                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange/10 text-orange transition-all duration-300 group-hover:bg-orange group-hover:text-white group-hover:rotate-6">
                                    {step.icon}
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-orange transition-colors">
                                {step.title}
                            </h3>

                            <p className="text-sm leading-relaxed text-text-secondary">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}