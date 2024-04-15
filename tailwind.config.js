/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Nunito', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        'aci-orange': '#FCA311',
      },
    },
  },
  plugins: [],
  safelist: [
    'text-4xl',
    'text-2xl',
    'text-xl',
    'text-base',
    'text-black',
    'text-white',
    'text-red-600',
    'text-green-600',
    'text-blue-600',
    'text-yellow-600',
    'text-gray-400',
    'text-aci-orange',
    'font-bold',
  ]
}

