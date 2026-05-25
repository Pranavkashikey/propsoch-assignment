"use client";

import { useRef, useState, useEffect } from "react";

const testimonials = [
    {
        name: "Harish Rao",
        role: "Senior Product Manager @ThoughtSpot",
        avatar: "H",
        color: "bg-orange",
        text: "I love the concept. Saw ad on insta and immediately liked the idea behind this startup. And the experience didn't disappoint. From the very initial proposal to booking the property in just 3 weeks. Still can't believe how easy it was. Shout out to Akshaya for being an incredible point person for us.",
    },
    {
        name: "Priya Sharma",
        role: "Engineering Lead @Google",
        avatar: "P",
        color: "bg-pink-500",
        text: "I was randomly moving around the city with different channel partners which only led me to exhaustion. One of my friend suggested Propsoch and to my surprise, it has been a very pleasant experience from the very first day with the team. They took the time to understand my needs and non-negotiables.",
    },
    {
        name: "Ashish K",
        role: "VP Engineering @Amazon",
        avatar: "A",
        color: "bg-teal-500",
        text: "Ashish and his colleague Stuti are quite professional and structured in their approach. We had sought their help in scouting for villa & land projects. They organized a call to understand our requirements and non-negotiables and then followed us with options.",
    },
    {
        name: "Deepak M",
        role: "Founder @TechStartup",
        avatar: "D",
        color: "bg-blue-500",
        text: "Absolutely amazing Propsoch team!!! They guided me through everything with so much patience, explaining all the pros and cons. Their approach is refreshing, intelligent and supportive. It was like having a consultant partner who really cares about your investment.",
    },
    {
        name: "Sneha R",
        role: "Product Designer @Microsoft",
        avatar: "S",
        color: "bg-purple-500",
        text: "The simplicity and ease of decision making with Propsoch is unmatched. The team was incredibly helpful from start to finish. They have a structured approach to home buying that takes the stress out of what is usually a very overwhelming process.",
    },
];

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        const el = scrollRef.current;
        if (el) {
            el.addEventListener("scroll", checkScroll, { passive: true });
            return () => el.removeEventListener("scroll", checkScroll);
        }
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 340;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="testimonials" className="py-16 lg:py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-6">
                    <p className="text-orange font-medium text-sm mb-4">
                        Hear from your fellow homeowners.
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-text-primary leading-tight">
                        1000+ intelligent homebuyers trusted us
                        <br className="hidden sm:block" />
                        with their biggest life decision because we helped
                        <br className="hidden sm:block" />
                        them{" "}
                        <em className="text-orange font-bold italic not-italic">know if</em>{" "}
                        it was the right one.
                    </h2>
                </div>

                {/* Scroll Arrows */}
                <div className="flex justify-center gap-3 mb-8">
                    <button
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className={`h-10 w-10 rounded-full border border-border flex items-center justify-center transition-all ${canScrollLeft
                                ? "hover:bg-surface-alt hover:border-orange text-text-primary cursor-pointer"
                                : "text-text-muted cursor-not-allowed opacity-40"
                            }`}
                        aria-label="Scroll left"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className={`h-10 w-10 rounded-full border border-border flex items-center justify-center transition-all ${canScrollRight
                                ? "hover:bg-surface-alt hover:border-orange text-text-primary cursor-pointer"
                                : "text-text-muted cursor-not-allowed opacity-40"
                            }`}
                        aria-label="Scroll right"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Testimonial Cards — horizontal scroll */}
                <div
                    ref={scrollRef}
                    className="flex gap-5 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory"
                >
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="flex-shrink-0 w-[300px] sm:w-[320px] rounded-2xl border border-border bg-white p-6 snap-start hover:shadow-lg hover:border-orange/20 transition-all duration-300"
                        >
                            {/* Avatar */}
                            <div className={`h-12 w-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-lg mb-5`}>
                                {t.avatar}
                            </div>

                            {/* Text */}
                            <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-6">
                                {t.text}
                            </p>

                            {/* Author */}
                            <div className="border-t border-border-light pt-4">
                                <p className="font-semibold text-text-primary text-sm italic">{t.name}</p>
                                <p className="text-xs text-orange mt-0.5">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
