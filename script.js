// 1. Typewriter Effect
function startTypewriter(text) {
    let index = 0;
    function type() {
        if (index < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 45);
        }
    }
    window.onload = type;
}

// 2. Background Floating Hearts Generator
function createHeartElement() {
    const container = document.querySelector(".hearts-container");
    if (!container) return;
    
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}
setInterval(createHeartElement, 400);

function createConfettiHearts() {
    for (let i = 0; i < 40; i++) {
        setTimeout(createHeartElement, i * 50);
    }
}
