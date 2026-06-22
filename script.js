// Grab DOM elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Open envelope animation sequence
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    
    // Slight delay to allow the CSS transitions to glide in smoothly
    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// The teleport mechanic for desktop hovers & mobile taps
function evade(e) {
    if (e.type === 'touchstart') {
        e.preventDefault(); // Keeps mobile platforms from converting a swift touch to an unintended click
    }

    const minDistance = 110;
    const maxDistance = 160;
    const distance = Math.random() * (maxDistance - minDistance) + minDistance;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

noBtn.addEventListener("mouseover", evade);
noBtn.addEventListener("touchstart", evade);

// Sweet celebration when Lily clicks YES!
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee! 🥰💖";
    catImg.src = "cat_dance.gif"; 
    buttons.style.display = "none";
    finalText.style.display = "block";
});