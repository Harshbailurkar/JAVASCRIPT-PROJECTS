let key = document.querySelector(".test");

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === " ") {
    key.innerHTML = "Spacebar ";
  } else {
    key.innerHTML = event.key;
  }
});
