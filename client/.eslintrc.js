module.exports = {
  extends: [
    "react-app",
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
  ],
  plugins: ["jsx-a11y", "prettier"],
  rules: {
    "react/prop-types": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "prettier/prettier": ["error", { "endOfLine": "auto", }],
  },
};
