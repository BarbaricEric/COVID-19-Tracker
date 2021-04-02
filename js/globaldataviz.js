/* const svg = d3.select(DOM.svg(width, height))
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
        .call(callout, `${formatValue(value)}
${formatDate(date)}`);
  });

  svg.on("touchend mouseleave", () => tooltip.call(callout, null)); */

// set the dimensions and margins of the first graph
var margin = {top: 10, right: 100, bottom: 30, left: 30},
    width = 660 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#test")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_connectedscatter.csv", function(data) {

    // List of groups (here I have one group per column)
    var allGroup = ["valueA", "valueB", "valueC"]

    // add the options to the button
    d3.select("#selectButton")
      .selectAll('myOptions')
     	.data(allGroup)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button

    // A color scale: one color for each group
    var myColor = d3.scaleOrdinal()
      .domain(allGroup)
      .range(d3.schemeSet2);

    // Add X axis --> it is a date format
    var x = d3.scaleLinear()
      .domain([0,10])
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
      .domain( [0,20])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));
      
    //Add Title
    var title = svg
      .append("text")
      .attr("x", (width / 2))   
      .attr("y", margin.top)
      //.attr("y", 0 - (margin.top / 2))
      .attr("text-anchor", "middle")  
      .style("font-size", "30px") 
      .style("text-decoration", "underline")  
      .text("D3 Test");
      
      // create a tooltip
  var Tooltip = d3.select("#test")
    .append("div")
  //d3.tip()
  //.offset([-10, 0])	
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")

  // Three function that change the tooltip when user hover / move / leave 
  var mouseover = function(d) {
    Tooltip
      .style("opacity", 1)
      .style("stroke", "black")  
    /*d3.select(this)
      .style("stroke", "black")
      .style("opacity", 1)*/
  }
  var mousemove = function(d) {
    Tooltip
      .html("<strong>The exact value of this point is:</strong> <span style='color:red'>" + d.value + "</span>" + "<br>" + d.time)  
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 28) + "px");
      //.style("left", (d3.mouse(this)[0]+70) + "px")
      //.style("top", (d3.mouse(this)[1]) + "px")
  }
  var mouseleave = function(d) {
    Tooltip
      .style("opacity", 0)
      .style("stroke", "none")
    /*d3.select(this)
      .style("stroke", "none")
      .style("opacity", 0.8)*/
  }

    // Initialize line with group a
    var line = svg
      .append('g')
      .append("path")
        .datum(data)
        .attr("d", d3.line()
          //.x(function(d) { return x(+d.time) })
          //.y(function(d) { return y(+d.valueA) })
          .x(d => x(+d.time))
          .y(d => y(+d.valueA))
          .curve(d3.curveMonotoneX)    
        )
        .attr("stroke", function(d){ return myColor("valueA") })
        .style("stroke-width", 4)
        .style("fill", "none")
     .on("mouseover", function(d) {
       Tooltip.transition()
         .duration(200)
         .style("opacity", .9);
       Tooltip.html(d.date + "<br/>" + d.close)
         .style("left", (d3.event.pageX) + "px")
         .style("top", (d3.event.pageY - 28) + "px");
       })
     .on("mouseout", function(d) {
       Tooltip.transition()
         .duration(500)
         .style("opacity", 0);
       });    

    // A function that update the chart
    function update(selectedGroup) {

      // Create new data with the selection
      var dataFilter = 
          //data.map(function(d){return {time: d.time, value:d[selectedGroup]} })
          data.map(d => ({time: d.time, value: d[selectedGroup]}))

      // Give these new data to update line
      line
          .datum(dataFilter)
          .transition()
          .duration(1000)
          .attr("d", d3.line()    
            //.x(function(d) { return x(+d.time) })
            //.y(function(d) { return y(+d.value) })
            .x(d => x(+d.time))
            .y(d => y(+d.value))
            .curve(d3.curveMonotoneX)
          )
          .attr("stroke", function(d){ return myColor(selectedGroup) })
          .call(mouseover)
          .call(mousemove)
          .call(mouseleave)
    }

    // When the button is changed, run the updateChart function
    d3.select("#selectButton").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        update(selectedOption)
    })

})

// set the dimensions and margins of the second graph
var margin2 = {top: 10, right: 100, bottom: 30, left: 30},
    width2 = 660 - margin2.left - margin2.right,
    height2 = 600 - margin2.top - margin2.bottom;

// append the svg object to the body of the page
var svg2 = d3.select("#test2")
  .append("svg")
    .attr("width", width2 + margin2.left + margin2.right)
    .attr("height", height2 + margin2.top + margin2.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin2.left + "," + margin2.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_connectedscatter.csv", function(data) {

    // List of groups (here I have one group per column)
    const allGroup = ["valueA", "valueB", "valueC"]

    // add the options to the button
    d3.select("#selectButton2")
      .selectAll('myOptions')
     	.data(allGroup)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button

    // A color scale: one color for each group
    const myColor = d3.scaleOrdinal()
      .domain(allGroup)
      .range(d3.schemeSet2);

    // Add X axis --> it is a date format
    const x = d3.scaleLinear()
      .domain([0,10])
      .range([ 0, width2 ]);
    svg2.append("g")
      .attr("transform", "translate(0," + height2 + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear()
      .domain( [0,20])
      .range([ height2, 0 ]);
    svg2.append("g")
      .call(d3.axisLeft(y));
      
    //Add Title
    const title = svg2
      .append("text")
      .attr("x", (width2 / 2))   
      .attr("y", margin2.top)
      //.attr("y", 0 - (margin.top / 2))
      .attr("text-anchor", "middle")  
      .style("font-size", "30px") 
      .style("text-decoration", "underline")  
      .text("D3 Test2");
      
    // Initialize line with group a
    const line = svg2
      .append('g')
      .append("path")
        .datum(data)
        .attr("d", d3.line()
          //.x(function(d) { return x(+d.time) })
          //.y(function(d) { return y(+d.valueA) })
          .x(d => x(+d.time))
          .y(d => y(+d.valueA))
          .curve(d3.curveMonotoneX)    
        )
        .attr("stroke", function(d){ return myColor("valueA") })
        .style("stroke-width", 4)
        .style("fill", "none")

    // A function that update the chart
    function update(selectedGroup) {

      // Create new data with the selection
      const dataFilter = 
          //data.map(function(d){return {time: d.time, value:d[selectedGroup]} })
          data.map(d => ({time: d.time, value: d[selectedGroup]}))

      // Give these new data to update line
      line
          .datum(dataFilter)
          .transition()
          .duration(1000)
          .attr("d", d3.line()    
            //.x(function(d) { return x(+d.time) })
            //.y(function(d) { return y(+d.value) })
            .x(d => x(+d.time))
            .y(d => y(+d.value))
            .curve(d3.curveMonotoneX)
          )
          .attr("stroke", function(d){ return myColor(selectedGroup) })
    }

    // When the button is changed, run the updateChart function
    d3.select("#selectButton2").on("change", function(d) {
        // recover the option that has been chosen
        const selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        update(selectedOption)
    })

})

// set the dimensions and margins of the third graph
var margin3 = {top: 20, right: 20, bottom: 30, left: 50},
    width3 = 660 - margin3.left - margin3.right,
    height3 = 500 - margin3.top - margin3.bottom;

// parse the date / time
var parseTime = d3v6.timeParse("%d-%b-%y");
var formatTime = d3v6.timeFormat("%B %e, %Y");

// set the ranges
var x3 = d3v6.scaleTime().range([0, width3]);
var y3 = d3v6.scaleLinear().range([height3, 0]);

// define the line
var valueline = d3v6.line()
    .x(function(d) { return x3(d.date); })
    .y(function(d) { return y3(d.close); });
 
var div3 = d3v6.select("#test3").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

const titleDiv = d3v6.select("#test3").append("div")

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg3 = d3v6.select("#test3").append("svg")
    .attr("width", width3 + margin3.left + margin3.right)
    .attr("height", height3 + margin3.top + margin3.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin3.left + "," + margin3.top + ")");

// Get the data
d3v6.csv("https://raw.githubusercontent.com/BarbaricEric/COVID-19-Tracker/master/jhcsse_covid_19_data/data.csv").then(function(data) {

const allGroup = ["valueA", "valueB", "valueC"]

    // add the options to the button
    d3v6.select("#selectButton3")
      .selectAll('myOptions')
     	.data(allGroup)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button
	
  // format the data
  data.forEach(function(d) {
      d.date = parseTime(d.date);
      d.close = +d.close;
  });

  // scale the range of the data
  x3.domain(d3v6.extent(data, function(d) { return d.date; }));
  y3.domain([0, d3v6.max(data, function(d) { return d.close; })]);
      
  //Add Title
    const title = titleDiv
      .append("text")
      .attr("x", (width3 / 2))   
      .attr("y", margin3.top)
      .attr("text-anchor", "middle")  
      .style("font-size", "30px") 
      .style("text-decoration", "underline")  
      .text("D3 Test3");    

  // add the valueline path.
  svg3.append("path")
     .data([data])
     .attr("class", "line")
     .attr("d", valueline)
     .attr("stroke", "steelblue")
     .style("stroke-width", 4)
     .style("fill", "none");

  // add the dots with tooltips
  svg3.selectAll("dot")
     .data(data)
   .enter().append("circle")
     .attr("r", 5)
     .attr("cx", function(d) { return x3(d.date); })
     .attr("cy", function(d) { return y3(d.close); })
     .on("mouseover", function(event,d) {
       div3.transition()
         .duration(200)
         .style("opacity", .9);
       div3.html(formatTime(d.date) + "<br/>" + d.close)
         .style("left", (d3v6.event.pageX) + "px")
         .style("top", (d3v6.event.pageY - 58) + "px");
       })
     .on("mouseout", function(d) {
       div3.transition()
         .duration(500)
         .style("opacity", 0);
       });

  // add the X Axis
  svg3.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height3 + ")")
      .call(d3v6.axisBottom(x3));
      

  // add the Y Axis
  svg3.append("g")
      .attr("class", "y axis")
      .call(d3v6.axisLeft(y3));

});

//Update Data
    d3v6.select("#selectButton3").on("change", function(d) {
        // recover the option that has been chosen
        const selectedOption = d3.select(this).property("value")
      // Get the data again
    d3v6.csv("https://raw.githubusercontent.com/BarbaricEric/COVID-19-Tracker/master/jhcsse_covid_19_data/data-alt.csv").then(function(data) {
       	data.forEach(function(d) {
	    	d.date = parseTime(d.date);
	    	d.close = +d.close;
	    });

    	// Scale the range of the data again 
    	x3.domain(d3v6.extent(data, function(d) { return d.date; }));
	y3.domain([0, d3v6.max(data, function(d) { return d.close; })]);

    // Select the section we want to apply our changes to
    svg3.transition();

    // Make the changes
        svg3.select(".line")   // change the line
            .attr("d", valueline(data))
	    .transition().duration(750)
	svg3.selectAll("dot")
     	    .data(data)
   	    .enter().append("circle")
     	    .attr("r", 5)
     .attr("cx", function(d) { return x3(d.date); })
     .attr("cy", function(d) { return y3(d.close); })
     .on("mouseover", function(event,d) {
       div3.transition()
         .duration(200)
         .style("opacity", .9);
       div3.html(formatTime(d.date) + "<br/>" + d.close)
         .style("left", (d3v6.event.pageX) + "px")
         .style("top", (d3v6.event.pageY - 88) + "px");
       })
     .on("mouseout", function(d) {
       div3.transition()
         .duration(500)
         .style("opacity", 0);
       });  
        svg3.select(".x.axis") // change the x axis
            .transition().duration(750)
            .call(d3v6.axisBottom(x3));
        svg3.select(".y.axis") // change the y axis
            .transition().duration(750)
            .call(d3v6.axisLeft(y3));
})
})	


/*
// set the dimensions and margins of the example graph
var margin2 = {top: 10, right: 100, bottom: 30, left: 30},
    width2 = 660 - margin2.left - margin2.right,
    height2 = 600 - margin2.top - margin2.bottom;

// append the svg object to the body of the page
var svg2 = d3.select("#test2")
  .append("svg")
    .attr("width", width2 + margin2.left + margin2.right)
    .attr("height", height2 + margin2.top + margin2.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin2.left + "," + margin2.top + ")");

//Read the data
d3.csvParse("https://raw.githubusercontent.com/BarbaricEric/COVID-19-Tracker/master/jhcsse_covid_19_data/alphabet.csv", 
       ({letter, frequency}) => ({name: letter, value: +frequency}), function(data) {

    // Add X axis 
    const x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin2.left, width2 - margin2.right])
    .padding(0.1)

    // Add Y axis
    const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height2 - margin2.bottom, margin2.top])
    
    const xAxis = g => g
    .attr("transform", `translate(0,${height2 - margin2.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))
    
    const yAxis = g => g
    .attr("transform", `translate(${margin2.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
      
    //Add Title
    var title = svg2
      .append("text")
      .attr("x", (width2 / 2))   
      .attr("y", margin2.top)
      //.attr("y", 0 - (margin.top / 2))
      .attr("text-anchor", "middle")  
      .style("font-size", "30px") 
      .style("text-decoration", "underline")  
      .text("D3 Test2");
      
      const gx = svg2.append("g")
      .call(xAxis);
  
      const gy = svg2.append("g")
      .call(yAxis);

    // Initialize Second Graph
      const bar = svg2.append("g")
            .attr("fill", "steelblue")
      .selectAll("rect")
      .data(data)
      .join("rect")
            .style("mix-blend-mode", "multiply")
            .attr("x", d => x(d.name))
            .attr("y", d => y(d.value))
            .attr("height", d => y(0) - y(d.value))
            .attr("width", x.bandwidth());
      
    function update(order) {
      x.domain(data.sort(order).map(d => d.name));

      const t = svg2.transition()
          .duration(750);

      bar.data(data, d => d.name)
          .order()
        .transition(t)
          .delay((d, i) => i * 20)
          .attr("x", d => x(d.name));

      gx.transition(t)
          .call(xAxis)
        .selectAll(".tick")
          .delay((d, i) => i * 20);
    }

})

/*
// Chart
var options = {
  chart: {
    type: 'spline',
    events: {
    	load: getData
    }
  },
  title: {
    text: 'Live Bitcoin Price'
  },
  xAxis: {
    type: 'datetime',
  },
  yAxis: {
    title: {
      text: 'Price (USD)'
    }
  },
  legend: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: 'Live Bitcoint Price [USD]',
    data: []
  }]
};
var chart = Highcharts.chart('container', options)

// Data
function getData() {
  setInterval(function() {
    fetch('https://api.cryptonator.com/api/ticker/btc-usd').then(function(response) {
      return response.json()
    }).then(function(data) {
      chart.series[0].addPoint({ x: data.timestamp * 1000, y: Number(data.ticker.price) })
    })
  }, 3000)
}

*/
