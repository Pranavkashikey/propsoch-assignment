"use client";

const stats = [
    { value: "2750+", label: "Hours of Advice" },
    { value: "520M+", label: "Sq. Feet Analyzed" },
    { value: "210+", label: "Partner Builders" },
    { value: "500+", label: "Projects Across Bangalore" },
];

export default function Stats() {
    return (
        <section id="stats" className="py-14 lg:py-20 bg-white border-t border-border-light">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Trusted By line */}
                <p className="text-center text-sm text-text-muted mb-10">
                    Trusted by 1000+ intelligent homebuyers
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center group">
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary transition-colors group-hover:text-orange">
                                {stat.value}
                            </div>
                            <div className="mt-2 text-sm font-medium text-orange">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
