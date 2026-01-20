# 🎤 Gossiper - Landing Page

> **AI-Powered Real-Time Captions & Translation** - Making education accessible for everyone.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## About Gossiper

Gossiper is a platform providing AI-powered real-time captions and translation, making classrooms and events accessible for deaf, hard-of-hearing, and international audiences. This is the official landing page and marketing site.

### Key Features

- 🌍 **50+ Language Support** - Real-time translation to major world languages
- ⚡ **Lightning Fast** - Sub-second latency transcription
- ♿ **WCAG Accessible** - Full accessibility compliance for all users
- 💰 **Affordable** - Micro-payment model accessible to students
- 🔒 **Blockchain-Powered** - Secure, decentralized payments

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/                    # Next.js app routes
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── about/             # About page
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   ├── contact/           # Contact page
│   ├── help/              # Help/FAQ page
│   ├── privacy/           # Privacy policy
│   └── terms/             # Terms of service
├── components/
│   ├── ui/                # Radix UI components
│   ├── main-navigation.tsx # Main nav component
│   ├── theme-provider.tsx
│   └── accessibility-*.tsx # Accessibility features
├── hooks/
│   ├── use-toast.ts
│   └── use-mobile.ts
└── lib/
    └── utils.ts           # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd GossiperAi_Landingpage
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types
- `npm run format` - Format code with Prettier

## Pages

- **Home** (`/`) - Landing page with features and CTAs
- **Features** (`/features`) - Detailed feature breakdown
- **Pricing** (`/pricing`) - Pricing information
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form and information
- **Help** (`/help`) - FAQ and support
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service

## Accessibility

This site is designed with accessibility as a core principle:

- ♿ WCAG 2.1 Level AA compliant
- 🎨 High contrast mode support
- 🔊 Screen reader compatible
- ⌨️ Full keyboard navigation
- 🔤 Font scaling support

## Environment Variables

Create a `.env.local` file (optional):

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Contributing

Please ensure code follows project conventions:

- Use TypeScript
- Follow component structure
- Use Tailwind CSS for styling
- Test accessibility features

## License

All rights reserved © 2024 Gossiper

## Support

For support, contact: support@gossiper.com

---

**Last Updated**: January 2026
Session Page → Audio Recording → AssemblyAI API → Webhook → Live Captions

```

### Payment Integration
```

Student Wallet → Solana Pay → Session Pool → Lecturer Wallet

```

### Multi-Language Support
```

Original Audio → AssemblyAI Transcription → Translation API → Target Language

````

## 🌟 Key Features

### 🎤 Real-Time Transcription
- **Sub-second latency** using AssemblyAI's advanced models
- **Multiple language support** including African languages (Yoruba, Swahili, Hausa)
- **Confidence scoring** for transcription accuracy

### 💰 Collaborative Funding
- **Micro-payments** starting from ₦50 ($0.10)
- **Pool-based funding** - students contribute collectively
- **Transparent tracking** of funding progress

### 🔐 Wallet-Only Authentication
- **No passwords** - just connect your Solana wallet
- **Phantom/Solflare** support out of the box
- **Secure** - your keys, your identity

### 🌍 Accessibility First
- **WCAG 2.1 AA** compliant design
- **High contrast modes** for visual accessibility
- **Screen reader support** for blind users
- **Font scaling** for reading difficulties

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production
```env
NEXT_PUBLIC_SOLANA_NETWORK=mainnet-beta
ASSEMBLYAI_API_KEY=your_production_api_key
NEXT_PUBLIC_APP_URL=https://your-domain.com
````

## 🧪 Development

### Available Scripts

```bash
pnpm run dev          # Start development server
pnpm run build        # Build for production
pnpm run start        # Start production server
pnpm run lint         # Run ESLint
```

### Project Structure

```
gossiper/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── create-session/    # Session creation
│   ├── session/[id]/      # Live session pages
│   └── join-session/      # Session joining
├── components/            # React components
│   ├── ui/               # Radix UI components
│   └── solana-wallet-provider.tsx
├── hooks/                # Custom React hooks
├── services/             # External service integrations
│   └── transcription/    # AssemblyAI integration
└── lib/                  # Utility functions
```

## 🌐 Supported Languages

- **English** (en)
- **Yoruba** (yo) - Nigerian language
- **French** (fr)
- **Spanish** (es)
- **Portuguese** (pt)
- **Arabic** (ar)
- **Chinese** (zh)
- **Hindi** (hi)
- **Swahili** (sw) - East African language
- **Hausa** (ha) - West African language

## 📱 Use Cases

### Educational Institutions

- **Universities**: Support international students in lectures
- **Online Courses**: Real-time captions for video content
- **Language Learning**: Practice listening with captions

### Corporate Training

- **Remote Meetings**: Multi-language support for global teams
- **Webinars**: Accessible presentations for all attendees
- **Training Sessions**: Inclusive learning environments

### Events & Conferences

- **Live Streaming**: Real-time captions for online events
- **Podcasts**: Transcription and translation services
- **Workshops**: Accessible content creation

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **AssemblyAI** for speech-to-text capabilities
- **Solana** for blockchain infrastructure and micro-payments
- **Radix UI** for accessible component primitives
- **Tailwind CSS** for utility-first styling
- **Next.js** for the React framework
- **Vercel** for deployment platform

## 🎯 Hackathon Impact

### What Makes This Special

- **First-of-its-kind** integration of real-time AI transcription with Solana payments
- **Accessibility-focused** design that actually works for deaf/hard-of-hearing users
- **African language support** including Yoruba, Swahili, and Hausa
- **Micro-payment innovation** - students pay as little as ₦50 ($0.10)
- **Production-ready** codebase with proper error handling and logging

### Technical Innovation

- **Serverless architecture** using Vercel functions
- **Real-time WebSocket** connections for live updates
- **Solana Pay integration** for seamless micro-transactions
- **Multi-language AI** pipeline with AssemblyAI
- **Accessibility compliance** with WCAG 2.1 AA standards

### Social Impact

- **Educational accessibility** for deaf and hard-of-hearing students
- **Language barrier removal** for international students
- **Affordable access** through collaborative funding model
- **Global reach** with support for African languages

---

**Built with ❤️ for accessible education**

_Making every voice heard, in every language, for every student._
"# ahmed-gossiper"
"# ahmed-gossiper"
