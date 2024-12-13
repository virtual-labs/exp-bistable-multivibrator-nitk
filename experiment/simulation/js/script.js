const quizDiv = document.querySelector(".quiz-div");
const questionDiv = document.querySelector(".question");
const answersDiv = document.querySelector(".answers");
const questionBtnDiv = document.querySelector(".question-btn");
const practiceDiv = document.querySelector(".practice");
const canvas = document.querySelector("#simscreen");
// const ctx = canvas.getContext("2d");
let currentStepCount = 1;
let currentStep;
let currentQuestions;
let currentQuestionIndex = 0;

let animationFrameID;
// stepNo & Step TITLE
const stepNumber = document.querySelector(".practice-step-no");
const stepTitle = document.querySelector(".practice-step-info");

// buttons
const btnAxis = document.querySelector(".btn-axis");
// btnAxis.addEventListener("click", drawAxis);
const btnVPHP = document.querySelector(".btn-vp-hp");

const btnA = document.querySelector(".btn-A");

const btnBB = document.querySelector(".btn-B");

const btnB1 = document.querySelector(".btn-B1");

const btnC = document.querySelector(".btn-c");

const btnNext = document.querySelector(".btn-next");

const buttonBox = document.querySelector(".practice-step-button");

const box = document.querySelector(".box");

const dropDown = document.querySelector(".shapeDrop");

const radioButtons = document.querySelectorAll('input[name="navigation"]');

const taskTitleText = document.querySelector(".task-title--text");

const simControl = document.querySelector(".sim-icon--control");
const simResult = document.querySelector(".sim-icon--result");

simControl.addEventListener("click", function () {
  document.querySelector("#variables").scrollIntoView({
    behavior: "smooth",
  });
});
simResult.addEventListener("click", function () {
  document.querySelector("#Results").scrollIntoView({
    behavior: "smooth",
  });
});

// radioButtons.style.cursor= "pointer";

radioButtons.forEach(function (radio) {
  radio.addEventListener("change", function () {
    btnNext.disabled = false;
    btnReset.disabled = false;
    // console.log(radio.value);
    if (radio.value === "third") {
      // console.log("radio visible")
      dropDown.classList.remove("hide");
    } else {
      // console.log("radio non visible")

      dropDown.classList.add("hide");
    }
  });
});
const simIcons = document.querySelector(".sim-icons");
const btnReset = document.querySelector(".btn-reset");
// btnReset.addEventListener("click", clearcanvas);
const btnTop = document.querySelector(".btn-top");
// btnTop.addEventListener("click", movetoTop);
const validateAnswer = document.createElement("span");
validateAnswer.classList.add("validate");

function displayDiv(ele) {
  const taskScreen = document.querySelectorAll(".task-screen");
  taskScreen.forEach((task) => {
    task.classList.add("hide");
  });
  simIcons.classList.remove("flex");
  simIcons.classList.add("hide");
  if (ele.classList.contains("tool-objective")) {
    document.querySelector(".objective").classList.remove("hide");
    taskTitleText.textContent = "Objective";
    document.getElementById("Results").style.display = "none";
    document.getElementById("variables").style.display = "none";
    document.getElementById("instructions").style.display = "none";
  }
  if (ele.classList.contains("tool-apparatus")) {
    document.querySelector(".apparatus").classList.remove("hide");
    taskTitleText.textContent = "Apparatus";
    document.getElementById("Results").style.display = "none";
    document.getElementById("variables").style.display = "none";
    document.getElementById("instructions").style.display = "none";
  }
  if (ele.classList.contains("tool-help")) {
    // document.querySelector(".help").classList.remove("hide");
    taskTitleText.textContent = "Help";
    document.getElementById("Results").style.display = "none";
    document.getElementById("variables").style.display = "none";
  }
  if (ele.classList.contains("tool-practice")) {
    document.querySelector("#simulation").scrollIntoView({
      behavior: "smooth",
    });
    simIcons.classList.remove("hide");
    simIcons.classList.add("flex");
    document.querySelector(".practice").classList.remove("hide");
    taskTitleText.textContent = "Experiment";
    document.getElementById("Results").style.display = "block";
    document.getElementById("variables").style.display = "block";
    document.getElementById("instructions").style.display = "none";
    $(stepTitle).css("margin-left", "5rem");
    // stepNumber.classList.add('hide');
    btnTop.classList.add("hide");

    // console.log("reched here")
    // quizDiv.classList.remove('hide');
    // btnNext.addEventListener('click', nextButtonEventListener);

    radioButtons.forEach((radio) => {
      radio.checked = false;
    });

    circle1 = new Path2D();
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    $(".canvas").css("display", "none");
    // stepTitle.textContent = "Select the Experiment:";
    // btnA.classList.add('hide');
    // btnBB.classList.add('hide');
    // btnC.classList.add('hide');
    // btnB1.classList.add('hide');
    $(buttonBox).css("display", "none");
    // btnNext.disabled = true;
    //  canvasfun1();
    // console.log(i);
    // stepNumber.textContent = "1";
    // document.getElementById("image").style.display = "none";
    // document.getElementById("image1").style.display = "none";
    // document.getElementById("image3").style.display = "none";

    // btnNext.removeEventListener('click',handleDropdownChange);
    // btnNext.addEventListener('click', nextButtonEventListener);
    //  clearcanvas();
  }
}

let fun3Executed = false; // Flag to check if fun3 has been executed

let canExecute = false;

function animate(x1, y1, x2, y2, ratio) {
  ratio = ratio || 0;
  drawLine(x1, y1, x2, y2, ratio);
  if (ratio < 1) {
    animationFrameID = requestAnimationFrame(function () {
      animate(x1, y1, x2, y2, ratio + 0.02);
    });
  }
}

let circle1 = new Path2D(),
  currentFunction;
let cirX = 0,
  cirY = 0,
  cirText = "";

var j = 0;

let hvoltage = 0;
let blurr;
let ibtable;
let ibrow;
let ibXarray = [];
let magcount = -1;
let tfreq;
let pfreq;
let cap;
let res;
let err;
let pcheck;
let resistance;
let rows;
let mres;
let Empty;
// let bres;
//let Rf;

function blurring() {
  if (blurr == true) {
    document.getElementById("simoptions").style.filter = "blur(0px)";
    document.getElementById("mainsimulation").style.filter = "blur(2px)";
    // document.getElementById("buttondown").style.filter = 'blur(2px)';
  } else if (blurr == false) {
    document.getElementById("simoptions").style.filter = "blur(0px)";
    document.getElementById("mainsimulation").style.filter = "blur(0px)";
    // document.getElementById("buttondown").style.filter = 'blur(0px)';
  }
}
function selection() {
  if (option == "bjt") {
    // console.log('virtual')
  } else if (option == "opamp") {
    // console.log('virtual lab')
  }
}

// Next button
let a = 1;

function up() {
  a += 1;
  next();
}

function down() {
  a -= 1;
  next();
}

function next() {
  if (a == 1) {
    document.getElementById("buttondown").style.display = "none";
    document.getElementById("buttonup").style.display = "block";
    document.getElementById("content").style.display = "block";
    document.getElementById("content2").style.display = "none";
  } else if (a == 2) {
    document.getElementById("buttondown").style.display = "block";
    document.getElementById("content").style.display = "none";
    document.getElementById("content2").style.display = "block";
    document.getElementById("content3").style.display = "none";
    document.getElementById("buttonup").style.display = "none";
    // document.getElementById("observation").style.display = 'none';
  } else if (a == 3) {
    document.getElementById("buttonup").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "block";
    closeobservation();
    plotting();
  }
}

function update() {
  let select = document.getElementById("exp");
  let option = select.options[select.selectedIndex].value;
  document.getElementById("exp").disabled = true;

  if (option == "bjt") {
    $(document).ready(function () {
      // Get the window width
      var windowWidth = $(window).width();

      if (windowWidth <= 768) {
        // For mobile view (width 768px or less)
        $("#variables").css("display", "inline-block");
        $("#variables").css("width", "100%"); // Mobile view width 200%
      } else {
        // For tablet or desktop view (width more than 768px)
        $("#variables").css("display", "inline-block");
        $("#variables").css("width", "100%"); // Set to 100% for larger screens
      }

      // Re-apply on window resize to keep responsiveness
      $(window).resize(function () {
        windowWidth = $(window).width();

        if (windowWidth <= 945) {
          // For mobile view
          $("#variables").css("display", "inline-block");
          $("#variables").css("width", "100%");
        } else {
          // For tablet or desktop view
          $("#variables").css("display", "inline-block");
          $("#variables").css("width", "100%"); // Set 100% for larger screens
        }
      });
    });

    // Rest of the code remains the same
    document.getElementById("grid1").style.display = "grid";
    document.getElementById("Results").style.display = "block";
    document.getElementById("insert").innerHTML = "Trigger Button On";
    document.getElementById("remove").innerHTML = "Trigger Button off";

    document.getElementById("ibjt").style.display = "block";
    document.getElementById("ibjt1").style.display = "none";
    document.getElementById("iopamp").style.display = "none";
    document.getElementById("iopamp1").style.display = "none";
    document.getElementById("exp").disabled = false;

    document.getElementById("exp1").disabled = false;
    document.getElementById("exp1").style.display = "block";
    document.getElementById("exp2").disabled = false;
    document.getElementById("mono").style.visibility = "visible";
    document.getElementById("mono1").style.visibility = "visible";
    document.getElementById("mono2").style.visibility = "visible";
    document.getElementById("insert").disabled = true;

    document.getElementById("resistance").style.display = "block";
    document.getElementById("Capacitance").style.display = "block";
    document.getElementById("exp2").style.display = "block";
    document.getElementById("exp").disabled = false;

    document.getElementById("exp1").style.display = "block";
    document.getElementById("addbutton").style.display = "block";
    document.getElementById("observationbutton").style.display = "block";
    document.getElementById("finalresult").style.display = "block";
    document.getElementById("tfreq").style.visibility = "visible";
    document.getElementById("pfreq").style.visibility = "visible";
    document.getElementsByClassName("result")[0].style.visibility = "visible";

    $("#variables").css("display", "inline-block");
    $("#Results").css("display", "block");

    res = 15;
    pcheck = true;
    clearing();
    remove();
  } else if (option == "opamp") {
    document.getElementById("reset").style.display = "inline-block";
    document.getElementById("insert").style.display = "inline-block";
    document.getElementById("variables").style.width = "100%";
    document.getElementById("grid1").style.display = "inline";

    $(document).ready(function () {
      var windowWidth = $(window).width();

      if (windowWidth <= 768) {
        $("#variables").css("display", "inline-block");
        $("#variables").css("width", "100%");
      } else {
        $("#variables").css("display", "inline-block");
        $("#variables").css("width", "200%");
      }

      $(window).resize(function () {
        windowWidth = $(window).width();

        if (windowWidth <= 945) {
          $("#variables").css("display", "inline-block");
          $("#variables").css("width", "100%");
        } else {
          $("#variables").css("display", "inline-block");
          $("#variables").css("width", "200%");
        }
      });
    });

    document.getElementById("Results").style.display = "none";
    document.getElementById("insert").innerHTML = "Trigger Button On";
    document.getElementById("remove").innerHTML = "Trigger Button off";
    document.getElementById("observationbutton").disabled = true;

    document.getElementById("iopamp").style.display = "block";
    document.getElementById("ibjt").style.display = "none";
    document.getElementById("ibjt1").style.display = "none";
    document.getElementById("iopamp1").style.display = "none";

    document.getElementById("resistance").style.display = "none";
    document.getElementById("Capacitance").style.display = "none";
    document.getElementById("exp2").style.display = "none";
    document.getElementById("exp").disabled = false;

    document.getElementById("exp1").style.display = "none";
    document.getElementById("addbutton").style.display = "none";
    document.getElementById("observationbutton").style.display = "none";
    document.getElementById("finalresult").style.display = "none";
    document.getElementById("tfreq").style.visibility = "hidden";
    document.getElementById("pfreq").style.visibility = "hidden";
    document.getElementsByClassName("result")[0].style.visibility = "hidden";
    document.getElementById("insert").disabled = false;

    res = 1;
    pcheck = false;
    clearing();
    remove();
  }
}

function resist() {
  document.getElementById("exp").disabled = true;
  let select = document.getElementById("exp1");
  let option = select.options[select.selectedIndex].value;

  if (option == "15") {
    document.getElementById("insert").disabled = false;
    // document.getElementById("addbutton").disabled = false;
    // document.getElementById("observationbutton").disabled = false;

    res = 15;
    cap = 1;
    tfreq = 10.395;
    pfreq = 10.2;
    err = 1.87;
    // console.log('hi')
    // closeobservation()
  } else if (option == "18") {
    // console.log('bi')
    document.getElementById("insert").disabled = false;
    // document.getElementById("addbutton").disabled = false;
    // document.getElementById("observationbutton").disabled = false;

    res = 18;
    cap = 1;
    tfreq = 12.474;
    pfreq = 12.45;
    pcheck = false;
    err = 0.19;
    // clearing();
    // remove()
    // closeobservation()
  } else if (option == "20") {
    // console.log('hlo')
    document.getElementById("insert").disabled = false;
    //   document.getElementById("addbutton").disabled = false;
    // document.getElementById("observationbutton").disabled = false;

    res = 20;
    cap = 1;
    tfreq = 13.86;
    pfreq = 13.5;
    err = 2.59;

    pcheck = false;
    //  clearing();
    //  remove()
    //  closeobservation()
  }
}

// sensor/probe button
function insert() {
  document.getElementById("insert").style.display = "none";
  document.getElementById("remove").style.display = "block";
  document.getElementById("exp").disabled = true;

  document.getElementById("addbutton").disabled = false;
  // document.getElementById("observationbutton").disabled = false;
  document.getElementById("exp1").disabled = true;
  document.getElementById("exp2").disabled = true;

  let select = document.getElementById("exp1");
  let option = select.options[select.selectedIndex].value;

  if (pcheck == true) {
    document.getElementById("ibjt1").style.display = "block";
    document.getElementById("ibjt").style.display = "none";
    document.getElementById("iopamp").style.display = "none";
    document.getElementById("iopamp1").style.display = "none";
  }
  // document.getElementById("view").style.display = 'block';
  if (option == "15") {
    document.getElementById("ibjt1").style.display = "block";
    document.getElementById("ibjt").style.display = "none";
    document.getElementById("view").style.display = "block";
    // document.getElementById("close1").style.display='block';
    // document.getElementById('R1').style.display="block";
    // document.getElementById('R2').style.display="block";
    document.getElementById("arrow15").style.visibility = "visible";
    document.getElementById("arrow18").style.visibility = "hidden";
    document.getElementById("arrow20").style.visibility = "hidden";
    document.getElementById("iopamp").style.display = "none";
    document.getElementById("iopamp1").style.display = "none";
  } else if (option == "18") {
    document.getElementById("view1").style.display = "block";
    // document.getElementById("close1").style.display='block';
    document.getElementById("arrow18").style.visibility = "visible";
    document.getElementById("arrow15").style.visibility = "hidden";
    document.getElementById("arrow20").style.visibility = "hidden";
    document.getElementById("ibjt1").style.display = "block";
    document.getElementById("ibjt").style.display = "none";
    // document.getElementById('R1').style.display="block";
    // document.getElementById('R2').style.display="block";
    document.getElementById("iopamp").style.display = "none";
    document.getElementById("iopamp1").style.display = "none";
  } else if (option == "20") {
    document.getElementById("ibjt1").style.display = "block";
    document.getElementById("ibjt").style.display = "none";
    document.getElementById("view2").style.display = "block";
    // document.getElementById("close1").style.display='block';
    document.getElementById("arrow20").style.visibility = "visible";
    document.getElementById("arrow18").style.visibility = "hidden";
    document.getElementById("arrow15").style.visibility = "hidden";
    document.getElementById("iopamp").style.display = "none";
    document.getElementById("iopamp1").style.display = "none";
    // document.getElementById('R1').style.display="block";
    // document.getElementById('R2').style.display="block";
  } else if (pcheck == false) {
    document.getElementById("ibjt").style.display = "none";
    document.getElementById("ibjt1").style.display = "none";
    document.getElementById("iopamp").style.display = "none";
    document.getElementById("iopamp1").style.display = "block";

    // document.getElementById('RB1').style.display="block";
    // document.getElementById('RB2').style.display="block";
    // document.getElementById('RB3').style.display="block";
    document.getElementById("view3").style.display = "block";
    // document.getElementById("close1").style.display='block';
    document.getElementById("arrowB").style.visibility = "visible";
    document.getElementById("arrowB1").style.visibility = "visible";
  }
}

function remove() {
  document.getElementById("remove").style.display = "none";
  document.getElementById("insert").style.display = "block";

  document.getElementById("view").style.display = "none";
  // document.getElementById("close1").style.display='none';
  document.getElementById("view1").style.display = "none";
  document.getElementById("view2").style.display = "none";
  // document.getElementById('R1').style.display="none";
  // document.getElementById('R2').style.display="none";

  // document.getElementById("observationbutton").disabled = true;
  document.getElementById("addbutton").disabled = true;
  document.getElementById("observationbutton").disabled = true;
  document.getElementById("finalresult").disabled = true;

  document.getElementById("exp1").disabled = false;
  document.getElementById("exp2").disabled = false;

  let select = document.getElementById("exp1");
  let option = select.options[select.selectedIndex].value;

  if (pcheck == true) {
    document.getElementById("ibjt1").style.display = "block";
    document.getElementById("ibjt").style.display = "none";
    document.getElementById("iopamp").style.display = "none";
    document.getElementById("iopamp1").style.display = "none";
  }

  if (option == "15") {
    document.getElementById("ibjt").style.display = "block";
    document.getElementById("ibjt1").style.display = "none";
    document.getElementById("iopamp").style.display = "none";
    document.getElementById("iopamp1").style.display = "none";
  } else if (option == "18") {
    document.getElementById("ibjt").style.display = "block";
    document.getElementById("ibjt1").style.display = "none";
    document.getElementById("iopamp").style.display = "none";
    document.getElementById("iopamp1").style.display = "none";
  } else if (option == "20") {
    document.getElementById("ibjt").style.display = "block";
    document.getElementById("ibjt1").style.display = "none";
    document.getElementById("iopamp").style.display = "none";
    document.getElementById("iopamp1").style.display = "none";
  } else if (pcheck == false) {
    document.getElementById("ibjt").style.display = "none";
    document.getElementById("ibjt1").style.display = "none";
    document.getElementById("iopamp").style.display = "block";
    document.getElementById("iopamp1").style.display = "none";
    document.getElementById("view3").style.display = "none";
    // document.getElementById("close1").style.display='none';
    document.getElementById("RB1").style.display = "none";
    document.getElementById("RB2").style.display = "none";
    document.getElementById("RB3").style.display = "none";
  }

  //document.getElementById("Rfvalue").style.display="block";
  // document.getElementById("Rfvalue").innerHTML=Rf+" kΩ";

  // if (pcheck==true) {
  //     document.getElementById("ibjt").style.display = 'block';
  //     document.getElementById("ibjt1").style.display = 'none';
  //     document.getElementById("iopamp").style.display = 'none';
  //     document.getElementById("iopamp1").style.display = 'none';

  // }
  // else if (pcheck==false) {
  //     document.getElementById("ibjt").style.display = 'none';
  //     document.getElementById("ibjt1").style.display = 'none';
  //     document.getElementById("iopamp").style.display = 'block';
  //     document.getElementById("iopamp1").style.display = 'none';
  //     document.getElementById("view3").style.display='none';

  // }
}

function calculate() {
  if ((option = "opamp")) {
    tfreq = 1 / (2 * Math.PI * res * cap * Math.pow(6, 0.5));
    tfreq = parseFloat(tfreq.toFixed(4));
    let val = tfreq * 0.1;
    pfreq = practfreq(tfreq - val, tfreq + val);
    pfreq = parseFloat(pfreq.toFixed(4));
    err = ((pfreq - tfreq) * 100) / pfreq;
    err = err.toFixed(2);
    document.getElementById("finalresult").disabled = false;
  } else if ((option = "bjt")) {
    tfreq = 1 / (2 * Math.PI * res * cap * Math.pow(6, 0.5));
    tfreq = parseFloat(tfreq.toFixed(4));
    let val = tfreq * 0.1;
    pfreq = practfreq(tfreq - val, tfreq + val);
    pfreq = parseFloat(pfreq.toFixed(4));
    err = ((pfreq - tfreq) * 100) / pfreq;
    err = err.toFixed(2);
    document.getElementById("finalresult").disabled = false;
  }
}

function Refresh() {
  window.location = window.location.href;
}

function openobservation() {
  document.getElementById("IBobservation").style.display = "block";
  document.getElementById("finalresult").disabled = false;
  // document.getElementById('blocker').style.display = 'block';
  blurr = true;
  blurring();
}

function closeobservation() {
  document.getElementById("IBobservation").style.display = "none";
  blurr = false;
  blurring();
  document.getElementById("IBgraph").style.visibility = "hidden";
  document.getElementById("close1").style.display = "none";
  document.getElementById("myChart").style.visibility = "hidden";
  document.getElementById("x1").style.visibility = "hidden";
  document.getElementById("x2").style.visibility = "hidden";
  document.getElementById("x3").style.visibility = "hidden";
  document.getElementById("y1").style.visibility = "hidden";
  document.getElementById("y2").style.visibility = "hidden";
  document.getElementById("y3").style.visibility = "hidden";

  document.getElementById("z1").style.visibility = "hidden";
  document.getElementById("z2").style.visibility = "hidden";
  document.getElementById("z3").style.visibility = "hidden";
  document.getElementById("arrow15").style.visibility = "hidden";
  document.getElementById("arrow18").style.visibility = "hidden";
  document.getElementById("arrow20").style.visibility = "hidden";

  document.getElementById("instructions").style.display = "none";
}

function AddingToArray() {
  document.getElementById("observationbutton").disabled = false;
  ibXarray.push(parseFloat(cap));
  ibXarray.push(parseFloat(res));
  ibXarray.push(pfreq);
  ibXarray.push(tfreq);
  ibXarray.push(err);
  document.getElementById("add").style.display = "block";
  setTimeout(timer, 2000);
  addobservation();
}

function addobservation() {
  document.getElementById("finalresult").disabled = false;
  magcount += 1;
  ibtable = document.getElementById("IBobservationTable");
  ibrow = ibtable.insertRow(magcount + 1);

  let cell1 = ibrow.insertCell(0);
  let cell2 = ibrow.insertCell(1);
  let cell3 = ibrow.insertCell(2);
  let cell4 = ibrow.insertCell(3);
  let cell5 = ibrow.insertCell(4);
  cell1.innerHTML = ibXarray[ibXarray.length - 5];
  cell2.innerHTML = ibXarray[ibXarray.length - 4];
  cell3.innerHTML = ibXarray[ibXarray.length - 3];
  cell4.innerHTML = ibXarray[ibXarray.length - 2];
  cell5.innerHTML = ibXarray[ibXarray.length - 1];
}

function clearing() {
  let ibtable = document.getElementById("IBobservationTable"); // Ensure ibtable is defined
  if (ibtable) {
    // Check if the table exists
    for (var i = 1; i < ibtable.rows.length; ) {
      ibtable.deleteRow(i);
    }
    magcount = -1;
    ibXarray.length = 0;
    document.getElementById("finalresult").disabled = false;
    document.getElementById("tfreq").innerHTML = null;
    document.getElementById("pfreq").innerHTML = null;
  } else {
    console.error("Table element not found!");
  }
}

function timer() {
  document.getElementById("add").style.display = "none";
}
function timeres() {
  document.getElementById("addres").style.display = "none";
}
function timecap() {
  document.getElementById("addcap").style.display = "none";
}

function disres() {
  document.getElementById("addres").style.display = "block";
  setTimeout(timeres, 1000);
}
function discap() {
  document.getElementById("addcap").style.display = "block";
  setTimeout(timecap, 1000);
}

// Function to generate practical frequency
function practfreq(min, max) {
  return Math.random() * (max - min) + min;
}

// Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){

//   function unpack(rows, key) {
//   return rows.map(function(row) { return row[key]; });
// }

//   var frames = []
//   var x = unpack(rows, ' ')
//   var y = unpack(rows, 'AAPL.High')
//   var x2 = unpack(rows, 'Date')
//   var y2 = unpack(rows, 'AAPL.Low')

//   var n = 100;
//   for (var i = 0; i < n; i++) {
//     frames[i] = {data: [{x: [], y: []}, {x: [], y: []}]}
//     frames[i].data[1].x = x.slice(0, i+1);
//     frames[i].data[1].y = y.slice(0, i+1);
//     frames[i].data[0].x = x2.slice(0, i+1);
//     frames[i].data[0].y = y2.slice(0, i+1);
//   }

//   var trace2 = {
//     type: "scatter",
//     mode: "lines",
//     // name: 'AAPL High',
//     fill: 'tonexty',
//     x: frames[5].data[1].x,
//     y: frames[5].data[1].y,
//     // line: {color: 'grey'}
//   }

//   var trace1 = {
//     type: "scatter",
//     mode: "lines",
//     // name: 'AAPL Low',
//     x: frames[5].data[0].x,
//     y: frames[5].data[0].y,
//     // line: {color: 'lightgrey'}
//   }

//   var data = [trace1,trace2];

//   var layout = {
//     // title: 'Multiple Trace Filled-Area Animation',
//     xaxis: {
//       range: [frames[99].data[0].x[0], frames[99].data[0].x[99]],
//       showgrid: false
//     },
//     yaxis: {
//       range: [120, 140],
//       showgrid: false
//     },
//     legend: {
//       orientation: 'h',
//       x: 0.5,
//       y: 1.2,
//       xanchor: 'center'
//     },

//     updatemenus: [{
//       x: 0.5,
//       y: 0,
//       yanchor: "top",
//       xanchor: "center",
//       showactive: false,
//       direction: "left",
//       type: "buttons",
//       pad: {"t": 87, "r": 10},
//       buttons: [{
//         method: "animate",
//         args: [null, {
//           fromcurrent: true,
//           transition: {
//             duration: 0,
//           },
//           frame: {
//             duration: 40,
//             redraw: false
//           }
//         }],
//         label: "Play"
//       }, {
//         method: "animate",
//         args: [
//           [null],
//           {
//             mode: "immediate",
//             transition: {
//               duration: 0
//             },
//             frame: {
//               duration: 0,
//               redraw: false
//             }
//           }
//         ],
//         label: "Pause"
//       }]
//     }]
//   };

//   Plotly.newPlot('myDiv', data, layout).then(function() {
//     Plotly.addFrames('myDiv', frames);
//   });
// })

//Graph
function IBgraph() {
  blurr = true;
  blurring();
  document.getElementById("IBobservation").style.display = "none";
  document.getElementById("IBgraph").style.visibility = "visible";
  document.getElementById("myChart").style.visibility = "visible";
  document.getElementById("arrow15").style.visibility = "visible";
  document.getElementById("close1").style.display = "block";
  document.getElementById("x1").style.visibility = "visible";
  document.getElementById("x2").style.visibility = "visible";
  document.getElementById("x3").style.visibility = "visible";

  document.getElementById("y1").style.visibility = "hidden";
  document.getElementById("y2").style.visibility = "hidden";
  document.getElementById("y3").style.visibility = "hidden";

  document.getElementById("z1").style.visibility = "hidden";
  document.getElementById("z2").style.visibility = "hidden";
  document.getElementById("z3").style.visibility = "hidden";

  var trace1 = {
    x: [0, 1, 1, 1.5, 1.5, 5],
    y: [15, 15, -15, -15, 15, 15],
    type: "line+marker",
  };

  var trace2 = {
    x: [0, 1, 1, 1.2, 5],
    y: [-25, -25, -40, -25, -25],
    type: "scatter",
    // title: "Time period(in ms)",
  };

  var data = [trace1, trace2];

  var layout = {
    xaxis: {
      title: '"Time (in ms)"',
    },
    yaxis: {
      title: "Voltage(V)",
    },
  };
  var options = {
    scrollZoom: false, // lets us scroll to zoom in and out - works
    showLink: false, // removes the link to edit on plotly - works
    modeBarButtonsToRemove: [
      "toImage",
      "zoom2d",
      "pan",
      "pan2d",
      "autoScale2d",
    ],
    //modeBarButtonsToAdd: ['lasso2d'],
    displayLogo: false, // this one also seems to not work
    displayModeBar: false, //this one does work
    isResponsive: true,
    animationEnabled: true,
  };

  Plotly.newPlot("myChart", data, layout, options);
}
function IBgraph1() {
  blurr = true;
  blurring();
  document.getElementById("IBobservation").style.display = "none";
  document.getElementById("IBgraph").style.visibility = "visible";
  document.getElementById("myChart").style.visibility = "visible";
  document.getElementById("close1").style.display = "block";

  document.getElementById("y1").style.visibility = "visible";
  document.getElementById("y2").style.visibility = "visible";
  document.getElementById("y3").style.visibility = "visible";

  document.getElementById("x1").style.visibility = "hidden";
  document.getElementById("x2").style.visibility = "hidden";
  document.getElementById("x3").style.visibility = "hidden";

  document.getElementById("z1").style.visibility = "hidden";
  document.getElementById("z2").style.visibility = "hidden";
  document.getElementById("z3").style.visibility = "hidden";

  var trace1 = {
    x: [0, 1.5, 1.5, 2.5, 2.5, 5],
    y: [15, 15, -15, -15, 15, 15, ,],
    type: "line+marker",
  };

  var trace2 = {
    x: [0, 1.5, 1.5, 1.7, 5],
    y: [-25, -25, -40, -25, -25],
    type: "scatter",
  };

  var data = [trace1, trace2];

  var layout = {
    xaxis: {
      title: '"Time(in ms)"',
    },
    yaxis: {
      title: "Voltage(V)",
    },
  };
  var options = {
    scrollZoom: false, // lets us scroll to zoom in and out - works
    showLink: false, // removes the link to edit on plotly - works
    modeBarButtonsToRemove: [
      "toImage",
      "zoom2d",
      "pan",
      "pan2d",
      "autoScale2d",
    ],
    //modeBarButtonsToAdd: ['lasso2d'],
    displayLogo: false, // this one also seems to not work
    displayModeBar: false, //this one does work
    isResponsive: true,
    animationEnabled: true,
  };

  Plotly.newPlot("myChart", data, layout, options);
}

function IBgraph2() {
  blurr = true;
  blurring();
  document.getElementById("IBobservation").style.display = "none";
  document.getElementById("IBgraph").style.visibility = "visible";
  document.getElementById("myChart").style.visibility = "visible";
  document.getElementById("close1").style.display = "block";

  document.getElementById("z1").style.visibility = "visible";
  document.getElementById("z2").style.visibility = "visible";
  document.getElementById("z3").style.visibility = "visible";

  document.getElementById("x1").style.visibility = "hidden";
  document.getElementById("x2").style.visibility = "hidden";
  document.getElementById("x3").style.visibility = "hidden";

  document.getElementById("y1").style.visibility = "hidden";
  document.getElementById("y2").style.visibility = "hidden";
  document.getElementById("y3").style.visibility = "hidden";
  var trace1 = {
    x: [0, 1.5, 1.5, 3, 3, 5],
    y: [15, 15, -15, -15, 15, 15],
    type: "line+marker",
  };

  var trace2 = {
    x: [0, 1.5, 1.5, 1.7, 5],
    y: [-25, -25, -40, -25, -25],
    type: "scatter",
  };

  var data = [trace1, trace2];

  var layout = {
    xaxis: {
      title: '"Time(in ms)"',
    },
    yaxis: {
      title: "Voltage(V)",
    },
  };
  var options = {
    scrollZoom: false, // lets us scroll to zoom in and out - works
    showLink: false, // removes the link to edit on plotly - works
    modeBarButtonsToRemove: [
      "toImage",
      "zoom2d",
      "pan",
      "pan2d",
      "autoScale2d",
    ],
    //modeBarButtonsToAdd: ['lasso2d'],
    displayLogo: false, // this one also seems to not work
    displayModeBar: false, //this one does work
    isResponsive: true,
    animationEnabled: true,
  };

  Plotly.newPlot("myChart", data, layout, options);
}

function IBgraph3() {
  blurr = true;
  blurring();
  document.getElementById("IBobservation").style.display = "none";
  document.getElementById("IBgraph").style.visibility = "visible";
  document.getElementById("myChart").style.visibility = "visible";
  document.getElementById("close1").style.display = "block";

  // document.getElementById('s1').style.visibility="visible";
  document.getElementById("s2").style.visibility = "visible";
  document.getElementById("s3").style.visibility = "visible";

  document.getElementById("x1").style.visibility = "hidden";
  document.getElementById("x2").style.visibility = "hidden";
  document.getElementById("x3").style.visibility = "hidden";

  document.getElementById("z1").style.visibility = "hidden";
  document.getElementById("z2").style.visibility = "hidden";
  document.getElementById("z3").style.visibility = "hidden";

  document.getElementById("y1").style.visibility = "hidden";
  document.getElementById("y2").style.visibility = "hidden";
  document.getElementById("y3").style.visibility = "hidden";
  var trace1 = {
    x: [0, 1, 1, 1.5, 1.5, 3, 3, 3.5, 3.5, 5],
    y: [15, 15, -15, -15, 15, 15, -15, -15, 15, 15],
    type: "line+marker",
  };

  var trace2 = {
    x: [0, 1, 1, 1.2, 3, 3, 3.2, 5],
    y: [-25, -25, -40, -25, -25, -40, -25, -25],
    type: "scatter",
    title: "time period(in ms)",
  };

  var data = [trace1, trace2];

  var layout = {
    xaxis: {
      title: '"Time (in ms)"',
    },
    yaxis: {
      title: "Voltage(V)",
    },
  };
  var options = {
    scrollZoom: false, // lets us scroll to zoom in and out - works
    showLink: false, // removes the link to edit on plotly - works
    modeBarButtonsToRemove: [
      "toImage",
      "zoom2d",
      "pan",
      "pan2d",
      "autoScale2d",
    ],
    //modeBarButtonsToAdd: ['lasso2d'],
    displayLogo: false, // this one also seems to not work
    displayModeBar: false, //this one does work
    isResponsive: true,
    animationEnabled: true,
  };

  Plotly.newPlot("myChart", data, layout, options);
}

// var trace1 = {
//     x: [0,1.5,1.5,2.5,2.5,4,4,6,],
//     y: [15,15,-15,-15,15,15,-15,-15,],
//     type: 'line+marker'
//   };

//   var trace2 = {
//     x: [0, 1.5, 1.5, 1.7, 1.7, 5],
//     y: [-25, -25, -40, -40, -25, -25],
//     type: 'scatter'

//   };

//   var data = [trace1, trace2, ];

//   Plotly.newPlot('myChart', data);
//help button
function help() {
  document.getElementById("instructions").style.display = "block";
  // document.getElementById('close1').style.display = 'block';
}
let result;
//display result
// function fresult() {
//     if (result == '15') {
//         tfreq = 10.395+kHz;
//         pfreq = 10.200+kHz;
//         console.log("hi devadiga")

// }
//     else if (result == '18') {
//         tfreq = 12.474;
//         pfreq = 12.450;
//         console.log("hi shetsdevadiga")

//     }
//     else if (result == '20') {
//         console.log('hlo dstees')
//     tfreq = 13.86;
//     pfreq = 13.50;

// }
// }

function fresult() {
  document.getElementById("tfreq").innerHTML = tfreq + " ms";
  document.getElementById("pfreq").innerHTML = pfreq + " ms";
}
function storeNumber() {
  res = document.getElementById("exp1").value;
  //Rf=29*res;
  //Rf= Rf.toFixed(2);
  cap = document.getElementById("exp2").value;
  document.getElementById("insert").disabled = false;
  calculate();
}

function equation(x) {
  return 5 * Math.sin(2 * 10(Math.pow(-6)) * pfreq * x);
}
