import React from 'react';


interface ButtonProps {
    variant: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    text: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
}

const variantStyles = {
    primary: "bg-purple-600 text-white ",
    secondary: "bg-purple-200 text-purple-600 "
};

const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-4 text-lg"
};

export const Button = ({ variant, size = 'md', text, startIcon, endIcon, onClick }: ButtonProps) => {
    const buttonClasses = `rounded-md flex font-semibold ${variantStyles[variant]} ${sizeStyles[size]}`;

    return (
        <button onClick={onClick} className={buttonClasses}>
            {startIcon}
            {text}
            {endIcon}
        </button>
    );
};