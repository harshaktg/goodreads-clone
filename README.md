# A GoodReads Clone

This is a modern, responsive web application that clones the core functionality of GoodReads, built for a hackathon project. It aims to provide book enthusiasts with a platform to discover, track, and discuss their reading journey.

## 🚀 Implemented Features

### Core Features
- 📚 Genre-based book discovery
- 🏆 Goodreads Choice Awards showcase
- 💭 Inspirational quotes carousel
- 📝 Editorial blog section
- 📋 Curated book lists
- 👥 Author promotion platform

### User Experience
- 🌓 Smart dark mode with system preference sync
- 🎨 Modern, clean UI with Tailwind CSS
- 🔄 Smooth transitions and animations
- 📱 Responsive design for all devices
- 🔒 OAuth-based authentication (Amazon, Apple)

### Technical Features
- 🏗️ Component-based architecture
- 📦 Type-safe development with TypeScript
- 🛠️ Vue 3 Composition API with `<script setup>`
- 💾 Local storage persistence using VueUse
- 🎯 ESLint configuration for code quality

## 🛠️ Tech Stack

- **Frontend Framework**: Vue 3 with TypeScript
- **Styling**: Tailwind CSS for utility-first styling
- **Build Tool**: Vite for fast development
- **Package Manager**: pnpm for efficient dependency management
- **State Management**: Vue 3 Composition API + VueUse
- **Development Environment**: VS Code with recommended extensions

## 🏗️ Project Structure

```
src/
├── components/          # Reusable Vue components
│   ├── Header/         # Navigation and auth components
│   ├── Body/           # Main content components
│   └── Footer/         # Footer components and links
├── App.vue             # Root component
├── main.ts             # Application entry point
├── style.css          # Global styles
├── data.ts            # Mock data store
└── footerData.ts      # Footer configuration
```

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd goodreads-clone
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Build for production**
   ```bash
   pnpm build
   ```

## 💻 Development

The project uses Vue 3's Composition API with `<script setup>` syntax for better TypeScript integration and developer experience. Components are organized by feature/domain for better maintainability.

### Code Quality
- Strong TypeScript typing
- ESLint configuration for consistent code style
- Component-based architecture for reusability
- Responsive design patterns

### Dark Mode Implementation
The application features a smart dark mode system that:
- Syncs with system color scheme by default
- Allows user override with persistent preferences
- Provides smooth transitions between themes
- Uses carefully selected color palette for readability
- Maintains brand identity in both modes

### Recommended IDE Setup
- [VS Code](https://code.visualstudio.com/)
- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## 🤝 Contributing

This is a hackathon project, but contributions, ideas, and feedback are welcome! Feel free to open issues or submit pull requests.

## 📝 License

[MIT License](LICENSE)

---
Built with ❤️ for the love of books and coding
