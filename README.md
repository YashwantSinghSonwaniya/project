# FakeBuster - AI-Powered Fake Content Detection

A comprehensive web application for detecting fake news, phishing emails, fraudulent WhatsApp messages, and deceptive social media posts using AI-powered analysis.

## 🚀 Features

- **Fake News Detection**: Analyze news articles and headlines for misinformation
- **Email Phishing Detection**: Scan emails for phishing attempts and malicious content
- **WhatsApp Message Analysis**: Verify forwarded messages and detect potential scams
- **Social Media Post Detection**: Analyze posts for fake content and manipulation
- **Responsive Design**: Works seamlessly across all devices
- **Animated Transitions**: Smooth AOS animations for better user experience
- **Educational Content**: Tips and tools for manual verification

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Animations**: AOS (Animate On Scroll)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd fakebuster
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

This project is configured to work seamlessly with popular hosting platforms:

### GitHub Pages

1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Ensure the repository has GitHub Pages enabled

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The `_redirects` file is included for proper SPA routing

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── DetectionCard.tsx   # Reusable card component
├── pages/
│   ├── Home.tsx            # Landing page
│   ├── FakeNews.tsx        # News detection page
│   ├── FakeEmails.tsx      # Email detection page
│   ├── FakeWhatsApp.tsx    # WhatsApp detection page
│   ├── FakeSocialMedia.tsx # Social media detection page
│   └── NotFound.tsx        # 404 error page
├── App.tsx                 # Main app component
├── main.tsx               # Entry point
└── index.css              # Global styles
```

## 🎨 Design Features

- **Dark Theme**: Modern dark UI with gradient backgrounds
- **Responsive Layout**: Mobile-first design approach
- **Smooth Animations**: AOS library for scroll animations
- **Interactive Elements**: Hover effects and micro-interactions
- **Accessibility**: Proper contrast ratios and semantic HTML

## 🔧 Configuration

The project includes configuration for:
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting with React-specific rules
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Animations powered by [AOS](https://michalsnik.github.io/aos/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**FakeBuster** - Protecting you from fake content with AI-powered detection technology.