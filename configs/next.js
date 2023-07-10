module.exports = {
  extends: [
    'next',
    "next/core-web-vitals"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    // resolved in Next v13
    "jsx-a11y/anchor-is-valid": ["error", {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"],
      "aspects": ["invalidHref", "preferButton"]
    }]
  },
};
