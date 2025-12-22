import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";


export function Signin() {
    return (
        <div className="h-screen w-screen bg-brand-black flex justify-center items-center p-4">
            <div className="bg-brand-dark rounded-2xl shadow-2xl w-full max-w-md p-10 space-y-8 border border-brand-dark">
                {/* Logo Section */}
                <div className="text-center space-y-2">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-brand-black text-3xl font-bold">B</span>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-brand-light">Welcome back</h1>
                    <p className="text-brand-light/60 text-sm">Sign in to your account</p>
                </div>

                {/* Form Section */}
                <div className="space-y-5">
                    {/* Username Input */}
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-brand-light/80">Username</label>
                        <Input placeholder="Enter your username" />
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-brand-light/80">Password</label>
                        <Input placeholder="Enter your password" />
                    </div>

                    {/* Signin Button */}
                    <div className="pt-2">
                        <Button variant="primary" text="Sign In" fullWidth={true} loading={false} />
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center text-sm text-brand-light/60">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-brand-green font-semibold hover:text-brand-green/80 hover:underline transition-colors">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
}