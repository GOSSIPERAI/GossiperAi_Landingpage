# 🎤 Gossiper: Real-Time Captions & Translation

> **Live captions and translation for education** - Students get real-time captions in their language. Pay as little as ₦50 to join a session.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Solana](https://img.shields.io/badge/Solana-Web3.js-purple?style=flat-square&logo=solana)](https://solana.com/)
[![AssemblyAI](https://img.shields.io/badge/AssemblyAI-AI%20Transcription-orange?style=flat-square)](https://assemblyai.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

## What Gossiper Does

Students join lecture sessions and get live captions in their language. They pay ₦50 to help fund the session.

### Problems We Solve

- International students can't understand lectures in foreign languages
- Deaf and hard-of-hearing students need real-time captions
- Accessibility tools cost too much for students
- Current solutions don't work together

### How It Works

**Connect wallet → Join session → Get captions → Pay ₦50**

- **Connect Wallet**: Use Phantom or Solflare - no signup needed
- **Join Session**: Enter code from your lecturer
- **Get Captions**: See live text in your language (50+ languages supported)
- **Pay ₦50**: Help fund the session for everyone
- **Accessible**: Works with screen readers and high contrast mode

## Try It Out

1. Connect your Solana wallet
2. Enter the session code your lecturer shared
3. Pick your language
4. See captions appear as the lecturer speaks
5. Pay ₦50 to help fund the session

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Blockchain**: Solana, Phantom/Solflare wallets
- **AI**: AssemblyAI for speech-to-text
- **Payments**: Solana Pay
- **Deployment**: Vercel

## Setup

### Requirements

- Node.js 18+
- npm
- Metamask wallet 
- AssemblyAI API key

### Install

1. Clone the repo
   ```bash
   git clone <repository-url>
   cd gossiper
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Add environment variables to `.env.local`:
   ```env
   NEXT_PUBLIC_SOLANA_NETWORK=devnet
   ASSEMBLYAI_API_KEY=your_api_key
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. Start the app
   ```bash
   pnpm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## How to Use

### Students
1. Connect your wallet
2. Enter the session code from your lecturer
3. Pick your language
4. Pay ₦50 to join (optional)

### Lecturers
1. Create a session
2. Share the join code with students
3. Start speaking - captions appear automatically
4. Check how much students have contributed

## 🔧 Architecture

### Real-Time Transcription Flow
```
Session Page → Audio Recording → AssemblyAI API → Webhook → Live Captions
```

### Payment Integration
```
Student Wallet → Solana Pay → Session Pool → Lecturer Wallet
```

### Multi-Language Support
```
Original Audio → AssemblyAI Transcription → Translation API → Target Language
```

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
```

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

*Making every voice heard, in every language, for every student.*
"# ahmed-gossiper" 
"# ahmed-gossiper" 
