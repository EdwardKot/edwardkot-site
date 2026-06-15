document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    const updateButtonText = (theme) => {
      toggleBtn.textContent = theme === 'dark' ? 'Light' : 'Dark';
    };

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    updateButtonText(currentTheme);

    toggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', activeTheme);
      localStorage.setItem('theme', activeTheme);
      updateButtonText(activeTheme);
    });
  }
});
