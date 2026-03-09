export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        cyan: '#00f5d4',
        blue: '#4da6ff',
        textWhite: '#f0f4f8'
      },
      fontFamily: {
        heading: ['"Syne"', 'sans-serif'],
        body: ['"Syne"', 'sans-serif'],
        code: ['"Space Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
