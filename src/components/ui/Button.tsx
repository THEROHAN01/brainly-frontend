import React from 'react';


interface ButtonProps {
    variant: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    text: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
    glow?: boolean;
    className?: string;
}

const variantStyles = {
    primary: "bg-brand-primary text-brand-bg hover:bg-brand-primary-light active:bg-brand-primary-dark shadow-md hover:shadow-lg",
    secondary: "bg-brand-surface text-brand-text border border-brand-primary hover:bg-brand-surface/80 active:bg-brand-surface/60"
};

const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-4 text-lg"
};

export const Button = ({
    variant,
    size = 'md',
    text,
    startIcon,
    endIcon,
    onClick,
    fullWidth,
    loading,
    glow,
    className = ""
}: ButtonProps) => {
    const glowClass = glow ? "animate-pulse-glow glow-primary" : "";
    const buttonClasses = `cursor-pointer rounded-lg flex items-center justify-center font-semibold transition-all duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${glowClass} ${className}`;

    return (
        <button
            onClick={onClick}
            className={buttonClasses + `${fullWidth ? " w-full" : ""} ${loading ? "opacity-45 cursor-not-allowed" : ""}`}
            disabled={loading}
        >
            {startIcon && <span className="mr-2 flex items-center">{startIcon}</span>}
            {text}
            {endIcon && <span className="ml-2 flex items-center">{endIcon}</span>}
        </button>
    );
};


