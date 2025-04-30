// Sélection des éléments
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Vérifie le thème sauvegardé ou préfèrence système
const savedTheme = localStorage.getItem('theme') || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
body.classList.add(`${savedTheme}-theme`);

// Gestion du click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
  
  const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});