import { Button } from "../components/ui/Button";
import { ZapIcon } from "../icons/ZapIcon";
import { FolderIcon } from "../icons/FolderIcon";
import { GlobeIcon } from "../icons/GlobeIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { StarIcon } from "../icons/StarIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { ShieldIcon } from "../icons/ShieldIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

export function Landing() {
    return (
        <div className="min-h-screen bg-brand-black text-brand-light overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 w-full glass z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <a href="/" className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                <span className="text-brand-black text-xl font-bold">B</span>
                            </div>
                            <span className="text-xl font-bold text-brand-light">Brainly</span>
                        </a>

                        {/* Nav Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-brand-light/70 hover:text-brand-green transition-colors">Features</a>
                            <a href="#how-it-works" className="text-brand-light/70 hover:text-brand-green transition-colors">How it Works</a>
                            <a href="#testimonials" className="text-brand-light/70 hover:text-brand-green transition-colors">Testimonials</a>
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-4">
                            <a href="/signin" className="text-brand-light/70 hover:text-brand-green transition-colors hidden sm:block">
                                Sign In
                            </a>
                            <a href="/signup">
                                <Button variant="primary" text="Get Started" size="sm" endIcon={<ArrowRightIcon size="sm" />} />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-grid-pattern opacity-50" />
                <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green/20 rounded-full blur-[100px] animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px] animate-float-delayed" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 mb-8 animate-fade-in">
                            <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                            <span className="text-sm text-brand-light/80">Trusted by 10,000+ knowledge collectors</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
                            Never Lose Another
                            <span className="block text-gradient mt-2">Great Tweet or Video</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl sm:text-2xl text-brand-light/60 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
                            Save, organize, and access your favorite Twitter and YouTube content in one beautiful place.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200">
                            <a href="/signup">
                                <Button
                                    variant="primary"
                                    text="Start Saving for Free"
                                    size="lg"
                                    glow
                                    endIcon={<ArrowRightIcon size="sm" />}
                                />
                            </a>
                            <a href="#how-it-works">
                                <Button variant="secondary" text="See How It Works" size="lg" />
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap justify-center gap-8 mt-12 text-brand-light/50 text-sm animate-fade-in delay-300">
                            <div className="flex items-center gap-2">
                                <ShieldIcon size="sm" className="text-brand-green" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ZapIcon size="sm" className="text-brand-green" />
                                <span>Setup in 30 seconds</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <GlobeIcon size="sm" className="text-brand-green" />
                                <span>Access from anywhere</span>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Mockup */}
                    <div className="mt-20 animate-slide-up delay-300">
                        <div className="relative mx-auto max-w-5xl">
                            {/* Glow behind mockup */}
                            <div className="absolute inset-0 bg-brand-green/20 blur-[60px] rounded-3xl" />

                            {/* Mockup Container */}
                            <div className="relative rounded-2xl border border-brand-dark overflow-hidden shadow-2xl bg-brand-black">
                                {/* Browser Header */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-brand-darker border-b border-brand-dark">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="flex-1 mx-4">
                                        <div className="bg-brand-dark rounded-lg px-4 py-1.5 text-sm text-brand-light/50 max-w-md mx-auto">
                                            brainly.app/dashboard
                                        </div>
                                    </div>
                                </div>

                                {/* Dashboard Content */}
                                <div className="flex">
                                    {/* Sidebar */}
                                    <div className="w-56 border-r border-brand-dark p-4 hidden sm:block">
                                        <div className="flex items-center gap-2 mb-6">
                                            <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
                                                <span className="text-brand-black font-bold text-sm">B</span>
                                            </div>
                                            <span className="font-semibold">Brainly</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-brand-dark text-brand-light">
                                                <div className="w-4 h-4 rounded bg-brand-green/20" />
                                                <span className="text-sm">All Content</span>
                                            </div>
                                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-brand-light/60 hover:bg-brand-dark/50">
                                                <TwitterIcon />
                                                <span className="text-sm">Twitter</span>
                                            </div>
                                            <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-brand-light/60 hover:bg-brand-dark/50">
                                                <YoutubeIcon />
                                                <span className="text-sm">YouTube</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Main Content */}
                                    <div className="flex-1 p-6">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-lg font-semibold">Your Content</h3>
                                            <div className="px-3 py-1.5 bg-brand-green text-brand-black text-sm font-medium rounded-lg">
                                                + Add Content
                                            </div>
                                        </div>

                                        {/* Content Cards Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {/* Card 1 */}
                                            <div className="rounded-xl border border-brand-dark bg-brand-darker p-4 hover-lift">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <TwitterIcon />
                                                    <span className="text-sm text-brand-light/60">Twitter Thread</span>
                                                </div>
                                                <div className="h-20 bg-brand-dark rounded-lg mb-3" />
                                                <p className="text-sm text-brand-light/80 line-clamp-2">How to build a second brain...</p>
                                            </div>

                                            {/* Card 2 */}
                                            <div className="rounded-xl border border-brand-dark bg-brand-darker p-4 hover-lift">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <YoutubeIcon />
                                                    <span className="text-sm text-brand-light/60">YouTube Video</span>
                                                </div>
                                                <div className="h-20 bg-brand-dark rounded-lg mb-3 flex items-center justify-center">
                                                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                                                        <div className="w-0 h-0 border-l-[8px] border-l-red-500 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-1" />
                                                    </div>
                                                </div>
                                                <p className="text-sm text-brand-light/80 line-clamp-2">The Ultimate Guide to Productivity</p>
                                            </div>

                                            {/* Card 3 */}
                                            <div className="rounded-xl border border-brand-dark bg-brand-darker p-4 hover-lift hidden lg:block">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <TwitterIcon />
                                                    <span className="text-sm text-brand-light/60">Twitter Thread</span>
                                                </div>
                                                <div className="h-20 bg-brand-dark rounded-lg mb-3" />
                                                <p className="text-sm text-brand-light/80 line-clamp-2">10 lessons from building startups...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logos Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-brand-dark/50">
                <div className="max-w-7xl mx-auto">
                    <p className="text-center text-brand-light/40 text-sm mb-8">TRUSTED BY TEAMS AT</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {["TechCorp", "DataFlow", "CloudBase", "InnovateLab", "StartupX", "ScaleUp"].map((company) => (
                            <div
                                key={company}
                                className="text-brand-light/30 hover:text-brand-light/60 transition-colors text-xl font-bold tracking-wide"
                            >
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section - Bento Grid */}
            <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            Everything You Need to <span className="text-gradient">Stay Organized</span>
                        </h2>
                        <p className="text-xl text-brand-light/60 max-w-2xl mx-auto">
                            Powerful features designed to help you save, organize, and never lose valuable content again.
                        </p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Large Card 1 - Save Instantly */}
                        <div className="lg:col-span-2 group relative rounded-3xl border border-brand-dark bg-gradient-to-br from-brand-darker to-brand-black p-8 hover:border-brand-green/50 transition-all duration-500 overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-[80px] group-hover:bg-brand-green/10 transition-all duration-500" />
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <ZapIcon size="lg" className="text-brand-green" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Save Instantly</h3>
                                <p className="text-brand-light/60 text-lg max-w-md">
                                    Paste any Twitter or YouTube link and we'll save it instantly. No extensions, no complex setup—just paste and go.
                                </p>

                                {/* Mini Demo */}
                                <div className="mt-8 p-4 rounded-xl bg-brand-black/50 border border-brand-dark">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 bg-brand-dark rounded-lg px-4 py-2 text-brand-light/40 text-sm">
                                            https://twitter.com/naval/status/...
                                        </div>
                                        <div className="px-4 py-2 bg-brand-green text-brand-black text-sm font-medium rounded-lg">
                                            Save
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Small Card - Access Anywhere */}
                        <div className="group relative rounded-3xl border border-brand-dark bg-gradient-to-br from-brand-darker to-brand-black p-8 hover:border-brand-green/50 transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <GlobeIcon size="lg" className="text-brand-green" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Access Anywhere</h3>
                            <p className="text-brand-light/60">
                                Your content syncs across all devices. Desktop, tablet, or phone—it's always there.
                            </p>
                        </div>

                        {/* Small Card - Organize Smart */}
                        <div className="group relative rounded-3xl border border-brand-dark bg-gradient-to-br from-brand-darker to-brand-black p-8 hover:border-brand-green/50 transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FolderIcon size="lg" className="text-brand-green" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Organize Smart</h3>
                            <p className="text-brand-light/60">
                                Create collections, add tags, and filter by platform. Find what you need in seconds.
                            </p>
                        </div>

                        {/* Large Card 2 - Powerful Search */}
                        <div className="lg:col-span-2 group relative rounded-3xl border border-brand-dark bg-gradient-to-br from-brand-darker to-brand-black p-8 hover:border-brand-green/50 transition-all duration-500 overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-[80px] group-hover:bg-brand-green/10 transition-all duration-500" />
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <SearchIcon size="lg" className="text-brand-green" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Powerful Search</h3>
                                <p className="text-brand-light/60 text-lg max-w-md">
                                    Find that perfect thread instantly. Search across all your saved content with lightning-fast results.
                                </p>

                                {/* Search Demo */}
                                <div className="mt-8 p-4 rounded-xl bg-brand-black/50 border border-brand-dark">
                                    <div className="flex items-center gap-3 bg-brand-dark rounded-lg px-4 py-3">
                                        <SearchIcon size="sm" className="text-brand-light/40" />
                                        <span className="text-brand-light/40">Search your saved content...</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Small Card - Share Collections */}
                        <div className="group relative rounded-3xl border border-brand-dark bg-gradient-to-br from-brand-darker to-brand-black p-8 hover:border-brand-green/50 transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                    <polyline points="16 6 12 2 8 6" />
                                    <line x1="12" y1="2" x2="12" y2="15" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Share Collections</h3>
                            <p className="text-brand-light/60">
                                Create public collections and share your curated content with the world.
                            </p>
                        </div>

                        {/* Small Card - Never Lose Content */}
                        <div className="group relative rounded-3xl border border-brand-dark bg-gradient-to-br from-brand-darker to-brand-black p-8 hover:border-brand-green/50 transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <ShieldIcon size="lg" className="text-brand-green" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Never Lose Content</h3>
                            <p className="text-brand-light/60">
                                Even if tweets get deleted, your saved content remains safe and accessible.
                            </p>
                        </div>

                        {/* Small Card - Auto Organize */}
                        <div className="group relative rounded-3xl border border-brand-dark bg-gradient-to-br from-brand-darker to-brand-black p-8 hover:border-brand-green/50 transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="3" />
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Smart Suggestions</h3>
                            <p className="text-brand-light/60">
                                AI-powered suggestions help you organize and discover related content.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-black via-brand-darker/30 to-brand-black">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            Getting Started is <span className="text-gradient">Simple</span>
                        </h2>
                        <p className="text-xl text-brand-light/60">
                            Three easy steps to build your personal knowledge library
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-green via-brand-green/50 to-brand-green" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Step 1 */}
                            <div className="text-center relative">
                                <div className="w-20 h-20 bg-brand-green rounded-2xl flex items-center justify-center text-brand-black text-3xl font-bold mx-auto mb-6 shadow-lg glow-green-sm">
                                    1
                                </div>
                                <h3 className="text-xl font-bold mb-3">Create Your Account</h3>
                                <p className="text-brand-light/60">
                                    Sign up in seconds with just an email. No credit card required.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center relative">
                                <div className="w-20 h-20 bg-brand-green rounded-2xl flex items-center justify-center text-brand-black text-3xl font-bold mx-auto mb-6 shadow-lg glow-green-sm">
                                    2
                                </div>
                                <h3 className="text-xl font-bold mb-3">Save Your Content</h3>
                                <p className="text-brand-light/60">
                                    Paste links to Twitter threads or YouTube videos. We handle the rest.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center relative">
                                <div className="w-20 h-20 bg-brand-green rounded-2xl flex items-center justify-center text-brand-black text-3xl font-bold mx-auto mb-6 shadow-lg glow-green-sm">
                                    3
                                </div>
                                <h3 className="text-xl font-bold mb-3">Access Anytime</h3>
                                <p className="text-brand-light/60">
                                    Browse, search, and share your curated collection from any device.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            Loved by <span className="text-gradient">Knowledge Workers</span>
                        </h2>
                        <p className="text-xl text-brand-light/60">
                            Join thousands who have transformed how they save and organize content
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="rounded-2xl border border-brand-dark bg-brand-darker/50 p-8 hover:border-brand-green/30 transition-colors">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} size="sm" filled className="text-brand-green" />
                                ))}
                            </div>
                            <p className="text-brand-light/80 mb-6">
                                "Finally, a tool that understands how I consume content. I've saved hundreds of threads that would have been lost forever. Brainly is now essential to my workflow."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-green to-brand-green-dark flex items-center justify-center text-brand-black font-bold">
                                    SK
                                </div>
                                <div>
                                    <div className="font-semibold">Sarah Kim</div>
                                    <div className="text-sm text-brand-light/50">Product Manager at TechCorp</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="rounded-2xl border border-brand-dark bg-brand-darker/50 p-8 hover:border-brand-green/30 transition-colors">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} size="sm" filled className="text-brand-green" />
                                ))}
                            </div>
                            <p className="text-brand-light/80 mb-6">
                                "The search functionality is incredible. I can find any thread or video I've saved in seconds. It's like having a second brain that actually works."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold">
                                    MR
                                </div>
                                <div>
                                    <div className="font-semibold">Michael Rodriguez</div>
                                    <div className="text-sm text-brand-light/50">Founder at StartupXYZ</div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="rounded-2xl border border-brand-dark bg-brand-darker/50 p-8 hover:border-brand-green/30 transition-colors">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} size="sm" filled className="text-brand-green" />
                                ))}
                            </div>
                            <p className="text-brand-light/80 mb-6">
                                "I used to have bookmarks scattered everywhere. Now everything is in one place, beautifully organized. The collections feature is a game-changer."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold">
                                    AL
                                </div>
                                <div>
                                    <div className="font-semibold">Alex Lee</div>
                                    <div className="text-sm text-brand-light/50">Designer at InnovateCo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-brand-dark/50">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <div className="text-5xl sm:text-6xl font-bold text-gradient mb-2">1M+</div>
                            <div className="text-brand-light/60 text-lg">Content Saved</div>
                        </div>
                        <div>
                            <div className="text-5xl sm:text-6xl font-bold text-gradient mb-2">50K+</div>
                            <div className="text-brand-light/60 text-lg">Happy Users</div>
                        </div>
                        <div>
                            <div className="text-5xl sm:text-6xl font-bold text-gradient mb-2">99.9%</div>
                            <div className="text-brand-light/60 text-lg">Uptime</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/50 via-brand-black to-brand-dark/50" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[150px]" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Start Building Your
                        <span className="block text-gradient mt-2">Knowledge Library Today</span>
                    </h2>
                    <p className="text-xl text-brand-light/60 mb-10 max-w-2xl mx-auto">
                        Join thousands of creators, researchers, and learners who never lose track of valuable content.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/signup">
                            <Button
                                variant="primary"
                                text="Get Started Free"
                                size="lg"
                                glow
                                endIcon={<ArrowRightIcon size="sm" />}
                            />
                        </a>
                    </div>
                    <p className="mt-6 text-brand-light/40 text-sm">
                        Free forever • No credit card required • Setup in 30 seconds
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-brand-dark py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
                        {/* Brand */}
                        <div className="col-span-2 md:col-span-1">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center">
                                    <span className="text-brand-black text-xl font-bold">B</span>
                                </div>
                                <span className="text-xl font-bold text-brand-light">Brainly</span>
                            </div>
                            <p className="text-brand-light/50 text-sm max-w-xs">
                                Your personal content library for Twitter and YouTube. Never lose valuable content again.
                            </p>
                        </div>

                        {/* Product */}
                        <div>
                            <h4 className="font-semibold mb-4 text-brand-light">Product</h4>
                            <ul className="space-y-3 text-sm text-brand-light/50">
                                <li><a href="#features" className="hover:text-brand-green transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-brand-green transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-brand-green transition-colors">Changelog</a></li>
                                <li><a href="#" className="hover:text-brand-green transition-colors">Roadmap</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="font-semibold mb-4 text-brand-light">Company</h4>
                            <ul className="space-y-3 text-sm text-brand-light/50">
                                <li><a href="#" className="hover:text-brand-green transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-brand-green transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-brand-green transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-brand-green transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="font-semibold mb-4 text-brand-light">Legal</h4>
                            <ul className="space-y-3 text-sm text-brand-light/50">
                                <li><a href="#" className="hover:text-brand-green transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-brand-green transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-brand-green transition-colors">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-brand-dark mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-brand-light/40 text-sm">
                            &copy; 2025 Brainly. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-brand-light/40 hover:text-brand-green transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-brand-light/40 hover:text-brand-green transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-brand-light/40 hover:text-brand-green transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
