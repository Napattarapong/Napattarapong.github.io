// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Contact form handler
function handleContact(e) {
  e.preventDefault();
  const name = document.querySelector('#contact input[type="text"]').value.trim();
  const email = document.querySelector('#contact input[type="email"]').value.trim();
  const msg = document.querySelector('#contact textarea').value.trim();
  if (!name || !email || !msg) {
    alert('Please fill in all fields.');
    return;
  }
  alert(`Thanks ${name}! Your message has been sent. I'll get back to you at ${email}.`);
  document.querySelector('#contact input[type="text"]').value = '';
  document.querySelector('#contact input[type="email"]').value = '';
  document.querySelector('#contact textarea').value = '';
}

// Gallery carousel
(function() {
  const track = document.getElementById('galleryTrack');
  if (!track) return;
  const slides = track.querySelectorAll('.gallery-slide');
  const dots = document.querySelectorAll('.gallery-dot');
  const thumbs = document.querySelectorAll('.thumb-item');
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');
  const total = slides.length;
  let current = 0;

  const infoData = [
    { style: 'Neo-Brutalist Editorial', elements: 'Bold typography, grid layout, hard borders', color: 'Warm cream + charcoal ink', app: 'Portfolio / Editorial' },
    { style: 'Neo-Brutalist Portfolio', elements: 'Offset shadows, monospace voice, card grids', color: 'Cream canvas + sky blue accents', app: 'Personal Portfolio' },
    { style: 'Color Block Editorial', elements: 'Section bands, card patterns, tab systems', color: 'Yellow + cream + charcoal', app: 'Marketing / Landing Page' },
    { style: 'Brutalist Reference', elements: 'Contrast, texture, compositional balance', color: 'High contrast monochrome', app: 'Visual Inspiration' }
  ];

  function updateGallery(index) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    current = index;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function(d, i) { d.classList.toggle('active', i === current); });
    thumbs.forEach(function(t, i) { t.classList.toggle('active', i === current); });
    var data = infoData[current];
    var el = document.getElementById('galleryInfo');
    if (el) {
      el.innerHTML =
        '<div class="gallery-info-item"><span class="label">Style</span><span class="value">' + data.style + '</span></div>' +
        '<div class="gallery-info-item"><span class="label">Key Elements</span><span class="value">' + data.elements + '</span></div>' +
        '<div class="gallery-info-item"><span class="label">Color Mood</span><span class="value">' + data.color + '</span></div>' +
        '<div class="gallery-info-item"><span class="label">Application</span><span class="value">' + data.app + '</span></div>';
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', function() { updateGallery(current - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function() { updateGallery(current + 1); });
  dots.forEach(function(dot) {
    dot.addEventListener('click', function() { updateGallery(parseInt(dot.dataset.index)); });
  });
  thumbs.forEach(function(thumb) {
    thumb.addEventListener('click', function() { updateGallery(parseInt(thumb.dataset.index)); });
  });

  // Keyboard nav
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') updateGallery(current - 1);
    if (e.key === 'ArrowRight') updateGallery(current + 1);
  });

  // Touch swipe
  var touchStartX = 0;
  var viewport = document.querySelector('.gallery-viewport');
  if (viewport) {
    viewport.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    viewport.addEventListener('touchend', function(e) {
      var diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) updateGallery(current + 1);
        else updateGallery(current - 1);
      }
    }, { passive: true });
  }
})();
