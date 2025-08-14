# Joel Kabura - Portfolio Website

A modern, responsive portfolio website showcasing my software engineering projects and skills, with a focus on robotics, machine learning, and web development.

🚀 **Live Site**: [Coming Soon - Deploy to Vercel]

## 🎯 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Interactive Animations**: Smooth scroll animations and hover effects
- **Project Showcase**: Featured projects including robotics vision pipelines and web applications
- **Contact Form**: Secure contact form with spam protection
- **Performance Optimized**: Fast loading with Next.js optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Form Handling**: Formspree
- **Deployment**: Vercel (recommended)

## 📂 Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── sections/        # Page sections
│   │   ├── Hero.tsx     # Landing section
│   │   ├── About.tsx    # About me section
│   │   ├── Projects.tsx # Projects showcase
│   │   └── Contact.tsx  # Contact form
│   └── Navbar.tsx       # Navigation component
└── lib/                 # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/joelkab/Joel-portfolio.git
cd Joel-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add:
```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=your_formspree_endpoint_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Update Contact Form
1. Sign up for a free account at [Formspree](https://formspree.io/)
2. Create a new form and get your endpoint
3. Replace `YOUR_FORM_ID` in `Contact.tsx` with your Formspree endpoint

### Update Project Links
Update the GitHub repository links in `Projects.tsx` with your actual project repositories.

### Modify Content
- Edit personal information in each section component
- Update skills and technologies in `About.tsx`
- Add or modify projects in `Projects.tsx`
- Customize colors and styling in `tailwind.config.js`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Sign up for [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Configure environment variables
5. Deploy!

### Deploy to Other Platforms

The site can also be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render

## 📋 Features Breakdown

### Sections
- **Hero**: Eye-catching landing with animated gradient background
- **About**: Personal journey, skills showcase, and quick facts
- **Projects**: Interactive project cards with technology stacks
- **Contact**: Multiple contact methods and secure form

### Technical Highlights
- Responsive navigation with scroll spy
- Smooth scroll animations
- Dark mode support ready
- SEO optimized
- Accessibility compliant

## 🤝 Connect With Me

- **Email**: joelkabura123@gmail.com
- **LinkedIn**: [linkedin.com/in/Joelkabura](https://linkedin.com/in/Joelkabura)
- **GitHub**: [github.com/joelkab](https://github.com/joelkab)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Built with love for the developer community
- Special thanks to the open-source contributors

---

**Currently**: Software Engineering Intern at Haigs's Quality Printing | Computer Science Student at UNLV

⭐ If you found this portfolio inspiring, please give it a star!
