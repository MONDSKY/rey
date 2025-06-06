function showSection(id) {
  document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
});

<script>
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
</script>