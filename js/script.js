// reuseable code
// let hartCount = 0;
// function countHart(id) {
//   const hartCountBtn = document.getElementById(id);
//   const hartCountNumber = document.getElementById(id);

//   hartCountBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     hartCount++;
//     hartCountNumber.innerText = hartCount;
//   });
// }
// document.getElementById("hart-count").addEventListener("click", function () {
//   countHart("hart-count-number");
// });

const callHistory = [];

// hart count 1
let hartCount = 0;
const hartCountBtn = document.getElementById("national-hart-count");
const hartCountNumber = document.getElementById("hart-count-number");

hartCountBtn.addEventListener("click", function (even) {
  even.preventDefault();
  hartCount++;
  hartCountNumber.innerText = hartCount;
});

// hart count 2
let policeHartCount = 0;
const policeHartCountBtn = document.getElementById("police-hart-count");
const policeHartCountNumber = document.getElementById("hart-count-number");

policeHartCountBtn.addEventListener("click", function (even) {
  even.preventDefault();
  policeHartCount++;
  policeHartCountNumber.innerText = policeHartCount;
});
// hart count 3
let fireHartCount = 0;
const fireHartCountBtn = document.getElementById("fire-hart-count");
const fireHartCountNumber = document.getElementById("hart-count-number");

fireHartCountBtn.addEventListener("click", function (even) {
  even.preventDefault();
  fireHartCount++;
  fireHartCountNumber.innerText = fireHartCount;
});
// hart count 4
let ambulanceHartCount = 0;
const ambulanceHartCountBtn = document.getElementById("ambulance-hart-count");
const ambulanceHartCountNumber = document.getElementById("hart-count-number");

ambulanceHartCountBtn.addEventListener("click", function (even) {
  even.preventDefault();
  ambulanceHartCount++;
  ambulanceHartCountNumber.innerText = ambulanceHartCount;
});
// hart count 5
let womenHartCount = 0;
const womenHartCountBtn = document.getElementById("women-hart-count");
const womenHartCountNumber = document.getElementById("hart-count-number");

womenHartCountBtn.addEventListener("click", function (even) {
  even.preventDefault();
  womenHartCount++;
  womenHartCountNumber.innerText = womenHartCount;
});
// hart count 6
let antiHartCount = 0;
const antiHartCountBtn = document.getElementById("anti-hart-count");
const antiHartCountNumber = document.getElementById("hart-count-number");

antiHartCountBtn.addEventListener("click", function (even) {
  even.preventDefault();
  antiHartCount++;
  antiHartCountNumber.innerText = antiHartCount;
});

// this is the full functional to popup button
// coin decrement 1
document
  .getElementById("national-call")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let coinCountNumber = document.getElementById("coin-number").innerText;
    if (coinCountNumber < 20) {
      alert(
        "You don't have enough coins to make a call. You need at least 20 coins."
      );
      return;
    }
    coinCountNumber = coinCountNumber - 20;
    document.getElementById("coin-number").innerText = coinCountNumber;

      alert("Call National Emergency Services 999..");
      
      
//   date create 1
    const data = {
      name: "National Emergency Number",
      number: 999,
      date: new Date().toLocaleTimeString(),
    };
    callHistory.push(data);
    console.log(callHistory);

    //call history 1
    const callHistoryData = document.getElementById("call-history");
    const divElement = document.createElement("div");
    divElement.innerHTML = `
                 <div class="flex justify-between bg-[#fafafa] col-span-2 my-4 rounded-lg items-center">
                <div class="px-5 py-3 rounded-lg">
                  <h2 class="text-start text-lg font-semibold">
                    ${data.name}
                  </h2>
                  <p class="text-start text-sm font-normal">${data.number}</p>
                </div>

                <div>
                  <p class="pr-3">${data.date}</p>
                </div>
              </div>
            `;
    callHistoryData.appendChild(divElement);

    //   clear history 1
    document
      .getElementById("clear-history")
      .addEventListener("click", function (event) {
        event.preventDefault();
        callHistoryData.innerText = "";
      });
  });

// coin decrement 2
document
  .getElementById("police-call")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let policeCountNumber = document.getElementById("coin-number").innerText;
    if (policeCountNumber < 20) {
      alert(
        "You don't have enough coins to make a call. You need at least 20 coins."
      );
      return;
    }
    policeCountNumber = policeCountNumber - 20;
    document.getElementById("coin-number").innerText = policeCountNumber;

      alert("Call The Police Helpline Number 999..");
      
      
//   date create 2
    const data = {
      name: "Police Helpline Number",
      number: 999,
      date: new Date().toLocaleTimeString(),
    };
    callHistory.push(data);
    console.log(callHistory);

    //call history 2
    const callHistoryData = document.getElementById("call-history");
    const divElement = document.createElement("div");
    divElement.innerHTML = `
                 <div class="flex justify-between bg-[#fafafa] col-span-2 my-4 rounded-lg items-center">
                <div class="px-5 py-3 rounded-lg">
                  <h2 class="text-start text-lg font-semibold">
                    ${data.name}
                  </h2>
                  <p class="text-start text-sm font-normal">${data.number}</p>
                </div>

                <div>
                  <p class="pr-3">${data.date}</p>
                </div>
              </div>
            `;
    callHistoryData.appendChild(divElement);

    //   clear history 2
    document
      .getElementById("clear-history")
      .addEventListener("click", function (event) {
        event.preventDefault();
        callHistoryData.innerText = "";
      });
  });



// copy count
let copyCount = 0;
const copyCountBtn = document.getElementById("copy-count");
const copyCountNumber = document.getElementById("copy-count-number");

copyCountBtn.addEventListener("click", function (even) {
  even.preventDefault();
  copyCount++;
  copyCountNumber.innerText = copyCount;
});

// alert("Calling National Emergency Services 999..")
