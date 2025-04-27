// Inicia animações AOS
AOS.init();

// Some o loader depois que tudo carregar
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
});