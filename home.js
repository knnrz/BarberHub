// Loader sumindo depois que a página carregar
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
});

// Inicializar animações AOS
AOS.init({
  duration: 1000,
  once: true,
});