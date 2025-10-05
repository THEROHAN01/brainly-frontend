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
    "primary": "bg-purple-600 text-white",
    "secondary":"bg-purple-400 text-purple-600"
}

export const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick} className={variantStyles[props.variant]}>{props.text}</button>
}