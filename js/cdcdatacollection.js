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
    .outerRadius(Math.min(width, height) / 2.5)
  
  const radius = Math.min(width, height) / 2 * 1.0
  
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

   // set the dimensions and margins of the first graph
var margin1 = {top: 10, right: 100, bottom: 30, left: 30},
    width1 = 660 - margin1.left - margin1.right,
    height1 = 600 - margin1.top - margin1.bottom;

  // append the svg object to the body of the page
var svg = d3.select("#pfizer2")
  .append("svg")
    .attr("width", width1 + margin1.left + margin1.right)
    .attr("height", height1 + margin1.top + margin1.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin1.left + "," + margin1.top + ")");

//Pfizer Deliever Chart data
d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_connectedscatter.csv", function(data) {

    // List of groups (here I have one group per column)
    const allGroup = ["valueA", "valueB", "valueC"]

    // add the options to the button
    d3.select("#selectButton")
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
      .range([ 0, width1 ]);
    svg.append("g")
      .attr("transform", "translate(0," + height1 + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear()
      .domain( [0,20])
      .range([ height1, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));
      
    //Add Title
    const title = svg
      .append("text")
      .attr("x", (width1 / 2))   
      .attr("y", margin1.top)
      //.attr("y", 0 - (margin.top / 2))
      .attr("text-anchor", "middle")  
      .style("font-size", "30px") 
      .text("Pfizer and BioNTech Deliever Trend");
      
    // Initialize line with group a
    const line = svg
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
    d3.select("#selectButton").on("change", function(d) {
        // recover the option that has been chosen
        const selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        update(selectedOption)
    })

})

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

//Moderna Delivery Chart data
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
    width = 650 - margin.left - margin.right,
    height = 650 - margin.top - margin.bottom;
  
  const arc = d3v6.arc()
    .innerRadius(0)
    .outerRadius(Math.min(width, height) / 2.5)
  
  const radius = Math.min(width, height) / 2 * 1.0
  
  const arcLabel = d3v6.arc().innerRadius(radius).outerRadius(radius)

  const pie = d3v6.pie()
    .sort(null)
    .value(d => d.value)
  
  const arcs = pie(data);
    
  const svg = d3v6.select("#moderna1")
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

//Pie Chart US Fully Vaccinated Count from CDC
  d3v6.csv("./cdc_vaccination/vaccine_ful.csv").then(function(data) {
   console.log(data); 
    
  const color = d3v6.scaleOrdinal()
    .domain(data.map(d => d.name))
    .range(d3v6.quantize(t => d3v6.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())
  
  const margin = {top: 10, right: 100, bottom: 30, left: 30},
    width = 650 - margin.left - margin.right,
    height = 650 - margin.top - margin.bottom;
  
  const arc = d3v6.arc()
    .innerRadius(0)
    .outerRadius(Math.min(width, height) / 2.5)
  
  const radius = Math.min(width, height) / 2 * 1.0
  
  const arcLabel = d3v6.arc().innerRadius(radius).outerRadius(radius)

  const pie = d3v6.pie()
    .sort(null)
    .value(d => d.value)
  
  const arcs = pie(data);

  const svg = d3v6.select("#jessen1")
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

//Jessen Delivery Chart Data
const margin3 = {top: 10, right: 100, bottom: 30, left: 30},
    width3 = 660 - margin3.left - margin3.right,
    height3 = 600 - margin3.top - margin3.bottom;

// append the svg object to the body of the page
const svg3 = d3.select("#jessen2")
  .append("svg")
    .attr("width", width3 + margin3.left + margin3.right)
    .attr("height", height3 + margin3.top + margin3.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin3.left + "," + margin3.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_connectedscatter.csv", function(data) {

    // List of groups (here I have one group per column)
    const allGroup = ["valueA", "valueB", "valueC"]

    // add the options to the button
    d3.select("#selectButton3")
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
      .range([ 0, width3 ]);
    svg3.append("g")
      .attr("transform", "translate(0," + height3 + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear()
      .domain( [0,20])
      .range([ height3, 0 ]);
    svg3.append("g")
      .call(d3.axisLeft(y));
      
    //Add Title
    const title = svg3
      .append("text")
      .attr("x", (width3 / 2))   
      .attr("y", margin3.top)
      //.attr("y", 0 - (margin.top / 2))
      .attr("text-anchor", "middle")  
      .style("font-size", "30px")  
      .text("Johnson & Johnson Delivery Chart");
      
    // Initialize line with group a
    const line = svg3
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
    d3.select("#selectButton3").on("change", function(d) {
        // recover the option that has been chosen
        const selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        update(selectedOption)
    })

})*/


function addCommas(x) {
    if (x == undefined || x == null) {
      return x = "Error";
    } else {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }   
}
