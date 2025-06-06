function showSection(id) {
  document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
});

