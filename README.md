# Portfolio Website

A modern, responsive personal portfolio website built with Next.js, showcasing my projects, skills, and experience.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that adapts to all screen sizes.
- **Dark Mode**: Built-in dark mode support using `next-themes`.
- **Dynamic Content**: Data-driven sections for easy updates.
- **Smooth Animations**: Enhanced user experience with `framer-motion` animations.
- **Modern UI**: Styled with Tailwind CSS and Shadcn UI components.
- **Contact Form**: Functional contact section.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Email**: [Resend](https://resend.com/)

## 📂 Project Structure

```
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # React components
│   │   ├── sections/    # Page sections (Hero, About, Projects, etc.)
│   │   └── ui/          # Reusable UI components (buttons, inputs, etc.)
│   ├── lib/             # Utility functions and data
│   │   └── data.ts      # Portfolio content data
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
└── ...
```

## ⚡ Getting Started

First, clone the repository:

```bash
git clone https://github.com/ZawHlaingPhyoTsuki/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Scripts

- `dev`: Runs the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Checks for linting errors using Biome.
- `format`: Formats the code using Biome.

## 👤 Author

**Zaw Hlaing Phyo**

- 📧 Email: tro2233zhp@gmail.com
- 📍 Location: Bangkok, Thailand
- 🔗 GitHub: [ZawHlaingPhyoTsuki](https://github.com/ZawHlaingPhyoTsuki)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
