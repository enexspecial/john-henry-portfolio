# John Henry - Modern Software Engineer Portfolio

A modern, responsive portfolio website built with Next.js, TailwindCSS, and Framer Motion. This portfolio showcases John Henry's expertise in building scalable systems and shipping real products using AI-accelerated workflows.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first approach that works on all devices
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: Built with accessibility best practices
- **SEO Optimized**: Proper meta tags and structured data
- **Dark Mode Ready**: CSS variables for easy theme switching

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Inter (sans-serif) and JetBrains Mono (monospace)
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📋 Portfolio Sections

1. **Hero Section**: Compelling headline with AI-accelerated workflows focus
2. **Skills Matrix**: Organized by categories (Languages, Backend, Frontend, DevOps, etc.)
3. **AI Integration**: Showcases productivity gains with AI tools
4. **Project Case Studies**: Detailed project descriptions with tools and features
5. **Experience Timeline**: Professional journey with achievements
6. **Testimonials**: Social proof from colleagues and clients
7. **Contact Section**: Multiple ways to get in touch

## 🎯 Key Projects Featured

- **Real-time Note Sharing App**: React + GraphQL collaboration platform
- **Dealer Financing System**: Multi-country automotive financing platform
- **Sales Conversion Tool**: AI-powered lead scoring system
- **E-Health Record System**: HIPAA-compliant healthcare management system

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/johnhenry/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors and Theme

The portfolio uses a custom color palette defined in `tailwind.config.js`:

- Primary colors: Blue gradient (#3b82f6 to #8b5cf6)
- Dark theme: Custom dark palette for better contrast
- Accent colors: Purple and blue combinations

### Content Updates

1. **Personal Information**: Update the hero section and contact details
2. **Projects**: Modify the `projects` array in `src/app/page.tsx`
3. **Experience**: Update the `experience` array with your work history
4. **Skills**: Customize the `skills` object to match your expertise
5. **Testimonials**: Replace with real testimonials from your network

### Styling

- Custom CSS classes are defined in `src/app/globals.css`
- Component styles use TailwindCSS utility classes
- Animations are handled by Framer Motion

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:

- **Mobile**: Single column layout with optimized touch targets
- **Tablet**: Two-column grid for better content organization
- **Desktop**: Full-width layout with enhanced spacing and typography

## ⚡ Performance Optimizations

- **Image Optimization**: Next.js Image component for optimized loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Font Loading**: Optimized font loading with Google Fonts
- **Animations**: Hardware-accelerated animations with Framer Motion

## 🔧 Development

### File Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and TailwindCSS
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── components/              # Reusable components (future)
└── lib/                     # Utility functions (future)
```

### Adding New Sections

1. Create the section component in `src/app/page.tsx`
2. Add navigation link in the header
3. Style with TailwindCSS classes
4. Add animations with Framer Motion

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` directory to Netlify

### Other Platforms

The portfolio can be deployed to any static hosting platform that supports Next.js.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: john.henry@example.com
- **LinkedIn**: [linkedin.com/in/johnhenry](https://linkedin.com/in/johnhenry)
- **GitHub**: [github.com/johnhenry](https://github.com/johnhenry)

---

Built with ❤️ using Next.js, TailwindCSS, and Framer Motion
