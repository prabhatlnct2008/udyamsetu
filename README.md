# UdyamSetu Growth Studio - Landing Pages

A modern, responsive landing page for UdyamSetu Growth Studio built with Next.js, TypeScript, and Tailwind CSS. Features both English and Hinglish (Hindi-English mix) versions.

## Features

- **Dual Language Support**: English (main page) and Hinglish (/hi route)
- **Modern UI/UX**: Clean, professional design with Indian brand aesthetics
- **Responsive Design**: Mobile-first approach, works on all devices
- **Fast Performance**: Optimized with Next.js App Router
- **WhatsApp Integration**: Direct CTA buttons linking to WhatsApp
- **SEO Optimized**: Proper metadata and semantic HTML

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Poppins, Inter, Mukta (for Hindi/Devanagari support)

## Project Structure

```
udyamsetu/
├── src/
│   ├── app/
│   │   ├── page.tsx          # English landing page (main)
│   │   ├── hi/
│   │   │   └── page.tsx      # Hinglish landing page
│   │   ├── layout.tsx        # Root layout with fonts
│   │   └── globals.css       # Global styles and brand colors
│   └── components/
│       ├── Header.tsx        # Navigation header
│       ├── Footer.tsx        # Footer section
│       ├── CTAButtons.tsx    # Call-to-action buttons
│       ├── ModuleCard.tsx    # Service module cards
│       ├── PackageCard.tsx   # Pricing package cards
│       ├── FAQ.tsx           # FAQ accordion
│       └── SectionCard.tsx   # Generic section card
├── public/                   # Static assets
└── package.json
```

## Brand Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| Indigo Ink | `#1F2A6D` | Primary, headings |
| Saffron Accent | `#FF8A00` | CTA buttons, highlights |
| Mehendi Green | `#1F7A3A` | Success states |
| Ivory Sand | `#FFF6E8` | Background |
| Charcoal | `#1A1A1A` | Body text |
| Soft Border | `#E9D8C3` | Borders, dividers |

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd udyamsetu
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the English landing page
5. Open [http://localhost:3000/hi](http://localhost:3000/hi) to view the Hinglish landing page

## Deploy on Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com) and sign up (free tier available)

2. **Import Project**
   - Click "Add New..." → "Project"
   - Connect your GitHub/GitLab/Bitbucket account
   - Select the repository containing this project

3. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your project
   - You'll get a production URL like `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy from project directory**
```bash
vercel
```

4. **For production deployment**
```bash
vercel --prod
```

### Environment Variables (Optional)

If you need to configure environment variables:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add your variables (e.g., WhatsApp number, API keys)

Example `.env.local` for local development:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999
```

### Custom Domain

1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Routes

| Route | Description |
|-------|-------------|
| `/` | English landing page (main) |
| `/hi` | Hinglish landing page |

## Customization

### Update WhatsApp Number

Replace `919999999999` with your actual WhatsApp number in:
- `src/components/Header.tsx`
- `src/components/CTAButtons.tsx`
- `src/components/PackageCard.tsx`
- `src/app/page.tsx`
- `src/app/hi/page.tsx`

### Update Brand Colors

Modify colors in `src/app/globals.css`:
```css
:root {
  --indigo-ink: #1F2A6D;
  --saffron-accent: #FF8A00;
  /* ... other colors */
}
```

### Update Content

- English content: `src/app/page.tsx`
- Hinglish content: `src/app/hi/page.tsx`

## License

Private - UdyamSetu Growth Studio
