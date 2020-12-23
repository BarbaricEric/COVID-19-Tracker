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

const data1 = Object.assign(d3.csvParse(("./nytimes_covid_19_data/nytimes_us_total.csv"), d3.autoType), {y: "# of Cases"});

const height = 500px

const margin = ({top: 20px, right: 30px, bottom: 30px, left: 40px})

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
    .call(text => text
        .selectAll("tspan")
        .data(cases + "").split(/\n/)
          .join("tspan")
           .attr("x", 0)
           .attr("y", (d,i) => `${i * 1.1em}`
           .style("font-weight"), (_, i) => i ? null : "bold")
           .text(d => d));
    
 const {x, y, width: w, height: h} = text.node().getBBox();
    
 text.attr("transform", `translate(${-w / 2}, ${15 - y})`);
 path.attr("d", `M${-w / 2 - 10},5H-515,-515,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`);
}

bisect {
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
