//DOM Elements
const usCaseDeathJh = document.querySelector(".us-testing-two");
const usCaseConfirmJh = document.querySelector(".us-testing");

//Define API
const globalapi1 = 'https://corona-api.com/countries';
const globalapi2 = 'https://api.covid19api.com/summary';

//Global Count from covid19api      
   fetch(globalapi2)
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   //usCaseDeathJh.textContent = data.Global.TotalDeaths + ' as of ' + data.Date.toString().substring(0, 10);
   //usCaseConfirmJh.textContent = data.Global.TotalConfirmed + ' as of ' + data.Date.toString().substring(0, 10);
   });
   
//Global Count from corona-api      
   fetch(globalapi1)
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//Global Count from covid19-api.org      
   fetch('https://covid19-api.org/api/timeline')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric', 
      dayPeriod: 'short',
      timeZone: 'America/Los_Angeles'
   };
   const date = new Date();
   const datea = new Intl.DateTimeFormat('default', options).format(date);    
   usCaseConfirmJh.textContent = data[0].total_cases + ' as of ' + datea;
   usCaseDeathJh.textContent = data[0].total_deaths + ' as of ' + datea;   
   /*
   const birthday = new Date();
   const date1 = birthday.getDate();
   const date2 = birthday.getFullYear();
   const date3 = birthday.getMonth() + 1;
   const date4 = date3 + "/" + date1 + "/" + date2;
   usCaseConfirmJh.textContent = data[0].total_cases + ' as of ' + data[0].last_update.toString().substring(6,7) + '/' + data[0].last_update.toString().substring(8,10) + '/' + data[0].last_update.toString().substring(0,4); 
   usCaseDeathJh.textContent = data[0].total_deaths + ' as of ' + data[0].last_update.toString().substring(6,7) + '/' + data[0].last_update.toString().substring(8,10) + '/' + data[0].last_update.toString().substring(0,4);*/   
   });

//Country Counts from covid19-api.org      
   fetch('https://covid19-api.org/api/status')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

async function getCountryCountFromCovidApi() {
 await fetch('https://covid19-api.org/api/status/us').then(response => response.json())
  .then(data => {
   const usCaseConfirm = document.querySelector('.usCaseConfirm');
   const usCaseDeath = document.querySelector('.usCaseDeath');
   const usDate = document.querySelector('.usDate');
   usCaseConfirm.textContent = data.cases;
   usCaseDeath.textContent = data.deaths;
   usDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
 
  await fetch('https://covid19-api.org/api/status/in').then(response => response.json())
  .then(data => {
   const inCaseConfirm = document.querySelector('.inCaseConfirm');
   const inCaseDeath = document.querySelector('.inCaseDeath');
   const inDate = document.querySelector(".inDate");
   inCaseConfirm.textContent = data.cases;
   inCaseDeath.textContent = data.deaths;
   inDate.textContent = new Date(data.last_update).toString().substring(0,15);
  });
   
 await fetch('https://covid19-api.org/api/status/af').then(response => response.json())
  .then(data => {
   const afCaseConfirm = document.querySelector('.afCaseConfirm');
   const afCaseDeath = document.querySelector('.afCaseDeath');
   const afDate = document.querySelector('.afDate');
   afCaseConfirm.textContent = data.cases;
   afCaseDeath.textContent = data.deaths;
   afDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
 await fetch('https://covid19-api.org/api/status/al').then(response => response.json())
  .then(data => {
   const alCaseConfirm = document.querySelector('.alCaseConfirm');
   const alCaseDeath = document.querySelector('.alCaseDeath');
   const alDate = document.querySelector('.alDate');
   alCaseConfirm.textContent = data.cases;
   alCaseDeath.textContent = data.deaths;
   alDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/dz').then(response => response.json())
  .then(data => {
   const dzCaseConfirm = document.querySelector('.dzCaseConfirm');
   const dzCaseDeath = document.querySelector('.dzCaseDeath');
   const dzDate = document.querySelector('.dzDate');
   dzCaseConfirm.textContent = data.cases;
   dzCaseDeath.textContent = data.deaths;
   dzDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/ad').then(response => response.json())
  .then(data => {
   const adCaseConfirm = document.querySelector('.adCaseConfirm');
   const adCaseDeath = document.querySelector('.adCaseDeath');
   const adDate = document.querySelector('.adDate');
   adCaseConfirm.textContent = data.cases;
   adCaseDeath.textContent = data.deaths;
   adDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/ao').then(response => response.json())
  .then(data => {
   const aoCaseConfirm = document.querySelector('.aoCaseConfirm');
   const aoCaseDeath = document.querySelector('.aoCaseDeath');
   const aoDate = document.querySelector('.aoDate');
   aoCaseConfirm.textContent = data.cases;
   aoCaseDeath.textContent = data.deaths;
   aoDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/ag').then(response => response.json())
  .then(data => {
   const agCaseConfirm = document.querySelector('.agCaseConfirm');
   const agCaseDeath = document.querySelector('.agCaseDeath');
   const agDate = document.querySelector('.agDate');
   agCaseConfirm.textContent = data.cases;
   agCaseDeath.textContent = data.deaths;
   agDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/al').then(response => response.json())
  .then(data => {
   const alCaseConfirm = document.querySelector('.alCaseConfirm');
   const alCaseDeath = document.querySelector('.alCaseDeath');
   const alDate = document.querySelector('.alDate');
   alCaseConfirm.textContent = data.cases;
   alCaseDeath.textContent = data.deaths;
   alDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/ar').then(response => response.json())
  .then(data => {
   const arCaseConfirm = document.querySelector('.arCaseConfirm');
   const arCaseDeath = document.querySelector('.arCaseDeath');
   const arDate = document.querySelector('.arDate');
   arCaseConfirm.textContent = data.cases;
   arCaseDeath.textContent = data.deaths;
   arDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/am').then(response => response.json())
  .then(data => {
   const amCaseConfirm = document.querySelector('.amCaseConfirm');
   const amCaseDeath = document.querySelector('.amCaseDeath');
   const amDate = document.querySelector('.amDate');
   amCaseConfirm.textContent = data.cases;
   amCaseDeath.textContent = data.deaths;
   amDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/aw').then(response => response.json())
  .then(data => {
   const awCaseConfirm = document.querySelector('.awCaseConfirm');
   const awCaseDeath = document.querySelector('.awCaseDeath');
   const awDate = document.querySelector('.awDate');
   awCaseConfirm.textContent = data.cases;
   awCaseDeath.textContent = data.deaths;
   awDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/au').then(response => response.json())
  .then(data => {
   const auCaseConfirm = document.querySelector('.aCuaseConfirm');
   const auCaseDeath = document.querySelector('.auCaseDeath');
   const auDate = document.querySelector('.auDate');
   auCaseConfirm.textContent = data.cases;
   auCaseDeath.textContent = data.deaths;
   auDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/at').then(response => response.json())
  .then(data => {
   const atCaseConfirm = document.querySelector('.atCaseConfirm');
   const atCaseDeath = document.querySelector('.atCaseDeath');
   const atDate = document.querySelector('.atDate');
   atCaseConfirm.textContent = data.cases;
   atCaseDeath.textContent = data.deaths;
   atDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/az').then(response => response.json())
  .then(data => {
   const azCaseConfirm = document.querySelector('.azCaseConfirm');
   const azCaseDeath = document.querySelector('.azCaseDeath');
   const azDate = document.querySelector('.azDate');
   azCaseConfirm.textContent = data.cases;
   azCaseDeath.textContent = data.deaths;
   azDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/bs').then(response => response.json())
  .then(data => {
   const bsCaseConfirm = document.querySelector('.bsCaseConfirm');
   const bsCaseDeath = document.querySelector('.bsCaseDeath');
   const bsDate = document.querySelector('.bsDate');
   bsCaseConfirm.textContent = data.cases;
   bsCaseDeath.textContent = data.deaths;
   bsDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/bh').then(response => response.json())
  .then(data => {
   const bhCaseConfirm = document.querySelector('.bhCaseConfirm');
   const bhCaseDeath = document.querySelector('.bhCaseDeath');
   const bhDate = document.querySelector('.bhDate');
   bhCaseConfirm.textContent = data.cases;
   bhCaseDeath.textContent = data.deaths;
   bhDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/bd').then(response => response.json())
  .then(data => {
   const bdCaseConfirm = document.querySelector('.bdCaseConfirm');
   const bdCaseDeath = document.querySelector('.bdCaseDeath');
   const bdDate = document.querySelector('.bdDate');
   bdCaseConfirm.textContent = data.cases;
   bdCaseDeath.textContent = data.deaths;
   bdDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/bb').then(response => response.json())
  .then(data => {
   const bbCaseConfirm = document.querySelector('.bbCaseConfirm');
   const bbCaseDeath = document.querySelector('.bbCaseDeath');
   const bbDate = document.querySelector('.bbDate');
   bbCaseConfirm.textContent = data.cases;
   bbCaseDeath.textContent = data.deaths;
   bbDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/by').then(response => response.json())
  .then(data => {
   const byCaseConfirm = document.querySelector('.byCaseConfirm');
   const byCaseDeath = document.querySelector('.byCaseDeath');
   const byDate = document.querySelector('.byDate');
   byCaseConfirm.textContent = data.cases;
   byCaseDeath.textContent = data.deaths;
   byDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/be').then(response => response.json())
  .then(data => {
   const beCaseConfirm = document.querySelector('.beCaseConfirm');
   const beCaseDeath = document.querySelector('.beCaseDeath');
   const beDate = document.querySelector('.beDate');
   beCaseConfirm.textContent = data.cases;
   beCaseDeath.textContent = data.deaths;
   beDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/bz').then(response => response.json())
  .then(data => {
   const bzCaseConfirm = document.querySelector('.bzCaseConfirm');
   const bzCaseDeath = document.querySelector('.bzCaseDeath');
   const bzDate = document.querySelector('.bzDate');
   bzCaseConfirm.textContent = data.cases;
   bzCaseDeath.textContent = data.deaths;
   bzDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/bj').then(response => response.json())
  .then(data => {
   const bjCaseConfirm = document.querySelector('.bjCaseConfirm');
   const bjCaseDeath = document.querySelector('.bjCaseDeath');
   const bjDate = document.querySelector('.bjDate');
   bjCaseConfirm.textContent = data.cases;
   bjCaseDeath.textContent = data.deaths;
   bjDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/bt').then(response => response.json())
  .then(data => {
   const btCaseConfirm = document.querySelector('.btCaseConfirm');
   const btCaseDeath = document.querySelector('.btCaseDeath');
   const btDate = document.querySelector('.btDate');
   btCaseConfirm.textContent = data.cases;
   btCaseDeath.textContent = data.deaths;
   btDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
}

getCountryCountFromCovidApi();
   /* 
   const inCaseConfirm
   const inCaseDeath
   const brCaseConfirm
   const brCaseDeath
   const ruCaseConfirm
   const ruCaseDeath
   const gbCaseConfirm
   const gbCaseDeath
   const frCaseConfirm
   const frCaseDeath
   const trCaseConfirm
   const trCaseDeath
   const itCaseConfirm
   const itCaseDeath
   const esCaseConfirm
   const esCaseDeath
   const deCaseConfirm
   const deCaseDeath
   const coCaseConfirm
   const coCaseDeath
   const arCaseConfirm
   const arCaseDeath
   const mxCaseConfirm
   const mxCaseDeath
   const plCaseConfirm
   const plCaseDeath
   const irCaseConfirm
   const irCaseDeath
   const uaCaseConfirm
   const uaCaseDeath
   const zaCaseConfirm
   const zaCaseDeath
   const peCaseConfirm
   const peCaseDeath
   const nlCaseConfirm
   const nlCaseDeath
   const idCaseConfirm
   const idCaseDeath
   const czCaseConfirm
   const czCaseDeath
   const beCaseConfirm
   const beCaseDeath
   const roCaseConfirm
   const roCaseDeath
   const clCaseConfirm
   const clCaseDeath
   const caCaseConfirm
   const caCaseDeath
   beCaseConfirm
   beCaseDeath
   ptCaseConfirm
   ptCaseDeath
   ilCaseConfirm
   ilCaseDeath
   iqCaseConfirm
   iqCaseDeath
   seCaseConfirm
   seCaseDeath
   pkCaseConfirm
   pkCaseDeath
   bdCaseConfirm
   bdCaseDeath
   phCaseConfirm
   phCaseDeath
   chCaseConfirm
   chCaseDeath
   maCaseConfirm
   maCaseDeath
   atCaseConfirm
   atCaseDeath
   rsCaseConfirm
   rsCaseDeath
   jpCaseConfirm
   jpCaseDeath
   saCaseConfirm
   saCaseDeath
   huCaseConfirm
   huCaseDeath
   joCaseConfirm
   joCaseDeath
   paCaseConfirm
   paCaseDeath
   aeCaseConfirm
   aeCaseDeath
   lbCaseConfirm
   lbCaseDeath
   npCaseConfirm
   npCaseDeath
   geCaseConfirm
   geCaseDeath
   skCaseConfirm
   skCaseDeath
   ecCaseConfirm
   ecCaseDeath
   byCaseConfirm
   byCaseDeath
   kzCaseConfirm
   kzCaseDeath
   hrCaseConfirm
   hrCaseDeath
   azCaseConfirm
   azCaseDeath
   bgCaseConfirm
   bgCaseDeath
   boCaseConfirm
   boCaseDeath
   doCaseConfirm
   doCaseDeath
   tnCaseConfirm
   tnCaseDeath
   myCaseConfirm
   myCaseDeath
   dkCaseConfirm
   dkCaseDeath
   ieCaseConfirm
   ieCaseDeath
   crCaseConfirm
   crCaseDeath
   ltCaseConfirm
   ltCaseDeath
   amCaseConfirm
   amCaseDeath
   siCaseConfirm
   siCaseDeath
   egCaseConfirm
   egCaseDeath
   kwCaseConfirm
   kwCaseDeath
   mdCaseConfirm
   mdCaseDeath
   gtCaseConfirm
   gtCaseDeath
   psCaseConfirm
   psCaseDeath
   grCaseConfirm
   grCaseDeath
   qaCaseConfirm
   qaCaseDeath
   hnCaseConfirm
   hnCaseDeath
   mmCaseConfirm
   mmCaseDeath
   etCaseConfirm
   etCaseDeath
   omCaseConfirm
   omCaseDeath
   pyCaseConfirm
   pyCaseDeath
   ngCaseConfirm
   ngCaseDeath
   veCaseConfirm
   veCaseDeath
   baCaseConfirm
   baCaseDeath
   lyCaseConfirm
   lyCaseDeath
   dzCaseConfirm
   dzCaseDeath
   bhCaseConfirm
   bhCaseDeath
   keCaseConfirm
   keCaseDeath
   cnCaseConfirm
   cnCaseDeath
   mkCaseConfirm
   mkCaseDeath
   kgCaseConfirm
   kgCaseDeath
   uzCaseConfirm
   uzCaseDeath
   krCaseConfirm
   krCaseDeath
   alCaseConfirm
   alCaseDeath
   lvCaseConfirm
   lvCaseDeath
   ghCaseConfirm
   ghCaseDeath
   noCaseConfirm
   noCaseDeath
   lkCaseConfirm
   lkCaseDeath
   meCaseConfirm
   meCaseDeath
   sgCaseConfirm
   sgCaseDeath
   xkCaseConfirm
   xkCaseDeath
   afCaseConfirm
   afCaseDeath
   svCaseConfirm
   svCaseDeath
   zmCaseConfirm
   zmCaseDeath
   luCaseConfirm
   luCaseDeath
   fiCaseConfirm
   fiCaseDeath
   eeCaseConfirm
   eeCaseDeath
   uyCaseConfirm
   uyCaseDeath
   ugCaseConfirm
   ugCaseDeath
   mzCaseConfirm
   mzCaseDeath
   naCaseConfirm
   naCaseDeath
   zwCaseConfirm
   zeCaseDeath
   cyCaseConfirm
   cyCaseDeath
   cmCaseConfirm
   cmCaseDeath
   sdCaseConfirm
   sdCaseDeath
   auCaseConfirm
   auCaseDeath
   ciCaseConfirm
   ciCaseDeath
   snCaseConfirm
   snCaseDeath
   cuCaseConfirm
   cuCaseDeath
   cdCaseConfirm
   cdCaseDeath
   mwCaseConfirm
   mwCaseDeath
   bwCaseConfirm
   bwCaseDeath
   aoCaseConfirm
   aoCaseDeath
   mgCaseConfirm
   mgCaseDeath
   mtCaseConfirm
   mtCaseDeath
   thCaseConfirm
   thCaseDeath
   mrCaseConfirm
   mrCaseDeath
   mvCaseConfirm
   mvCaseDeath
   jmCaseConfirm
   jmCaseDeath
   szCaseConfirm
   szCaseDeath
   rwCaseConfirm
   rwCaseDeath
   gnCaseConfirm
   gnCaseDeath
   syCaseConfirm
   syCaseDeath
   cvCaseConfirm
   cvCaseDeath
   tjCaseConfirm
   tjCaseDeath
   bzCaseConfirm
   bzCaseDeath
   htCaseConfirm
   htCaseDeath
   kpCaseConfirm
   kpCaseDeath
   gaCaseConfirm
   gaCaseDeath
   bfCaseConfirm
   bfCaseDeath
   adCaseConfirm
   adCaseDeath
   srCaseConfirm
   srCaseDeath
   lsCaseConfirm
   lsCaseDeath
   bsCaseConfirm
   bsCaseDeath
   mlCaseConfirm
   mlCaseDeath
   cgCaseConfirm
   cgCaseDeath
   ttCaseConfirm
   ttCaseDeath
   gyCaseConfirm
   gyCaseDeath
   niCaseConfirm
   niCaseDeath
   isCaseConfirm
   isCaseDeath
   djCaseConfirm
   djCaseDeath
   gqCaseConfirm
   gqCaseDeath
   cfCaseConfirm
   cfCaseDeath
   tgCaseConfirm
   tgCaseDeath
   soCaseConfirm
   soCaseDeath
   neCaseConfirm
   neCaseDeath
   gmCaseConfirm
   gmCaseDeath
   ssCaseConfirm
   ssCaseDeath
   bjCaseConfirm
   bjCaseDeath
   tdCaseConfirm
   tdCaseDeath
   slCaseConfirm
   slCaseDeath
   smCaseConfirm
   smCaseDeath
   kmCaseConfirm
   kmCaseDeath
   gwCaseConfirm
   gwCaseDeath
   liCaseConfirm
   liCaseDeath
   nzCaseConfirm
   nzCaseDeath
   yeCaseConfirm
   yeCaseDeath
   erCaseConfirm
   erCaseDeath
   lrCaseConfirm
   lrCaseDeath
   mnCaseConfirm
   mnCaseDeath
   vnCaseConfirm
   vnCaseDeath
   biCaseConfirm
   biCaseDeath
   bbCaseConfirm
   bbCaseDeath
   mcCaseConfirm
   mcCaseDeath
   stCaseConfirm
   stCaseDeath
   scCaseConfirm
   scCaseDeath
   lcCaseConfirm
   lcCaseDeath
   twCaseConfirm
   twCaseDeath
   btCaseConfirm
   btCaseDeath
   pgCaseConfirm
   pgCaseDeath
   vcCaseConfirm
   vcCaseDeath
   muCaseConfirm
   muCaseDeath
   tzCaseConfirm
   tzCaseDeath
   khCaseConfirm
   khCaseDeath
   agCaseConfirm
   agCaseDeath
   bnCaseConfirm
   bnCaseDeath
   gdCaseConfirm
   gdCaseDeath
   hkCaseConfirm
   hkCaseDeath
   dmCaseConfirm
   dmCaseDeath
   tlCaseConfirm
   tlCaseDeath
   fjCaseConfirm
   fjCaseDeath
   gpCaseConfirm
   gpCaseDeath
   reCaseConfirm
   reCaseDeath
   laCaseConfirm
   laCaseDeath
   knCaseConfirm
   knCaseDeath
   mqCaseConfirm
   mqCaseDeath
   vaCaseConfirm
   vaCaseDeath
   gfCaseConfirm
   gfCaseDeath
   sbCaseConfirm
   sbCaseDeath
   ehCaseConfirm
   ehCaseDeath
   moCaseConfirm
   moCaseDeath
   ytCaseConfirm
   ytCaseDeath
   awCaseConfirm
   awCaseDeath
   mhCaseConfirm
   nhCaseDeath
   foCaseConfirm
   foCaseDeath
   mfCaseConfirm
   mfCaseDeath
   wsCaseConfirm
   wsCaseDeath
   blCaseConfirm
   blCaseDeath
   cwCaseConfirm
   cwCaseDeath
   giCaseConfirm
   giCaseDeath
   kyCaseConfirm
   kyCaseDeath
   vuCaseConfirm
   vuCaseDeath
   ggCaseConfirm
   ggCaseDeath
   glCaseConfirm
   glCaseDeath
   guCaseConfirm
   guCaseDeath
   jeCaseConfirm
   jeCaseDeath
   prCaseConfirm
   prCaseDeath
   */

//Global Functions    
   function getArrayFields(input, field) {
      const output = [];
      for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
      return output;
   }

   function addDateComma(dateinput) {
      let p = dateinput.toString()
      let d = p.substring(0,4) + ',' + p.substring(4,6) + ',' + p.substring(6,8)
      return d
   }

   function addComma(input) {
      
   }

   const determineNull = input => input == undefined ? input = "NA" : input;
