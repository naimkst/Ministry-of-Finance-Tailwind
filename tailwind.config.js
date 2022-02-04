module.exports = {
  content: [
  "./src/**/*.{html,js}", 
  "index.html", 
  "about.html",
  "public-budget.html",
  "electronic-services.html",
  "single-electronic-services.html",
  "financial-reports.html",
  "general-supplies.html",
  "single-directorates.html",
],
  theme: {
    extend: {},
    colors: {
      'primary': '#D1B129',
      'hover': '#F4CA14',
      'bcolor': '#7A7A7A',
      'color-one': '#08173D',
      'color-two': '#020E2E',
      'bg-one': '#08173D',
      'bg-two': '#041D5C',
      'white': '#ffffff',
      'body-bg': '#f8f8f8',
      'transparent': "transparent"
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      nsa: ['Noto Sans Arabic', 'sans-serif'],
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'active'],
    textColor: ['responsive', 'hover', 'active'],
  },
  plugins: [],
}
