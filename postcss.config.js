module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    // Tailwind v4 wraps everything in @layer, which iOS Safari < 15.4 and
    // older Android WebViews ignore wholesale — the page renders unstyled.
    // Flatten layers (specificity-preserving) so those phones still get CSS.
    "@csstools/postcss-cascade-layers": {},
  },
};
