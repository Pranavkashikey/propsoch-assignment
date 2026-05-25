"use client";

const blogs = [
    {
        tag: "Blog",
        title: "2025 Bangalore Real Estate",
        description: "Explore micro-markets, price trends & upcoming hotspots.",
        href: "https://www.propsoch.com/blogs/the-state-of-bangalore-real-estate-market-2025/",
        emoji: "🏙️",
        gradient: "from-emerald-50 to-teal-50",
    },
    {
        tag: "Blog",
        title: "Home Buying Checklist",
        description: "Navigate the home buying journey with confidence — from property search to final paperwork.",
        href: "https://www.propsoch.com/blogs/homebuying-checklist/",
        emoji: "📋",
        gradient: "from-blue-50 to-indigo-50",
    },
    {
        tag: "Blog",
        title: "Home Buying Guide 101",
        description: "Track your purchase journey with an essential checklist of documents, inspections, and key milestones.",
        href: "https://www.propsoch.com/blogs/home-buying-guide-101/",
        emoji: "📖",
        gradient: "from-amber-50 to-orange-50",
    },
];

export default function Resources() {
    return (
        <section id="resources" className="py-16 lg:py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-2xl mb-12">
                    <p className="text-orange font-medium text-sm mb-3">
                        Knowledge Hub
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
                        Empower yourself with our guides, hacks &amp; resources
                    </h2>
                </div>

                {/* Blog Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <a
                            key={blog.title}
                            href={blog.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-2xl border border-border bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-orange/20 hover:-translate-y-1"
                        >
                            {/* Image placeholder with gradient + emoji */}
                            <div className={`h-48 bg-gradient-to-br ${blog.gradient} flex items-center justify-center`}>
                                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                                    {blog.emoji}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <span className="text-xs font-bold text-orange uppercase tracking-wider">
                                    {blog.tag}
                                </span>
                                <h3 className="mt-2 text-lg font-bold text-text-primary group-hover:text-orange transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                                    {blog.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
