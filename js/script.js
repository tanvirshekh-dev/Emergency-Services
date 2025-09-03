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
                  <p class="text-start text-lg font-normal">${data.number}</p>
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
                  <p class="text-start text-lg font-normal">${data.number}</p>
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

// coin decrement 3
document
  .getElementById("fire-call")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let fireCountNumber = document.getElementById("coin-number").innerText;
    if (fireCountNumber < 20) {
      alert(
        "You don't have enough coins to make a call. You need at least 20 coins."
      );
      return;
    }
    fireCountNumber = fireCountNumber - 20;
    document.getElementById("coin-number").innerText = fireCountNumber;

      alert("Call Fire Service Number 999..");
      
      
//   date create 3
    const data = {
      name: "Fire Service Number",
      number: 999,
      date: new Date().toLocaleTimeString(),
    };
    callHistory.push(data);
    console.log(callHistory);

    //call history 3
    const callHistoryData = document.getElementById("call-history");
    const divElement = document.createElement("div");
    divElement.innerHTML = `
                 <div class="flex justify-between bg-[#fafafa] col-span-2 my-4 rounded-lg items-center">
                <div class="px-5 py-3 rounded-lg">
                  <h2 class="text-start text-lg font-semibold">
                    ${data.name}
                  </h2>
                  <p class="text-start text-lg font-normal">${data.number}</p>
                </div>

                <div>
                  <p class="pr-3">${data.date}</p>
                </div>
              </div>
            `;
    callHistoryData.appendChild(divElement);

    //   clear history 3
    document
      .getElementById("clear-history")
      .addEventListener("click", function (event) {
        event.preventDefault();
        callHistoryData.innerText = "";
      });
  });

// coin decrement 4
document
  .getElementById("ambulance-call")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let ambulanceCountNumber = document.getElementById("coin-number").innerText;
    if (ambulanceCountNumber < 20) {
      alert(
        "You don't have enough coins to make a call. You need at least 20 coins."
      );
      return;
    }
    ambulanceCountNumber = ambulanceCountNumber - 20;
    document.getElementById("coin-number").innerText = ambulanceCountNumber;

      alert("Call The Ambulance Service 1994-999999..");
      
      
//   date create 4
    const data = {
      name: "Ambulance Service Number",
      number: "1994-999999",
      date: new Date().toLocaleTimeString(),
    };
    callHistory.push(data);
    console.log(callHistory);

    //call history 4
    const callHistoryData = document.getElementById("call-history");
    const divElement = document.createElement("div");
    divElement.innerHTML = `
                 <div class="flex justify-between bg-[#fafafa] col-span-2 my-4 rounded-lg items-center">
                <div class="px-5 py-3 rounded-lg">
                  <h2 class="text-start text-lg font-semibold">
                    ${data.name}
                  </h2>
                  <p class="text-start text-xs font-normal">${data.number}</p>
                </div>

                <div>
                  <p class="pr-3">${data.date}</p>
                </div>
              </div>
            `;
    callHistoryData.appendChild(divElement);

    //   clear history 4
    document
      .getElementById("clear-history")
      .addEventListener("click", function (event) {
        event.preventDefault();
        callHistoryData.innerText = "";
      });
  });

// coin decrement 5
document
  .getElementById("women-call")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let womenCountNumber = document.getElementById("coin-number").innerText;
    if (womenCountNumber < 20) {
      alert(
        "You don't have enough coins to make a call. You need at least 20 coins."
      );
      return;
    }
    womenCountNumber = womenCountNumber - 20;
    document.getElementById("coin-number").innerText = womenCountNumber;

      alert("Call The Women & Child Helpline 109..");
      
      
//   date create 5
    const data = {
      name: "Women & Child Helpline Number",
      number: 109,
      date: new Date().toLocaleTimeString(),
    };
    callHistory.push(data);
    console.log(callHistory);

    //call history 5
    const callHistoryData = document.getElementById("call-history");
    const divElement = document.createElement("div");
    divElement.innerHTML = `
                 <div class="flex justify-between bg-[#fafafa] col-span-2 my-4 rounded-lg items-center">
                <div class="px-5 py-3 rounded-lg">
                  <h2 class="text-start text-lg font-semibold">
                    ${data.name}
                  </h2>
                  <p class="text-start text-lg font-normal">${data.number}</p>
                </div>

                <div>
                  <p class="pr-3">${data.date}</p>
                </div>
              </div>
            `;
    callHistoryData.appendChild(divElement);

    //   clear history 5
    document
      .getElementById("clear-history")
      .addEventListener("click", function (event) {
        event.preventDefault();
        callHistoryData.innerText = "";
      });
  });

// coin decrement 6
document
  .getElementById("anti-call")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let antiCountNumber = document.getElementById("coin-number").innerText;
    if (antiCountNumber < 20) {
      alert(
        "You don't have enough coins to make a call. You need at least 20 coins."
      );
      return;
    }
    antiCountNumber = antiCountNumber - 20;
    document.getElementById("coin-number").innerText = antiCountNumber;

      alert("Call The Anti-Corruption Helpline 106..");
      
      
//   date create 6
    const data = {
      name: "Anti-Corruption Helpline Number",
      number: 106,
      date: new Date().toLocaleTimeString(),
    };
    callHistory.push(data);
    console.log(callHistory);

    //call history 6
    const callHistoryData = document.getElementById("call-history");
    const divElement = document.createElement("div");
    divElement.innerHTML = `
                 <div class="flex justify-between bg-[#fafafa] col-span-2 my-4 rounded-lg items-center">
                <div class="px-5 py-3 rounded-lg">
                  <h2 class="text-start text-lg font-semibold">
                    ${data.name}
                  </h2>
                  <p class="text-start text-lg font-normal">${data.number}</p>
                </div>

                <div>
                  <p class="pr-3">${data.date}</p>
                </div>
              </div>
            `;
    callHistoryData.appendChild(divElement);

    //   clear history 6
    document
      .getElementById("clear-history")
      .addEventListener("click", function (event) {
        event.preventDefault();
        callHistoryData.innerText = "";
      });
  });

// coin decrement 7
document
  .getElementById("electricity-call")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let electricityCountNumber = document.getElementById("coin-number").innerText;
    if (electricityCountNumber < 20) {
      alert(
        "You don't have enough coins to make a call. You need at least 20 coins."
      );
      return;
    }
    electricityCountNumber = electricityCountNumber - 20;
    document.getElementById("coin-number").innerText = electricityCountNumber;

      alert("Call The Electricity Helpline 16216..");
      
      
//   date create 7
    const data = {
      name: "Electricity Helpline Number",
      number: 16216,
      date: new Date().toLocaleTimeString(),
    };
    callHistory.push(data);
    console.log(callHistory);

    //call history 7
    const callHistoryData = document.getElementById("call-history");
    const divElement = document.createElement("div");
    divElement.innerHTML = `
                 <div class="flex justify-between bg-[#fafafa] col-span-2 my-4 rounded-lg items-center">
                <div class="px-5 py-3 rounded-lg">
                  <h2 class="text-start text-lg font-semibold">
                    ${data.name}
                  </h2>
                  <p class="text-start text-lg font-normal">${data.number}</p>
                </div>

                <div>
                  <p class="pr-3">${data.date}</p>
                </div>
              </div>
            `;
    callHistoryData.appendChild(divElement);

    //   clear history 7
    document
      .getElementById("clear-history")
      .addEventListener("click", function (event) {
        event.preventDefault();
        callHistoryData.innerText = "";
      });
  });

// coin decrement 8
document
  .getElementById("brac-call")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let bracCountNumber = document.getElementById("coin-number").innerText;
    if (bracCountNumber < 20) {
      alert(
        "You don't have enough coins to make a call. You need at least 20 coins."
      );
      return;
    }
    bracCountNumber = bracCountNumber - 20;
    document.getElementById("coin-number").innerText = bracCountNumber;

      alert("Call The Brac Helpline 16445..");
      
      
//   date create 8
    const data = {
      name: "Brac Helpline Number",
      number: 16445,
      date: new Date().toLocaleTimeString(),
    };
    callHistory.push(data);
    console.log(callHistory);

    //call history 8
    const callHistoryData = document.getElementById("call-history");
    const divElement = document.createElement("div");
    divElement.innerHTML = `
                 <div class="flex justify-between bg-[#fafafa] col-span-2 my-4 rounded-lg items-center">
                <div class="px-5 py-3 rounded-lg">
                  <h2 class="text-start text-lg font-semibold">
                    ${data.name}
                  </h2>
                  <p class="text-start text-lg font-normal">${data.number}</p>
                </div>

                <div>
                  <p class="pr-3">${data.date}</p>
                </div>
              </div>
            `;
    callHistoryData.appendChild(divElement);

    //   clear history 8
    document
      .getElementById("clear-history")
      .addEventListener("click", function (event) {
        event.preventDefault();
        callHistoryData.innerText = "";
      });
  });

// coin decrement 9
document
  .getElementById("railway-call")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let railwayCountNumber = document.getElementById("coin-number").innerText;
    if (railwayCountNumber < 20) {
      alert(
        "You don't have enough coins to make a call. You need at least 20 coins."
      );
      return;
    }
    railwayCountNumber = railwayCountNumber - 20;
    document.getElementById("coin-number").innerText = railwayCountNumber;

      alert("Call The Bangladesh Railway Helpline 163..");
      
      
//   date create 9
    const data = {
      name: "Bangladesh Railway Helpline Number",
      number: 163,
      date: new Date().toLocaleTimeString(),
    };
    callHistory.push(data);
    console.log(callHistory);

    //call history 9
    const callHistoryData = document.getElementById("call-history");
    const divElement = document.createElement("div");
    divElement.innerHTML = `
                 <div class="flex justify-between bg-[#fafafa] col-span-2 my-4 rounded-lg items-center">
                <div class="px-5 py-3 rounded-lg">
                  <h2 class="text-start text-lg font-semibold">
                    ${data.name}
                  </h2>
                  <p class="text-start text-lg font-normal">${data.number}</p>
                </div>

                <div>
                  <p class="pr-3">${data.date}</p>
                </div>
              </div>
            `;
    callHistoryData.appendChild(divElement);

    //   clear history 9
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
