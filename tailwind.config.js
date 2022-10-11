/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: [
        "0.625rem",
        {
          lineHeight: "0.75rem",
        },
      ],
      sm: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      base: [
        "0.875rem",
        {
          lineHeight: "1.25rem",
        },
      ],
      xl: [
        "1rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      "2xl": [
        "1.125rem",
        {
          lineHeight: "1.75rem",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
