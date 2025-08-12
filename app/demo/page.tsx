import React from 'react';
import { Button, Card, Input, Badge, Select } from '@/components/ui';

export default function DemoPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Component Demo
                    </h1>
                    <p className="text-gray-600">
                        Individual component demonstrations
                    </p>
                </div>

                {/* Button Demo */}
                <Card>
                    <h2 className="text-xl font-semibold mb-4">Button Component</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium mb-2">Variants</h3>
                            <div className="flex flex-wrap gap-2">
                                <Button variant="primary">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="ghost">Ghost</Button>
                                <Button variant="success">Success</Button>
                                <Button variant="danger">Danger</Button>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-medium mb-2">Sizes</h3>
                            <div className="flex flex-wrap items-center gap-2">
                                <Button size="sm">Small</Button>
                                <Button size="md">Medium</Button>
                                <Button size="lg">Large</Button>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Input Demo */}
                <Card>
                    <h2 className="text-xl font-semibold mb-4">Input Component</h2>
                    <div className="space-y-4">
                        <Input
                            label="Text Input"
                            placeholder="Enter some text..."
                        />
                        <Input
                            label="Email Input"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <Input
                            label="Input with Error"
                            placeholder="This input has an error"
                            error="This field is required"
                        />
                    </div>
                </Card>

                {/* Badge Demo */}
                <Card>
                    <h2 className="text-xl font-semibold mb-4">Badge Component</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium mb-2">Variants</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="default">Default</Badge>
                                <Badge variant="primary">Primary</Badge>
                                <Badge variant="success">Success</Badge>
                                <Badge variant="warning">Warning</Badge>
                                <Badge variant="error">Error</Badge>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-medium mb-2">Sizes</h3>
                            <div className="flex flex-wrap items-center gap-2">
                                <Badge size="sm">Small</Badge>
                                <Badge size="md">Medium</Badge>
                                <Badge size="lg">Large</Badge>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Select Demo */}
                <Card>
                    <h2 className="text-xl font-semibold mb-4">Select Component</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">
                                Choose an option
                            </label>
                            <Select
                                options={[
                                    { value: 'option1', content: 'Option 1' },
                                    { value: 'option2', content: 'Option 2' },
                                    { value: 'option3', content: 'Option 3' },
                                ]}
                                value={['']}
                                onUpdate={(value) => console.log('Selected:', value)}
                                placeholder="Select an option"
                            />
                        </div>
                    </div>
                </Card>

                {/* Card Demo */}
                <Card>
                    <h2 className="text-xl font-semibold mb-4">Card Component</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card padding="sm" shadow="sm">
                            <h4 className="font-medium">Small Padding</h4>
                            <p className="text-sm text-gray-600">Small padding and shadow</p>
                        </Card>
                        <Card padding="lg" shadow="lg">
                            <h4 className="font-medium">Large Padding</h4>
                            <p className="text-sm text-gray-600">Large padding and shadow</p>
                        </Card>
                    </div>
                </Card>
            </div>
        </div>
    );
}
