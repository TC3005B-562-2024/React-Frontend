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
        'aci-orange-dark': '#C57E0A',
        'aci-yellow': '#E7B416',
        'aci-yellow-dark': '#C1960F',
        'aci-green': '#99C140',
        'aci-green-dark': '#6F9815',
        'aci-red': '#CC3232',
        'aci-red-dark': '#AC2F2F',
        'aci-blue': '#428ADE',
        'aci-blue-dark': '#1C63B5',
      },
      fontSize: {
        'banner': '57px',
        'section-title': '45px',
        'title': '36px',
        'text': '22px',
        'detail': '16px'
      },
      spacing: {
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

