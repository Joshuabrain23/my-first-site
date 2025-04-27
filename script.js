// Simple fade-in animation for service cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
      card.style.opacity = 0;
      setTimeout(() => {
        card.style.transition = 'opacity 1s ease-in-out';
        card.style.opacity = 1;
      }, 300 * index);
    });
  });
  