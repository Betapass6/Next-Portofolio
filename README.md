# Next.js Portfolio - Modern Web Development Showcase

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This project demonstrates industry-level web development practices and showcases the latest features of the Next.js framework.

## 🚀 Features

- **Next.js 14** with App Directory
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Dark Mode** support
- **Responsive Design** for all devices
- **SEO Optimized** with metadata
- **Modern UI/UX** with clean design
- **Performance Optimized** with best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Linting**: ESLint + Prettier
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nextjs-portfolio
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

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── providers.tsx     # Context providers
├── lib/                  # Utility functions
└── types/                # TypeScript types
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/sections/hero.tsx` - Update name and description
- `src/components/sections/contact.tsx` - Update contact details
- `src/components/layout/header.tsx` - Update social links
- `src/components/layout/footer.tsx` - Update footer information

### Styling
- Colors: Modify `tailwind.config.js` for custom color schemes
- Fonts: Update font imports in `src/app/globals.css`
- Components: Customize component styles in respective files

### Content
- Projects: Update project data in `src/components/sections/projects.tsx`
- Skills: Modify skill levels in `src/components/sections/skills.tsx`
- Features: Update feature descriptions in `src/components/sections/features.tsx`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🌙 Dark Mode

The application includes a built-in dark mode toggle that:
- Respects user's system preferences
- Provides smooth transitions
- Maintains accessibility standards
- Persists user choice

## ⚡ Performance

This project implements several performance optimizations:
- Next.js Image optimization
- Code splitting and lazy loading
- Optimized fonts and assets
- Efficient CSS with Tailwind
- Minimal JavaScript bundle

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for beautiful icons

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
