let loveCount = 0;
const loveBtn = document.querySelectorAll(".love-btn");
const heartCount = document.querySelector(".heart-count");

loveBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    loveCount++;
    heartCount.innerText = loveCount;
  });
});
