import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(),  // Usando o Tailwind corretamente com o PostCSS
    autoprefixer(),
  ],
};
