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
document
  .getElementById("national-hart-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyHartCountNumber = parseInt(
      document.getElementById("hart-count-number").innerText
    );
    emergencyHartCountNumber++;
    document.getElementById("hart-count-number").innerText =
      emergencyHartCountNumber;
  });

// hart count 2
document
  .getElementById("police-hart-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyHartCountNumber = parseInt(
      document.getElementById("hart-count-number").innerText
    );
    emergencyHartCountNumber++;
    document.getElementById("hart-count-number").innerText =
      emergencyHartCountNumber;
  });

// hart count 3
document
  .getElementById("fire-hart-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyHartCountNumber = parseInt(
      document.getElementById("hart-count-number").innerText
    );
    emergencyHartCountNumber++;
    document.getElementById("hart-count-number").innerText =
      emergencyHartCountNumber;
  });

// hart count 4
document
  .getElementById("ambulance-hart-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyHartCountNumber = parseInt(
      document.getElementById("hart-count-number").innerText
    );
    emergencyHartCountNumber++;
    document.getElementById("hart-count-number").innerText =
      emergencyHartCountNumber;
  });

// hart count 5
document
  .getElementById("women-hart-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyHartCountNumber = parseInt(
      document.getElementById("hart-count-number").innerText
    );
    emergencyHartCountNumber++;
    document.getElementById("hart-count-number").innerText =
      emergencyHartCountNumber;
  });

// hart count 6
document
  .getElementById("anti-hart-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyHartCountNumber = parseInt(
      document.getElementById("hart-count-number").innerText
    );
    emergencyHartCountNumber++;
    document.getElementById("hart-count-number").innerText =
      emergencyHartCountNumber;
  });

// hart count 7
document
  .getElementById("electricity-hart-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyHartCountNumber = parseInt(
      document.getElementById("hart-count-number").innerText
    );
    emergencyHartCountNumber++;
    document.getElementById("hart-count-number").innerText =
      emergencyHartCountNumber;
  });

// hart count 8
document
  .getElementById("brac-hart-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyHartCountNumber = parseInt(
      document.getElementById("hart-count-number").innerText
    );
    emergencyHartCountNumber++;
    document.getElementById("hart-count-number").innerText =
      emergencyHartCountNumber;
  });

// hart count 9
document
  .getElementById("railway-hart-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyHartCountNumber = parseInt(
      document.getElementById("hart-count-number").innerText
    );
    emergencyHartCountNumber++;
    document.getElementById("hart-count-number").innerText =
      emergencyHartCountNumber;
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
    let electricityCountNumber =
      document.getElementById("coin-number").innerText;
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


// copy count 1
document
  .getElementById("national-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyCopyNumber = parseInt(
      document.getElementById("copy-count-number").innerText
    );
    emergencyCopyNumber++;
    document.getElementById("copy-count-number").innerText =
      emergencyCopyNumber;
    alert("The number has been copied: 999");

    const card = even.currentTarget.parentElement.parentElement.parentElement
    const text = card.querySelector(".copy-text").innerText
    console.log(text);
      
    navigator.clipboard.writeText(text);
  });

// copy count 2
document
  .getElementById("police-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyCopyNumber = parseInt(
      document.getElementById("copy-count-number").innerText
    );
    emergencyCopyNumber++;
    document.getElementById("copy-count-number").innerText =
      emergencyCopyNumber;
    alert("The number has been copied: 999");

    const card = even.currentTarget.parentElement.parentElement.parentElement
    const text = card.querySelector(".copy-text").innerText
    console.log(text);
      
    navigator.clipboard.writeText(text);
  });

// copy count 3
document
  .getElementById("fire-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyCopyNumber = parseInt(
      document.getElementById("copy-count-number").innerText
    );
    emergencyCopyNumber++;
    document.getElementById("copy-count-number").innerText =
      emergencyCopyNumber;
    alert("The number has been copied: 999");

    const card = even.currentTarget.parentElement.parentElement.parentElement
    const text = card.querySelector(".copy-text").innerText
    console.log(text);
      
    navigator.clipboard.writeText(text);
  });

// copy count 4
document
  .getElementById("ambulance-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyCopyNumber = parseInt(
      document.getElementById("copy-count-number").innerText
    );
    emergencyCopyNumber++;
    document.getElementById("copy-count-number").innerText =
      emergencyCopyNumber;
    alert("The number has been copied: 1994-999999");

     const card = even.currentTarget.parentElement.parentElement.parentElement
    const text = card.querySelector(".copy-text").innerText
    console.log(text);
      
    navigator.clipboard.writeText(text);
  });

// copy count 5
document
  .getElementById("women-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyCopyNumber = parseInt(
      document.getElementById("copy-count-number").innerText
    );
    emergencyCopyNumber++;
    document.getElementById("copy-count-number").innerText =
      emergencyCopyNumber;
    alert("The number has been copied: 109");

     const card = even.currentTarget.parentElement.parentElement.parentElement
    const text = card.querySelector(".copy-text").innerText
    console.log(text);
      
    navigator.clipboard.writeText(text);
  });

// copy count 6
document
  .getElementById("anti-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyCopyNumber = parseInt(
      document.getElementById("copy-count-number").innerText
    );
    emergencyCopyNumber++;
    document.getElementById("copy-count-number").innerText =
      emergencyCopyNumber;
    alert("The number has been copied: 106");

     const card = even.currentTarget.parentElement.parentElement.parentElement
    const text = card.querySelector(".copy-text").innerText
    console.log(text);
      
    navigator.clipboard.writeText(text);
  });

// copy count 7
document
  .getElementById("electricity-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyCopyNumber = parseInt(
      document.getElementById("copy-count-number").innerText
    );
    emergencyCopyNumber++;
    document.getElementById("copy-count-number").innerText =
      emergencyCopyNumber;
    alert("The number has been copied: 16216");

     const card = even.currentTarget.parentElement.parentElement.parentElement
    const text = card.querySelector(".copy-text").innerText
    console.log(text);
      
    navigator.clipboard.writeText(text);
  });

// copy count 8
document
  .getElementById("brac-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyCopyNumber = parseInt(
      document.getElementById("copy-count-number").innerText
    );
    emergencyCopyNumber++;
    document.getElementById("copy-count-number").innerText =
      emergencyCopyNumber;
    alert("The number has been copied: 16445");

     const card = even.currentTarget.parentElement.parentElement.parentElement
    const text = card.querySelector(".copy-text").innerText
    console.log(text);
      
    navigator.clipboard.writeText(text);
  });

// copy count 9
document
  .getElementById("railway-count")
  .addEventListener("click", function (even) {
    even.preventDefault();
    let emergencyCopyNumber = parseInt(
      document.getElementById("copy-count-number").innerText
    );
    emergencyCopyNumber++;
    document.getElementById("copy-count-number").innerText =
      emergencyCopyNumber;
    alert("The number has been copied: 163");

     const card = even.currentTarget.parentElement.parentElement.parentElement
    const text = card.querySelector(".copy-text").innerText
    console.log(text);
      
    navigator.clipboard.writeText(text);
  });

// alert("Calling National Emergency Services 999..")
