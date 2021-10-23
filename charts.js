window.onload = function() {

var dataPoints = [];

var chart = new CanvasJS.Chart("chartContainer", {
animationEnabled: true,
theme: "light2",
title: {
text: "Daily Sales Data"
},
axisY: {
title: "Anyo",
titleFontSize: 24,
includeZero: true
},
data: [{
type: "column",
yValueFormatString: "#,### valor",
dataPoints: valro
}]
});

function addData(data) {
for (var i = 0; i < data.length; i++) {
dataPoints.push({
  x: new Date (data[i].anyo),
  y: data[i].valor
});
}
chart.render();

}

$.getJSON("https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/22344?tip=AM&", addData);

}




window.onload = function () {

var limit = 50000;
var y = 100;    
var data = [];
var dataSeries = { type: "line" };
var dataPoints = [];
for (var i = 0; i < limit; i += 1) {
y += Math.round(Math.random() * 10 - 5);
dataPoints.push({
  x: i,
  y: y
});
}
dataSeries.dataPoints = dataPoints;
data.push(dataSeries);

$.getJSON("https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/22344?tip=AM&", addData);

//Better to construct options first and then pass it as a parameter
var options = {
zoomEnabled: true,
animationEnabled: true,
title: {
  text: "Try Zooming - Panning"
},
axisY: {
  lineThickness: 1
},
data: data  // random data
};

var chart = new CanvasJS.Chart("chartContainer", options);
var startTime = new Date();
chart.render();
var endTime = new Date();
document.getElementById("timeToRender").innerHTML = "Time to Render: " + (endTime - startTime) + "ms";

}
  
