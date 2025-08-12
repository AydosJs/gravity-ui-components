'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps {
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
    variant = 'default',
    size = 'md',
    className,
    children,
}) => {
    const getVariantClasses = (variant: string) => {
        switch (variant) {
            case 'primary':
                return 'bg-blue-100 text-blue-800';
            case 'success':
                return 'bg-green-100 text-green-800';
            case 'warning':
                return 'bg-yellow-100 text-yellow-800';
            case 'error':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getSizeClasses = (size: string) => {
        switch (size) {
            case 'sm':
                return 'px-2 py-1 text-xs';
            case 'lg':
                return 'px-4 py-2 text-base';
            default:
                return 'px-3 py-1.5 text-sm';
        }
    };

    return (
        <span
            className={cn(
                'inline-flex items-center font-medium rounded-full',
                getVariantClasses(variant),
                getSizeClasses(size),
                'transition-colors duration-200',
                className
            )}
        >
            {children}
        </span>
    );
};

export default Badge;
