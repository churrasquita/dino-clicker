let score = 0;
let power = 1;

const dino = document.getElementById("dino");
const scoreDisplay = document.getElementById("score");
const powerDisplay = document.getElementById("power");

const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const upgrade3 = document.getElementById("upgrade3");
const selector = document.getElementById("chooseDino");


selector.addEventListener("change", () => {
  dino.src = selector.value;
});


dino.addEventListener("click", () => {
  score += power;
  scoreDisplay.textContent = score;

  // float heart
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  document.body.appendChild(heart);

  const x = dino.getBoundingClientRect().left + 80;
  const y = dino.getBoundingClientRect().top + 50;
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  setTimeout(() => heart.remove(), 600);
});

// heart visual effects
const style = document.createElement("style");
style.textContent = `
.heart {
  position: absolute;
  font-size: 24px;
  animation: floatUp 0.6s ease-out forwards;
}
@keyframes floatUp {
  0% {opacity: 1; transform: translateY(0);}
  100% {opacity: 0; transform: translateY(-50px);}
}`;
document.head.appendChild(style);

upgrade1.addEventListener("click", () => buyUpgrade(20, 1));
upgrade2.addEventListener("click", () => buyUpgrade(100, 5));
upgrade3.addEventListener("click", () => buyUpgrade(500, 20));

function buyUpgrade(cost, powerBoost) {
  if (score >= cost) {
    score -= cost;
    power += powerBoost;
    scoreDisplay.textContent = score;
    powerDisplay.textContent = power;
  } else {
    alert("u need more love💔");
  }
}

if (score >= 1000) {
  alert("your love can withstand any extinction ❤️");
}

selector.addEventListener("change", () => {
  dino.src = selector.value;
  localStorage.setItem("selectedDino", selector.value);
});

window.addEventListener("load", () => {
  const saved = localStorage.getItem("selectedDino");
  if (saved) {
    dino.src = saved;
    selector.value = saved;
  }
});
