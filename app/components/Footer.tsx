"use client";

const footerLinks = {
    developers: [
        { label: "Prestige Developers", href: "https://www.propsoch.com/buy/property-for-sale-in-bengaluru?developers=2&currentPage=1" },
        { label: "Godrej Properties", href: "https://www.propsoch.com/buy/property-for-sale-in-bengaluru?developers=3&currentPage=1" },
        { label: "Brigade Developers", href: "https://www.propsoch.com/buy/property-for-sale-in-bengaluru?developers=10&currentPage=1" },
        { label: "Sobha Developers", href: "https://www.propsoch.com/buy/property-for-sale-in-bengaluru?developers=6&currentPage=1" },
    ],
    locations: [
        { label: "Whitefield", href: "https://www.propsoch.com/buy/property-for-sale-in-whitefield-bengaluru" },
        { label: "Sarjapur Road", href: "https://www.propsoch.com/buy/property-for-sale-in-sarjapur-road-bengaluru" },
        { label: "HSR Layout", href: "https://www.propsoch.com/buy/property-for-sale-in-hsr-layout-bengaluru" },
        { label: "Bellandur", href: "https://www.propsoch.com/buy/property-for-sale-in-bellandur-bengaluru" },
    ],
    quicklinks: [
        { label: "Luxury Homes", href: "https://www.propsoch.com/buy/property-for-sale-in-bengaluru?maxBudget=500000000&minBudget=30000000&currentPage=1" },
        { label: "Properties <3Cr", href: "https://www.propsoch.com/buy/property-for-sale-in-bengaluru?maxBudget=30000000&minBudget=20000000&currentPage=1" },
        { label: "Ready To Move In", href: "https://www.propsoch.com/buy/property-for-sale-in-bengaluru?possession=readyToMoveIn&currentPage=1" },
        { label: "Townships", href: "https://www.propsoch.com/buy/property-for-sale-in-bengaluru?minBudget=10000000&maxBudget=100000000&projectArea=large&possession=any&currentPage=1" },
    ],
    legal: [
        { label: "Privacy Policy", href: "https://www.propsoch.com/meta/privacy" },
        { label: "Terms & Conditions", href: "https://www.propsoch.com/meta/terms" },
        { label: "Blog", href: "https://www.propsoch.com/blogs" },
        { label: "Compare Properties", href: "https://www.propsoch.com/compare-properties/bengaluru" },
    ],
};

export default function Footer() {
    return (
        <footer id="footer">
            {/* Community CTA */}
            <div className="bg-[#1A1A2E] text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                    <div className="text-center max-w-2xl mx-auto">
                        <p className="text-orange font-medium text-sm mb-3">Community</p>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                            Hometrust Collective
                        </h3>
                        <p className="text-white/60 mb-8 leading-relaxed">
                            An exclusive community of buyers, owners &amp; experts who help each other stay
                            updated about the market.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                            <a
                                href="https://chat.whatsapp.com/KnN3ba2gh8OJJJgmLW2PsA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Join Bangalore
                            </a>
                            <a
                                href="https://chat.whatsapp.com/Dt9txXW4tftA1Kv2NEPkpN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Join Mumbai
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="bg-[#15152B] text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
                                Top Developers
                            </h4>
                            <ul className="space-y-2.5">
                                {footerLinks.developers.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-orange transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
                                Top Locations
                            </h4>
                            <ul className="space-y-2.5">
                                {footerLinks.locations.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-orange transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
                                Quick Links
                            </h4>
                            <ul className="space-y-2.5">
                                {footerLinks.quicklinks.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-orange transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
                                Company
                            </h4>
                            <ul className="space-y-2.5">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-orange transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <div className="h-7 w-7 rounded bg-orange flex items-center justify-center">
                                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                                </svg>
                            </div>
                            <span className="font-bold text-white text-sm">Propsoch</span>
                        </div>
                        <p className="text-xs text-white/30">
                            © {new Date().getFullYear()} Thinkr Proptech Private Limited. All rights reserved.
                        </p>
                        <p className="text-xs text-white/20">
                            India&apos;s most advanced real estate research platform
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
