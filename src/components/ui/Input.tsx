export function Input ({onChange, placeholder}:{placeholder:string ; onChange?: () => void }){

    return <div>
        <input
            placeholder={placeholder}
            type={"text"}
            className="w-full px-4 py-3 bg-brand-black border border-brand-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-all duration-200 placeholder:text-brand-light/40 text-brand-light"
            onChange={onChange}
        />
    </div>
}