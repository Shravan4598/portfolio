// Typing effect for Home section title
const typingElement = document.querySelector('.typing-effect');
const titles = [
  'Data Scientist',
  'Machine Learning Enthusiast',
  'Python Developer',
  'Data Science Enthusiast'
];
let titleIndex = 0, charIndex = 0, isDeleting = false;

function type() {
  const current = titles[titleIndex];
  if (isDeleting) {
    typingElement.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, 40);
    }
  } else {
    typingElement.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else {
      setTimeout(type, 80);
    }
  }
}
if (typingElement) type();

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      // Close mobile nav
      document.querySelector('.nav-links').classList.remove('open');
    }
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinksContainer = document.querySelector('.nav-links');
if (navToggle && navLinksContainer) {
  navToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('open');
  });
}

// Sticky navbar active link highlight
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Basic validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let error = '';
    if (!name) error = 'Please enter your name.';
    else if (!email || !/^\S+@\S+\.\S+$/.test(email)) error = 'Please enter a valid email.';
    else if (!message) error = 'Please enter your message.';
    if (error) {
      formMessage.textContent = error;
      formMessage.style.color = 'red';
      return;
    }
    // Simulate successful submission
    formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
    formMessage.style.color = 'green';
    contactForm.reset();
  });
} 