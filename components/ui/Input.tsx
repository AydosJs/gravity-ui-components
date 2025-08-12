'use client';

import React from 'react';
import { TextInput, TextInputProps } from '@gravity-ui/uikit';
import { cn } from '@/lib/utils';

export interface InputProps extends Omit<TextInputProps, 'size'> {
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    error?: string;
    className?: string;
    containerClassName?: string;
}

const Input: React.FC<InputProps> = ({
    size = 'md',
    label,
    error,
    className,
    containerClassName,
    ...props
}) => {
    const getGravitySize = (size: string) => {
        switch (size) {
            case 'sm': return 's';
            case 'lg': return 'l';
            default: return 'm';
        }
    };

    return (
        <div className={cn('w-full', containerClassName)}>
            {label && (
                <label className="block text-sm font-medium text-black mb-2">
                    {label}
                </label>
            )}
            <TextInput
                size={getGravitySize(size)}
                className={cn(
                    'w-full',
                    'text-black',
                    'placeholder:text-black',
                    'transition-all duration-200',
                    'focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                    error && 'border-red-500 focus:ring-red-500',
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
