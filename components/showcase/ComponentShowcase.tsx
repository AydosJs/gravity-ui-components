'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Badge from '../ui/Badge';
import Select, { SelectProps } from '../ui/Select';

const ComponentShowcase: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState<string>('');

    const selectOptions: SelectProps['options'] = [
        { value: 'option1', content: 'Option 1' },
        { value: 'option2', content: 'Option 2' },
        { value: 'option3', content: 'Option 3' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Gravity UI Components
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                        A showcase of custom UI components built with Gravity UI and Tailwind CSS
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="/demo"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            View Demo
                        </a>
                        <a
                            href="https://github.com/gravity-ui/uikit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                            Gravity UI Docs
                        </a>
                    </div>
                </div>

                {/* Buttons Section */}
                <Card className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Buttons</h2>

                    {/* Button Variants */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-700">Variants</h3>
                        <div className="flex flex-wrap gap-3">
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="success">Success</Button>
                            <Button variant="danger">Danger</Button>
                        </div>
                    </div>

                    {/* Button Sizes */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-700">Sizes</h3>
                        <div className="flex flex-wrap items-center gap-3">
                            <Button size="sm">Small</Button>
                            <Button size="md">Medium</Button>
                            <Button size="lg">Large</Button>
                        </div>
                    </div>
                </Card>

                {/* Form Elements Section */}
                <Card className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Form Elements</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Input Fields */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-700">Input Fields</h3>
                            <Input
                                label="Text Input"
                                placeholder="Enter some text..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <Input
                                label="Email Input"
                                type="email"
                                placeholder="Enter your email"
                                error="Please enter a valid email"
                            />
                        </div>

                        {/* Select Dropdown */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-700">Select Dropdown</h3>
                            <div>
                                <label className="block text-sm font-medium text-black mb-2">
                                    Choose an option
                                </label>
                                <Select
                                    options={selectOptions}
                                    value={[selectedOption]}
                                    onUpdate={(value) => setSelectedOption(value[0] || '')}
                                    placeholder="Select an option"
                                    className="w-full text-black"
                                />
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Cards Section */}
                <Card className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Cards</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card padding="sm" shadow="sm" hover>
                            <h4 className="font-semibold text-gray-900 mb-2">Small Card</h4>
                            <p className="text-sm text-gray-600">
                                This is a small card with hover effects.
                            </p>
                        </Card>

                        <Card padding="md" shadow="md" hover>
                            <h4 className="font-semibold text-gray-900 mb-2">Medium Card</h4>
                            <p className="text-sm text-gray-600">
                                This is a medium card with medium shadow.
                            </p>
                        </Card>

                        <Card padding="lg" shadow="lg" hover>
                            <h4 className="font-semibold text-gray-900 mb-2">Large Card</h4>
                            <p className="text-sm text-gray-600">
                                This is a large card with large shadow.
                            </p>
                        </Card>
                    </div>
                </Card>

                {/* Responsive Grid Section */}
                <Card className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Responsive Grid</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {Array.from({ length: 8 }, (_, i) => (
                            <div
                                key={i}
                                className="bg-blue-100 p-4 rounded-lg text-center"
                            >
                                <span className="text-sm font-medium text-blue-800">
                                    Item {i + 1}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Badge Section */}
                <Card className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Badges</h2>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-700">Variants</h3>
                        <div className="flex flex-wrap gap-3">
                            <Badge variant="default">Default</Badge>
                            <Badge variant="primary">Primary</Badge>
                            <Badge variant="success">Success</Badge>
                            <Badge variant="warning">Warning</Badge>
                            <Badge variant="error">Error</Badge>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-700">Sizes</h3>
                        <div className="flex flex-wrap items-center gap-3">
                            <Badge size="sm">Small</Badge>
                            <Badge size="md">Medium</Badge>
                            <Badge size="lg">Large</Badge>
                        </div>
                    </div>
                </Card>

                {/* Interactive Elements */}
                <Card className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Interactive Elements</h2>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            variant="primary"
                            onClick={() => alert('Button clicked!')}
                            className="flex-1"
                        >
                            Click Me
                        </Button>

                        <Button
                            variant="outline"
                            onClick={() => setInputValue('')}
                            className="flex-1"
                        >
                            Clear Input
                        </Button>
                    </div>

                    {/* Additional Button Examples */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-700">Button States</h3>
                        <div className="flex flex-wrap gap-3">
                            <Button variant="primary" loading>
                                Loading Button
                            </Button>
                            <Button variant="success" disabled>
                                Disabled Button
                            </Button>
                            <Button variant="danger" fullWidth>
                                Full Width Button
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ComponentShowcase;
