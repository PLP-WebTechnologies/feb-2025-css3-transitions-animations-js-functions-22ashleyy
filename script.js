const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

// Load saved theme from localStorage
window.onload = function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }
};

toggleBtn.addEventListener('click', () => {
  // Toggle the theme
  body.classList.toggle('dark');

  // Store the user's preference
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);

  // Trigger animation
  toggleBtn.classList.add('animate');

  // Remove animation class after it finishes
  setTimeout(() => {
    toggleBtn.classList.remove('animate');
  }, 500);
});
