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
let deathValue = []
let posValue = []

//Covid Tracking HighChart Date Value
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
    for (let i = 0; i < data.length; i++) {
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
    for (let i = 0; i < data.length; i++) {
      posValue.push(data[i].positive);
    }
    console.log(posValue);   
   });

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
Highcharts.chart('us-covidtrack-chart', {
    data: {
        csvURL: 'https://raw.githubusercontent.com/BarbaricEric/COVID-19-Tracker/master/covidtrack_covid_19_data/us.csv',
    },
    chart: {
        type: 'Line'
    },
    title: {
        text: 'Total US COVID-19 Cases and Deaths'
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Units'
        }
    },
    credits: {
        enabled: false
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                this.point.y + ' ' + this.point.name.toLowerCase();
        }
    }
});

Highcharts.chart('us-covidtrack-average-chart', {
    title: {
        text: '7 Day COVID-19 Cases and Death'
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
        data: [parseInt(posValue[375]), parseInt(posValue[374]), parseInt(posValue[373]), parseInt(posValue[372]), parseInt(posValue[371]),
              parseInt(posValue[370]), parseInt(posValue[369]), parseInt(posValue[368]), parseInt(posValue[367]), parseInt(posValue[329])]/*[29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4,500.0,200.1]*/
    }, {
        data: [parseInt(deathValue[375]), parseInt(deathValue[374]), parseInt(deathValue[373]), parseInt(deathValue[372]), parseInt(deathValue[371]),
              parseInt(deathValue[370]), parseInt(deathValue[369]), parseInt(deathValue[368]), parseInt(deathValue[367]), parseInt(deathValue[329])],/*[216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,500.4,2000.1]*/,
        name: "Deaths",
        lineWidth: 5
    }]
});
