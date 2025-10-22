// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},   // <-- new plugin for Tailwind v4
    autoprefixer: {},             // optional but fine to keep
  },
}