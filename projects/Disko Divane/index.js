let discoBall = document.getElementById("ball");
let cat = document.getElementById("cat");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

function colorFind() {
  const colorCode = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colorCode[Math.floor(Math.random() * 16)];
  }
  return color;
}
let intervalId;
start.addEventListener("click", () => {
  discoBall.src = "./glowball.gif";
  cat.src = "./happy-cat.gif";

  document.querySelector("h4").innerText = "press Stop to End";
  console.log("start");
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = colorFind();
    }, 200);
  }
});

stop.addEventListener("click", () => {
  document.querySelector("h4").innerText = "press Start to begin";
  clearInterval(intervalId);
  intervalId = null;
  document.body.style.backgroundColor = "#181616";
  discoBall.src = "./offball.png";
  cat.src = "./banana-cat.gif";
});
