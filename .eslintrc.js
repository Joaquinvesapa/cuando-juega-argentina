// import eslintPluginAstro from 'eslint-plugin-astro';
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended', // Asegúrate de que esta línea esté al final
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['astro', 'tailwindcss', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // Asegúrate de que Prettier sea tratado como un error
    // Aquí puedes agregar reglas específicas o sobrescribir las reglas predeterminadas
  },
};
