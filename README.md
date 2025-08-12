# Gravity UI Components

A modern, responsive UI component library built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, and **Gravity UI**.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS v4
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Type Safety**: Full TypeScript support with proper type definitions
- **Component Library**: Custom UI components built on top of Gravity UI
- **Best Practices**: Clean architecture with proper component separation
- **Light Theme**: Clean, modern light theme design
- **Accessibility**: WCAG compliant components

## 🏗️ Project Structure

```
gravity-ui-components/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Main showcase page
│   └── globals.css              # Global styles
├── components/                   # Reusable UI components
│   ├── ui/                      # Base UI components
│   │   ├── Button.tsx          # Custom button component
│   │   ├── Card.tsx            # Card layout component
│   │   ├── Input.tsx           # Form input component
│   │   └── index.ts            # Component exports
│   ├── showcase/                # Component demonstrations
│   │   └── ComponentShowcase.tsx
│   └── providers/               # Context providers
│       └── ThemeProvider.tsx    # Gravity UI theme provider
├── lib/                         # Utility functions
│   └── utils.ts                 # Class name utilities
└── package.json                 # Dependencies and scripts
```

## 🧩 Components

### Button
A customizable button component with multiple variants and sizes:
- **Variants**: Primary, Secondary, Outline, Ghost
- **Sizes**: Small, Medium, Large
- **Features**: Hover effects, focus states, responsive design

### Card
A flexible card component for content layout:
- **Padding Options**: Small, Medium, Large
- **Shadow Levels**: None, Small, Medium, Large
- **Features**: Hover effects, responsive padding, dark mode support

### Input
A form input component with validation support:
- **Types**: Text, Email, Password, etc.
- **Sizes**: Small, Medium, Large
- **Features**: Labels, error states, responsive design

## 📱 Responsive Design

The components use Tailwind CSS responsive prefixes:
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large screens (1280px+)

## 🎨 Styling

- **Tailwind CSS v4**: Modern utility-first CSS framework
- **Custom Utilities**: Enhanced with custom utility functions
- **Light Theme**: Clean, modern light theme design
- **Consistent Spacing**: Using Tailwind's spacing scale
- **Smooth Transitions**: CSS transitions for interactive elements

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gravity-ui-components
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Components

1. Create your component in `components/ui/`
2. Export it from `components/ui/index.ts`
3. Add it to the showcase in `components/showcase/ComponentShowcase.tsx`
4. Follow the existing component patterns

### Component Guidelines

- Use TypeScript interfaces for props
- Implement responsive design with Tailwind breakpoints
- Include proper accessibility attributes
- Follow the existing naming conventions
- Use the `cn` utility for class name merging

## 📚 Dependencies

### Core Dependencies
- **Next.js 15**: React framework
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS v4**: Utility-first CSS

### UI Library
- **@gravity-ui/uikit**: Component library
- **clsx**: Conditional class names
- **tailwind-merge**: Tailwind class merging

## 🌟 Best Practices Implemented

1. **Component Separation**: Each component is in its own file
2. **Type Safety**: Full TypeScript implementation
3. **Responsive Design**: Mobile-first approach with breakpoints
4. **Accessibility**: Proper ARIA labels and semantic HTML
5. **Performance**: Optimized with Next.js features
6. **Maintainability**: Clean, readable code structure
7. **Reusability**: Components are modular and configurable

## 🔮 Future Enhancements

- [ ] Add more form components (Select, Checkbox, Radio)
- [ ] Implement data table components
- [ ] Add navigation components
- [ ] Create layout components (Header, Sidebar, Footer)
- [ ] Add animation libraries
- [ ] Implement component testing
- [ ] Add Storybook integration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Gravity UI
