(async function() {
  let urlList = [
    "https://data.cdc.gov/resource/saz5-9hgg.json",
    "https://data.cdc.gov/resource/b7pe-5nws.json",
    "https://data.cdc.gov/resource/w9zu-fywh.json"
  ];

  const promiseList = urlList.map((url) => {
    return fetch(url)
        .then(response => response.json())
  })

  const jsonBaseList = await Promise.all(promiseList)
  console.log('All done.');
  console.log('jsonBaseList: ', jsonBaseList)
})()

//US Administration Count from CDC
  d3v6.csv("./cdc_vaccination/vaccine_administration.csv").then(function(data) {
   console.log(data);
   const adminNum = document.querySelector(".administer-num")
   const event = new Date(data[0].date)
   adminNum.style.cssText = "color: red; font-size:46px";
   adminNum.textContent = addCommas(parseInt(data[0].PfizerBioNTech) + parseInt(data[0].Moderna) + parseInt(data[0].Janssen) + parseInt(data[0].NotIdentified)) + ' as of ' + (event.toLocaleString('en-US').substring(0,9))
  });

//US Delivered Count from CDC
  d3v6.csv("./cdc_vaccination/vaccine_delivered.csv").then(function(data) {
   console.log(data); 
   const distNum = document.querySelector(".distribute-num")
   const event = new Date(data[0].date)
   distNum.style.cssText = "color: red; font-size:46px";
   distNum.textContent = addCommas(parseInt(data[0].PfizerBioNTech) + parseInt(data[0].Moderna) + parseInt(data[0].Janssen)) + ' as of ' + (event.toLocaleString('en-US').substring(0,9))
  });

//US Fully Vaccinated Count from CDC
  d3v6.csv("./cdc_vaccination/vaccined_fully.csv").then(function(data) { 
   const vacNum = document.querySelector(".vac-num")
   const event = new Date(data[0].date)
   vacNum.style.cssText = "color: red; font-size:46px";
   vacNum.textContent = addCommas(parseInt(data[0].PfizerBioNTech) + parseInt(data[0].Moderna) + parseInt(data[0].Janssen) + parseInt(data[0].NotIdentified)) + ' as of ' + (event.toLocaleString('en-US').substring(0,9))
  });

//Pie Chart US Delivered Count from CDC
  d3v6.csv("./cdc_vaccination/vaccine_del.csv").then(function(data) {
   console.log(data); 
    
  const color = d3v6.scaleOrdinal()
    .domain(data.map(d => d.name))
    .range(d3v6.quantize(t => d3v6.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())
  
  const margin = {top: 10, right: 100, bottom: 30, left: 30},
    width = 650 - margin.left - margin.right,
    height = 650 - margin.top - margin.bottom;
  
  const arc = d3v6.arc()
    .innerRadius(0)
    .outerRadius(Math.min(width, height) / 3)
  
  const radius = Math.min(width, height) / 2 * 0.8
  
  const arcLabel = d3v6.arc().innerRadius(radius).outerRadius(radius)

  const pie = d3v6.pie()
    .sort(null)
    .value(d => d.value)
  
  const arcs = pie(data);

  const svg = d3v6.select("#pfizer1")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + (margin.left + 300) + "," + (margin.top + 350) + ")");

  svg.append("g")
      .attr("stroke", "white")
    .selectAll("path")
    .data(arcs)
    .join("path")
      .attr("fill", d => color(d.data.name))
      .attr("d", arc)
    .append("title")
      .text(d => `${d.data.name}: ${addCommas(d.data.value.toLocaleString())}`);

  svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
    .selectAll("text")
    .data(arcs)
    .join("text")
      .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
      .call(text => text.append("tspan")
          .attr("y", "-0.4em")
          .attr("font-weight", "bold")
          .text(d => d.data.name))
      .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
          .attr("x", 0)
          .attr("y", "0.7em")
          .attr("fill-opacity", 0.7)
          .text(d => addCommas(d.data.value.toLocaleString())));
  });


//Pfizer Deliever Chart data
d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_connectedscatter.csv", function(data) {

   // set the dimensions and margins of the first graph
var margin = {top: 10, right: 100, bottom: 30, left: 30},
    width = 660 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  // append the svg object to the body of the page
var svg = d3.select("#pfizer2")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
  
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
      .text("Pfizer and BioNTech Deliever Trend");
      
      // create a tooltip
  /*var Tooltip = d3.select("#pfizer2")
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
      .style("opacity", 1)*/ /*
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
      .style("opacity", 0.8)
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

})*/

//Moderna Administration Chart data
d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_connectedscatter.csv", function(data) {

  // set the dimensions and margins of the second graph
var margin2 = {top: 10, right: 100, bottom: 30, left: 30},
    width2 = 660 - margin2.left - margin2.right,
    height2 = 600 - margin2.top - margin2.bottom;

// append the svg object to the body of the page
var svg2 = d3.select("#moderna2")
  .append("svg")
    .attr("width", width2 + margin2.left + margin2.right)
    .attr("height", height2 + margin2.top + margin2.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin2.left + "," + margin2.top + ")");
  
  
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
      .text("Moderna Delievery Trend");
      
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


//Pie Chart US Administereded Count from CDC
  d3v6.csv("./cdc_vaccination/vaccine_admin.csv").then(function(data) {
   console.log(data); 
    
  const color = d3v6.scaleOrdinal()
    .domain(data.map(d => d.name))
    .range(d3v6.quantize(t => d3v6.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())
  
  const margin = {top: 10, right: 100, bottom: 30, left: 30},
    width = 500,
    height = 500;
  
  const arc = d3v6.arc()
    .innerRadius(0)
    .outerRadius(Math.min(width, height) / 3)
  
  const radius = Math.min(width, height) / 2 * 0.8
  
  const arcLabel = d3v6.arc().innerRadius(radius).outerRadius(radius)

  const pie = d3v6.pie()
    .sort(null)
    .value(d => d.value)
  
  const arcs = pie(data);

  const svg = d3v6.select("#moderna1")
  .append("svg")
    .attr("width", width)
    .attr("height", height)

  svg.append("g")
      .attr("stroke", "white")
    .selectAll("path")
    .data(arcs)
    .join("path")
      .attr("fill", d => color(d.data.name))
      .attr("d", arc)
    .append("title")
      .text(d => `${d.data.name}: ${addCommas(d.data.value.toLocaleString())}`);

  svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
    .selectAll("text")
    .data(arcs)
    .join("text")
      .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
      .call(text => text.append("tspan")
          .attr("y", "-0.4em")
          .attr("font-weight", "bold")
          .text(d => d.data.name))
      .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
          .attr("x", 0)
          .attr("y", "0.7em")
          .attr("fill-opacity", 0.7)
          .text(d => addCommas(d.data.value.toLocaleString())));
  });

//Pie Chart US Fully Vaccinated Count from CDC
  d3v6.csv("./cdc_vaccination/vaccine_ful.csv").then(function(data) {
   console.log(data); 
    
  const color = d3v6.scaleOrdinal()
    .domain(data.map(d => d.name))
    .range(d3v6.quantize(t => d3v6.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())
  
  const margin = {top: 10, right: 100, bottom: 30, left: 30},
    width = 550,
    height = 550;
  
  const arc = d3v6.arc()
    .innerRadius(0)
    .outerRadius(Math.min(width, height) / 3)
  
  const radius = Math.min(width, height) / 2 * 0.8
  
  const arcLabel = d3v6.arc().innerRadius(radius).outerRadius(radius)

  const pie = d3v6.pie()
    .sort(null)
    .value(d => d.value)
  
  const arcs = pie(data);

  const svg = d3v6.select("#jessen1")
  .append("svg")
    .attr("width", width)
    .attr("height", height)

  svg.append("g")
      .attr("stroke", "white")
    .selectAll("path")
    .data(arcs)
    .join("path")
      .attr("fill", d => color(d.data.name))
      .attr("d", arc)
    .append("title")
      .text(d => `${d.data.name}: ${addCommas(d.data.value.toLocaleString())}`);

  svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
    .selectAll("text")
    .data(arcs)
    .join("text")
      .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
      .call(text => text.append("tspan")
          .attr("y", "-0.4em")
          .attr("font-weight", "bold")
          .text(d => d.data.name))
      .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
          .attr("x", 0)
          .attr("y", "0.7em")
          .attr("fill-opacity", 0.7)
          .text(d => addCommas(d.data.value.toLocaleString())));
  });

function addCommas(x) {
    if (x == undefined || x == null) {
      return x = "Error";
    } else {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }   
}
