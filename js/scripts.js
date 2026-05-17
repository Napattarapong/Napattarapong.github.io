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
