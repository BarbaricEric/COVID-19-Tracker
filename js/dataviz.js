//covid-api.com api
let ustimeline = []
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

async function getUsCountFromCovidApi() {
 const fish = await fetch('https://covid-api.com/api/reports?date=2020-03-01&iso=USA').then(response => response.json())
  .then(data => {
   ustimeline.push(data)
   console.log(ustimeline)
  });
 
  await fetch('https://covid-api.com/api/reports?date=2020-03-02&iso=USA').then(response => response.json())
  .then(data => {
   console.log(data.length)
  });
}

getUsCountFromCovidApi();

