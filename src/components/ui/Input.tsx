interface InputProps {
    placeholder: string ;
    ref?: any 
}



export function Input ({placeholder , ref}:InputProps){

    return <div>
        <input
            placeholder={placeholder}
            type={"text"}
            className="w-full px-4 py-3 bg-brand-bg border border-brand-surface rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-200 placeholder:text-brand-text/40 text-brand-text"
            ref={ref}
        />
    </div>
}