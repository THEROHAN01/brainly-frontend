import { forwardRef } from "react";

interface InputProps {
    placeholder: string;
    type?: "text" | "password" | "email" | "url";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ placeholder, type = "text" }, ref) => {
        return (
            <div>
                <input
                    placeholder={placeholder}
                    type={type}
                    className="w-full px-4 py-3 bg-brand-bg border border-brand-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-200 placeholder:text-brand-text/40 text-brand-text"
                    ref={ref}
                />
            </div>
        );
    }
);

Input.displayName = "Input";