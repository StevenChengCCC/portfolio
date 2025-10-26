/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(222, 47%, 10%)',
        muted: '#f4f4f5',
        'muted-foreground': '#6b7280'
      },
      borderRadius: {
        '2xl': '1rem'
      },
      boxShadow: {
        card: '0 6px 24px -8px rgba(0,0,0,.12)'
      }
    },
  },
  plugins: [],
}
