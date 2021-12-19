module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Miendinger: ['Miedinger']
      },
      keyframes: {
                appear1: {
                    '0%': {
                        opacity: '0'
                    },
                    '100%': {
                        opacity: '1'
                    },
                }
            },
            animation: {
                wiggle: 'appear 3s ease-in-out once',
            }
    },
  },
  plugins: [],
}
