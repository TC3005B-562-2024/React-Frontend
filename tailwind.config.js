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
      fontSize: {
        'banner': '57px',
        'section-title': '45px',
        'title': '36px',
        'text': '22px',
        'detail': '16px'
      }
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
    'shadow-md',
  ]
}

