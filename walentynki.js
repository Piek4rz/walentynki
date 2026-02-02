const btnsDiv = document.querySelector('.buttons-div')
const noBtn = document.querySelector('.no-btn');
const yesBtn = document.querySelector('.yes-btn');
const popup = document.getElementById('yesPopup');
const closeBtn = popup.querySelector('.close-btn');
const happyBday = document.querySelector('.surprise-div')
const mainImage = document.querySelector('.thumbnail-img')
const mainText = document.querySelector('.header-div')

let isMoving = false;

noBtn.addEventListener('mouseenter', () => {
    const btn = noBtn.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    if (!isMoving) {
        const placeholder = document.createElement('div');
        placeholder.style.width = btn.width + 'px';
        placeholder.style.height = btn.height + 'px';
        placeholder.style.visibility = 'hidden';
        placeholder.classList.add('no-btn-placeholder');

        noBtn.parentNode.insertBefore(placeholder, noBtn);

        noBtn.style.position = 'fixed';
        noBtn.style.left = btn.left + 'px';
        noBtn.style.top = btn.top + 'px';

        isMoving = true;
    }

    const maxX = vw - btn.width;
    const maxY = vh - btn.height;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});
noBtn.addEventListener('touchstart', e => {
    e.preventDefault();
    noBtn.dispatchEvent(new Event('mouseenter'));
});



yesBtn.addEventListener('click', () => {
    popup.style.display = 'flex'; 
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; 
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

happyBday.addEventListener('click', (e) => {
    mainImage.src = "bday-cat.png"
    mainText.textContent = "WSZYSTKIEGO NAJLEPSZEGO!!! 🎈🎈🎈"
    document.body.style.backgroundColor = '#ffeb3b';
    btnsDiv.style.display= "none"

    const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti(
        Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
    );
    confetti(
        Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
    );
    }, 250);
})
