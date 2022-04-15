/* 
  Explore configuration options docs https://tailwindcss.com/docs/configuration#configuration-options
  Or check the default configuration https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
*/

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      color: {
        "dark-text": "#fafafa",
      },
      backgroundColor: {
        "background": "#09091b"
      },
      fontFamily: {
        "orbitron": ["Orbitron"]
      }
    }
  },
  plugins: []
}
