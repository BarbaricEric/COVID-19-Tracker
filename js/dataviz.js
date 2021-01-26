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
const deathValue = [null, null, null, null, null, null, null,null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                  null, null, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 4, 5, 8, 11, 14, 16, 20, 26, 27, 31, 35,
                  37, 43, 51, 56, 64, 79, 100, 124, 152, 203, 273, 335, 480, 581, 817, 1058, 1371, 1781, 2332, 2837, 3422, 4330, 5336, 6511, 7798,
                  9276, 10618, 11932, 13970, 15973, 18024, 20107, 22182, 23882, 25515, 27867, 30412, 32606, 34724, 36619, 38382, 40198, 42677, 44762,
                  46571, 48545, 50174, 51393, 52683, 54761, 57437, 59597, 61406, 62933, 64181, 65209, 67699, 69617, 72365, 74149, 75605, 76640, 77531,
                  79040, 80770, 82623, 84161, 85398, 86271, 87125, 88442, 89839, 91219, 92509, 93549, 94237, 94793, 95458, 96793, 98028, 99202, 100125, 
                  100780, 101459, 102430, 103405, 104288, 105123, 105837, 106284, 106959, 107845, 108738, 109634, 110400, 111094, 111449, 111834, 112554,
                  113334, 114016, 114668, 115283, 115576, 115864, 116588, 117292, 117940, 118558, 119066, 119339, 119675, 120254, 120952, 121651, 122254, 
                  122550, 122759, 122996, 123901, 124720, 125583, 126422, 127177, 127649, 127978, 128719, 129582, 130523, 131462, 132338, 132865, 133241, 
                  134282, 135431, 136501, 137676, 138690, 139251, 140317, 141428, 142931, 144179, 145507, 146708, 147204, 147720, 148961, 150316, 151557, 
                  152880, 153966, 154587, 155017, 156337, 157854, 159017, 160243, 161470, 162087, 162498, 163677, 165088, 166217, 167336, 168371, 168948, 
                  169289, 170429, 171729, 172857, 173877, 174894, 175371, 175751, 176765, 177800, 178872, 179871, 180797, 181249, 181476, 181823, 182911, 
                  184072, 185087, 185904, 186296, 186703, 187737, 188927, 189807, 190708, 191455, 191782, 192063, 192922, 194078, 195016, 195863, 196736, 
                  197046, 197292, 198016, 199080, 199942, 200784, 201522, 201902, 202233, 202846, 203775, 204754, 205667, 206358, 206829, 207114, 207832, 
                  208633, 209561, 210452, 211232, 211637, 212080, 212913, 213941, 215058, 216007, 216903, 217294, 217691, 218613, 219660, 220720, 221667, 
                  222625, 223035, 223510, 225027, 226158, 227312, 228497, 229622, 230135, 230712, 232070, 233647, 234759, 236060, 237413, 238125, 238732, 
                  240285, 242170, 244180, 246090, 247641, 248564, 249417, 251508, 253789, 255181, 256585, 257828, 258653, 259690, 262179, 264990, 267812, 
                  270375, 272861, 274024, 275315, 277995, 281164, 284296, 287043, 289540, 291041, 292398, 295322, 298775, 302240, 305106, 307814, 309482, 
                  310962, 314099, 317492, 320450, 322003, 323429, 324826, 326316, 329605, 333505, 336802, 339394, 341800, 343255, 344802, 348286, 352188, 
                  356267, 360047, 363584, 365652, 367385, 371449, 375536, 379451, 383130, 386839, 388892, 390287, 392428, 396837, 400715, 404695, 408286,
                  410230, 411823]
const posValue = [null, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 9, 10, 12,
                13, 15, 18, 42, 72, 114, 240, 305, 437, 574, 744, 1020, 1408, 1828, 2511, 3354, 4379, 5668, 7383, 9471, 12828, 17442, 23544, 30476, 39699, 
                50891, 61773, 74404, 92020, 111274, 131045, 150709, 171911, 196848, 223119, 251182, 283072, 316130, 342040, 370283, 400759, 431718, 466834, 
                500442, 531705, 559820, 584101, 609975, 639896, 671423, 703407, 731357, 758880, 784847, 810886, 840062, 872015, 906241, 941975, 969289, 991696,
                1016930, 1043106, 1073152, 1105960, 1135156, 1160945, 1183140, 1205484, 1230740, 1257969, 1285166, 1310486, 1331602, 1349742, 1372184, 1393684,
                1420457, 1445947, 1469690, 1490126, 1510723, 1531410, 1552703, 1579534, 1603649, 1626210, 1645272, 1663827, 1680517, 1699689, 1722488, 1746106,
                1769702, 1791343, 1811444, 1831323, 1851505, 1871982, 1895032, 1917778, 1936834, 1953757, 1970673, 1991553, 2013544, 2036685, 2062138, 2083796,
                2102051, 2124889, 2149042, 2176084, 2206949, 2239185, 2268373, 2295202, 2328649, 2367766, 2407473, 2451813, 2494871, 2536616, 2576014, 2623024, 
                2674070, 2727581, 2781780, 2836661, 2881995, 2922920, 2973910, 3036723, 3095785, 3162896, 3225465, 3287070, 3344230, 3402839, 3472212, 3542701, 
                3619225, 3683975, 3748205, 3804868, 3867788, 3937210, 4008646, 4083707, 4148552, 4209320, 4263799, 4322256, 4386399, 4455360, 4523187, 4583866,
                4637167, 4679905, 4731103, 4783801, 4837849, 4898672, 4952201, 5002967, 5044337, 5099272, 5155458, 5207221, 5264322, 5320368, 5362871, 5400622, 
                5440692, 5485765, 5529609, 5576065, 5622119, 5660019, 5694562, 5731401, 5775732, 5819843, 5865958, 5909953, 5948719, 5980439, 6022681, 6053336, 
                6097979, 6149579, 6194439, 6227472, 6255589, 6277899, 6308632, 6346041, 6390739, 6432589, 6467168, 6500740, 6535518, 6575837, 6619479, 6666368, 
                6712036, 6747569, 6786731, 6835717, 6875215, 6918556, 6973793, 7021061, 7056051, 7091427, 7128193, 7173102, 7218822, 7268249, 7319123, 7357288, 
                7395040, 7433886, 7485102, 7540410, 7597403, 7655038, 7701710, 7744944, 7791923, 7849163, 7912804, 7981309, 8038984, 8086941, 8144591, 8205165, 
                8266875, 8340294, 8422869, 8506661, 8571132, 8634562, 8706817, 8786517, 8875882, 8973824, 9065118, 9207091, 9290545, 9380557, 9485661, 9604256, 
                9733182, 9864819, 9977078, 10095312, 10228435, 10377166, 10534222, 10708176, 10875359, 11022289, 11172000, 11331027, 11498600, 11685769, 11882263, 
                12065464, 12219300, 12373881, 12539132, 12726809, 12855872, 13054131, 13205195, 13342162, 13491678, 13670815, 13872561, 14087366, 14316250, 14534020, 
                14716371, 14897844, 15113797, 15328757, 15548042, 15783513, 16008800, 16195563, 16388425, 16579018, 16810868, 17051896, 17291633, 17494979, 17691942, 
                17870939, 18061071, 18282977, 18487274, 18613141, 18803256, 18956234, 19119572, 19315654, 19541562, 19764598, 19945086, 20224475, 20432231, 20610669, 
                20825755, 21073841, 21343166, 21635370, 21901769, 22129477, 22323617, 22538426, 22759983, 22982927, 23226923, 23443401, 23629671, 23779891, 23923938, 
                24110660, 24294693, 24483676, 24658381, 24802072, 24935139]  
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
Highcharts.chart('us-covidtrack-newdeaths-chart', {
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
        

        series: [{
            name: 'New Deaths',
            data: covidtrackNewDeaths,
            marker: {
               enabled: null, // auto
               radius: 3,
               lineWidth: 1,
               lineColor: '#FFFFFF'
            }
        }, {            
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
        

        series: [{
            name: 'New Deaths',
            data: covidtrackNewDeaths,
            marker: {
               enabled: null, // auto
               radius: 3,
               lineWidth: 1,
               lineColor: '#FFFFFF'
            }
        }, {            
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

Highcharts.chart('us-covidtrack-total-chart', {
    title: {
        text: 'Total COVID-19 Cases and Death 2020-2021'
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
    }, {
        data: deathValue,
        name: "Deaths",
        lineWidth: 5
    }]
});
