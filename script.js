// ================== Smooth Scroll for Navbar Links ==================
document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ================== Scroll Reveal Animation ==================
const sections = document.querySelectorAll('.section, .hero');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      sec.classList.add('show');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Run once on load

// ================== Back to Top Button ==================
const backToTop = document.createElement('button');
backToTop.textContent = "↑";
backToTop.className = "back-to-top";
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// ================== Portfolio Image Modal ==================
const images = document.querySelectorAll('.grid img');
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `<span class="close">&times;</span><img class="modal-img">`;
document.body.appendChild(modal);

const modalImg = modal.querySelector('.modal-img');
const closeBtn = modal.querySelector('.close');

images.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
