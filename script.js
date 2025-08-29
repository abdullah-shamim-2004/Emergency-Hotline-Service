// function for heart count

let loveCount = 0;
const loveBtn = document.querySelectorAll(".love-btn");
const heartCount = document.querySelector(".heart-count");

loveBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    loveCount++;
    heartCount.innerText = loveCount;
  });
});

// Function for call history

let coins = 100;
const navCoin = document.querySelector(".coin");

const historyList = document.querySelector(".history-list");

const callBtn = document.querySelectorAll(".call-btn");
callBtn.forEach((call) => {
  call.addEventListener("click", () => {
    coins -= 20;
    navCoin.innerText = coins;

    if (coins >= 0) {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      const serviceName = call.getAttribute("data-service");
      const serviceNumber = call.getAttribute("data-number");
      alert(`Calling ${serviceName} ${serviceNumber}`);

      let card = document.createElement("div");
      card.className =
        "flex justify-between items-center bg-[#fafafa] rounded-2xl p-4 w-full h-[80px]";

      card.innerHTML = `
    <div>
      <h4 class="text-[18px] max-[576px]:text-[16px]">${serviceName}</h4>
      <p class="text-[#5c5c5c]">${serviceNumber}</p>
    </div>
    <div>
      <span class="text-[18px] max-[576px]:text-[16px]">${timeString}</span>
    </div>
  `;
      historyList.prepend(card);
    } else {
      navCoin.innerText = "0";
      alert("sorry");
    }
  });
});

// Function for clear call history

const clearHistory = document.querySelector(".clear-btn");
clearHistory.addEventListener("click", () => {
  historyList.innerHTML = "";
});
