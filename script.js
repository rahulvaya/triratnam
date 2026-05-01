// Triratnam Elite Stay - interactions

// Footer year
document.getElementById('yr').textContent = new Date().getFullYear();

// Lightbox gallery
const lb  = document.getElementById('lightbox');
const lbI = document.getElementById('lbImg');
const lbC = document.getElementById('lbCap');

document.querySelectorAll('.g-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    lbI.src = item.getAttribute('href');
    lbC.textContent = item.dataset.caption || '';
    lb.classList.add('active');
  });
});

function closeLightbox(e){
  if (e.target.id === 'lightbox' || e.target.classList.contains('lb-close')) {
    lb.classList.remove('active');
  }
}
window.closeLightbox = closeLightbox;

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') lb.classList.remove('active');
});

// Enquiry form -> WhatsApp
function sendEnquiry(e){
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim();
  const phone = f.phone.value.trim();
  const type = f.type.value;
  const msg = f.message.value.trim();

  const text =
    `*Triratnam Elite Stay - Enquiry*%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Phone: ${encodeURIComponent(phone)}%0A` +
    `Apartment: ${encodeURIComponent(type)}%0A` +
    (msg ? `Message: ${encodeURIComponent(msg)}` : '');

  window.open(`https://wa.me/918090807666?text=${text}`, '_blank');
}
window.sendEnquiry = sendEnquiry;

// Close mobile nav on link click
document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// Reveal-on-scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.style.opacity = 1;
      en.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.price-card, .amenity, .stat, .g-item').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  io.observe(el);
});
