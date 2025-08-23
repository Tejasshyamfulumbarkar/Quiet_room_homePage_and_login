src/
├── app/
│   ├── login/
│   │   └── page.tsx       // The login page UI
│   │
│   ├── layout.tsx         // Root layout (with Navbar/Footer)
│   └── page.tsx           // The homepage UI
│
├── components/
│   ├── ui/                // Small, reusable UI elements
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   │
│   ├── Navbar.tsx         // Shared Navbar component
│   ├── Footer.tsx         // Shared Footer component
│   ├── HeroSection.tsx    // Component for the homepage
│   └── LoginForm.tsx      // Component for the login page
│
└── lib/
    └── registry.tsx       // Required for Styled Components