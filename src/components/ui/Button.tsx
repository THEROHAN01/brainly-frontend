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
}

const variantStyles = {
    primary: "bg-brand-green text-brand-black hover:bg-green-600 active:bg-green-700 shadow-md hover:shadow-lg ",
    secondary: "bg-brand-dark text-brand-light border border-brand-green hover:bg-brand-dark/80 active:bg-brand-dark/60 "
};

const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-4 text-lg"
};

// const defaultStyles = "px-4 py-2 rounded-md font-light";


export const Button = ({ variant, size = 'md', text, startIcon, endIcon, onClick ,fullWidth , loading}: ButtonProps) => {
    const buttonClasses = `cursor-pointer rounded-lg flex items-center justify-center font-semibold transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} `;

    return (
        <button onClick={onClick} className={buttonClasses + `${fullWidth ? " w-full" : ""} ${loading ? "opacity-45 cursor-not-allowed" : ""}`}  disabled={loading}>
            {startIcon && <div className="mr-2">{startIcon}</div>}
            {text}
            {endIcon && <div className="ml-2">{endIcon}</div>}
        </button>
    );
};


