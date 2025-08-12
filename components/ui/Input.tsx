'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps {
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    error?: string;
    className?: string;
    containerClassName?: string;
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    size = 'md',
    label,
    error,
    className,
    containerClassName,
    placeholder,
    type = 'text',
    value,
    onChange,
    disabled = false,
    ...props
}) => {
    const getSizeClasses = (size: string) => {
        switch (size) {
            case 'sm': return 'px-3 py-1.5 text-sm';
            case 'lg': return 'px-4 py-3 text-lg';
            default: return 'px-4 py-2 text-base';
        }
    };

    return (
        <div className={cn('w-full', containerClassName)}>
            {label && (
                <label className="block text-sm font-medium text-black mb-2">
                    {label}
                </label>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                disabled={disabled}
                placeholder={placeholder}
                className={cn(
                    'w-full',
                    'border border-gray-300 rounded-md',
                    'text-black placeholder:text-gray-500',
                    'transition-all duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
                    'disabled:bg-gray-50 disabled:cursor-not-allowed',
                    error && 'border-red-500 focus:ring-red-500',
                    getSizeClasses(size),
                    className
                )}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;
