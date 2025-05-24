 // Add interactive elements
    document.querySelectorAll('.message-card').forEach(card => {
      card.addEventListener('click', () => {
        card.style.transform = `rotate(${Math.random() * 10 - 5}deg) scale(1.03)`;
        createSparkles(card.getBoundingClientRect());
      });
    });

    function createSparkles(pos) {
      for(let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.cssText = `
          position: absolute;
          left: ${pos.left + Math.random() * pos.width}px;
          top: ${pos.top + Math.random() * pos.height}px;
          font-size: ${Math.random() * 20 + 10}px;
          animation: confetti-spin ${Math.random() * 1 + 0.5}s linear infinite;
          opacity: ${Math.random() * 0.5 + 0.5};
        `;
        sparkle.innerHTML = ['✨', '🌟', '💫'][Math.floor(Math.random() * 3)];
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
      }
    }