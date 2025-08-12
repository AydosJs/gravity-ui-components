'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    loading?: boolean;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    size = 'md',
    variant = 'primary',
    className,
    children,
    onClick,
    disabled = false,
    type = 'button',
    loading = false,
    fullWidth = false,
    ...props
}) => {
    const getSizeClasses = (size: string) => {
        switch (size) {
            case 'sm': return 'px-3 py-1.5 text-sm';
            case 'lg': return 'px-6 py-3 text-lg';
            default: return 'px-4 py-2 text-base';
        }
    };

    const getVariantClasses = (variant: string) => {
        switch (variant) {
            case 'primary':
                return 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-sm font-semibold';
            case 'secondary':
                return 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 border border-gray-300';
            case 'outline':
                return 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100';
            case 'ghost':
                return 'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100 active:bg-gray-200';
            case 'danger':
                return 'bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold shadow-sm';
            case 'success':
                return 'bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold shadow-sm';
            default:
                return 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-sm font-semibold';
        }
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={cn(
                'inline-flex items-center justify-center',
                'font-medium rounded-md',
                'transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'hover:scale-105 active:scale-95',
                fullWidth && 'w-full',
                getSizeClasses(size),
                getVariantClasses(variant),
                className
            )}
            {...props}
        >
            {loading ? (
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Loading...
                </div>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
