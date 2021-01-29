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
   usDate.textContent = new Date(data.last_update).toString().substring(0,10); 
  });
 
  await fetch('https://covid19-api.org/api/status/us').then(response => response.json())
  .then(data => {
   const inCaseConfirm = document.querySelector('.inCaseConfirm');
   const inCaseDeath = document.querySelector('.inCaseDeath');
   const inDate = document.querySelctor(".inDate");
   inCaseConfirm.textContent = data.cases;
   inCaseDeath.textContent = data.deaths;
   inDate.textContent = new Date(data.last_update).toString().substring(0,10);
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
