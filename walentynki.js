const btnsDiv = document.querySelector('.buttons-div')
const noBtn = document.querySelector('.no-btn');
const yesBtn = document.querySelector('.yes-btn');
const popup = document.getElementById('yesPopup');
const closeBtn = popup.querySelector('.close-btn');
const happyBday = document.querySelector('.surprise-div')
const mainImage = document.querySelector('.thumbnail-img')
const mainText = document.querySelector('.header-div')

let isMoving = false;
let lastX = null;
let lastY = null;
const radius = 100; 

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

        lastX = btn.left;
        lastY = btn.top;
        isMoving = true;
    }

    const maxX = vw - btn.width;
    const maxY = vh - btn.height;
    let x, y, dx, dy, distance;

    do {
        x = Math.random() * maxX;
        y = Math.random() * maxY;

        dx = x - lastX;
        dy = y - lastY;
        distance = Math.sqrt(dx * dx + dy * dy);
    } while (distance < radius); 

    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    lastX = x;
    lastY = y;
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
    mainImage.src = "flower-cat.jpg"
    mainText.textContent = "Dla najlepszego testera"
    document.body.style.backgroundColor = '#b73bff';
    btnsDiv.style.display= "none"

const defaults = {
  spread: 360,
  ticks: 100,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["heart"],
  colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
};

confetti({
  ...defaults,
  particleCount: 50,
  scalar: 2,
});

confetti({
  ...defaults,
  particleCount: 25,
  scalar: 3,
});

confetti({
  ...defaults,
  particleCount: 10,
  scalar: 4,
});

const defaults2 = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["star"],
  colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
};

function shoot() {
  confetti({
    ...defaults2,
    particleCount: 40,
    scalar: 1.2,
    shapes: ["star"],
  });

  confetti({
    ...defaults2,
    particleCount: 10,
    scalar: 0.75,
    shapes: ["circle"],
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);
})
