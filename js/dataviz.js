//covid-api.com api
let ustimeline = []
let usTimelineDeath = []
let usTimelineConfirm = []
let altimeline = []
let aktimeline = []
let astimeline = []
let aztimeline = []
let artimeline = []
let catimeline = []
let cotimeline = []
let cttimeline = []
let detimeline = []
let dctimeline = []
let fltimeline = []
let gatimeline = []
let gutimeline = []
let hitimeline = []
let idtimeline = []
let iltimeline = []
let intimeline = []
let iatimeline = []
let kstimeline = []
let kytimeline = []
let latimeline = []
let metimeline = []
let mdtimeline = []
let matimeline = []
let mitimeline = []
let mntimeline = []
let mstimeline = []
let motimeline = []
let mttimeline = []
let netimeline = []
let nvtimeline = []
let nhtimeline = []
let njtimeline = []
let nmtimeline = []
let nytimeline = []
let nctimeline = []
let ndtimeline = []
let mptimeline = []
let ohtimeline = []
let oktimeline = []
let ortimeline = []
let patimeline = []
let prtimeline = []
let ritimeline = []
let sctimeline = []
let sdtimeline = []
let tntimeline = []
let txtimeline = []
let vitimeline = []
let uttimeline = []
let vttimeline = []
let vatimeline = []
let watimeline = []
let wvtimeline = []
let witimeline = []
let wytimeline = []
let dateValue = [] 
const covidtrackNewCases = [0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,2,1,2,3,24,30,42,126,65,132,137,170,276,388,420,683,
                          843,1025,1289,1715,2088,3357,4614,6102,6932,9223,11192,10882,12631,17616,19254,19771,19664,21202,24937,26271,28063,31890,33058,25910,28243,
                         30476,30959,35116,33608,31263,28115,24281,25874,29921,31527,31984,27950,27523,25967,26039,29176,31953,34226,35734,27314,22407,25234,26176,30046,
                         32,808,29196,25789,22195,22344,25256,27229,27197,25320,21116,18140,22442,21500,26773,25490,23743,20436,20597,20687,21293,26831,24115,22561,19062,
                         18555,16690,19172,22799,23618,23596,21641,20101,19879,20182,20477,23050,22746,19056,16923,16916,20880,21991,23141,25453,21658,18255,22838,24153,
                         27042,30865,32236,29188,26829,33447,39117,39707,44340,43058,41745,39398,47010,51046,53511,54199,54881,45334,40925,50990,62813,59062,67111,62569,
                         61605,57160,58609,69373,70489,76524,64750,64230,56663,62920,69422,71436,75061,64845,60768,54479,58457,64143,68961,67827,60679,53301,42738,51198,
                         52698,54048,60823,53529,50766,41370,54935,56186,51763,57101,56046,42503,37751,40070,45073,43844,46456,46054,37900,34543,36839,44331,44111,46115,
                         43995,38766,31720,42242,30655,44643,51600,44860,33033,28117,22310,30733,37409,44698,41850,34579,33572,34778,40319,43642,46889,45668,35533,39162,
                         48986,39498,43341,55237,47268,34990,35376,36766,44909,45720,49427,50874,38165,37752,38846,51216,55308,56993,57635,46672,43234,46979,57240,63641,
                         68505,57675,47957,57650,60574,61710,73419,82575,83792,64471,63430,72255,79700,89365,97942,91294,141973,83454,90012,105104,118595,128926,131637,
                         112259,118234,133123,148731,157056,173954,167183,146930,149711,159027,167573,187169,196494,183201,153836,154581,165251,187677,129063,198259,
                         151064,136967,149516,179137,201746,214805,228884,217770,182351,181473,215953,214960,219285,235471,225287,186763,192862,190593,231850,241028,
                         239737,203346,196963,178997,190132,221906,204297,125867,190115,152978,163338,196082,225908,223036,180488,279389,207756,178438,215086,248086,
                         269325,292204,266399,227708,194140,214809,221557,222944,243996,216478,186270,150220,144047,186722,184033,188983,174705,143691,133067]
const covidtrackNewDeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,1,3,3,3,2,4,6,1,4,4,2,6,8,5,8,15,21,24,28,
                            51,70,62,145,101,236,241,313,410,551,505,585,908,1006,1175,1287,1478,1342,1314,2038,2003,2051,2083,2075,1700,1633,2352,2545,2194,2118,1895,
                            1763,1816,2479,2085,1809,1974,1629,1219,1290,2078,2676,2160,1809,1527,1248,1028,2490,1918,2748,1784,1456,1035,891,1509,1509,1730,1853,1538,
                            1237,873,854,1317,1397,1380,1290,1040,688,556,665,1335,1235,1174,923,655,679,971,975,883,835,714,447,675,886,893,896,766,694,355,385,720,
                            780,682,652,615,293,288,724,704,648,618,508,273,336,579,698,699,603,296,209,237,905,819,863,839,755,472,329,741,863,941,939,876,527,376,
                            1041,1149,1014,561,1066,1111,1503,1248,1328,1201,496,516,1241,1355,1241,1323,1086,621,430,1320,1517,1163,1226,617,411,1179,1411,1129,1119,
                            1035,577,341,1140,1300,1128,1020,1017,477,380,1014,1035,1072,999,926,452,227,347,1088,1161,1015,817,392,407,1034,1190,880,901,747,327,281,
                            859,1156,938,847,873,310,246,724,1064,862,842,738,380,331,613,929,979,913,691,471,285,718,801,928,891,780,405,443,833,1028,1117,949,896,391,
                            397,922,1047,1060,947,958,410,475,1517,1131,1154,1185,1125,513,577,1358,1577,1112,1301,1353,712,607,1553,1885,2010,1910,1551,923,853,2091,
                            2281,1392,1404,1243,825,1037,2489,2811,2822,2563,2486,1163,1291,2680,3169,3132,2747,2497,1501,1357,2924,3453,3465,2866,2708,1668,1480,3137,
                            3393,2958,1553,1426,1397,1490,3289,3900,3297,2406,1455,1547,3484,3902,4079,3780,3537,2068,1733,4064,4087,3915,3679,3709,2053,1395,2141,4409,
                            3878,3980,3591,1944,1593]

/*Covid Tracking HighChart Date Value
  fetch('https://api.covidtracking.com/v1/us/daily.json')
    .then(response => {
    return response.json();
  })
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      dateValue.push(new Date(data[i].lastModified).toString().substring(0,15));
    }
    console.log(dateValue);   
   });


//Covid Tracking HighChart Death Value
  fetch('https://api.covidtracking.com/v1/us/daily.json')
    .then(response => {
    return response.json();
  })
  .then(data => {
    for (let i = data.length - 1; i >= 0; i--) {
      deathValue.push(data[i].death);
    }
    console.log(deathValue);   
   });


//Covid Tracking HighChart Case Positive Value
  fetch('https://api.covidtracking.com/v1/us/daily.json')
    .then(response => {
    return response.json();
  })
  .then(data => {
    for (let i = data.length - 1; i >= 0; i--) {
      posValue.push(data[i].positive);
    }
    console.log(posValue);   
   }); */

//John Hopkins D3 Charts
const data1 = Object.assign(d3.csvParse(("./nytimes_covid_19_data/nytimes_us_total.csv"), d3.autoType), {y: "# of Cases"});

const margin = ({top: 20, right: 30, bottom: 30, left: 40})
const height = 500
const width = 500

/*chart = {
  const svg = d3.select(DOM.svg(width, height))
      .style("-webkit-tap-highlight-color", "transparent")
      .style("overflow", "visible");

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);
  
  svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", line);

  const tooltip = svg.append("g");

  svg.on("touchmove mousemove", function(event) {
    const {date, value} = bisect(d3.pointer(event, this)[0]);

    tooltip
        .attr("transform", `translate(${x(date)},${y(value)})`)
        .call(callout, `${cases}
${date}`);
  });

  svg.on("touchend mouseleave", () => tooltip.call(callout, null));

  return svg.node();
}*/

const line = d3.line()
    .defined(d => !isNaN(d.cases))
    .x(d => x(d.date))
    .y(d => y(d.cases));

const x = d3.scaleUtc()
    .domain(d3.extent(data1, d => d.date))
    .range([margin.left, width - margin.right]);

const y = d3.scaleLinear()
    .domain([0, d3.max(data1, d => d.cases)]).nice()
    .range([height - margin.bottom, margin.top]);

const xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

const yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data1.y));

callout = (g,value) => {
 if (!cases) return 
    g.style("display", "none");
    g.style("display", "null");
    g.style("pointer-events", "none");
    g.style("font", "10px sans-serif");
 
 const path = g.selectAll("path")
    .data([null])
    .join("path")
        .attr("fill", "white")
        .attr("stroke", "black")
 
 const text = g.selectAll("text")
    .data([null])
    .join("text")
    .call(text => 
        text.selectAll("tspan")
        .data((cases + "").split(/\n/))
           .join("tspan")
           .attr("x", 0)
           .attr("y", (d,i) => `${i * 1.1}em`)
           .style("font-weight"), (_, i) => i ? null : "bold")
           .text(d => d);
    
 const {x, y, width: w, height: h} = text.node().getBBox();
    
 text.attr("transform", `translate(${-w / 2}, ${15 - y})`);
 path.attr("d", `M${-w / 2 - 10},5H-515,-515,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`);
}

bisect = () => {
 const bisect = d3.bisector(d => d.date).left;
 return mx => {
  const date = x.invert(mx);
  const index = bisect(data, date, 1);
  const a = data[index - 1];
  const b = data[index];
  return b && (date - a.date > b.date - date) ? b : a; 
 };
}

async function getUsCountFromCovidApi() {
 const fish = await fetch('https://covid19-api.org/api/timeline/US').then(response => response.json())
  .then(data => {
   usTimelineDeath.push(data)
   usTimelineConfirm.push(data)
   console.log(usTimelineDeath)
  });
 
  await fetch('https://covid-api.com/api/reports?date=2020-03-13&q=US%20Alabama&iso=USA&region_name=US&region_province=Alabama').then(response => response.json())
  .then(data => {
   altimeline.push(data)
   console.log(altimeline)
  });
}

getUsCountFromCovidApi();

//New York Times Total Chart, Plotly
Plotly.d3.csv("./nytimes_covid_19_data/nytimes_us_total.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
  }

  // header values
  var headerNames = Plotly.d3.keys(rows[0]);
  var headerValues = [headerNames[0],headerNames[1],headerNames[2]];

  // cell values
  var cellValues = [];
  for (i = 0; i < headerValues.length; i++) {
    cellValue = unpack(rows, headerValues[i]);
    cellValues[i] = cellValue;
  }

  /* clean date
  for (i = 0; i < cellValues[0].length; i++) {
  var dateValue = cellValues[0][i].split(' ')[0]
  cellValues[0][i] = dateValue
  }*/

  // create table
  var table = {
    type: 'table',
    columnwidth: [600,600,600,600],
    columnorder: [0,1,2,3],
    header: {
      values: headerValues,
      align: "center",
      line: {width: 1, color: 'rgb(50, 50, 50)'},
      fill: {color: ['rgb(235, 100, 230)']},
      font: {family: "Arial", size: 11, color: "white"}
    },
    cells: {
      values: cellValues,
      align: ["center", "center"],
      line: {color: "black", width: 1},
      fill: {color: ['rgb(235, 193, 238)', 'rgba(228, 222, 249, 0.65)']},
      font: {family: "Arial", size: 10, color: ["black"]}
    },
    xaxis: 'x',
    yaxis: 'y',
    domain: {x: [0,0.5], y: [0,1]}
  }

  // create 1st plot
  var trace1 = {
    x: unpack(rows, 'date'),
    y: unpack(rows, 'cases'),
    xaxis: 'x1',
    yaxis: 'y1',
    mode: 'lines',
    line: {width: 2, color: '#9748a1'},
    name: 'Cases'
  }
  // create 2nd plot
  var trace2 = {
    x: unpack(rows, 'date'),
    y: unpack(rows, 'deaths'),
    xaxis: 'x2',
    yaxis: 'y2',
    mode: 'lines',
    line: {width: 2, color: '#b04553'},
    name: 'Deaths'
  }
  
  // create 3rd plot
  var trace3 = {
    x: unpack(rows, 'date'),
    y: unpack(rows, 'deaths'),
    xaxis: 'x3',
    yaxis: 'y3',
    mode: 'lines',
    line: {width: 2, color: '#af7bbd'},
    name: 'Deaths'
  }

  var data = [table,trace1,trace3]

  // define subplot axes
  var axis = {
    showline: true,
    zeroline: false,
    showgrid: false,
    mirror:true,
    ticklen: 4,
    gridcolor: '#000000',
    tickfont: {size: 10},
  }

  var axis1 = {domain: [0.60, 1], anchor: 'y1'}
  var axis2 = {domain: [0.35, 1], anchor: 'y2', showticklabels: false}
  var axis3 = {domain: [0.60, 1], anchor: 'y3'}
  var axis4 = {domain: [0.52, 1], anchor: 'x1', hoverformat: '.2f'}
  var axis5 = {domain: [0.34, 0.64], anchor: 'x2', hoverformat: '.2f'}
  var axis6 = {domain: [0.0, 0.42], anchor: 'x3', hoverformat: '.2f'}

  // define layout
  var layout = {
    autosize: false,
    width: 500,
    height: 600,
    title: "Total US COVID-19 Cases and Deaths",
    plot_bgcolor: 'rgba(255, 255, 255, 1)',
    showlegend: false,
    xaxis1: Object.assign(axis1,axis),
    xaxis2: Object.assign(axis2,axis),
    xaxis3: Object.assign(axis3,axis),
    yaxis1: Object.assign(axis4,axis),
    yaxis2: Object.assign(axis5,axis),
    yaxis3: Object.assign(axis6,axis)
  }

  Plotly.newPlot('us-nytimes-chart', data, layout, {displayModeBar: false});

});

//https://plotly.com/javascript/time-series/
//https://plotly.com/javascript/plotly-fundamentals/

//Covid Tracking Project, High Chart
    // Create a timer
    var start = +new Date();

    // Create the chart
    Highcharts.stockChart('us-covidtrack-newcases-chart', {
        chart: {
            events: {
                load: function () {
                    if (!window.TestController) {
                        this.setTitle(null, {
                            text: 'Built chart in ' + (new Date() - start) + 'ms'
                        });
                    }
                }
            },
            zoomType: 'x'
        },

        rangeSelector: {

            buttons: [{
                type: 'week',
                count: 1,
                text: '1 Week'
            }, {
                type: 'month',
                count: 1,
                text: '1 Month'
            }, {
                type: 'month',
                count: 6,
                text: '6 Month'
            }, {
                type: 'year',
                count: 1,
                text: '1 Year'
            }, {
                type: 'all',
                text: 'All'
            }],
            buttonTheme: {
                width: 60
            },
            selected: 1
        },

        yAxis: {
            title: {
                text: 'Values'
            }
        },

        title: {
            text: 'New COVID-19 Cases, 2020-2021'
        },

        subtitle: {
            text: 'Built chart in ...' // dummy text to reserve space for dynamic subtitle
        },
        xAxis: {
        type: 'datetime',
        title: {
            text: 'Date'
        },
    },
  
    plotOptions: {
        series: {
            pointStart: Date.UTC(2020, 0, 13),
            pointInterval: 24 * 3600 * 1000 // one day
        }
    },  
      
    credits: {
        enabled: false
    },        

        series: [{            
            name: 'New Cases',
            data: covidtrackNewCases,
            marker: {
               enabled: null, // auto
               radius: 3,
               lineWidth: 1,
               lineColor: '#FFFFFF'
            }
        }]
});

    // Create a timer
    const start2 = +new Date();

    // Create the chart
    Highcharts.stockChart('us-covidtrack-newdeaths-chart', {
        chart: {
            events: {
                load: function () {
                    if (!window.TestController) {
                        this.setTitle(null, {
                            text: 'Built chart in ' + (new Date() - start2) + 'ms'
                        });
                    }
                }
            },
            zoomType: 'x'
        },

        rangeSelector: {

            buttons: [{
                type: 'week',
                count: 1,
                text: '1 Week'
            }, {
                type: 'month',
                count: 1,
                text: '1 Month'
            }, {
                type: 'month',
                count: 6,
                text: '6 Month'
            }, {
                type: 'year',
                count: 1,
                text: '1 Year'
            }, {
                type: 'all',
                text: 'All'
            }],
            buttonTheme: {
                width: 60
            },
            selected: 1
        },

        yAxis: {
            title: {
                text: 'Values'
            }
        },

        title: {
            text: 'New COVID-19 Deaths, 2020-2021'
        },

        subtitle: {
            text: 'Built chart in ...' // dummy text to reserve space for dynamic subtitle
        },
        xAxis: {
        type: 'datetime',
        title: {
            text: 'Date'
        },
    },
  
    plotOptions: {
        series: {
            pointStart: Date.UTC(2020, 0, 13),
            pointInterval: 24 * 3600 * 1000 // one day
        }
    },  
      
    credits: {
        enabled: false
    },        

        series: [{
            name: 'New Deaths',
            data: covidtrackNewDeaths,
            marker: {
               enabled: null, // auto
               radius: 3,
               lineWidth: 1,
               lineColor: '#FFFFFF'
            }
        }]
});
/*
Highcharts.chart('us-covidtrack-totalcases-chart', {
    title: {
        text: 'Total COVID-19 Cases, 2020-2021'
    },

    subtitle: {
        text: 'Source: covidtrackingproject.com'
    },
    yAxis: {
        title: {
            text: 'Values'
        }
       },
    xAxis: {
        type: 'datetime',
        title: {
            text: 'Date'
        },
        
        //categories: [dateValue] categories: ['Jan 2019', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan 2020', '1/15/2021']
    },
  
    plotOptions: {
        series: {
            pointStart: Date.UTC(2020, 0, 13),
            pointInterval: 24 * 3600 * 1000 // one day
        }
    },  
    
    credits: {
        enabled: false
    },

    series: [{
        name: "Cases",
        data: posValue
    }]
});

Highcharts.chart('us-covidtrack-totaldeaths-chart', {
    title: {
        text: 'Total COVID-19 Deaths, 2020-2021'
    },

    subtitle: {
        text: 'Source: covidtrackingproject.com'
    },
    yAxis: {
        title: {
            text: 'Values'
        }
       },
    xAxis: {
        type: 'datetime',
        title: {
            text: 'Date'
        },
        
        //categories: [dateValue] categories: ['Jan 2019', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan 2020', '1/15/2021']
    },
  
    plotOptions: {
        series: {
            pointStart: Date.UTC(2020, 0, 13),
            pointInterval: 24 * 3600 * 1000 // one day
        }
    },  
    
    credits: {
        enabled: false
    },

    series: [{
        data: deathValue,
        name: "Deaths",
        lineWidth: 5
    }]
});*/

['mousemove', 'touchmove', 'touchstart'].forEach(function (eventType) {
    document.getElementById('us-covidtrack-totaldeaths-chart').addEventListener(
        eventType,
        function (e) {
            var chart,
                point,
                i,
                event;

            for (i = 0; i < Highcharts.charts.length; i = i + 1) {
                chart = Highcharts.charts[i];
                // Find coordinates within the chart
                event = chart.pointer.normalize(e);
                // Get the hovered point
                point = chart.series[0].searchPoint(event, true);

                if (point) {
                    point.highlight(e);
                }
            }
        }
    );
});

/**
 * Override the reset function, we don't need to hide the tooltips and
 * crosshairs.
 */
Highcharts.Pointer.prototype.reset = function () {
    return undefined;
};

/**
 * Highlight a point by showing tooltip, setting hover state and draw crosshair
 */
Highcharts.Point.prototype.highlight = function (event) {
    event = this.series.chart.pointer.normalize(event);
    this.onMouseOver(); // Show the hover marker
    this.series.chart.tooltip.refresh(this); // Show the tooltip
    this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
};

/**
 * Synchronize zooming through the setExtremes event handler.
 */
function syncExtremes(e) {
    var thisChart = this.chart;

    if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
        Highcharts.each(Highcharts.charts, function (chart) {
            if (chart !== thisChart) {
                if (chart.xAxis[0].setExtremes) { // It is null while updating
                    chart.xAxis[0].setExtremes(
                        e.min,
                        e.max,
                        undefined,
                        false,
                        { trigger: 'syncExtremes' }
                    );
                }
            }
        });
    }
}

// Get the data. The contents of the data file can be viewed at
Highcharts.ajax({
    url: 'https://raw.githubusercontent.com/BarbaricEric/COVID-19-Tracker/master/covidtrack_covid_19_data/totaldeathandcase.json',
    dataType: 'text',
    success: function (activity) {

        activity = JSON.parse(activity);
        activity.datasets.forEach(function (dataset, i) {

            /* Add X values
            dataset.data = Highcharts.map(dataset.data, function (val, j) {
                return [activity.xData[j], val];
            });*/

            var chartDiv = document.createElement('div');
            chartDiv.className = 'chart';
            document.getElementById('us-covidtrack-totaldeaths-chart').appendChild(chartDiv);

            Highcharts.chart(chartDiv, {
                chart: {
                    marginLeft: 40, // Keep all charts left aligned
                    spacingTop: 20,
                    spacingBottom: 20
                },
                title: {
                    text: dataset.name,
                    align: 'left',
                    margin: 0,
                    x: 30
                },
                credits: {
                    enabled: false
                },
                legend: {
                    enabled: false
                },
                    xAxis: {
        type: 'datetime',
        title: {
            text: 'Date'
        },
    },
  
    plotOptions: {
        series: {
            pointStart: Date.UTC(2020, 0, 13),
            pointInterval: 24 * 3600 * 1000 // one day
        }
    }, 
                yAxis: {
                    title: {
                        text: null
                    }
                },
                tooltip: {
                    positioner: function () {
                        return {
                            // right aligned
                            x: this.chart.chartWidth - this.label.width,
                            y: 10 // align to title
                        };
                    },
                    borderWidth: 0,
                    backgroundColor: 'none',
                    pointFormat: '{point.y}',
                    headerFormat: '',
                    shadow: false,
                    style: {
                        fontSize: '18px'
                    },
                    valueDecimals: dataset.valueDecimals
                },
                series: [{
                    data: dataset.data,
                    name: dataset.name,
                    type: dataset.type,
                    color: Highcharts.getOptions().colors[i],
                    fillOpacity: 0.3,
                    tooltip: {
                        valueSuffix: ' ' + dataset.unit
                    },
                     lineWidth: 2
                }]
            });
        });
    }
});


