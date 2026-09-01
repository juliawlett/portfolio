/* Interações leves: menu, cabeçalho, FAQ e entrada dos elementos. */
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons({
    attrs: {
      'stroke-width': 1.6
    }
  });

  const header = document.querySelector('#header');
  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 18);
  updateHeader();
  window.addEventListener('scroll', updateHeader, {
    passive: true
  });

  const menuButton = document.querySelector('#menu-button');
  const mobileMenu = document.querySelector('#mobile-menu');
  menuButton?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.innerHTML = `<i data-lucide="${isOpen ? 'x' : 'menu'}" class="h-5 w-5"></i>`;
    lucide.createIcons({
      attrs: {
        'stroke-width': 1.6
      }
    });
  });
  mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));

  document.querySelectorAll('.faq-trigger').forEach(trigger => trigger.addEventListener('click', () => {
    const item = trigger.closest('.faq-item');
    const willOpen = !item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(faq => {
      faq.classList.remove('active');
      faq.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
    });
    if (willOpen) {
      item.classList.add('active');
      trigger.setAttribute('aria-expanded', 'true');
    }
  }));

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }), {
    threshold: 0.12
  });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
});