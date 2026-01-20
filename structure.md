project-root/
├── .github/
│   └── workflows/
│       ├── Package-lock.yml
│       └── newmain.yml
├── .gitignore
├── .npmrc
├── .playwright-mcp/
│   └── login-page-wallet-button.png
├── AI_Aid.md
├── How to fix  dependency issues.md
├── Instructions for Gossiper.md
├── Non-Technical User Flow.md
├── PR_DOCUMENTATION.md
├── Package-lock.txttxt
├── README.md
├── Technical User Flow.md
├── WALLET_AUTH_SETUP.md
├── app/
│   ├── about/page.tsx
│   ├── api/
│   │   ├── auth/
│   │   │   ├── me/route.ts
│   │   │   └── wallet/
│   │   │       ├── signin/route.ts
│   │   │       ├── signup/route.ts
│   │   │       └── verify/route.ts
│   │   ├── sessions/
│   │   │   ├── [id]/
│   │   │   │   ├── participants/route.ts
│   │   │   │   └── route.ts
│   │   │   ├── create/route.ts
│   │   │   └── join/route.ts
│   │   └── transcription/
│   │       ├── callback/route.ts
│   │       └── transcribe/route.ts
│   ├── contact/page.tsx
│   ├── create-session/page.tsx
│   ├── dashboard/
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── features/
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── forgot-password/page.tsx
│   ├── globals.css
│   ├── help/
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── join-session/page.tsx
│   ├── layout.tsx
│   ├── login/page.tsx
│   ├── page.tsx
│   ├── pricing/page.tsx
│   ├── privacy/page.tsx
│   ├── session/
│   │   └── [id]/
│   │       ├── loading.tsx
│   │       ├── page.tsx
│   │       └── session-page.txt
│   ├── signup/page.tsx
│   └── terms/page.tsx
├── base_blockchain_setup/
│   ├── BASE_BLOCKCHAIN_INDEX.md
│   ├── BASE_INTEGRATION_GUIDE.md
│   ├── BASE_PAYMENT_SUMMARY.md
│   ├── DEPLOYMENT_CHECKLIST.md
│   ├── PAYMENT_FLOW.md
│   └── QUICK_START.md
├── components/
│   ├── accessibility-provider.tsx
│   ├── accessibility-toolbar.tsx
│   ├── auth-guard.tsx
│   ├── caption-display.tsx
│   ├── live-announcer.tsx
│   ├── main-navigation.tsx
│   ├── payment-modal.tsx
│   ├── realtime-transcription-display.tsx
│   ├── session-card.tsx
│   ├── skip-navigation.tsx
│   ├── solana-wallet-provider.tsx
│   ├── theme-provider.tsx
│   ├── transcription-display.tsx
│   ├── ui/
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── alert.tsx
│   │   ├── aspect-ratio.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button-group.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── chart.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── command.tsx
│   │   ├── context-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── drawer.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── empty.tsx
│   │   ├── field.tsx
│   │   ├── form.tsx
│   │   ├── hover-card.tsx
│   │   ├── input-group.tsx
│   │   ├── input-otp.tsx
│   │   ├── input.tsx
│   │   ├── item.tsx
│   │   ├── kbd.tsx
│   │   ├── label.tsx
│   │   ├── menubar.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── pagination.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── resizable.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   ├── slider.tsx
│   │   ├── sonner.tsx
│   │   ├── spinner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   ├── toggle-group.tsx
│   │   ├── toggle.tsx
│   │   ├── tooltip.tsx
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   └── wallet-multi-button.tsx
├── contracts/
│   ├── .gitignore
│   ├── README.md
│   ├── SessionPaymentABI.json
│   ├── contracts/
│   │   └── SessionPayment.sol
│   ├── deployments/
│   │   └── .gitkeep
│   ├── hardhat.config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── scripts/
│   │   └── deploy.js
│   └── test/
│       └── SessionPayment.test.js
├── curl1 codes.md
├── curl_test.txt
├── database/
│   ├── lib/
│   │   ├── auth-schema.sql
│   │   └── sessions-schema.sql
│   ├── migrations/
│   │   └── 001_wallet_auth.sql
│   ├── schemas/
│   │   ├── Transcription_table
│   │   ├── Transcription_table.sql
│   │   ├── auth_enhancements.sql
│   │   ├── profiles_table
│   │   ├── profiles_table.sql
│   │   ├── session_enhancements_v1.sql
│   │   ├── session_table
│   │   ├── session_table.sql
│   │   ├── sessions_participants_table
│   │   ├── sessions_participants_table.sql
│   │   └── transcription_enhancements_v1.sql
│   └── scripts/
│       ├── session_enhancements_v1.sql
│       └── transcription_enhancements_v1.sql
├── env_updated.txt
├── fixe_auth/
│   ├── AUTH_IMPROVEMENT_PROPOSAL.md
│   ├── Auth-fixes_progress_2.md
│   ├── Auth_signup_signin_redirect.md
│   ├── last-auth_improvements_progress.md
│   └── signup_signin_redirect.md
├── fixe_session_management/
│   ├── SESSION_MANAGEMENT_AND_USER_ROLE_IMPROVEMENT_PROPOSAL.md
│   ├── Session_logic_and_flow.md
│   └── Session_management_progress.md
├── fixe_transcription/
│   ├── TRANSCRIPTION_IMPROVEMENT_PROPOSAL.md
│   ├── Transcription-flow.md
│   └── Transcription_update_progress.md
├── hooks/
│   ├── use-auth-legacy.ts
│   ├── use-auth.tsx
│   ├── use-base.ts
│   ├── use-captions.ts
│   ├── use-mobile.ts
│   ├── use-realtime-transcriptions.ts
│   ├── use-solana.ts
│   ├── use-toast.ts
│   ├── use-transcription.ts
│   └── use-websocket.ts
├── lib/
│   ├── analytics/
│   │   ├── session-analytics.ts
│   │   └── transcription-analytics.ts
│   ├── assembly-ai/
│   │   └── fetch-transcript.ts
│   ├── auth-error-handler.ts
│   ├── auth-security.ts
│   ├── auth-utils.ts
│   ├── auth-validation.ts
│   ├── session-service-client.ts
│   ├── session-service-server.ts
│   ├── supabase-auth.ts
│   ├── supabase-client.ts
│   ├── supabase-server.ts
│   ├── types/
│   │   ├── session.ts
│   │   └── transcription.ts
│   ├── types.ts
│   ├── utils.ts
│   └── validation/
│       ├── session-validation.ts
│       ├── transcription-validation.ts
│       └── webhook-validation.ts
├── middleware-future.txt
├── middleware-old.txt
├── middleware.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── package.rar
├── postcss.config.js
├── postcss_config_fixes.md
├── public/
│   ├── Arixe.jpg
│   ├── Hikaru.jpg
│   ├── Victory.jpg
│   ├── gossiper-logo-white.png
│   ├── gossiper-logo.jpeg
│   ├── melody.jpg
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder-user.jpg
│   ├── placeholder.jpg
│   ├── placeholder.svg
│   ├── professional-headshot-of-dr--adebayo-ogundimu.jpg
│   ├── professional-headshot-of-michael-rodriguez.jpg
│   └── professional-headshot-of-sarah-chen.jpg
├── scripts/
├── services/
│   └── transcription/
│       ├── api/
│       │   ├── transcribe.ts
│       │   └── webhook.ts
│       ├── lib/
│       │   ├── assemblyai.ts
│       │   ├── config.ts
│       │   └── types.ts
│       ├── package.json
│       ├── tsconfig.json
│       └── vercel.json
├── tailwind.config.txt
├── transcription_template/
│   ├── Instructions for Gossiper.md
│   ├── api/
│   │   ├── transcribe.ts
│   │   └── webhook.ts
│   ├── lib/
│   │   ├── assemblyai.ts
│   │   ├── config.ts
│   │   └── types.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── vercel.json
├── tsconfig.json
├── vercel.json
└── Template/
    ├── HACKATHON_SUBMISSION.md
    ├── MIGRATION_COMPLETE.md
    ├── PRODUCT_REQUIREMENTS_DOCUMENT.md
    ├── README.md
    ├── README_AUTH.md
    ├── SETUP_INSTRUCTIONS.md
    ├── SMART_CONTRACT_IMPLEMENTATION.md
    ├── WALLET_AUTH_MIGRATION.md
    ├── app/
    │   ├── about/page.tsx
    │   ├── api/
    │   │   ├── auth/
    │   │   │   ├── me/route.ts
    │   │   │   ├── signin/route.ts
    │   │   │   ├── signout/route.ts
    │   │   │   ├── signup/route.ts
    │   │   │   └── wallet/
    │   │   │       ├── connect/route.ts
    │   │   │       └── disconnect/route.ts
    │   │   ├── sessions/
    │   │   │   ├── [id]/route.ts
    │   │   │   ├── create/route.ts
    │   │   │   ├── join/route.ts
    │   │   │   ├── my-sessions/route.ts
    │   │   │   └── validate-code/route.ts
    │   │   └── transcription/
    │   │       ├── callback/route.ts
    │   │       ├── stream/route.ts
    │   │       ├── transcribe/route.ts
    │   │       └── webhook/route.ts
    │   ├── careers/page.tsx
    │   ├── contact/page.tsx
    │   ├── create-session/page.tsx
    │   ├── dashboard/
    │   │   ├── loading.tsx
    │   │   └── page.tsx
    │   ├── features/
    │   │   ├── loading.tsx
    │   │   └── page.tsx
    │   ├── fonts/
    │   │   ├── Nohemi-Black.woff2
    │   │   ├── Nohemi-Bold.woff2
    │   │   ├── Nohemi-ExtraBold.woff2
    │   │   ├── Nohemi-ExtraLight.woff2
    │   │   ├── Nohemi-Light.woff2
    │   │   ├── Nohemi-Medium.woff2
    │   │   ├── Nohemi-Regular.woff2
    │   │   ├── Nohemi-SemiBold.woff2
    │   │   └── Nohemi-Thin.woff2
    │   ├── forgot-password/page.tsx
    │   ├── globals.css
    │   ├── help/
    │   │   ├── loading.tsx
    │   │   └── page.tsx
    │   ├── join-session/page.tsx
    │   ├── layout.tsx
    │   ├── login/page.tsx
    │   ├── page.tsx
    │   ├── pricing/page.tsx
    │   ├── privacy/page.tsx
    │   ├── session/
    │   │   └── [id]/
    │   │       ├── loading.tsx
    │   │       └── page.tsx
    │   ├── signup/page.tsx
    │   └── terms/page.tsx
    ├── artifacts/
    │   ├── build-info/
    │   │   └── 1b3849490922276a1ad65225d86b25c0.json
    │   └── contracts/
    │       ├── SessionPool.sol/
    │       │   ├── SessionPool.dbg.json
    │       │   └── SessionPool.json
    │       └── SessionPoolFactory.sol/
    │           ├── SessionPoolFactory.dbg.json
    │           └── SessionPoolFactory.json
    │   ├── cache/
    │   │   └── solidity-files-cache.json
    │   ├── components/
    │   │   ├── accessibility-provider.tsx
    │   │   ├── accessibility-toolbar.tsx
    │   │   ├── caption-display.tsx
    │   │   ├── footer.tsx
    │   │   ├── lecturer-transcription-display.tsx
    │   │   ├── live-announcer.tsx
    │   │   ├── main-navigation.tsx
    │   │   ├── onchain-provider.tsx
    │   │   ├── payment-modal.tsx
    │   │   ├── realtime-transcription-display.tsx
    │   │   ├── session-card.tsx
    │   │   ├── skip-navigation.tsx
    │   │   ├── theme-provider.tsx
    │   │   ├── transcription-display.tsx
    │   │   ├── ui/
    │   │   │   ├── alert.tsx
    │   │   │   ├── badge.tsx
    │   │   │   ├── button.tsx
    │   │   │   ├── card.tsx
    │   │   │   ├── checkbox.tsx
    │   │   │   ├── dialog.tsx
    │   │   │   ├── dropdown-menu.tsx
    │   │   │   ├── input.tsx
    │   │   │   ├── label.tsx
    │   │   │   ├── progress.tsx
    │   │   │   ├── select.tsx
    │   │   │   ├── separator.tsx
    │   │   │   ├── sheet.tsx
    │   │   │   ├── switch.tsx
    │   │   │   ├── tabs.tsx
    │   │   │   └── textarea.tsx
    │   │   ├── wagmi-provider.tsx
    │   │   └── wallet-connect-button.tsx
    │   ├── contracts/
    │   │   ├── SessionPool.sol
    │   │   └── SessionPoolFactory.sol
    │   ├── hardhat.config.ts
    │   ├── hooks/
    │   │   ├── use-auth.tsx
    │   │   ├── use-captions.ts
    │   │   ├── use-realtime-transcription.ts
    │   │   ├── use-session-pool.ts
    │   │   ├── use-transcription.ts
    │   │   ├── use-wallet.ts
    │   │   └── use-websocket.ts
    │   ├── lib/
    │   │   ├── auth-schema.sql
    │   │   ├── auth.ts
    │   │   ├── contracts.ts
    │   │   ├── db.ts
    │   │   ├── sessions-schema.sql
    │   │   ├── types.ts
    │   │   ├── utils.ts
    │   │   └── wagmi-config.ts
    │   ├── next.config.mjs
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── playwright-mcp-config.json
    │   ├── pnpm-lock.yaml
    │   ├── postcss.config.mjs
    │   ├── public/
    │   │   ├── arixe.jpeg
    │   │   ├── goodness.jpeg
    │   │   ├── gossiper-features-page.png
    │   │   ├── gossiper-homepage.png
    │   │   ├── gossiper-join-session-wallet-required.png
    │   │   ├── gossiper-logo-white.png
    │   │   ├── gossiper-logo.jpeg
    │   │   ├── gossiper-wallet-login.png
    │   │   ├── gwen.png
    │   │   ├── melody.jpeg
    │   │   ├── oghenetega.jpg
    │   │   ├── placeholder-user.jpg
    │   │   ├── placeholder.jpg
    │   │   ├── placeholder.svg
    │   │   ├── professional-headshot-of-dr--adebayo-ogundimu.jpg
    │   │   ├── professional-headshot-of-michael-rodriguez.jpg
    │   │   ├── professional-headshot-of-sarah-chen.jpg
    │   │   └── victory.JPG
    │   ├── scripts/
    │   │   ├── deploy.ts
    │   │   ├── init-db.ts
    │   │   ├── test-connection.ts
    │   │   └── test-db.ts
    │   ├── services/
    │   │   └── transcription/
    │   │       ├── Instructions for Gossiper.md
    │   │       ├── api/
    │   │       │   ├── transcribe.ts
    │   │       │   └── webhook.ts
    │   │       ├── lib/
    │   │       │   ├── assemblyai.ts
    │   │       │   ├── config.ts
    │   │       │   └── types.ts
    │   │       ├── package.json
    │   │       ├── tsconfig.json
    │   │       └── vercel.json
    │   ├── styles/
    │   │   └── globals.css
    │   ├── tailwind.config.js
    │   ├── tsconfig.json
    │   └── typechain-types/
    │       ├── SessionPool.ts
    │       ├── SessionPoolFactory.ts
    │       ├── common.ts
    │       ├── factories/
    │       │   ├── SessionPoolFactory__factory.ts
    │       │   ├── SessionPool__factory.ts
    │       │   └── index.ts
    │       ├── hardhat.d.ts
    │       └── index.ts