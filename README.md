# 📚 Goodreads Clone — Hackathon Submission

A modern, responsive clone of the **Goodreads landing page**, rebuilt using **Vue 3**, **TypeScript**, and **Tailwind CSS**. This project replicates the core visual structure of Goodreads while introducing a range of enhancements to improve usability, responsiveness, and user engagement.

---

## 🚀 Features

### ✅ Cloned from Goodreads
- Pixel-perfect replica of the **Goodreads desktop landing page**
- Recreated sections: Hero, Book Categories, Awards, Lists, Authors, Blog, Footer

### ✨ Enhancements
- **Dark Mode**  
  Smart system-detected dark mode with manual toggle and persistent preference via localStorage

- **Modern UI Toggle**  
  Switch to a **fully responsive**, clean redesign of the landing page with better mobile UX and improved visuals

- **"My Shelf" Feature**  
  - Interactive shelf to **save books to a personal reading list**
  - Books persist using localStorage
  - Simple UX to **add/remove** books from a preloaded mock list

---

## 🧠 Tech Stack

| Tech | Description |
|------|-------------|
| [Vue 3](https://vuejs.org/) | Composition API with `<script setup>` |
| [TypeScript](https://www.typescriptlang.org/) | Strong typing throughout the app |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling and responsive layout |
| [Vite](https://vitejs.dev/) | Lightning-fast build tool |
| [VueUse](https://vueuse.org/) | Utility composables for reactivity (e.g., dark mode) |

---

## 🛠️ Implementation Notes

- 🎨 **Font Matching:** Goodreads uses a self-hosted version of **Lato (weight 500)**, which is not available via Google Fonts. We sourced a compatible Lato 500 variant externally to preserve visual fidelity while avoiding CORS issues.
- 🧱 **Layout Modernization:** While Goodreads still uses `float`-based layout in parts of their page, our implementation uses **modern Flexbox** (and Grid where suitable), resulting in cleaner and more maintainable responsive design.
- 🖥️ **Unified Responsive Layout:** Goodreads serves a **separate mobile view** via full-page reload (triggered by a “Mobile Version” CTA). Instead of duplicating that behavior, we built a **fully responsive Modern UI** that works seamlessly across devices — aligning better with modern UX practices.
- 🌐 **No Backend:** The entire project is frontend-only, with data persisted using **localStorage**.

---

## 📦 Getting Started

### Clone the repo
```bash
git clone git@github.com:harshaktg/goodreads-clone.git
cd goodreads-clone
```

### Install dependencies
```bash
pnpm install
```

### Run in development
```bash
pnpm dev
```

### Build for production
```bash
pnpm build
```

## 📱 UX Highlights

- Fully responsive layout for modern devices
- Dual UI mode switch: Classic (Goodreads style) vs Modern
- Persisted UI and theme preferences
- "My Shelf" books persist between visits
- Smooth transitions and feedback for interactions

## 📸 Screenshots

Add your modern UI + dark mode + shelf preview screenshots here (optional but recommended)

## 🏁 Final Notes

This clone is built as a Pixel Plus Hackathon submission and aims to reimagine the Goodreads homepage experience with improved responsiveness, a modern UI option, and functional enhancements — all while preserving the core feel of the original.

## 📝 License

MIT

## 🔗 Links

- **Live Demo:** [https://goodreads-clone-eight.vercel.app/](https://goodreads-clone-eight.vercel.app/)

---

Built with ❤️ for books, the web, and this hackathon.