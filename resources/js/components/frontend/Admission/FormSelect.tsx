import React from "react";
import { ChevronRight } from "lucide-react";

const FormSelect = ({
    label,
    name,
    value,
    onChange,
    options = [],
    required = false,
    disabled = false,
}: {
    label?: string;
    name: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options?: (string | { value: string; label: string })[];
    required?: boolean;
    disabled?: boolean;
}) => {
    return (
        <div className={`space-y-2 group/input relative ${disabled ? 'opacity-50 grayscale pointer-events-none' : ''}`}>
            {label && (
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1 group-focus-within/input:text-blue-600 dark:group-focus-within/input:text-blue-400 transition-colors">
                    {label}
                </label>
            )}

            <div className="relative">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                    className="w-full h-14 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 font-bold text-slate-900 dark:text-white outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-600/5 transition-all appearance-none cursor-pointer disabled:cursor-not-allowed"
                >
                    <option value="">Select</option>
                    {options.map((opt) => {
                        const optValue = typeof opt === 'string' ? opt : opt.value;
                        const optLabel = typeof opt === 'string' ? opt : opt.label;
                        return (
                            <option key={optValue} value={optValue}>
                                {optLabel}
                            </option>
                        );
                    })}
                </select>

                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
            </div>
        </div>
    );
};

export default FormSelect;
