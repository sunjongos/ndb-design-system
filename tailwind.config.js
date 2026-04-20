/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ndb: {
          green: {
            50: 'var(--ndb-green-50)',
            100: 'var(--ndb-green-100)',
            200: 'var(--ndb-green-200)',
            300: 'var(--ndb-green-300)',
            400: 'var(--ndb-green-400)',
            500: 'var(--ndb-green-500)',
            600: 'var(--ndb-green-600)',
            700: 'var(--ndb-green-700)',
            800: 'var(--ndb-green-800)',
            900: 'var(--ndb-green-900)',
            DEFAULT: 'var(--ndb-green)'
          },
          blue: {
            50: 'var(--ndb-blue-50)',
            100: 'var(--ndb-blue-100)',
            200: 'var(--ndb-blue-200)',
            300: 'var(--ndb-blue-300)',
            400: 'var(--ndb-blue-400)',
            500: 'var(--ndb-blue-500)',
            600: 'var(--ndb-blue-600)',
            700: 'var(--ndb-blue-700)',
            800: 'var(--ndb-blue-800)',
            900: 'var(--ndb-blue-900)',
            DEFAULT: 'var(--ndb-blue)'
          },
          orange: {
            50: 'var(--ndb-orange-50)',
            100: 'var(--ndb-orange-100)',
            200: 'var(--ndb-orange-200)',
            300: 'var(--ndb-orange-300)',
            400: 'var(--ndb-orange-400)',
            500: 'var(--ndb-orange-500)',
            600: 'var(--ndb-orange-600)',
            700: 'var(--ndb-orange-700)',
            800: 'var(--ndb-orange-800)',
            900: 'var(--ndb-orange-900)',
            DEFAULT: 'var(--ndb-orange)'
          },
          neutral: {
            25: 'var(--ndb-neutral-25)',
            50: 'var(--ndb-neutral-50)',
            100: 'var(--ndb-neutral-100)',
            200: 'var(--ndb-neutral-200)',
            300: 'var(--ndb-neutral-300)',
            400: 'var(--ndb-neutral-400)',
            500: 'var(--ndb-neutral-500)',
            600: 'var(--ndb-neutral-600)',
            700: 'var(--ndb-neutral-700)',
            800: 'var(--ndb-neutral-800)',
            900: 'var(--ndb-neutral-900)'
          }
        },
        semantic: {
          app: 'var(--bg-app)',
          surface: 'var(--bg-surface)',
          subtle: 'var(--bg-subtle)',
          muted: 'var(--bg-muted)',
          inverse: 'var(--bg-inverse)'
        },
        trust: {
          DEFAULT: 'var(--trust)',
          hover: 'var(--trust-hover)',
          press: 'var(--trust-press)',
          soft: 'var(--trust-soft)'
        },
        healing: {
          DEFAULT: 'var(--healing)',
          hover: 'var(--healing-hover)',
          soft: 'var(--healing-soft)'
        },
        warmth: {
          DEFAULT: 'var(--warmth)',
          hover: 'var(--warmth-hover)',
          soft: 'var(--warmth-soft)'
        }
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', 'Noto Sans KR', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        focus: 'var(--shadow-focus)',
        'focus-err': 'var(--shadow-focus-err)',
        brand: 'var(--shadow-brand)',
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        pill: 'var(--radius-pill)',
      }
    },
  },
  plugins: [],
}
