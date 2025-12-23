import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";


export function Signup() {
    return (
        <div className="h-screen w-screen bg-brand-bg flex justify-center items-center p-4">
            <div className="bg-brand-surface rounded-2xl shadow-2xl w-full max-w-md p-10 space-y-8 border border-brand-surface">
                {/* Logo Section */}
                <div className="text-center space-y-2">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-brand-bg text-3xl font-bold">B</span>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-brand-text">Create your account</h1>
                    <p className="text-brand-text/60 text-sm">Get started with Brainly</p>
                </div>

                {/* Form Section */}
                <div className="space-y-5">
                    {/* Username Input */}
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-brand-text/80">Username</label>
                        <Input placeholder="Choose a username" />
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-brand-text/80">Password</label>
                        <Input placeholder="Create a strong password" />
                    </div>

                    {/* Signup Button */}
                    <div className="pt-2">
                        <Button variant="primary" text="Create Account" fullWidth={true} loading={false} />
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center text-sm text-brand-text/60">
                    Already have an account?{" "}
                    <a href="/signin" className="text-brand-primary font-semibold hover:text-brand-primary/80 hover:underline transition-colors">
                        Sign in
                    </a>
                </div>
            </div>
        </div>
    );
}