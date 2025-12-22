import { Button } from "../components/ui/Button";

export function Landing() {
    return (
        <div className="min-h-screen bg-brand-black text-brand-light">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-brand-black/95 backdrop-blur-sm border-b border-brand-dark z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center">
                                <span className="text-brand-black text-xl font-bold">B</span>
                            </div>
                            <span className="text-xl font-bold text-brand-light">Brainly</span>
                        </div>

                        {/* Auth Buttons */}
                        <div className="flex items-center space-x-4">
                            <a href="/signin" className="text-brand-light hover:text-brand-green transition-colors">
                                Sign In
                            </a>
                            <a href="/signup">
                                <Button variant="primary" text="Get Started" size="sm" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Never Lose Another
                        <span className="block text-brand-green">Great Tweet or Video</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-brand-light/70 mb-10 max-w-3xl mx-auto">
                        Save, organize, and access your favorite Twitter and YouTube content in one place.
                        Build your personal knowledge library.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="/signup">
                            <Button variant="primary" text="Get Started Free" size="lg" />
                        </a>
                        <a href="/signin">
                            <Button variant="secondary" text="Sign In" size="lg" />
                        </a>
                    </div>
                    <p className="mt-6 text-brand-light/50 text-sm">
                        No credit card required • Free forever
                    </p>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/30">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Tired of Losing Valuable Content?
                    </h2>
                    <p className="text-lg text-brand-light/70 max-w-3xl mx-auto">
                        You find an amazing Twitter thread or insightful YouTube video, but weeks later you can't remember where it was.
                        Your browser bookmarks are a mess. Your saved tweets are impossible to search.
                        <span className="block mt-4 text-brand-green font-semibold">There's a better way.</span>
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
                        Everything You Need to Stay Organized
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-brand-dark/50 border border-brand-dark rounded-2xl p-8 hover:border-brand-green/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-brand-green text-2xl">🔖</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Save Instantly</h3>
                            <p className="text-brand-light/70">
                                Quickly save Twitter threads and YouTube videos with just a link. No copy-pasting required.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-brand-dark/50 border border-brand-dark rounded-2xl p-8 hover:border-brand-green/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-brand-green text-2xl">📁</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Organize Smart</h3>
                            <p className="text-brand-light/70">
                                Create collections, add tags, and filter by platform. Find what you need in seconds.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-brand-dark/50 border border-brand-dark rounded-2xl p-8 hover:border-brand-green/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-brand-green text-2xl">🌐</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Access Anywhere</h3>
                            <p className="text-brand-light/70">
                                Your content library syncs across all devices. Desktop, mobile, tablet—it's always there.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-brand-dark/50 border border-brand-dark rounded-2xl p-8 hover:border-brand-green/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-brand-green text-2xl">🔍</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Search Everything</h3>
                            <p className="text-brand-light/70">
                                Powerful search across all your saved content. Find that perfect thread instantly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark/30">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
                        Getting Started is Simple
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-brand-black text-2xl font-bold mx-auto mb-6">
                                1
                            </div>
                            <h3 className="text-xl font-bold mb-3">Create Your Account</h3>
                            <p className="text-brand-light/70">
                                Sign up in seconds. No credit card required, completely free to start.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-brand-black text-2xl font-bold mx-auto mb-6">
                                2
                            </div>
                            <h3 className="text-xl font-bold mb-3">Save Your Content</h3>
                            <p className="text-brand-light/70">
                                Paste links to Twitter threads or YouTube videos. We'll save everything for you.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center text-brand-black text-2xl font-bold mx-auto mb-6">
                                3
                            </div>
                            <h3 className="text-xl font-bold mb-3">Access Anytime</h3>
                            <p className="text-brand-light/70">
                                Browse, search, and share your curated collection from any device.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center bg-brand-dark/50 border border-brand-dark rounded-3xl p-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Start Building Your Knowledge Library
                    </h2>
                    <p className="text-xl text-brand-light/70 mb-10">
                        Join thousands of creators, researchers, and learners who never lose track of valuable content.
                    </p>
                    <div className="flex justify-center">
                        <a href="/signup">
                            <Button variant="primary" text="Get Started Free" size="lg" />
                        </a>
                    </div>
                    <p className="mt-4 text-brand-light/50 text-sm">
                        Free forever • No credit card required
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-brand-dark py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Brand */}
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center">
                                    <span className="text-brand-black text-xl font-bold">B</span>
                                </div>
                                <span className="text-xl font-bold text-brand-light">Brainly</span>
                            </div>
                            <p className="text-brand-light/60 max-w-md">
                                Your personal content library for Twitter and YouTube. Never lose valuable content again.
                            </p>
                        </div>

                        {/* Product */}
                        <div>
                            <h4 className="font-semibold mb-4 text-brand-light">Product</h4>
                            <ul className="space-y-2 text-brand-light/60">
                                <li><a href="/signup" className="hover:text-brand-green transition-colors">Features</a></li>
                                <li><a href="/signup" className="hover:text-brand-green transition-colors">Pricing</a></li>
                                <li><a href="/signup" className="hover:text-brand-green transition-colors">FAQ</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="font-semibold mb-4 text-brand-light">Company</h4>
                            <ul className="space-y-2 text-brand-light/60">
                                <li><a href="/signup" className="hover:text-brand-green transition-colors">About</a></li>
                                <li><a href="/signin" className="hover:text-brand-green transition-colors">Sign In</a></li>
                                <li><a href="/signup" className="hover:text-brand-green transition-colors">Sign Up</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-brand-dark mt-8 pt-8 text-center text-brand-light/50 text-sm">
                        <p>&copy; 2025 Brainly. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
