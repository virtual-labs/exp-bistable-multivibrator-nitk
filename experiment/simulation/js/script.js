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
        document.getElementById("simoptions").style.filter = 'blur(2px)';
        document.getElementById("mainsimulation").style.filter = 'blur(2px)';
        document.getElementById("buttondown").style.filter = 'blur(2px)';
    } else if (blurr == false) {
        document.getElementById("simoptions").style.filter = 'blur(0px)';
        document.getElementById("mainsimulation").style.filter = 'blur(0px)';
        document.getElementById("buttondown").style.filter = 'blur(0px)';
    }
}
function selection() {
    if (option == 'bjt') {

        console.log('virtual')
    } else if (option == 'opamp') {
        console.log('virtual lab')
    }
}

// Next button
let a = 1;

function up() {
    a += 1;
    next()
}

function down() {
    a -= 1;
    next()
}

function next() {
    if (a == 1) {
        document.getElementById("buttondown").style.display = 'none';
        document.getElementById("buttonup").style.display = 'block';
        document.getElementById("content").style.display = 'block';
        document.getElementById("content2").style.display = 'none';
    } else if (a == 2) {
        document.getElementById("buttondown").style.display = 'block';
        document.getElementById("content").style.display = 'none';
        document.getElementById("content2").style.display = 'block';
        document.getElementById("content3").style.display = 'none';
        document.getElementById("buttonup").style.display = 'none';
        // document.getElementById("observation").style.display = 'none';
    } else if (a == 3) {
        document.getElementById("buttonup").style.display = 'none';
        document.getElementById("content2").style.display = 'none';
        document.getElementById("content3").style.display = 'block';
        closeobservation();
        plotting();
    }
}


function update() {
    let select = document.getElementById('exp');
    let option = select.options[select.selectedIndex].value;
    document.getElementById("exp").disabled = true;

    if (option == 'bjt') {
        document.getElementById("insert").innerHTML = 'Trigger Button On';
        document.getElementById("remove").innerHTML = 'Trigger Button off';

        document.getElementById("ibjt").style.display = 'block';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';
        document.getElementById("exp").disabled = false;
        
        document.getElementById("exp1").disabled = false;
        document.getElementById('exp1').style.visibility="visible";
        document.getElementById("exp2").disabled = false;
        document.getElementById('mono').style.visibility="visible";
        document.getElementById('mono1').style.visibility="visible";
        document.getElementById('mono2').style.visibility="visible";
       document.getElementById("insert").disabled = true;
       
        document.getElementById("resistance").style.visibility="visible"
        document.getElementById("Capacitance").style.visibility="visible"
         document.getElementById("exp2").style.visibility="visible"
        document.getElementById("exp").disabled = false;

        document.getElementById("exp1").style.visibility="visible";
        document.getElementById('addbutton').style.visibility = "visible"
        document.getElementById('observationbutton').style.visibility = "visible";
        document.getElementById('finalresult').style.visibility = "visible"
        document.getElementById('tfreq').style.visibility = "visible";
        document.getElementById('pfreq').style.visibility = "visible"
        document.getElementsByClassName('result')[0].style.visibility="visible";
       res = 15;

        pcheck= true;
        clearing();
        remove();

    } else if (option == 'opamp') {
       // document.getElementById("Rfvalue").style.display="none";
        document.getElementById("insert").innerHTML = 'Trigger Button On';
        document.getElementById("remove").innerHTML = 'Trigger Button off';
        document.getElementById("observationbutton").disabled = true;

        document.getElementById("iopamp").style.display = 'block';
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';

        document.getElementById("resistance").style.visibility="hidden"
        document.getElementById("Capacitance").style.visibility="hidden"
        document.getElementById("exp2").style.visibility="hidden"
        document.getElementById("exp").disabled = false;

        document.getElementById("exp1").style.visibility="hidden";
        document.getElementById('addbutton').style.visibility = "hidden"
        document.getElementById('observationbutton').style.visibility = "hidden";
        document.getElementById('finalresult').style.visibility = "hidden"
        document.getElementById('tfreq').style.visibility = "hidden";
        document.getElementById('pfreq').style.visibility = "hidden"
        document.getElementsByClassName('result')[0].style.visibility="hidden";
        // document.getElementById("exp").disabled = false;
        document.getElementById("insert").disabled = false;
        document.getElementById('RB1').style.visibility="visible";
        document.getElementById('RB2').style.visibility="visible";
        document.getElementById('RB3').style.visibility="visible";
        // document.getElementById('RB4').style.visibility="visible";
        // document.getElementById('view').style.visibility = "hidden";
        // document.getElementById('view1').style.visibility = "hidden";
        // document.getElementById('view2').style.visibility = "hidden";
        res = 1;
        pcheck=false;
        clearing();
        remove()
    }
}


function resist() {
    document.getElementById("exp").disabled = true;
    let select = document.getElementById('exp1');
    let option = select.options[select.selectedIndex].value;

    if (option == '15') {
        document.getElementById("insert").disabled = false;
        document.getElementById("addbutton").disabled = false;
        document.getElementById("observationbutton").disabled = false;
        document.getElementById('R1').style.visibility="visible";
        document.getElementById('R2').style.visibility="visible";
        res = 15;
        cap = 1;
        tfreq = 10.395;
        pfreq = 10.200;
        err = 1.87;
console.log('hi')
// closeobservation()
        
} 
    else if (option == '18') {
        console.log('bi')
        document.getElementById("insert").disabled = false;
        document.getElementById("addbutton").disabled = false;
        document.getElementById("observationbutton").disabled = false;
        document.getElementById('R1').style.visibility="visible";
        document.getElementById('R2').style.visibility="visible";
        
        res = 18;
        cap = 1;
        tfreq = 12.474;
        pfreq = 12.450;
        pcheck=false;
        err = 0.19;
        // clearing();
        // remove()
        // closeobservation()
    }
    else if (option == '20') {
        console.log('hlo')
     document.getElementById("insert").disabled = false;
      document.getElementById("addbutton").disabled = false;
    document.getElementById("observationbutton").disabled = false;
    document.getElementById('R1').style.visibility="visible";
        document.getElementById('R2').style.visibility="visible";
    res = 20;
    cap = 1;
    tfreq = 13.86;
    pfreq = 13.50;
    err = 2.59;
    
     pcheck=false;
    //  clearing();
    //  remove()
    //  closeobservation()
 }
}

// sensor/probe button
function insert() {
    document.getElementById("insert").style.display = 'none';
    document.getElementById("remove").style.display = 'block';
    document.getElementById("exp").disabled = true;
    
    document.getElementById("addbutton").disabled = false;
    document.getElementById("observationbutton").disabled = false;
    document.getElementById("exp1").disabled = true;
    document.getElementById("exp2").disabled = true;

    let select = document.getElementById('exp1');
    let option = select.options[select.selectedIndex].value;


    if (pcheck==true) {
        document.getElementById("ibjt1").style.display = 'block';
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';
    }
        // document.getElementById("view").style.display = 'block';
    if (option == '15') {
        document.getElementById("ibjt1").style.display = 'block';  
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("view").style.display='block';
        document.getElementById('arrow15').style.visibility="visible";
        document.getElementById('arrow18').style.visibility="hidden";
        document.getElementById('arrow20').style.visibility="hidden";
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';
console.log('hi chethu')
    } 
    else if (option == '18') {
        document.getElementById("view1").style.display='block';
        document.getElementById('arrow18').style.visibility="visible";
        document.getElementById('arrow15').style.visibility="hidden";
        document.getElementById('arrow20').style.visibility="hidden";
        document.getElementById("ibjt1").style.display = 'block';  
        document.getElementById("ibjt").style.display = 'none';
        // document.getElementById("view1").style.display='block';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';
        console.log('hi chethudevadiga')
    }
    else if (option == '20') {
        document.getElementById("ibjt1").style.display = 'block';  
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("view2").style.display='block';
        document.getElementById('arrow20').style.visibility="visible";
        document.getElementById('arrow18').style.visibility="hidden";
        document.getElementById('arrow15').style.visibility="hidden";
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';
 }
    else if (pcheck==false) {
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'block';
        console.log('vlab')
        // document.getElementById('addbutton').style.visibility = "hidden"
        // document.getElementById('observationbutton').style.visibility = "hidden";
        // document.getElementById('finalresult').style.visibility = "hidden"
        // document.getElementById('tfreq').style.visibility = "hidden";
        // document.getElementById('pfreq').style.visibility = "hidden"
        // document.getElementsByClassName('result')[0].style.visibility="hidden";
        document.getElementById("view3").style.display='block';
        document.getElementById('arrowB').style.visibility="visible";
        document.getElementById('arrowB1').style.visibility="visible";
    }

}

function remove() {
    document.getElementById("remove").style.display = 'none';
    document.getElementById("insert").style.display = 'block';

    document.getElementById("view").style.display='none';
    document.getElementById("view1").style.display='none';
    document.getElementById("view2").style.display='none';

   // document.getElementById("observationbutton").disabled = true;
    document.getElementById("addbutton").disabled = true;

    document.getElementById("exp1").disabled = false;
    document.getElementById("exp2").disabled = false;

    let select = document.getElementById('exp1');
    let option = select.options[select.selectedIndex].value;

    if (pcheck==true) {
        document.getElementById("ibjt1").style.display = 'block';
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';
    }
        // document.getElementById("view").style.display = 'block';
    if (option == '15') {
        document.getElementById("ibjt").style.display = 'block';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';
console.log('hi c15')
    } 
    else if (option == '18') {
        document.getElementById("ibjt").style.display = 'block';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';
    }
    else if (option == '20') {
        document.getElementById("ibjt").style.display = 'block';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp").style.display = 'none';
        document.getElementById("iopamp1").style.display = 'none';
        console.log('20')
 }
    else if (pcheck==false) {
        document.getElementById("ibjt").style.display = 'none';
        document.getElementById("ibjt1").style.display = 'none';
        document.getElementById("iopamp").style.display = 'block';
        document.getElementById("iopamp1").style.display = 'none';
        document.getElementById("view3").style.display='none';
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
    if(option = "opamp")
    {
        tfreq= 1/((2*Math.PI*res*cap)*(Math.pow(6,0.5)));
        tfreq= parseFloat( tfreq.toFixed(4));
        let val= tfreq*0.1;
        pfreq= practfreq(tfreq-val, tfreq+val);
        pfreq = parseFloat(pfreq.toFixed(4));
        err = (pfreq-tfreq)*100/pfreq;
        err = err.toFixed(2)
        document.getElementById("finalresult").disabled = false;
    }
    else if(option = "bjt")
    {
        tfreq= 1/((2*Math.PI*res*cap)*(Math.pow(6,0.5)));
        tfreq= parseFloat( tfreq.toFixed(4));
        let val= tfreq*0.1;
        pfreq= practfreq(tfreq-val, tfreq+val);
        pfreq = parseFloat(pfreq.toFixed(4));
        err = (pfreq-tfreq)*100/pfreq;
        err = err.toFixed(2)
        document.getElementById("finalresult").disabled = false;
    }
}

function Refresh() {
    window.location = window.location.href;
};

function openobservation() {
    document.getElementById("IBobservation").style.display = 'block';
    document.getElementById("finalresult").disabled = false;
    document.getElementById('blocker').style.display = 'block';
    blurr = true;
    blurring();
}

function closeobservation() {
    document.getElementById("IBobservation").style.display = 'none';
    blurr = false;
    blurring();
    document.getElementById('IBgraph').style.display = 'none';
    document.getElementById('blocker').style.display = 'none';
    document.getElementById('myChart').style.display = 'none';
    document.getElementById('instructions').style.display = 'none';
}

function AddingToArray() {
        ibXarray.push(parseFloat(cap));
        ibXarray.push(parseFloat(res));
        ibXarray.push(pfreq);
        ibXarray.push(tfreq);
        ibXarray.push(err);
        document.getElementById('add').style.display = 'block';
        setTimeout(timer, 2000);
        addobservation();
}


function addobservation() {
        magcount += 1;
        ibtable = document.getElementById("IBobservationTable");
        ibrow = ibtable.insertRow(magcount + 1);
        console.log("Hi shwetha");
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
    for (var i = 1; i < ibtable.rows.length;) {
        ibtable.deleteRow(i);
    }
    magcount = -1;
    ibXarray.length = 0;
    document.getElementById("finalresult").disabled = false;
    document.getElementById('tfreq').innerHTML = null;
    document.getElementById('pfreq').innerHTML = null;

}


function timer() {
    document.getElementById('add').style.display = 'none';
}
function timeres() {
    document.getElementById('addres').style.display = 'none';
}
function timecap() {
    document.getElementById('addcap').style.display = 'none';
}

function disres(){
    document.getElementById('addres').style.display = 'block';
    setTimeout(timeres, 1000);
}
function discap(){
    document.getElementById('addcap').style.display = 'block';
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
    document.getElementById('IBobservation').style.display = 'none'
    document.getElementById('IBgraph').style.display = 'block'
    document.getElementById('myChart').style.display = 'block'
    document.getElementById('blocker').style.display = 'block';
    document.getElementById('x1').style.visibility="visible";
    document.getElementById('x2').style.visibility="visible"
    document.getElementById('x3').style.visibility="visible"

    document.getElementById('y1').style.visibility="hidden";
    document.getElementById('y2').style.visibility="hidden"
    document.getElementById('y3').style.visibility="hidden"

    document.getElementById('z1').style.visibility="hidden";
    document.getElementById('z2').style.visibility="hidden"
    document.getElementById('z3').style.visibility="hidden"
   
    var trace1 = {
            x: [0,1,1,1.5,1.5,5,],
            y: [15,15,-15,-15,15,15,],
            type: 'line+marker',
          };
          
          var trace2 = {
            x: [0, 1, 1, 1.2, 5],
            y: [-25, -25, -40, -25, -25],
            type: 'scatter',
            // title: "Time period(in ms)",
            
          };
          
          var data = [trace1, trace2, ];

          var layout = {
            xaxis: {
              title: '"Time (in ms)"'
            },
            yaxis: {
              title: "Voltage(V)"
              
            }
          };
          var options = {
            scrollZoom: false, // lets us scroll to zoom in and out - works
            showLink: false, // removes the link to edit on plotly - works
            modeBarButtonsToRemove: ['toImage', 'zoom2d', 'pan', 'pan2d', 'autoScale2d'],
            //modeBarButtonsToAdd: ['lasso2d'],
            displayLogo: false, // this one also seems to not work
            displayModeBar: false, //this one does work
            isResponsive:true,
            animationEnabled:true,
        };
          
          
          Plotly.newPlot('myChart', data,layout,options,);
        
   
    }   
    function IBgraph1() {
        document.getElementById('IBobservation').style.display = 'none'
        document.getElementById('IBgraph').style.display = 'block'
        document.getElementById('myChart').style.display = 'block'
        document.getElementById('blocker').style.display = 'block';

        document.getElementById('y1').style.visibility="visible";
    document.getElementById('y2').style.visibility="visible"
    document.getElementById('y3').style.visibility="visible";

    document.getElementById('x1').style.visibility="hidden";
    document.getElementById('x2').style.visibility="hidden"
    document.getElementById('x3').style.visibility="hidden"

    document.getElementById('z1').style.visibility="hidden";
    document.getElementById('z2').style.visibility="hidden"
    document.getElementById('z3').style.visibility="hidden"

        var trace1 = {
            x: [0,1.5,1.5,2.5,2.5,5,],
            y: [15,15,-15,-15,15,15,,],
            type: 'line+marker'
          };
          
          var trace2 = {
            x: [0, 1.5, 1.5, 1.7, 5],
            y: [-25, -25, -40, -25, -25],
            type: 'scatter'
            
          };
          
          var data = [trace1, trace2, ];

          var layout = {
            xaxis: {
              title: '"Time(in ms)"'
            },
            yaxis: {
              title: "Voltage(V)"
              
            }
          };
          var options = {
            scrollZoom: false, // lets us scroll to zoom in and out - works
            showLink: false, // removes the link to edit on plotly - works
            modeBarButtonsToRemove: ['toImage', 'zoom2d', 'pan', 'pan2d', 'autoScale2d'],
            //modeBarButtonsToAdd: ['lasso2d'],
            displayLogo: false, // this one also seems to not work
            displayModeBar: false, //this one does work
            isResponsive:true,
            animationEnabled:true,
        };
          
          Plotly.newPlot('myChart', data,layout,options,);
    }   

    function IBgraph2() {
        document.getElementById('IBobservation').style.display = 'none'
        document.getElementById('IBgraph').style.display = 'block'
        document.getElementById('myChart').style.display = 'block'
        document.getElementById('blocker').style.display = 'block';

        document.getElementById('z1').style.visibility="visible";
    document.getElementById('z2').style.visibility="visible"
    document.getElementById('z3').style.visibility="visible";

    document.getElementById('x1').style.visibility="hidden";
    document.getElementById('x2').style.visibility="hidden"
    document.getElementById('x3').style.visibility="hidden"

    document.getElementById('y1').style.visibility="hidden";
    document.getElementById('y2').style.visibility="hidden"
    document.getElementById('y3').style.visibility="hidden"
        var trace1 = {
                x: [0,1.5,1.5,3,3,5,],
                y: [15,15,-15,-15,15,15,],
                type: 'line+marker'
              };
              
              var trace2 = {
                x: [0, 1.5, 1.5, 1.7, 5],
                y: [-25, -25, -40, -25, -25],
                type: 'scatter'
                
              };
              
              var data = [trace1, trace2, ];

              var layout = {
                xaxis: {
                  title: '"Time(in ms)"'
                },
                yaxis: {
                  title: "Voltage(V)"
                  
                }
              };
              var options = {
                scrollZoom: false, // lets us scroll to zoom in and out - works
                showLink: false, // removes the link to edit on plotly - works
                modeBarButtonsToRemove: ['toImage', 'zoom2d', 'pan', 'pan2d', 'autoScale2d'],
                //modeBarButtonsToAdd: ['lasso2d'],
                displayLogo: false, // this one also seems to not work
                displayModeBar: false, //this one does work
                isResponsive:true,
                animationEnabled:true,
            };
              
              Plotly.newPlot('myChart', data,layout,options);
              
    }   
        
    function IBgraph3() {
        document.getElementById('IBobservation').style.display = 'none'
        document.getElementById('IBgraph').style.display = 'block'
        document.getElementById('myChart').style.display = 'block'
        document.getElementById('blocker').style.display = 'block';

        // document.getElementById('s1').style.visibility="visible";
    document.getElementById('s2').style.visibility="visible"
    document.getElementById('s3').style.visibility="visible";

    document.getElementById('x1').style.visibility="hidden";
    document.getElementById('x2').style.visibility="hidden"
    document.getElementById('x3').style.visibility="hidden"

    document.getElementById('z1').style.visibility="hidden";
    document.getElementById('z2').style.visibility="hidden"
    document.getElementById('z3').style.visibility="hidden"

    
    document.getElementById('y1').style.visibility="hidden";
    document.getElementById('y2').style.visibility="hidden"
    document.getElementById('y3').style.visibility="hidden"
    var trace1 = {
        x: [0,1,1,1.5,1.5,3,3,3.5,3.5,5],
        y: [15,15,-15,-15,15,15,-15,-15,15,15],
        type: 'line+marker',
      };
      
      var trace2 = {
        x: [0, 1, 1, 1.2, 3,3,3.2,5],
        y: [-25, -25, -40, -25, -25,-40,-25,-25],
        type: 'scatter',
        title: "time period(in ms)",
        
      };
      
      var data = [trace1, trace2, ];

      var layout = {
        xaxis: {
          title: '"Time (in ms)"'
        },
        yaxis: {
          title: "Voltage(V)"
          
        }
      };
      var options = {
        scrollZoom: false, // lets us scroll to zoom in and out - works
        showLink: false, // removes the link to edit on plotly - works
        modeBarButtonsToRemove: ['toImage', 'zoom2d', 'pan', 'pan2d', 'autoScale2d'],
        //modeBarButtonsToAdd: ['lasso2d'],
        displayLogo: false, // this one also seems to not work
        displayModeBar: false, //this one does work
        isResponsive:true,
        animationEnabled:true,
    };
      
      
      Plotly.newPlot('myChart', data,layout,options,);
    
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
    document.getElementById('instructions').style.display = 'block';
    document.getElementById('blocker').style.display = 'block';
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
    document.getElementById('tfreq').innerHTML = tfreq + " ms";
    document.getElementById('pfreq').innerHTML = pfreq + " ms";
}
function storeNumber() {
   res= document.getElementById("exp1").value;
   //Rf=29*res;
   //Rf= Rf.toFixed(2);
   cap= document.getElementById("exp2").value;
   document.getElementById("insert").disabled = false;
   calculate(); 
}

function equation(x) {
    return 5* Math.sin(2 * 10(Math.pow(-6)) * pfreq * x);
}