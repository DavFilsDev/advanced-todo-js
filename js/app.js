// 1. Sélection des éléments
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// 2. Chargement initial du thème
const savedTheme = localStorage.getItem('theme'); // lit le thème sauvegardé

if (savedTheme) {
  // Si un thème est enregistré, on l’applique
  body.classList.add(`${savedTheme}-theme`);
} else {
  // Sinon, on utilise la préférence système
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  body.classList.add(prefersDark ? 'dark-theme' : 'light-theme');
}

// 3. Gestion du clic sur le bouton
themeToggle.addEventListener('click', () => {
  // Toggle entre light et dark
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');

  // Sauvegarde dans localStorage
  const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});
