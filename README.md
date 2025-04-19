# A GoodReads Clone

This is a modern, responsive web application that clones the core functionality of GoodReads, built for a hackathon project. It aims to provide book enthusiasts with a platform to discover, track, and discuss their reading journey.

## Features

- **Book Discovery**
  - Browse books by genre with curated lists
  - Explore Choice Awards selections
  - Discover featured authors and their works
  - View editorial blog content and recommendations

- **Quote Feature**
  - View inspiring quotes from books
  - Dynamic quote display with author attribution
  - Smooth transitions between quotes

- **Dual Interface**
  - Toggle between Classic and Modern UI
  - Persistent UI preference storage
  - Enhanced Modern interface with animations
  - Maintains Goodreads familiarity in Classic mode

- **Dark Mode Support**
  - System-preference aware dark mode
  - Manual theme toggle with persistence
  - Smooth theme transitions
  - Carefully crafted dark mode color palette

- **Modern UI Elements**
  - Animated gradient headers
  - Responsive card layouts
  - Interactive hover states
  - Accessibility-focused design

## 🚀 Implemented Features

### Core Features
- 📚 Genre-based book browsing
- 🏆 Goodreads Choice Awards showcase
- 💭 Dynamic quotes display
- 📝 Editorial blog previews
- 📋 List teasers and recommendations
- 👥 Featured authors section

### User Experience
- 🎨 Dual UI modes (Classic/Modern)
- 🌓 Smart dark mode with system sync
- 🔄 Smooth transitions and animations
- 📱 Fully responsive design
- 💾 Persistent user preferences

### Technical Features
- 🏗️ Vue 3 component architecture
- 📦 TypeScript for type safety
- 🛠️ Composition API with `<script setup>`
- 💾 VueUse for composables
- 🎨 Tailwind CSS with custom config
- 🔍 Modern and classic theme variants

## 🛠️ Tech Stack

- **Frontend Framework**: Vue 3 with TypeScript
- **Styling**: Tailwind CSS with custom utilities
- **Build Tool**: Vite
- **State Management**: Vue 3 Composition API + VueUse
- **Development Environment**: VS Code with Volar

## 🏗️ Project Structure

```
src/
├── components/          # Vue components
│   ├── Header/         # Navigation and UI mode components
│   ├── Body/           # Main content and feature components
│   └── Footer/         # Footer and link components
├── App.vue             # Root component with UI mode handling
├── main.ts             # Application entry point
├── style.css          # Global and theme styles
├── data.ts            # Mock data and content
└── footerData.ts      # Footer configuration and links
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
