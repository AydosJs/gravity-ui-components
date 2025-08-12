'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface SelectOption {
    value: string;
    content: string;
}

export interface SelectProps {
    options: SelectOption[];
    value: string[];
    onUpdate: (value: string[]) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

const Select: React.FC<SelectProps> = ({
    options,
    value,
    onUpdate,
    placeholder = 'Select an option',
    className,
    disabled = false,
    size = 'md',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>(value[0] || '');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const getSizeClasses = (size: string) => {
        switch (size) {
            case 'sm': return 'px-3 py-1.5 text-sm';
            case 'lg': return 'px-4 py-3 text-lg';
            default: return 'px-4 py-2 text-base';
        }
    };

    const selectedOption = options.find(option => option.value === selectedValue);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (optionValue: string) => {
        setSelectedValue(optionValue);
        onUpdate([optionValue]);
        setIsOpen(false);
    };

    return (
        <div className={cn('relative w-full', className)} ref={dropdownRef}>
            <button
                type="button"
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
                className={cn(
                    'w-full text-left',
                    'bg-white border border-gray-300 rounded-md',
                    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
                    'disabled:bg-gray-50 disabled:cursor-not-allowed',
                    getSizeClasses(size),
                    'text-black'
                )}
            >
                <span className={selectedOption ? 'text-black' : 'text-gray-500'}>
                    {selectedOption ? selectedOption.content : placeholder}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                        className={cn(
                            'h-5 w-5 transition-transform duration-200',
                            isOpen ? 'rotate-180' : 'rotate-0',
                            'text-gray-400'
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>

            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    <ul className="py-1 max-h-60 overflow-auto">
                        {options.map((option) => (
                            <li key={option.value}>
                                <button
                                    type="button"
                                    onClick={() => handleSelect(option.value)}
                                    className={cn(
                                        'w-full text-left px-4 py-2 text-sm',
                                        'hover:bg-gray-100 focus:bg-gray-100 focus:outline-none',
                                        'text-black',
                                        option.value === selectedValue && 'bg-blue-50 text-blue-900'
                                    )}
                                >
                                    {option.content}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Select;
