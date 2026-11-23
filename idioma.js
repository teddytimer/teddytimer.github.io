// Muestra el texto en español o en inglés según el idioma del móvil (y deja cambiarlo con los botones).
document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded', function () {
  var q = new URLSearchParams(location.search).get('lang');
  var l = q || ((navigator.language || 'es').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');
  function poner(x) {
    document.documentElement.lang = x;
    document.querySelectorAll('[data-l]').forEach(function (el) { el.classList.toggle('visible', el.getAttribute('data-l') === x); });
    document.querySelectorAll('.idiomas button').forEach(function (b) { b.classList.toggle('activo', b.getAttribute('data-ir') === x); });
  }
  document.querySelectorAll('.idiomas button').forEach(function (b) { b.addEventListener('click', function () { poner(b.getAttribute('data-ir')); }); });
  poner(l);
});
