var spreadsheetId = "1Aoz_GcPYoEIMMNd1N_meYNOp8TJ0fCXpp1AoUhCpwZo",
    url = "https://spreadsheets.google.com/feeds/list/" +
          spreadsheetId +
          "/od6/public/basic?alt=json";

$.get({
  url: url,
  success: function(response) {
    console.log(response);
  }
});

var data = response.feed.entry,
    len = data.length,
    i = 0,
    parsedData = [];

for (i = 0; i < len; i++) {
  parsedData.push({
    label: data[i].title.$t,
    value: data[i].content.$t.replace('Income: ', '')
  });
}

new FusionCharts({
  type: 'bar2d',
  renderAt: 'chart-container',
  width: '100%',
  height: '300',
  dataFormat: 'json',
  dataSource: {
    "chart": {
      "caption": "Highest Paid Actors",
      "yAxisName": "Annual Income (in milion USD)",
      "numberPrefix": "$"
    },
  "data": parsedData
  }
}).render();