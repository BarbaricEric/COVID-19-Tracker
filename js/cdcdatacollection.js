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
    width = 660 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;
  
  const arc = d3v6.arc()
    .innerRadius(0)
    .outerRadius(Math.min(width, height) / 2 - 1)
  
  const radius = Math.min(width, height) / (2 * 0.8) 
  
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
          "translate(" + margin.left + "," + margin.top + ")");

  svg.append("g")
      .attr("stroke", "white")
    .selectAll("path")
    .data(arcs)
    .join("path")
      .attr("fill", d => color(d.data.name))
      .attr("d", arc)
    .append("title")
      .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

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
          .text(d => d.data.value.toLocaleString()));
  });

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
    .outerRadius(Math.min(width, height) / 2 - 1)
  
  const radius = Math.min(width, height) / (2 * 0.8) 
  
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
    .outerRadius(Math.min(width, height) / 2 - 1)
  
  const radius = Math.min(width, height) // (2 * 0.8) 
  
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
