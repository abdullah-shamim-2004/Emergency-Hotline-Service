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

// Function for call
let coins = 100;
const container = document.querySelector(".right-container");

const callBtn = document.querySelectorAll(".call-btn");
callBtn.forEach((call) => {
  call.addEventListener("click", () => {
    const serviceName = call.getAttribute("data-service");
    const serviceNumber = call.getAttribute("data-number");
    alert(`Calling ${serviceName} ${serviceNumber}`);

    let card = document.createElement("div");
    card.className =
      "flex justify-between items-center border-2 bg-[#fafafa] rounded-2xl p-4 w-full h-[80px]";

    card.innerHTML = `
    <div>
      <h4 class="text-[18px] max-[576px]:text-[16px]">${serviceName}</h4>
      <p class="text-[#5c5c5c]">${serviceNumber}</p>
    </div>
    <div>
      <span class="text-[18px] max-[576px]:text-[16px]">"hi"</span>
    </div>
  `;
    container.appendChild(card);
  });
});
