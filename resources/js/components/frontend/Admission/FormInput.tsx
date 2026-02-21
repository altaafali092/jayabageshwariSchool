import React from "react";

const FormInput = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    defaultValue,
    required = false,
    disabled = false,
    className = "",
}: {
    label?: string;
    type?: string;
    name: string;
    value?: string;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
}) => {
    return (
        <div className={`space-y-2 group/input relative ${disabled ? 'opacity-50 grayscale pointer-events-none' : ''}`}>
            {label && (
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1 group-focus-within/input:text-blue-600 dark:group-focus-within/input:text-blue-400 transition-colors">
                    {label}
                </label>
            )}

            <input
                type={type}
                name={name}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className={`w-full h-14 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 font-bold text-slate-900 dark:text-white outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-600/5 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600 ${className}`}
            />
        </div>
    );
};

export default FormInput;
