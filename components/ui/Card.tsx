'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps {
    className?: string;
    children: React.ReactNode;
    padding?: 'sm' | 'md' | 'lg';
    shadow?: 'none' | 'sm' | 'md' | 'lg';
    hover?: boolean;
}

const Card: React.FC<CardProps> = ({
    className,
    children,
    padding = 'md',
    shadow = 'md',
    hover = false,
}) => {
    const getPaddingClasses = (padding: string) => {
        switch (padding) {
            case 'sm': return 'p-3 sm:p-4';
            case 'lg': return 'p-6 sm:p-8';
            default: return 'p-4 sm:p-6';
        }
    };

    const getShadowClasses = (shadow: string) => {
        switch (shadow) {
            case 'none': return '';
            case 'sm': return 'shadow-sm';
            case 'lg': return 'shadow-xl';
            default: return 'shadow-md';
        }
    };

    return (
        <div
            className={cn(
                'bg-white',
                'rounded-lg border border-gray-200',
                getPaddingClasses(padding),
                getShadowClasses(shadow),
                hover && 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1',
                'w-full',
                className
            )}
        >
            {children}
        </div>
    );
};

export default Card;
