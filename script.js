const footerText = document.getElementById('footer-text');

footerText.addEventListener('mouseenter', function() {
  this.style.color = '#ff7f50';
});

footerText.addEventListener('mouseleave', function() {
  this.style.color = '#fff';
});
