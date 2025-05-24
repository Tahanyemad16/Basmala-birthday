
        function createConfetti() {
            const colors = ['#ff0066', '#ff99cc', '#ffffff', '#ff3385'];
            for(let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.animationDelay = Math.random() * 3 + 's';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = Math.random() * 8 + 4 + 'px';
                confetti.style.height = confetti.style.width;
                document.body.appendChild(confetti);
            }
        }

        // Candle interaction
        document.querySelectorAll('.candle').forEach(candle => {
            candle.addEventListener('mouseenter', () => {
                createSparkles(candle.getBoundingClientRect());
            });
            
            candle.addEventListener('click', function() {
                const flame = this.querySelector('.flame');
                flame.style.animation = 'none';
                flame.style.opacity = '0';
                
                const smoke = document.createElement('div');
                smoke.style.cssText = `
                    position: absolute;
                    left: ${flame.offsetLeft}px;
                    top: ${flame.offsetTop}px;
                    width: 10px;
                    height: 10px;
                    background: rgba(150,150,150,0.3);
                    border-radius: 50%;
                    animation: smoke 1s ease-out forwards;
                `;
                this.appendChild(smoke);
            });
        });

        function createSparkles(pos) {
            for(let i = 0; i < 5; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.cssText = `
                    left: ${pos.left + Math.random() * pos.width}px;
                    top: ${pos.top + Math.random() * pos.height}px;
                    background: radial-gradient(circle, 
                        rgba(255,255,255,0.8) 20%, 
                        rgba(255,230,0,0.5) 70%);
                    width: 10px;
                    height: 10px;
                `;
                document.body.appendChild(sparkle);
                setTimeout(() => sparkle.remove(), 1000);
            }
        }

        function createStars() {
            const container = document.createElement('div');
            container.className = 'stars';
            for(let i = 0; i < 50; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    width: ${Math.random() * 3 + 1}px;
                    height: ${Math.random() * 3 + 1}px;
                    background: rgba(255,255,255,${Math.random() * 0.8 + 0.2});
                    animation: twinkle ${Math.random() * 3 + 2}s infinite;
                `;
                container.appendChild(star);
            }
            document.body.appendChild(container);
        }

        window.onload = () => {
            createConfetti();
            createStars();
        };
        
    // Add these variables at the top
    const audio = document.getElementById('birthdaySong');
    const musicBtn = document.querySelector('.music-btn');
    let isPlaying = false;

    // Music player functionality
    musicBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if(isPlaying) {
            audio.play();
            musicBtn.classList.add('playing');
            musicBtn.innerHTML = '🎶';
            createFireworks();
        } else {
            audio.pause();
            musicBtn.classList.remove('playing');
            musicBtn.innerHTML = '🎵';
        }
    });

    // Add spacebar control
    document.addEventListener('keypress', (e) => {
        if(e.code === 'Space') {
            musicBtn.click();
        }
    });

    // Fireworks effect
    function createFireworks() {
        if(isPlaying) {
            for(let i = 0; i < 10; i++) {
                const firework = document.createElement('div');
                firework.className = 'firework';
                firework.style.cssText = `
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    background: ${['#ff0066', '#ff99cc', '#ffffff'][Math.floor(Math.random() * 3)]};
                `;
                document.body.appendChild(firework);
                setTimeout(() => firework.remove(), 1000);
            }
            setTimeout(createFireworks, 200);
        }
    }

    // Add this to the candle click handler to sync with music
    document.querySelectorAll('.candle').forEach(candle => {
        candle.addEventListener('click', function() {
            if(isPlaying) {
                createFireworks();
            }
        });
    });
    