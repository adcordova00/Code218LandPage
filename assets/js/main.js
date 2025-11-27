/**
 * Code218 Landing Page - Main JavaScript
 * ========================================
 */

document.addEventListener('DOMContentLoaded', function() {
  initAOS();
  initNavbar();
  initSmoothScroll();
  initCounterAnimation();
  initContactForm();
  initProjectFilters();
});

function initAOS() {
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true,
    offset: 100,
    disable: 'mobile'
  });
}

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');
  const navbarOverlay = document.getElementById('navbar-overlay');
  const navLinks = document.querySelectorAll('.navbar__link');

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', toggleMobileMenu);
    
    if (navbarOverlay) {
      navbarOverlay.addEventListener('click', closeMobileMenu);
    }

    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  function toggleMobileMenu() {
    navbarToggle.classList.toggle('navbar__toggle--active');
    navbarMenu.classList.toggle('navbar__menu--open');
    if (navbarOverlay) {
      navbarOverlay.classList.toggle('navbar__overlay--visible');
    }
    document.body.style.overflow = navbarMenu.classList.contains('navbar__menu--open') ? 'hidden' : '';
  }

  function closeMobileMenu() {
    navbarToggle.classList.remove('navbar__toggle--active');
    navbarMenu.classList.remove('navbar__menu--open');
    if (navbarOverlay) {
      navbarOverlay.classList.remove('navbar__overlay--visible');
    }
    document.body.style.overflow = '';
  }

  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
    
    lastScroll = currentScroll;
  }, { passive: true });

  const sections = document.querySelectorAll('section[id]');
  
  function updateActiveLink() {
    const scrollPos = window.pageYOffset + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const correspondingLink = document.querySelector(`.navbar__link[href="#${sectionId}"]`);

      if (correspondingLink) {
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('navbar__link--active'));
          correspondingLink.classList.add('navbar__link--active');
        }
      }
    });
  }

  window.addEventListener('scroll', debounce(updateActiveLink, 100), { passive: true });
}

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const headerHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}


function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]');
  
  if (counters.length === 0) return;

  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));

  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
      current += step;
      
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + '+';
      }
    };

    updateCounter();
  }
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (!form) return;

  const WHATSAPP_NUMBER = '593992641539';

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputs = form.querySelectorAll('[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.classList.add('form-input--error');
        isValid = false;
      } else {
        input.classList.remove('form-input--error');
      }
    });

    if (!isValid) {
      showNotification('Por favor, completa todos los campos requeridos.', 'error');
      return;
    }

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim() || 'Sin asunto';
    const message = form.querySelector('#message').value.trim();

    const whatsappMessage = buildWhatsAppMessage(name, email, subject, message);
    
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappURL, '_blank');
    
    showNotification('¡Redirigiendo a WhatsApp! Envía el mensaje para contactarnos.', 'success');
  });

  const inputs = form.querySelectorAll('.form-input, .form-textarea');
  
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateInput(this);
    });

    input.addEventListener('input', function() {
      if (this.classList.contains('form-input--error')) {
        validateInput(this);
      }
    });
  });

  function validateInput(input) {
    const isValid = input.checkValidity();
    
    if (!isValid) {
      input.classList.add('form-input--error');
    } else {
      input.classList.remove('form-input--error');
    }
    
    return isValid;
  }
}

function buildWhatsAppMessage(name, email, subject, message) {
  return `🚀 *Nueva Consulta desde Code218.org*

━━━━━━━━━━━━━━━━━━━━━━

👤 *Nombre:* ${name}
📧 *Email:* ${email}
📋 *Asunto:* ${subject}

💬 *Mensaje:*
${message}

━━━━━━━━━━━━━━━━━━━━━━

_Enviado desde el formulario web_`;
}


function showNotification(message, type = 'info') {
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <span>${message}</span>
    <button class="notification__close" aria-label="Cerrar">&times;</button>
  `;

  notification.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    padding: 16px 24px;
    background-color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 16px;
    z-index: 9999;
    animation: slideIn 0.3s ease;
  `;

  document.body.appendChild(notification);

  notification.querySelector('.notification__close').addEventListener('click', () => {
    notification.remove();
  });

  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = 'slideOut 0.3s ease forwards';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.projects__filter');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length === 0) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      filterButtons.forEach(btn => btn.classList.remove('projects__filter--active'));
      this.classList.add('projects__filter--active');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          card.style.display = '';
          card.style.animation = 'fadeIn 0.5s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

(function addDynamicStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
    
    .notification__close {
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      opacity: 0.8;
      transition: opacity 0.2s;
    }
    
    .notification__close:hover {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);
})();

