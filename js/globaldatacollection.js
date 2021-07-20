//DOM Elements
const usCaseDeathJh = document.querySelector(".us-testing-two");
const usCaseConfirmJh = document.querySelector(".us-testing");

//Define API (https://about-corona.net/documentation, https://covid19api.com/)
const globalapi1 = 'https://corona-api.com/countries';
const globalapi2 = 'https://api.covid19api.com/summary';

//Global Count from covid19-api.org   
   fetch('https://covid19-api.org/api/status')
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

//Global Count from covid19api
  fetch(globalapi2, {
  method: 'GET',
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },   
})
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
   usCaseConfirmJh.textContent = addCommaDecimal(data.Global.TotalConfirmed) + ' as of ' + datea;
   usCaseDeathJh.textContent = addCommaDecimal(data.Global.TotalDeaths) + ' as of ' + datea;   
   /*
   const birthday = new Date();
   const date1 = birthday.getDate();
   const date2 = birthday.getFullYear();
   const date3 = birthday.getMonth() + 1;
   const date4 = date3 + "/" + date1 + "/" + date2;
   usCaseConfirmJh.textContent = data[0].total_cases + ' as of ' + data[0].last_update.toString().substring(6,7) + '/' + data[0].last_update.toString().substring(8,10) + '/' + data[0].last_update.toString().substring(0,4); 
   usCaseDeathJh.textContent = data[0].total_deaths + ' as of ' + data[0].last_update.toString().substring(6,7) + '/' + data[0].last_update.toString().substring(8,10) + '/' + data[0].last_update.toString().substring(0,4);*/   
   });

async function getCountryCountFromCovidApi() {
 await fetch(globalapi2, {
  method: 'GET',
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },   
}).then(response => response.json())
  .then(data => {
   const usCaseConfirm = document.querySelector('.usCaseConfirm');
   const usCaseDeath = document.querySelector('.usCaseDeath');
   const usDate = document.querySelector('.usDate');
   usCaseConfirm.textContent = addComma(data.Countries[181].TotalConfirmed);
   usCaseDeath.textContent = addComma(data.Countries[181].TotalDeaths);
   usDate.textContent = new Date(data.Countries[181].Date).toString().substring(0,15);
   const inCaseConfirm = document.querySelector('.inCaseConfirm');
   const inCaseDeath = document.querySelector('.inCaseDeath');
   const inDate = document.querySelector(".inDate");
   inCaseConfirm.textContent = addCommaDecimal(data.Countries[76].TotalConfirmed);
   inCaseDeath.textContent = addCommaDecimal(data.Countries[76].TotalDeaths);
   inDate.textContent = new Date(data.Countries[76].Date).toString().substring(0,15);
   const afCaseConfirm = document.querySelector('.afCaseConfirm');
   const afCaseDeath = document.querySelector('.afCaseDeath');
   const afDate = document.querySelector('.afDate');
   afCaseConfirm.textContent = addCommaDecimal(data.Countries[0].TotalConfirmed);
   afCaseDeath.textContent = addCommaDecimal(data.Countries[0].TotalDeaths);
   afDate.textContent = new Date(data.Countries[0].Date).toString().substring(0,15);  
   const alCaseConfirm = document.querySelector('.alCaseConfirm');
   const alCaseDeath = document.querySelector('.alCaseDeath');
   const alDate = document.querySelector('.alDate');
   alCaseConfirm.textContent = addCommaDecimal(data.Countries[1].TotalConfirmed);
   alCaseDeath.textContent = addCommaDecimal(data.Countries[1].TotalDeaths);
   alDate.textContent = new Date(data.Countries[1].Date).toString().substring(0,15);
   const dzCaseConfirm = document.querySelector('.dzCaseConfirm');
   const dzCaseDeath = document.querySelector('.dzCaseDeath');
   const dzDate = document.querySelector('.dzDate');
   dzCaseConfirm.textContent = addCommaDecimal(data.Countries[2].TotalConfirmed);
   dzCaseDeath.textContent = addCommaDecimal(data.Countries[2].TotalDeaths);
   dzDate.textContent = new Date(data.Countries[2].Date).toString().substring(0,15);
   const adCaseConfirm = document.querySelector('.adCaseConfirm');
   const adCaseDeath = document.querySelector('.adCaseDeath');
   const adDate = document.querySelector('.adDate');
   adCaseConfirm.textContent = addCommaDecimal(data.Countries[3].TotalConfirmed);
   adCaseDeath.textContent = addCommaDecimal(data.Countries[3].TotalDeaths);
   adDate.textContent = new Date(data.Countries[3].Date).toString().substring(0,15);
   const aoCaseConfirm = document.querySelector('.aoCaseConfirm');
   const aoCaseDeath = document.querySelector('.aoCaseDeath');
   const aoDate = document.querySelector('.aoDate');
   aoCaseConfirm.textContent = addCommaDecimal(data.Countries[4].TotalConfirmed);
   aoCaseDeath.textContent = addCommaDecimal(data.Countries[4].TotalDeaths);
   aoDate.textContent = new Date(data.Countries[4].Date).toString().substring(0,15);
   const agCaseConfirm = document.querySelector('.agCaseConfirm');
   const agCaseDeath = document.querySelector('.agCaseDeath');
   const agDate = document.querySelector('.agDate');
   agCaseConfirm.textContent = addCommaDecimal(data.Countries[5].TotalConfirmed);
   agCaseDeath.textContent = addCommaDecimal(data.Countries[5].TotalDeaths);
   agDate.textContent = new Date(data.Countries[5].Date).toString().substring(0,15); 
   const arCaseConfirm = document.querySelector('.arCaseConfirm');
   const arCaseDeath = document.querySelector('.arCaseDeath');
   const arDate = document.querySelector('.arDate');
   arCaseConfirm.textContent = addCommaDecimal(data.Countries[6].TotalConfirmed);
   arCaseDeath.textContent = addCommaDecimal(data.Countries[6].TotalDeaths);
   arDate.textContent = new Date(data.Countries[6].Date).toString().substring(0,15);
   const amCaseConfirm = document.querySelector('.amCaseConfirm');
   const amCaseDeath = document.querySelector('.amCaseDeath');
   const amDate = document.querySelector('.amDate');
   amCaseConfirm.textContent = addCommaDecimal(data.Countries[7].TotalConfirmed);
   amCaseDeath.textContent = addCommaDecimal(data.Countries[7].TotalDeaths);
   amDate.textContent = new Date(data.Countries[7].Date).toString().substring(0,15);
   const auCaseConfirm = document.querySelector('.auCaseConfirm');
   const auCaseDeath = document.querySelector('.auCaseDeath');
   const auDate = document.querySelector('.auDate');
   auCaseConfirm.textContent = addCommaDecimal(data.Countries[8].TotalConfirmed);
   auCaseDeath.textContent = addCommaDecimal(data.Countries[8].TotalDeaths);
   auDate.textContent = new Date(data.Countries[8].Date).toString().substring(0,15);
   const atCaseConfirm = document.querySelector('.atCaseConfirm');
   const atCaseDeath = document.querySelector('.atCaseDeath');
   const atDate = document.querySelector('.atDate');
   atCaseConfirm.textContent = addCommaDecimal(data.Countries[9].TotalConfirmed);
   atCaseDeath.textContent = addCommaDecimal(data.Countries[9].TotalDeaths);
   atDate.textContent = new Date(data.Countries[9].Date).toString().substring(0,15);
   const azCaseConfirm = document.querySelector('.azCaseConfirm');
   const azCaseDeath = document.querySelector('.azCaseDeath');
   const azDate = document.querySelector('.azDate');
   azCaseConfirm.textContent = addCommaDecimal(data.Countries[10].TotalConfirmed);
   azCaseDeath.textContent = addCommaDecimal(data.Countries[10].TotalDeaths);
   azDate.textContent = new Date(data.Countries[10].Date).toString().substring(0,15);
   const bsCaseConfirm = document.querySelector('.bsCaseConfirm');
   const bsCaseDeath = document.querySelector('.bsCaseDeath');
   const bsDate = document.querySelector('.bsDate');
   bsCaseConfirm.textContent = addCommaDecimal(data.Countries[11].TotalConfirmed);
   bsCaseDeath.textContent = addCommaDecimal(data.Countries[11].TotalDeaths);
   bsDate.textContent = new Date(data.Countries[11].Date).toString().substring(0,15);
   const bhCaseConfirm = document.querySelector('.bhCaseConfirm');
   const bhCaseDeath = document.querySelector('.bhCaseDeath');
   const bhDate = document.querySelector('.bhDate');
   bhCaseConfirm.textContent = addCommaDecimal(data.Countries[12].TotalConfirmed);
   bhCaseDeath.textContent = addCommaDecimal(data.Countries[12].TotalDeaths);
   bhDate.textContent = new Date(data.Countries[12].Date).toString().substring(0,15);
   const bdCaseConfirm = document.querySelector('.bdCaseConfirm');
   const bdCaseDeath = document.querySelector('.bdCaseDeath');
   const bdDate = document.querySelector('.bdDate');
   bdCaseConfirm.textContent = addCommaDecimal(data.Countries[13].TotalConfirmed);
   bdCaseDeath.textContent = addCommaDecimal(data.Countries[13].TotalDeaths);
   bdDate.textContent = new Date(data.Countries[13].Date).toString().substring(0,15);
   const bbCaseConfirm = document.querySelector('.bbCaseConfirm');
   const bbCaseDeath = document.querySelector('.bbCaseDeath');
   const bbDate = document.querySelector('.bbDate');
   bbCaseConfirm.textContent = addCommaDecimal(data.Countries[14].TotalConfirmed);
   bbCaseDeath.textContent = addCommaDecimal(data.Countries[14].TotalDeaths);
   bbDate.textContent = new Date(data.Countries[14].Date).toString().substring(0,15);
   const byCaseConfirm = document.querySelector('.byCaseConfirm');
   const byCaseDeath = document.querySelector('.byCaseDeath');
   const byDate = document.querySelector('.byDate');
   byCaseConfirm.textContent = addCommaDecimal(data.Countries[15].TotalConfirmed);
   byCaseDeath.textContent = addCommaDecimal(data.Countries[15].TotalDeaths);
   byDate.textContent = new Date(data.Countries[15].Date).toString().substring(0,15);
   const beCaseConfirm = document.querySelector('.beCaseConfirm');
   const beCaseDeath = document.querySelector('.beCaseDeath');
   const beDate = document.querySelector('.beDate');
   beCaseConfirm.textContent = addCommaDecimal(data.Countries[16].TotalConfirmed);
   beCaseDeath.textContent = addCommaDecimal(data.Countries[16].TotalDeaths);
   beDate.textContent = new Date(data.Countries[16].Date).toString().substring(0,15);
   const bzCaseConfirm = document.querySelector('.bzCaseConfirm');
   const bzCaseDeath = document.querySelector('.bzCaseDeath');
   const bzDate = document.querySelector('.bzDate');
   bzCaseConfirm.textContent = addCommaDecimal(data.Countries[17].TotalConfirmed);
   bzCaseDeath.textContent = addCommaDecimal(data.Countries[17].TotalDeaths);
   bzDate.textContent = new Date(data.Countries[17].Date).toString().substring(0,15);
   const bjCaseConfirm = document.querySelector('.bjCaseConfirm');
   const bjCaseDeath = document.querySelector('.bjCaseDeath');
   const bjDate = document.querySelector('.bjDate');
   bjCaseConfirm.textContent = addCommaDecimal(data.Countries[18].TotalConfirmed);
   bjCaseDeath.textContent = addCommaDecimal(data.Countries[18].TotalDeaths);
   bjDate.textContent = new Date(data.Countries[18].Date).toString().substring(0,15);
       const btCaseConfirm = document.querySelector('.btCaseConfirm');
   const btCaseDeath = document.querySelector('.btCaseDeath');
   const btDate = document.querySelector('.btDate');
   btCaseConfirm.textContent = addCommaDecimal(data.Countries[19].TotalConfirmed);
   btCaseDeath.textContent = addCommaDecimal(data.Countries[19].TotalDeaths);
   btDate.textContent = new Date(data.Countries[19].Date).toString().substring(0,15);
       const veCaseConfirm = document.querySelector('.veCaseConfirm');
   const veCaseDeath = document.querySelector('.veCaseDeath');
   const veDate = document.querySelector('.veDate');
   veCaseConfirm.textContent = addCommaDecimal(data.cases);
   veCaseDeath.textContent = addCommaDecimal(data.deaths);
   veDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const baCaseConfirm = document.querySelector('.baCaseConfirm');
   const baCaseDeath = document.querySelector('.baCaseDeath');
   const baDate = document.querySelector('.baDate');
   baCaseConfirm.textContent = addCommaDecimal(data.cases);
   baCaseDeath.textContent = addCommaDecimal(data.deaths);
   baDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const bwCaseConfirm = document.querySelector('.bwCaseConfirm');
   const bwCaseDeath = document.querySelector('.bwCaseDeath');
   const bwDate = document.querySelector('.bwDate');
   bwCaseConfirm.textContent = addCommaDecimal(data.cases);
   bwCaseDeath.textContent = addCommaDecimal(data.deaths);
   bwDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const brCaseConfirm = document.querySelector('.brCaseConfirm');
   const brCaseDeath = document.querySelector('.brCaseDeath');
   const brDate = document.querySelector('.brDate');
   brCaseConfirm.textContent = addCommaDecimal(data.cases);
   brCaseDeath.textContent = addCommaDecimal(data.deaths);
   brDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const bnCaseConfirm = document.querySelector('.bnCaseConfirm');
   const bnCaseDeath = document.querySelector('.bnCaseDeath');
   const bnDate = document.querySelector('.bnDate');
   bnCaseConfirm.textContent = addCommaDecimal(data.cases);
   bnCaseDeath.textContent = addCommaDecimal(data.deaths);
   bnDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const bgCaseConfirm = document.querySelector('.bgCaseConfirm');
   const bgCaseDeath = document.querySelector('.bgCaseDeath');
   const bgDate = document.querySelector('.bgDate');
   bgCaseConfirm.textContent = addCommaDecimal(data.cases);
   bgCaseDeath.textContent = addCommaDecimal(data.deaths);
   bgDate.textContent = new Date(data.last_update).toString().substring(0,15); 
      const bfCaseConfirm = document.querySelector('.bfCaseConfirm');
   const bfCaseDeath = document.querySelector('.bfCaseDeath');
   const bfDate = document.querySelector('.bfDate');
   bfCaseConfirm.textContent = addCommaDecimal(data.cases);
   bfCaseDeath.textContent = addCommaDecimal(data.deaths);
   bfDate.textContent = new Date(data.last_update).toString().substring(0,15);  
       const biCaseConfirm = document.querySelector('.biCaseConfirm');
   const biCaseDeath = document.querySelector('.biCaseDeath');
   const biDate = document.querySelector('.biDate');
   biCaseConfirm.textContent = addCommaDecimal(data.cases);
   biCaseDeath.textContent = addCommaDecimal(data.deaths);
   biDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const khCaseConfirm = document.querySelector('.khCaseConfirm');
   const khCaseDeath = document.querySelector('.khCaseDeath');
   const khDate = document.querySelector('.khDate');
   khCaseConfirm.textContent = addCommaDecimal(data.cases);
   khCaseDeath.textContent = addCommaDecimal(data.deaths);
   khDate.textContent = new Date(data.last_update).toString().substring(0,15); 
      const cmCaseConfirm = document.querySelector('.cmCaseConfirm');
   const cmCaseDeath = document.querySelector('.cmCaseDeath');
   const cmDate = document.querySelector('.cmDate');
   cmCaseConfirm.textContent = addCommaDecimal(data.cases);
   cmCaseDeath.textContent = addCommaDecimal(data.deaths);
   cmDate.textContent = new Date(data.last_update).toString().substring(0,15);  
      const caCaseConfirm = document.querySelector('.caCaseConfirm');
   const caCaseDeath = document.querySelector('.caCaseDeath');
   const caDate = document.querySelector('.caDate');
   caCaseConfirm.textContent = addCommaDecimal(data.cases);
   caCaseDeath.textContent = addCommaDecimal(data.deaths);
   caDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const cvCaseConfirm = document.querySelector('.cvCaseConfirm');
   const cvCaseDeath = document.querySelector('.cvCaseDeath');
   const cvDate = document.querySelector('.cvDate');
   cvCaseConfirm.textContent = addCommaDecimal(data.Countries[31].TotalConfirmed);
   cvCaseDeath.textContent = addCommaDecimal(data.Countries[31].TotalDeaths);
   cvDate.textContent = new Date(data.Countries[31].Date).toString().substring(0,15);
      const cfCaseConfirm = document.querySelector('.cfCaseConfirm');
   const cfCaseDeath = document.querySelector('.cfCaseDeath');
   const cfDate = document.querySelector('.cfDate');
   cfCaseConfirm.textContent = addCommaDecimal(data.cases);
   cfCaseDeath.textContent = addCommaDecimal(data.deaths);
   cfDate.textContent = new Date(data.last_update).toString().substring(0,15); 
      const tdCaseConfirm = document.querySelector('.tdCaseConfirm');
   const tdCaseDeath = document.querySelector('.tdCaseDeath');
   const tdDate = document.querySelector('.tdDate');
   tdCaseConfirm.textContent = addCommaDecimal(data.cases);
   tdCaseDeath.textContent = addCommaDecimal(data.deaths);
   tdDate.textContent = new Date(data.last_update).toString().substring(0,15); 
      const clCaseConfirm = document.querySelector('.clCaseConfirm');
   const clCaseDeath = document.querySelector('.clCaseDeath');
   const clDate = document.querySelector('.clDate');
   clCaseConfirm.textContent = addCommaDecimal(data.cases);
   clCaseDeath.textContent = addCommaDecimal(data.deaths);
   clDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const cnCaseConfirm = document.querySelector('.cnCaseConfirm');
   const cnCaseDeath = document.querySelector('.cnCaseDeath');
   const cnDate = document.querySelector('.cnDate');
   cnCaseConfirm.textContent = addCommaDecimal(data.cases);
   cnCaseDeath.textContent = addCommaDecimal(data.deaths);
   cnDate.textContent = new Date(data.last_update).toString().substring(0,15); 
      const coCaseConfirm = document.querySelector('.coCaseConfirm');
   const coCaseDeath = document.querySelector('.coCaseDeath');
   const coDate = document.querySelector('.coDate');
   coCaseConfirm.textContent = addCommaDecimal(data.cases);
   coCaseDeath.textContent = addCommaDecimal(data.deaths);
   coDate.textContent = new Date(data.last_update).toString().substring(0,15); 
      const kmCaseConfirm = document.querySelector('.kmCaseConfirm');
   const kmCaseDeath = document.querySelector('.kmCaseDeath');
   const kmDate = document.querySelector('.kmDate');
   kmCaseConfirm.textContent = addCommaDecimal(data.cases);
   kmCaseDeath.textContent = addCommaDecimal(data.deaths);
   kmDate.textContent = new Date(data.last_update).toString().substring(0,15);  
       const cgCaseConfirm = document.querySelector('.cgCaseConfirm');
   const cgCaseDeath = document.querySelector('.cgCaseDeath');
   const cgDate = document.querySelector('.cgDate');
   cgCaseConfirm.textContent = addCommaDecimal(data.cases);
   cgCaseDeath.textContent = addCommaDecimal(data.deaths);
   cgDate.textContent = new Date(data.last_update).toString().substring(0,15); 
      const cdcaseConfirm = document.querySelector('.cdCaseConfirm');
   const cdcaseDeath = document.querySelector('.cdCaseDeath');
   const cdcurDate = document.querySelector('.cdDate');
   cdcaseConfirm.textContent = addCommaDecimal(data.cases);
   cdcaseDeath.textContent = addCommaDecimal(data.deaths);
   cdcurDate.textContent = new Date(data.last_update).toString().substring(0,15);  
      const crCaseConfirm = document.querySelector('.crCaseConfirm');
   const crCaseDeath = document.querySelector('.crCaseDeath');
   const crDate = document.querySelector('.crDate');
   crCaseConfirm.textContent = addCommaDecimal(data.Countries[40].TotalConfirmed);
   crCaseDeath.textContent = addCommaDecimal(data.Countries[40].TotalDeaths);
   crDate.textContent = new Date(data.Countries[40].Date).toString().substring(0,15); 
       const hrcaseConfirm = document.querySelector('.hrCaseConfirm');
   const hrcaseDeath = document.querySelector('.hrCaseDeath');
   const hrcurDate = document.querySelector('.hrDate');
   hrcaseConfirm.textContent = addCommaDecimal(data.cases);
   hrcaseDeath.textContent = addCommaDecimal(data.deaths);
   hrcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const cucaseConfirm = document.querySelector('.cuCaseConfirm');
   const cucaseDeath = document.querySelector('.cuCaseDeath');
   const cucurDate = document.querySelector('.cuDate');
   cucaseConfirm.textContent = addCommaDecimal(data.cases);
   cucaseDeath.textContent = addCommaDecimal(data.deaths);
   cucurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const cycaseConfirm = document.querySelector('.cyCaseConfirm');
   const cycaseDeath = document.querySelector('.cyCaseDeath');
   const cycurDate = document.querySelector('.cyDate');
   cycaseConfirm.textContent = addCommaDecimal(data.cases);
   cycaseDeath.textContent = addCommaDecimal(data.deaths);
   cycurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
      const czcaseConfirm = document.querySelector('.czCaseConfirm');
   const czcaseDeath = document.querySelector('.czCaseDeath');
   const czcurDate = document.querySelector('.czDate');
   czcaseConfirm.textContent = addCommaDecimal(data.cases);
   czcaseDeath.textContent = addCommaDecimal(data.deaths);
   czcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const ciCaseConfirm = document.querySelector('.ciCaseConfirm');
   const ciCaseDeath = document.querySelector('.ciCaseDeath');
   const ciDate = document.querySelector('.ciDate');
   ciCaseConfirm.textContent = addCommaDecimal(data.cases);
   ciCaseDeath.textContent = addCommaDecimal(data.deaths);
   ciDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const dkcaseConfirm = document.querySelector('.dkCaseConfirm');
   const dkcaseDeath = document.querySelector('.dkCaseDeath');
   const dkcurDate = document.querySelector('.dkDate');
   dkcaseConfirm.textContent = addCommaDecimal(data.Countries[46].TotalConfirmed);
   dkcaseDeath.textContent = addCommaDecimal(data.Countries[46].TotalDeaths);
   dkcurDate.textContent = new Date(data.Countries[46].Date).toString().substring(0,15);
   const country191 = document.querySelector('.country191');
   const caseConfirm191 = document.querySelector('.CaseConfirm191');
   const caseDeath191 = document.querySelector('.CaseDeath191');
   const date191 = document.querySelector('.Date191');
   country191.textContent = 'data.Countries[191].Country'
   caseConfirm191.textContent = addCommaDecimal(data.Countries[191].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[191].NewConfirmed) +')'
   caseDeath191.textContent = addCommaDecimal(data.Countries[191].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[191].NewDeaths) +')'
   date191.textContent = new Date(data.Countries[191].Date).toString().substring(0,15)    
  });
}
   /*const awCaseConfirm = document.querySelector('.awCaseConfirm');
   const awCaseDeath = document.querySelector('.awCaseDeath');
   const awDate = document.querySelector('.awDate');
   awCaseConfirm.textContent = 'NA'
   awCaseDeath.textContent = 'NA'
   awDate.textContent = 'NA'
   const kyCaseConfirm = document.querySelector('.kyCaseConfirm');
   const kyCaseDeath = document.querySelector('.kyCaseDeath');
   const kyDate = document.querySelector('.kyDate');
   kyCaseConfirm.textContent = 'NA'
   kyCaseDeath.textContent = 'NA'
   kyDate.textContent = 'NA'
   const cwcaseConfirm = document.querySelector('.cwCaseConfirm');
   const cwcaseDeath = document.querySelector('.cwCaseDeath');
   const cwcurDate = document.querySelector('.cwDate');
   cwcaseConfirm.textContent = 'NA'
   cwcaseDeath.textContent = 'NA'
   cwcurDate.textContent = 'NA' 
         
               
 await fetch('https://covid19-api.org/api/status/kp').then(response => response.json())
  .then(data => {
   const kpcaseConfirm = document.querySelector('.kpCaseConfirm');
   const kpcaseDeath = document.querySelector('.kpCaseDeath');
   const kpcurDate = document.querySelector('.kpDate');
   kpcaseConfirm.textContent = addCommaDecimal(data.Countries[88].TotalConfirmed);
   kpcaseDeath.textContent = addCommaDecimal(data.Countries[88].TotalDeaths);
   kpcurDate.textContent = new Date(data.Countries[88].Date).toString().substring(0,15); 
  });

                  
 await fetch('https://covid19-api.org/api/status/dj').then(response => response.json())
  .then(data => {
   const djcaseConfirm = document.querySelector('.djCaseConfirm');
   const djcaseDeath = document.querySelector('.djCaseDeath');
   const djcurDate = document.querySelector('.djDate');
   djcaseConfirm.textContent = addCommaDecimal(data.cases);
   djcaseDeath.textContent = addCommaDecimal(data.deaths);
   djcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
 await fetch('https://covid19-api.org/api/status/dm').then(response => response.json())
  .then(data => {
   const dmcaseConfirm = document.querySelector('.dmCaseConfirm');
   const dmcaseDeath = document.querySelector('.dmCaseDeath');
   const dmcurDate = document.querySelector('.dmDate');
   dmcaseConfirm.textContent = addCommaDecimal(data.cases);
   dmcaseDeath.textContent = addCommaDecimal(data.deaths);
   dmcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
 await fetch('https://covid19-api.org/api/status/do').then(response => response.json())
  .then(data => {
   const docaseConfirm = document.querySelector('.doCaseConfirm');
   const docaseDeath = document.querySelector('.doCaseDeath');
   const docurDate = document.querySelector('.doDate');
   docaseConfirm.textContent = addCommaDecimal(data.cases);
   docaseDeath.textContent = addCommaDecimal(data.deaths);
   docurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
 await fetch('https://covid19-api.org/api/status/ec').then(response => response.json())
  .then(data => {
   const eccaseConfirm = document.querySelector('.ecCaseConfirm');
   const eccaseDeath = document.querySelector('.ecCaseDeath');
   const eccurDate = document.querySelector('.ecDate');
   eccaseConfirm.textContent = addCommaDecimal(data.cases);
   eccaseDeath.textContent = addCommaDecimal(data.deaths);
   eccurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/eg').then(response => response.json())
  .then(data => {
   const egcaseConfirm = document.querySelector('.egCaseConfirm');
   const egcaseDeath = document.querySelector('.egCaseDeath');
   const egcurDate = document.querySelector('.egDate');
   egcaseConfirm.textContent = addCommaDecimal(data.cases);
   egcaseDeath.textContent = addCommaDecimal(data.deaths);
   egcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/sv').then(response => response.json())
  .then(data => {
   const svcaseConfirm = document.querySelector('.svCaseConfirm');
   const svcaseDeath = document.querySelector('.svCaseDeath');
   const svcurDate = document.querySelector('.svDate');
   svcaseConfirm.textContent = addCommaDecimal(data.cases);
   svcaseDeath.textContent = addCommaDecimal(data.deaths);
   svcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/gq').then(response => response.json())
  .then(data => {
   const gqcaseConfirm = document.querySelector('.gqCaseConfirm');
   const gqcaseDeath = document.querySelector('.gqCaseDeath');
   const gqcurDate = document.querySelector('.gqDate');
   gqcaseConfirm.textContent = addCommaDecimal(data.cases);
   gqcaseDeath.textContent = addCommaDecimal(data.deaths);
   gqcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/er').then(response => response.json())
  .then(data => {
   const ercaseConfirm = document.querySelector('.erCaseConfirm');
   const ercaseDeath = document.querySelector('.erCaseDeath');
   const ercurDate = document.querySelector('.erDate');
   ercaseConfirm.textContent = addCommaDecimal(data.cases);
   ercaseDeath.textContent = addCommaDecimal(data.deaths);
   ercurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/ee').then(response => response.json())
  .then(data => {
   const eecaseConfirm = document.querySelector('.eeCaseConfirm');
   const eecaseDeath = document.querySelector('.eeCaseDeath');
   const eecurDate = document.querySelector('.eeDate');
   eecaseConfirm.textContent = addCommaDecimal(data.cases);
   eecaseDeath.textContent = addCommaDecimal(data.deaths);
   eecurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/et').then(response => response.json())
  .then(data => {
   const etcaseConfirm = document.querySelector('.etCaseConfirm');
   const etcaseDeath = document.querySelector('.etCaseDeath');
   const etcurDate = document.querySelector('.etDate');
   etcaseConfirm.textContent = addCommaDecimal(data.cases);
   etcaseDeath.textContent = addCommaDecimal(data.deaths);
   etcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/fo').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.foCaseConfirm');
   const caseDeath = document.querySelector('.foCaseDeath');
   const curDate = document.querySelector('.foDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
 await fetch('https://covid19-api.org/api/status/fj').then(response => response.json())
  .then(data => {
   const fjcaseConfirm = document.querySelector('.fjCaseConfirm');
   const fjcaseDeath = document.querySelector('.fjCaseDeath');
   const fjcurDate = document.querySelector('.fjDate');
   fjcaseConfirm.textContent = addCommaDecimal(data.cases);
   fjcaseDeath.textContent = addCommaDecimal(data.deaths);
   fjcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
 await fetch('https://covid19-api.org/api/status/fi').then(response => response.json())
  .then(data => {
   const ficaseConfirm = document.querySelector('.fiCaseConfirm');
   const ficaseDeath = document.querySelector('.fiCaseDeath');
   const ficurDate = document.querySelector('.fiDate');
   ficaseConfirm.textContent = addCommaDecimal(data.cases);
   ficaseDeath.textContent = addCommaDecimal(data.deaths);
   ficurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
 await fetch('https://covid19-api.org/api/status/fr').then(response => response.json())
  .then(data => {
   const frcaseConfirm = document.querySelector('.frCaseConfirm');
   const frcaseDeath = document.querySelector('.frCaseDeath');
   const frcurDate = document.querySelector('.frDate');
   frcaseConfirm.textContent = addCommaDecimal(data.cases);
   frcaseDeath.textContent = addCommaDecimal(data.deaths);
   frcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
 await fetch('https://covid19-api.org/api/status/ga').then(response => response.json())
  .then(data => {
   const gacaseConfirm = document.querySelector('.gaCaseConfirm');
   const gacaseDeath = document.querySelector('.gaCaseDeath');
   const gacurDate = document.querySelector('.gaDate');
   gacaseConfirm.textContent = addCommaDecimal(data.cases);
   gacaseDeath.textContent = addCommaDecimal(data.deaths);
   gacurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gf').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gfCaseConfirm');
   const caseDeath = document.querySelector('.gfCaseDeath');
   const curDate = document.querySelector('.gfDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gm').then(response => response.json())
  .then(data => {
   const gmcaseConfirm = document.querySelector('.gmCaseConfirm');
   const gmcaseDeath = document.querySelector('.gmCaseDeath');
   const gmcurDate = document.querySelector('.gmDate');
   gmcaseConfirm.textContent = addCommaDecimal(data.cases);
   gmcaseDeath.textContent = addCommaDecimal(data.deaths);
   gmcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/ge').then(response => response.json())
  .then(data => {
   const gecaseConfirm = document.querySelector('.geCaseConfirm');
   const gecaseDeath = document.querySelector('.geCaseDeath');
   const gecurDate = document.querySelector('.geDate');
   gecaseConfirm.textContent = addCommaDecimal(data.cases);
   gecaseDeath.textContent = addCommaDecimal(data.deaths);
   gecurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/de').then(response => response.json())
  .then(data => {
   const decaseConfirm = document.querySelector('.deCaseConfirm');
   const decaseDeath = document.querySelector('.deCaseDeath');
   const decurDate = document.querySelector('.deDate');
   decaseConfirm.textContent = addCommaDecimal(data.cases);
   decaseDeath.textContent = addCommaDecimal(data.deaths);
   decurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gh').then(response => response.json())
  .then(data => {
   const ghcaseConfirm = document.querySelector('.ghCaseConfirm');
   const ghcaseDeath = document.querySelector('.ghCaseDeath');
   const ghcurDate = document.querySelector('.ghDate');
   ghcaseConfirm.textContent = addCommaDecimal(data.cases);
   ghcaseDeath.textContent = addCommaDecimal(data.deaths);
   ghcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gi').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.giCaseConfirm');
   const caseDeath = document.querySelector('.giCaseDeath');
   const curDate = document.querySelector('.giDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gr').then(response => response.json())
  .then(data => {
   const grcaseConfirm = document.querySelector('.grCaseConfirm');
   const grcaseDeath = document.querySelector('.grCaseDeath');
   const grcurDate = document.querySelector('.grDate');
   grcaseConfirm.textContent = addCommaDecimal(data.cases);
   grcaseDeath.textContent = addCommaDecimal(data.deaths);
   grcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gl').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.glCaseConfirm');
   const caseDeath = document.querySelector('.glCaseDeath');
   const curDate = document.querySelector('.glDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gd').then(response => response.json())
  .then(data => {
   const gdcaseConfirm = document.querySelector('.gdCaseConfirm');
   const gdcaseDeath = document.querySelector('.gdCaseDeath');
   const gdcurDate = document.querySelector('.gdDate');
   gdcaseConfirm.textContent = addCommaDecimal(data.cases);
   gdcaseDeath.textContent = addCommaDecimal(data.deaths);
   gdcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gp').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gpCaseConfirm');
   const caseDeath = document.querySelector('.gpCaseDeath');
   const curDate = document.querySelector('.gpDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gu').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.guCaseConfirm');
   const caseDeath = document.querySelector('.guCaseDeath');
   const curDate = document.querySelector('.guDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gt').then(response => response.json())
  .then(data => {
   const gtcaseConfirm = document.querySelector('.gtCaseConfirm');
   const gtcaseDeath = document.querySelector('.gtCaseDeath');
   const gtcurDate = document.querySelector('.gtDate');
   gtcaseConfirm.textContent = addCommaDecimal(data.cases);
   gtcaseDeath.textContent = addCommaDecimal(data.deaths);
   gtcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
await fetch('https://covid19-api.org/api/status/gg').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ggCaseConfirm');
   const caseDeath = document.querySelector('.ggCaseDeath');
   const curDate = document.querySelector('.ggDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
await fetch('https://covid19-api.org/api/status/gn').then(response => response.json())
  .then(data => {
   const gncaseConfirm = document.querySelector('.gnCaseConfirm');
   const gncaseDeath = document.querySelector('.gnCaseDeath');
   const gncurDate = document.querySelector('.gnDate');
   gncaseConfirm.textContent = addCommaDecimal(data.cases);
   gncaseDeath.textContent = addCommaDecimal(data.deaths);
   gncurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
await fetch('https://covid19-api.org/api/status/gw').then(response => response.json())
  .then(data => {
   const gwcaseConfirm = document.querySelector('.gwCaseConfirm');
   const gwcaseDeath = document.querySelector('.gwCaseDeath');
   const gwcurDate = document.querySelector('.gwDate');
   gwcaseConfirm.textContent = addCommaDecimal(data.cases);
   gwcaseDeath.textContent = addCommaDecimal(data.deaths);
   gwcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
await fetch('https://covid19-api.org/api/status/gy').then(response => response.json())
  .then(data => {
   const gycaseConfirm = document.querySelector('.gyCaseConfirm');
   const gycaseDeath = document.querySelector('.gyCaseDeath');
   const gycurDate = document.querySelector('.gyDate');
   gycaseConfirm.textContent = addCommaDecimal(data.cases);
   gycaseDeath.textContent = addCommaDecimal(data.deaths);
   gycurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
await fetch('https://covid19-api.org/api/status/ht').then(response => response.json())
  .then(data => {
   const htcaseConfirm = document.querySelector('.htCaseConfirm');
   const htcaseDeath = document.querySelector('.htCaseDeath');
   const htcurDate = document.querySelector('.htDate');
   htcaseConfirm.textContent = addCommaDecimal(data.cases);
   htcaseDeath.textContent = addCommaDecimal(data.deaths);
   htcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
await fetch('https://covid19-api.org/api/status/va').then(response => response.json())
  .then(data => {
   const vacaseConfirm = document.querySelector('.vaCaseConfirm');
   const vacaseDeath = document.querySelector('.vaCaseDeath');
   const vacurDate = document.querySelector('.vaDate');
   vacaseConfirm.textContent = addCommaDecimal(data.cases);
   vacaseDeath.textContent = addCommaDecimal(data.deaths);
   vacurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
await fetch('https://covid19-api.org/api/status/hn').then(response => response.json())
  .then(data => {
   const hncaseConfirm = document.querySelector('.hnCaseConfirm');
   const hncaseDeath = document.querySelector('.hnCaseDeath');
   const hncurDate = document.querySelector('.hnDate');
   hncaseConfirm.textContent = addCommaDecimal(data.cases);
   hncaseDeath.textContent = addCommaDecimal(data.deaths);
   hncurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
await fetch('https://covid19-api.org/api/status/hk').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.hkCaseConfirm');
   const caseDeath = document.querySelector('.hkCaseDeath');
   const curDate = document.querySelector('.hkDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
await fetch('https://covid19-api.org/api/status/hu').then(response => response.json())
  .then(data => {
   const hucaseConfirm = document.querySelector('.huCaseConfirm');
   const hucaseDeath = document.querySelector('.huCaseDeath');
   const hucurDate = document.querySelector('.huDate');
   hucaseConfirm.textContent = addCommaDecimal(data.cases);
   hucaseDeath.textContent = addCommaDecimal(data.deaths);
   hucurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
await fetch('https://covid19-api.org/api/status/is').then(response => response.json())
  .then(data => {
   const iscaseConfirm = document.querySelector('.isCaseConfirm');
   const iscaseDeath = document.querySelector('.isCaseDeath');
   const iscurDate = document.querySelector('.isDate');
   iscaseConfirm.textContent = addCommaDecimal(data.cases);
   iscaseDeath.textContent = addCommaDecimal(data.deaths);
   iscurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
            
await fetch('https://covid19-api.org/api/status/id').then(response => response.json())
  .then(data => {
   const idcaseConfirm = document.querySelector('.idCaseConfirm');
   const idcaseDeath = document.querySelector('.idCaseDeath');
   const idcurDate = document.querySelector('.idDate');
   idcaseConfirm.textContent = addCommaDecimal(data.cases);
   idcaseDeath.textContent = addCommaDecimal(data.deaths);
   idcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
            
await fetch('https://covid19-api.org/api/status/iq').then(response => response.json())
  .then(data => {
   const iqcaseConfirm = document.querySelector('.iqCaseConfirm');
   const iqcaseDeath = document.querySelector('.iqCaseDeath');
   const iqcurDate = document.querySelector('.iqDate');
   iqcaseConfirm.textContent = addCommaDecimal(data.cases);
   iqcaseDeath.textContent = addCommaDecimal(data.deaths);
   iqcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
            
await fetch('https://covid19-api.org/api/status/ie').then(response => response.json())
  .then(data => {
   const iecaseConfirm = document.querySelector('.ieCaseConfirm');
   const iecaseDeath = document.querySelector('.ieCaseDeath');
   const iecurDate = document.querySelector('.ieDate');
   iecaseConfirm.textContent = addCommaDecimal(data.cases);
   iecaseDeath.textContent = addCommaDecimal(data.deaths);
   iecurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
            
await fetch('https://covid19-api.org/api/status/ir').then(response => response.json())
  .then(data => {
   const ircaseConfirm = document.querySelector('.irCaseConfirm');
   const ircaseDeath = document.querySelector('.irCaseDeath');
   const ircurDate = document.querySelector('.irDate');
   ircaseConfirm.textContent = addCommaDecimal(data.cases);
   ircaseDeath.textContent = addCommaDecimal(data.deaths);
   ircurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
            
await fetch('https://covid19-api.org/api/status/il').then(response => response.json())
  .then(data => {
   const ilcaseConfirm = document.querySelector('.ilCaseConfirm');
   const ilcaseDeath = document.querySelector('.ilCaseDeath');
   const ilcurDate = document.querySelector('.ilDate');
   ilcaseConfirm.textContent = addCommaDecimal(data.cases);
   ilcaseDeath.textContent = addCommaDecimal(data.deaths);
   ilcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
            
await fetch('https://covid19-api.org/api/status/it').then(response => response.json())
  .then(data => {
   const itcaseConfirm = document.querySelector('.itCaseConfirm');
   const itcaseDeath = document.querySelector('.itCaseDeath');
   const itcurDate = document.querySelector('.itDate');
   itcaseConfirm.textContent = addCommaDecimal(data.cases);
   itcaseDeath.textContent = addCommaDecimal(data.deaths);
   itcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
            
await fetch('https://covid19-api.org/api/status/jm').then(response => response.json())
  .then(data => {
   const jmcaseConfirm = document.querySelector('.jmCaseConfirm');
   const jmcaseDeath = document.querySelector('.jmCaseDeath');
   const jmcurDate = document.querySelector('.jmDate');
   jmcaseConfirm.textContent = addCommaDecimal(data.cases);
   jmcaseDeath.textContent = addCommaDecimal(data.deaths);
   jmcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
               
await fetch('https://covid19-api.org/api/status/jp').then(response => response.json())
  .then(data => {
   const jpcaseConfirm = document.querySelector('.jpCaseConfirm');
   const jpcaseDeath = document.querySelector('.jpCaseDeath');
   const jpcurDate = document.querySelector('.jpDate');
   jpcaseConfirm.textContent = addCommaDecimal(data.cases);
   jpcaseDeath.textContent = addCommaDecimal(data.deaths);
   jpcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
               
await fetch('https://covid19-api.org/api/status/je').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.jeCaseConfirm');
   const caseDeath = document.querySelector('.jeCaseDeath');
   const curDate = document.querySelector('.jeDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
               
await fetch('https://covid19-api.org/api/status/jo').then(response => response.json())
  .then(data => {
   const jocaseConfirm = document.querySelector('.joCaseConfirm');
   const jocaseDeath = document.querySelector('.joCaseDeath');
   const jocurDate = document.querySelector('.joDate');
   jocaseConfirm.textContent = addCommaDecimal(data.cases);
   jocaseDeath.textContent = addCommaDecimal(data.deaths);
   jocurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
               
await fetch('https://covid19-api.org/api/status/kz').then(response => response.json())
  .then(data => {
   const kzcaseConfirm = document.querySelector('.kzCaseConfirm');
   const kzcaseDeath = document.querySelector('.kzCaseDeath');
   const kzcurDate = document.querySelector('.kzDate');
   kzcaseConfirm.textContent = addCommaDecimal(data.cases);
   kzcaseDeath.textContent = addCommaDecimal(data.deaths);
   kzcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
await fetch('https://covid19-api.org/api/status/ke').then(response => response.json())
  .then(data => {
   const kecaseConfirm = document.querySelector('.keCaseConfirm');
   const kecaseDeath = document.querySelector('.keCaseDeath');
   const kecurDate = document.querySelector('.keDate');
   kecaseConfirm.textContent = addCommaDecimal(data.cases);
   kecaseDeath.textContent = addCommaDecimal(data.deaths);
   kecurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
await fetch('https://covid19-api.org/api/status/kw').then(response => response.json())
  .then(data => {
   const kwcaseConfirm = document.querySelector('.kwCaseConfirm');
   const kwcaseDeath = document.querySelector('.kwCaseDeath');
   const kwcurDate = document.querySelector('.kwDate');
   kwcaseConfirm.textContent = addCommaDecimal(data.cases);
   kwcaseDeath.textContent = addCommaDecimal(data.deaths);
   kwcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
await fetch('https://covid19-api.org/api/status/kg').then(response => response.json())
  .then(data => {
   const kgcaseConfirm = document.querySelector('.kgCaseConfirm');
   const kgcaseDeath = document.querySelector('.kgCaseDeath');
   const kgcurDate = document.querySelector('.kgDate');
   kgcaseConfirm.textContent = addCommaDecimal(data.cases);
   kgcaseDeath.textContent = addCommaDecimal(data.deaths);
   kgcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
await fetch('https://covid19-api.org/api/status/la').then(response => response.json())
  .then(data => {
   const lacaseConfirm = document.querySelector('.laCaseConfirm');
   const lacaseDeath = document.querySelector('.laCaseDeath');
   const lacurDate = document.querySelector('.laDate');
   lacaseConfirm.textContent = addCommaDecimal(data.cases);
   lacaseDeath.textContent = addCommaDecimal(data.deaths);
   lacurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/lv').then(response => response.json())
  .then(data => {
   const lvcaseConfirm = document.querySelector('.lvCaseConfirm');
   const lvcaseDeath = document.querySelector('.lvCaseDeath');
   const lvcurDate = document.querySelector('.lvDate');
   lvcaseConfirm.textContent = addCommaDecimal(data.cases);
   lvcaseDeath.textContent = addCommaDecimal(data.deaths);
   lvcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/lb').then(response => response.json())
  .then(data => {
   const lbcaseConfirm = document.querySelector('.lbCaseConfirm');
   const lbcaseDeath = document.querySelector('.lbCaseDeath');
   const lbcurDate = document.querySelector('.lbDate');
   lbcaseConfirm.textContent = addCommaDecimal(data.cases);
   lbcaseDeath.textContent = addCommaDecimal(data.deaths);
   lbcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/ls').then(response => response.json())
  .then(data => {
   const lscaseConfirm = document.querySelector('.lsCaseConfirm');
   const lscaseDeath = document.querySelector('.lsCaseDeath');
   const lscurDate = document.querySelector('.lsDate');
   lscaseConfirm.textContent = addCommaDecimal(data.cases);
   lscaseDeath.textContent = addCommaDecimal(data.deaths);
   lscurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/lr').then(response => response.json())
  .then(data => {
   const lrcaseConfirm = document.querySelector('.lrCaseConfirm');
   const lrcaseDeath = document.querySelector('.lrCaseDeath');
   const lrcurDate = document.querySelector('.lrDate');
   lrcaseConfirm.textContent = addCommaDecimal(data.cases);
   lrcaseDeath.textContent = addCommaDecimal(data.deaths);
   lrcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/ly').then(response => response.json())
  .then(data => {
   const lycaseConfirm = document.querySelector('.lyCaseConfirm');
   const lycaseDeath = document.querySelector('.lyCaseDeath');
   const lycurDate = document.querySelector('.lyDate');
   lycaseConfirm.textContent = addCommaDecimal(data.cases);
   lycaseDeath.textContent = addCommaDecimal(data.deaths);
   lycurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/li').then(response => response.json())
  .then(data => {
   const licaseConfirm = document.querySelector('.liCaseConfirm');
   const licaseDeath = document.querySelector('.liCaseDeath');
   const licurDate = document.querySelector('.liDate');
   licaseConfirm.textContent = addCommaDecimal(data.cases);
   licaseDeath.textContent = addCommaDecimal(data.deaths);
   licurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/lt').then(response => response.json())
  .then(data => {
   const ltcaseConfirm = document.querySelector('.ltCaseConfirm');
   const ltcaseDeath = document.querySelector('.ltCaseDeath');
   const ltcurDate = document.querySelector('.ltDate');
   ltcaseConfirm.textContent = addCommaDecimal(data.cases);
   ltcaseDeath.textContent = addCommaDecimal(data.deaths);
   ltcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/lu').then(response => response.json())
  .then(data => {
   const lucaseConfirm = document.querySelector('.luCaseConfirm');
   const lucaseDeath = document.querySelector('.luCaseDeath');
   const lucurDate = document.querySelector('.luDate');
   lucaseConfirm.textContent = addCommaDecimal(data.cases);
   lucaseDeath.textContent = addCommaDecimal(data.deaths);
   lucurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/mo').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.moCaseConfirm');
   const caseDeath = document.querySelector('.moCaseDeath');
   const curDate = document.querySelector('.moDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mg').then(response => response.json())
  .then(data => {
   const mgcaseConfirm = document.querySelector('.mgCaseConfirm');
   const mgcaseDeath = document.querySelector('.mgCaseDeath');
   const mgcurDate = document.querySelector('.mgDate');
   mgcaseConfirm.textContent = addCommaDecimal(data.cases);
   mgcaseDeath.textContent = addCommaDecimal(data.deaths);
   mgcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mw').then(response => response.json())
  .then(data => {
   const mwcaseConfirm = document.querySelector('.mwCaseConfirm');
   const mwcaseDeath = document.querySelector('.mwCaseDeath');
   const mwcurDate = document.querySelector('.mwDate');
   mwcaseConfirm.textContent = addCommaDecimal(data.cases);
   mwcaseDeath.textContent = addCommaDecimal(data.deaths);
   mwcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/my').then(response => response.json())
  .then(data => {
   const mycaseConfirm = document.querySelector('.myCaseConfirm');
   const mycaseDeath = document.querySelector('.myCaseDeath');
   const mycurDate = document.querySelector('.myDate');
   mycaseConfirm.textContent = addCommaDecimal(data.cases);
   mycaseDeath.textContent = addCommaDecimal(data.deaths);
   mycurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mv').then(response => response.json())
  .then(data => {
   const mvcaseConfirm = document.querySelector('.mvCaseConfirm');
   const mvcaseDeath = document.querySelector('.mvCaseDeath');
   const mvcurDate = document.querySelector('.mvDate');
   mvcaseConfirm.textContent = addCommaDecimal(data.cases);
   mvcaseDeath.textContent = addCommaDecimal(data.deaths);
   mvcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/ml').then(response => response.json())
  .then(data => {
   const mlcaseConfirm = document.querySelector('.mlCaseConfirm');
   const mlcaseDeath = document.querySelector('.mlCaseDeath');
   const mlcurDate = document.querySelector('.mlDate');
   mlcaseConfirm.textContent = addCommaDecimal(data.cases);
   mlcaseDeath.textContent = addCommaDecimal(data.deaths);
   mlcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mt').then(response => response.json())
  .then(data => {
   const mtcaseConfirm = document.querySelector('.mtCaseConfirm');
   const mtcaseDeath = document.querySelector('.mtCaseDeath');
   const mtcurDate = document.querySelector('.mtDate');
   mtcaseConfirm.textContent = addCommaDecimal(data.cases);
   mtcaseDeath.textContent = addCommaDecimal(data.deaths);
   mtcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mh').then(response => response.json())
  .then(data => {
   const mhcaseConfirm = document.querySelector('.mhCaseConfirm');
   const mhcaseDeath = document.querySelector('.mhCaseDeath');
   const mhcurDate = document.querySelector('.mhDate');
   mhcaseConfirm.textContent = addCommaDecimal(data.cases);
   mhcaseDeath.textContent = addCommaDecimal(data.deaths);
   mhcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mq').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mqCaseConfirm');
   const caseDeath = document.querySelector('.mqCaseDeath');
   const curDate = document.querySelector('.mqDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mr').then(response => response.json())
  .then(data => {
   const mrcaseConfirm = document.querySelector('.mrCaseConfirm');
   const mrcaseDeath = document.querySelector('.mrCaseDeath');
   const mrcurDate = document.querySelector('.mrDate');
   mrcaseConfirm.textContent = addCommaDecimal(data.cases);
   mrcaseDeath.textContent = addCommaDecimal(data.deaths);
   mrcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mu').then(response => response.json())
  .then(data => {
   const mucaseConfirm = document.querySelector('.muCaseConfirm');
   const mucaseDeath = document.querySelector('.muCaseDeath');
   const mucurDate = document.querySelector('.muDate');
   mucaseConfirm.textContent = addCommaDecimal(data.cases);
   mucaseDeath.textContent = addCommaDecimal(data.deaths);
   mucurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/yt').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ytCaseConfirm');
   const caseDeath = document.querySelector('.ytCaseDeath');
   const curDate = document.querySelector('.ytDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mx').then(response => response.json())
  .then(data => {
   const mxcaseConfirm = document.querySelector('.mxCaseConfirm');
   const mxcaseDeath = document.querySelector('.mxCaseDeath');
   const mxcurDate = document.querySelector('.mxDate');
   mxcaseConfirm.textContent = addCommaDecimal(data.cases);
   mxcaseDeath.textContent = addCommaDecimal(data.deaths);
   mxcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mc').then(response => response.json())
  .then(data => {
   const mccaseConfirm = document.querySelector('.mcCaseConfirm');
   const mccaseDeath = document.querySelector('.mcCaseDeath');
   const mccurDate = document.querySelector('.mcDate');
   mccaseConfirm.textContent = addCommaDecimal(data.cases);
   mccaseDeath.textContent = addCommaDecimal(data.deaths);
   mccurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mn').then(response => response.json())
  .then(data => {
   const mncaseConfirm = document.querySelector('.mnCaseConfirm');
   const mncaseDeath = document.querySelector('.mnCaseDeath');
   const mncurDate = document.querySelector('.mnDate');
   mncaseConfirm.textContent = addCommaDecimal(data.cases);
   mncaseDeath.textContent = addCommaDecimal(data.deaths);
   mncurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/me').then(response => response.json())
  .then(data => {
   const mecaseConfirm = document.querySelector('.meCaseConfirm');
   const mecaseDeath = document.querySelector('.meCaseDeath');
   const mecurDate = document.querySelector('.meDate');
   mecaseConfirm.textContent = addCommaDecimal(data.cases);
   mecaseDeath.textContent = addCommaDecimal(data.deaths);
   mecurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/ma').then(response => response.json())
  .then(data => {
   const macaseConfirm = document.querySelector('.maCaseConfirm');
   const macaseDeath = document.querySelector('.maCaseDeath');
   const macurDate = document.querySelector('.maDate');
   macaseConfirm.textContent = addCommaDecimal(data.cases);
   macaseDeath.textContent = addCommaDecimal(data.deaths);
   macurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mz').then(response => response.json())
  .then(data => {
   const mzcaseConfirm = document.querySelector('.mzCaseConfirm');
   const mzcaseDeath = document.querySelector('.mzCaseDeath');
   const mzcurDate = document.querySelector('.mzDate');
   mzcaseConfirm.textContent = addCommaDecimal(data.cases);
   mzcaseDeath.textContent = addCommaDecimal(data.deaths);
   mzcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mm').then(response => response.json())
  .then(data => {
   const mmcaseConfirm = document.querySelector('.mmCaseConfirm');
   const mmcaseDeath = document.querySelector('.mmCaseDeath');
   const mmcurDate = document.querySelector('.mmDate');
   mmcaseConfirm.textContent = addCommaDecimal(data.cases);
   mmcaseDeath.textContent = addCommaDecimal(data.deaths);
   mmcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/na').then(response => response.json())
  .then(data => {
   const cnaaseConfirm = document.querySelector('.naCaseConfirm');
   const nacaseDeath = document.querySelector('.naCaseDeath');
   const nacurDate = document.querySelector('.naDate');
   nacaseConfirm.textContent = addCommaDecimal(data.cases);
   nacaseDeath.textContent = addCommaDecimal(data.deaths);
   nacurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/np').then(response => response.json())
  .then(data => {
   const npcaseConfirm = document.querySelector('.npCaseConfirm');
   const npcaseDeath = document.querySelector('.npCaseDeath');
   const npcurDate = document.querySelector('.npDate');
   npcaseConfirm.textContent = addCommaDecimal(data.cases);
   npcaseDeath.textContent = addCommaDecimal(data.deaths);
   npcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                           
await fetch('https://covid19-api.org/api/status/nl').then(response => response.json())
  .then(data => {
   const nlcaseConfirm = document.querySelector('.nlCaseConfirm');
   const nlcaseDeath = document.querySelector('.nlCaseDeath');
   const nlcurDate = document.querySelector('.nlDate');
   nlcaseConfirm.textContent = addCommaDecimal(data.cases);
   nlcaseDeath.textContent = addCommaDecimal(data.deaths);
   nlcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                           
await fetch('https://covid19-api.org/api/status/nz').then(response => response.json())
  .then(data => {
   const nzcaseConfirm = document.querySelector('.nzCaseConfirm');
   const nzcaseDeath = document.querySelector('.nzCaseDeath');
   const nzcurDate = document.querySelector('.nzDate');
   nzcaseConfirm.textContent = addCommaDecimal(data.cases);
   nzcaseDeath.textContent = addCommaDecimal(data.deaths);
   nzcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                           
await fetch('https://covid19-api.org/api/status/ni').then(response => response.json())
  .then(data => {
   const nicaseConfirm = document.querySelector('.niCaseConfirm');
   const nicaseDeath = document.querySelector('.niCaseDeath');
   const nicurDate = document.querySelector('.niDate');
   nicaseConfirm.textContent = addCommaDecimal(data.cases);
   nicaseDeath.textContent = addCommaDecimal(data.deaths);
   nicurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                           
await fetch('https://covid19-api.org/api/status/ne').then(response => response.json())
  .then(data => {
   const necaseConfirm = document.querySelector('.neCaseConfirm');
   const necaseDeath = document.querySelector('.neCaseDeath');
   const necurDate = document.querySelector('.neDate');
   necaseConfirm.textContent = addCommaDecimal(data.cases);
   necaseDeath.textContent = addCommaDecimal(data.deaths);
   necurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                           
await fetch('https://covid19-api.org/api/status/ng').then(response => response.json())
  .then(data => {
   const ngcaseConfirm = document.querySelector('.ngCaseConfirm');
   const ngcaseDeath = document.querySelector('.ngCaseDeath');
   const ngcurDate = document.querySelector('.ngDate');
   ngcaseConfirm.textContent = addCommaDecimal(data.cases);
   ngcaseDeath.textContent = addCommaDecimal(data.deaths);
   ngcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                           
await fetch('https://covid19-api.org/api/status/no').then(response => response.json())
  .then(data => {
   const nocaseConfirm = document.querySelector('.noCaseConfirm');
   const nocaseDeath = document.querySelector('.noCaseDeath');
   const nocurDate = document.querySelector('.noDate');
   nocaseConfirm.textContent = addCommaDecimal(data.cases);
   nocaseDeath.textContent = addCommaDecimal(data.deaths);
   nocurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                           
await fetch('https://covid19-api.org/api/status/om').then(response => response.json())
  .then(data => {
   const omcaseConfirm = document.querySelector('.omCaseConfirm');
   const omcaseDeath = document.querySelector('.omCaseDeath');
   const omcurDate = document.querySelector('.omDate');
   omcaseConfirm.textContent = addCommaDecimal(data.cases);
   omcaseDeath.textContent = addCommaDecimal(data.deaths);
   omcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                              
await fetch('https://covid19-api.org/api/status/pk').then(response => response.json())
  .then(data => {
   const pkcaseConfirm = document.querySelector('.pkCaseConfirm');
   const pkcaseDeath = document.querySelector('.pkCaseDeath');
   const pkcurDate = document.querySelector('.pkDate');
   pkcaseConfirm.textContent = addCommaDecimal(data.cases);
   pkcaseDeath.textContent = addCommaDecimal(data.deaths);
   pkcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                              
await fetch('https://covid19-api.org/api/status/pa').then(response => response.json())
  .then(data => {
   const pacaseConfirm = document.querySelector('.paCaseConfirm');
   const pacaseDeath = document.querySelector('.paCaseDeath');
   const pacurDate = document.querySelector('.paDate');
   pacaseConfirm.textContent = addCommaDecimal(data.cases);
   pacaseDeath.textContent = addCommaDecimal(data.deaths);
   pacurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/pg').then(response => response.json())
  .then(data => {
   const pgcaseConfirm = document.querySelector('.pgCaseConfirm');
   const pgcaseDeath = document.querySelector('.pgCaseDeath');
   const pgcurDate = document.querySelector('.pgDate');
   pgcaseConfirm.textContent = addCommaDecimal(data.cases);
   pgcaseDeath.textContent = addCommaDecimal(data.deaths);
   pgcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/py').then(response => response.json())
  .then(data => {
   const pycaseConfirm = document.querySelector('.pyCaseConfirm');
   const pycaseDeath = document.querySelector('.pyCaseDeath');
   const pycurDate = document.querySelector('.pyDate');
   pycaseConfirm.textContent = addCommaDecimal(data.cases);
   pycaseDeath.textContent = addCommaDecimal(data.deaths);
   pycurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/pe').then(response => response.json())
  .then(data => {
   const pecaseConfirm = document.querySelector('.peCaseConfirm');
   const pecaseDeath = document.querySelector('.peCaseDeath');
   const pecurDate = document.querySelector('.peDate');
   pecaseConfirm.textContent = addCommaDecimal(data.cases);
   pecaseDeath.textContent = addCommaDecimal(data.deaths);
   pecurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/ph').then(response => response.json())
  .then(data => {
   const phcaseConfirm = document.querySelector('.phCaseConfirm');
   const phcaseDeath = document.querySelector('.phCaseDeath');
   const phcurDate = document.querySelector('.phDate');
   phcaseConfirm.textContent = addCommaDecimal(data.cases);
   phcaseDeath.textContent = addCommaDecimal(data.deaths);
   phcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/bo').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.boCaseConfirm');
   const caseDeath = document.querySelector('.boCaseDeath');
   const curDate = document.querySelector('.boDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/pl').then(response => response.json())
  .then(data => {
   const plcaseConfirm = document.querySelector('.plCaseConfirm');
   const plcaseDeath = document.querySelector('.plCaseDeath');
   const plcurDate = document.querySelector('.plDate');
   plcaseConfirm.textContent = addCommaDecimal(data.cases);
   plcaseDeath.textContent = addCommaDecimal(data.deaths);
   plcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/pt').then(response => response.json())
  .then(data => {
   const ptcaseConfirm = document.querySelector('.ptCaseConfirm');
   const ptcaseDeath = document.querySelector('.ptCaseDeath');
   const ptcurDate = document.querySelector('.ptDate');
   ptcaseConfirm.textContent = addCommaDecimal(data.cases);
   ptcaseDeath.textContent = addCommaDecimal(data.deaths);
   ptcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/pr').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.prCaseConfirm');
   const caseDeath = document.querySelector('.prCaseDeath');
   const curDate = document.querySelector('.prDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/qa').then(response => response.json())
  .then(data => {
   const qacaseConfirm = document.querySelector('.qaCaseConfirm');
   const qacaseDeath = document.querySelector('.qaCaseDeath');
   const qacurDate = document.querySelector('.qaDate');
   qacaseConfirm.textContent = addCommaDecimal(data.cases);
   qacaseDeath.textContent = addCommaDecimal(data.deaths);
   qacurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                    
await fetch('https://covid19-api.org/api/status/kr').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.krCaseConfirm');
   const caseDeath = document.querySelector('.krCaseDeath');
   const curDate = document.querySelector('.krDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                    
await fetch('https://covid19-api.org/api/status/xk').then(response => response.json())
  .then(data => {
   const xkcaseConfirm = document.querySelector('.xkCaseConfirm');
   const xkcaseDeath = document.querySelector('.xkCaseDeath');
   const xkcurDate = document.querySelector('.xkDate');
   xkcaseConfirm.textContent = addCommaDecimal(data.cases);
   xkcaseDeath.textContent = addCommaDecimal(data.deaths);
   xkcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                    
await fetch('https://covid19-api.org/api/status/md').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mdCaseConfirm');
   const caseDeath = document.querySelector('.mdCaseDeath');
   const curDate = document.querySelector('.mdDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                    
await fetch('https://covid19-api.org/api/status/mk').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mkCaseConfirm');
   const caseDeath = document.querySelector('.mkCaseDeath');
   const curDate = document.querySelector('.mkDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                       
await fetch('https://covid19-api.org/api/status/re').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.reCaseConfirm');
   const caseDeath = document.querySelector('.reCaseDeath');
   const curDate = document.querySelector('.reDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/ro').then(response => response.json())
  .then(data => {
   const rocaseConfirm = document.querySelector('.roCaseConfirm');
   const rocaseDeath = document.querySelector('.roCaseDeath');
   const rocurDate = document.querySelector('.roDate');
   rocaseConfirm.textContent = addCommaDecimal(data.cases);
   rocaseDeath.textContent = addCommaDecimal(data.deaths);
   rocurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/ru').then(response => response.json())
  .then(data => {
   const rucaseConfirm = document.querySelector('.ruCaseConfirm');
   const rucaseDeath = document.querySelector('.ruCaseDeath');
   const rucurDate = document.querySelector('.ruDate');
   rucaseConfirm.textContent = addCommaDecimal(data.cases);
   rucaseDeath.textContent = addCommaDecimal(data.deaths);
   rucurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/rw').then(response => response.json())
  .then(data => {
   const rwcaseConfirm = document.querySelector('.rwCaseConfirm');
   const rwcaseDeath = document.querySelector('.rwCaseDeath');
   const rwcurDate = document.querySelector('.rwDate');
   rwcaseConfirm.textContent = addCommaDecimal(data.cases);
   rwcaseDeath.textContent = addCommaDecimal(data.deaths);
   rwcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/bl').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.blCaseConfirm');
   const caseDeath = document.querySelector('.blCaseDeath');
   const curDate = document.querySelector('.blDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/kn').then(response => response.json())
  .then(data => {
   const kncaseConfirm = document.querySelector('.knCaseConfirm');
   const kncaseDeath = document.querySelector('.knCaseDeath');
   const kncurDate = document.querySelector('.knDate');
   kncaseConfirm.textContent = addCommaDecimal(data.cases);
   kncaseDeath.textContent = addCommaDecimal(data.deaths);
   kncurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/lc').then(response => response.json())
  .then(data => {
   const lccaseConfirm = document.querySelector('.lcCaseConfirm');
   const lccaseDeath = document.querySelector('.lcCaseDeath');
   const lccurDate = document.querySelector('.lcDate');
   lccaseConfirm.textContent = addCommaDecimal(data.cases);
   lccaseDeath.textContent = addCommaDecimal(data.deaths);
   lccurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/mf').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mfCaseConfirm');
   const caseDeath = document.querySelector('.mfCaseDeath');
   const curDate = document.querySelector('.mfDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/vc').then(response => response.json())
  .then(data => {
   const vccaseConfirm = document.querySelector('.vcCaseConfirm');
   const vccaseDeath = document.querySelector('.vcCaseDeath');
   const vccurDate = document.querySelector('.vcDate');
   vccaseConfirm.textContent = addCommaDecimal(data.cases);
   vccaseDeath.textContent = addCommaDecimal(data.deaths);
   vccurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/ws').then(response => response.json())
  .then(data => {
   const wscaseConfirm = document.querySelector('.wsCaseConfirm');
   const wscaseDeath = document.querySelector('.wsCaseDeath');
   const wscurDate = document.querySelector('.wsDate');
   wscaseConfirm.textContent = addCommaDecimal(data.cases);
   wscaseDeath.textContent = addCommaDecimal(data.deaths);
   wscurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/sm').then(response => response.json())
  .then(data => {
   const smcaseConfirm = document.querySelector('.smCaseConfirm');
   const smcaseDeath = document.querySelector('.smCaseDeath');
   const smcurDate = document.querySelector('.smDate');
   smcaseConfirm.textContent = addCommaDecimal(data.cases);
   smcaseDeath.textContent = addCommaDecimal(data.deaths);
   smcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/st').then(response => response.json())
  .then(data => {
   const stcaseConfirm = document.querySelector('.stCaseConfirm');
   const stcaseDeath = document.querySelector('.stCaseDeath');
   const stcurDate = document.querySelector('.stDate');
   stcaseConfirm.textContent = addCommaDecimal(data.cases);
   stcaseDeath.textContent = addCommaDecimal(data.deaths);
   stcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sa').then(response => response.json())
  .then(data => {
   const sacaseConfirm = document.querySelector('.saCaseConfirm');
   const sacaseDeath = document.querySelector('.saCaseDeath');
   const sacurDate = document.querySelector('.saDate');
   sacaseConfirm.textContent = addCommaDecimal(data.cases);
   sacaseDeath.textContent = addCommaDecimal(data.deaths);
   sacurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sn').then(response => response.json())
  .then(data => {
   const sncaseConfirm = document.querySelector('.snCaseConfirm');
   const sncaseDeath = document.querySelector('.snCaseDeath');
   const sncurDate = document.querySelector('.snDate');
   sncaseConfirm.textContent = addCommaDecimal(data.cases);
   sncaseDeath.textContent = addCommaDecimal(data.deaths);
   sncurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/rs').then(response => response.json())
  .then(data => {
   const rscaseConfirm = document.querySelector('.rsCaseConfirm');
   const rscaseDeath = document.querySelector('.rsCaseDeath');
   const rscurDate = document.querySelector('.rsDate');
   rscaseConfirm.textContent = addCommaDecimal(data.cases);
   rscaseDeath.textContent = addCommaDecimal(data.deaths);
   rscurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sc').then(response => response.json())
  .then(data => {
   const sccaseConfirm = document.querySelector('.scCaseConfirm');
   const sccaseDeath = document.querySelector('.scCaseDeath');
   const sccurDate = document.querySelector('.scDate');
   sccaseConfirm.textContent = addCommaDecimal(data.cases);
   sccaseDeath.textContent = addCommaDecimal(data.deaths);
   sccurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sl').then(response => response.json())
  .then(data => {
   const slcaseConfirm = document.querySelector('.slCaseConfirm');
   const slcaseDeath = document.querySelector('.slCaseDeath');
   const slcurDate = document.querySelector('.slDate');
   slcaseConfirm.textContent = addCommaDecimal(data.cases);
   slcaseDeath.textContent = addCommaDecimal(data.deaths);
   slcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sg').then(response => response.json())
  .then(data => {
   const sgcaseConfirm = document.querySelector('.sgCaseConfirm');
   const sgcaseDeath = document.querySelector('.sgCaseDeath');
   const sgcurDate = document.querySelector('.sgDate');
   sgcaseConfirm.textContent = addCommaDecimal(data.cases);
   sgcaseDeath.textContent = addCommaDecimal(data.deaths);
   sgcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sk').then(response => response.json())
  .then(data => {
   const skcaseConfirm = document.querySelector('.skCaseConfirm');
   const skcaseDeath = document.querySelector('.skCaseDeath');
   const skcurDate = document.querySelector('.skDate');
   skcaseConfirm.textContent = addCommaDecimal(data.cases);
   skcaseDeath.textContent = addCommaDecimal(data.deaths);
   skcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/si').then(response => response.json())
  .then(data => {
   const sicaseConfirm = document.querySelector('.siCaseConfirm');
   const sicaseDeath = document.querySelector('.siCaseDeath');
   const sicurDate = document.querySelector('.siDate');
   sicaseConfirm.textContent = addCommaDecimal(data.cases);
   sicaseDeath.textContent = addCommaDecimal(data.deaths);
   sicurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sb').then(response => response.json())
  .then(data => {
   const sbcaseConfirm = document.querySelector('.sbCaseConfirm');
   const sbcaseDeath = document.querySelector('.sbCaseDeath');
   const sbcurDate = document.querySelector('.sbDate');
   sbcaseConfirm.textContent = addCommaDecimal(data.cases);
   sbcaseDeath.textContent = addCommaDecimal(data.deaths);
   sbcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/so').then(response => response.json())
  .then(data => {
   const socaseConfirm = document.querySelector('.soCaseConfirm');
   const socaseDeath = document.querySelector('.soCaseDeath');
   const socurDate = document.querySelector('.soDate');
   socaseConfirm.textContent = addCommaDecimal(data.cases);
   socaseDeath.textContent = addCommaDecimal(data.deaths);
   socurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/za').then(response => response.json())
  .then(data => {
   const zacaseConfirm = document.querySelector('.zaCaseConfirm');
   const zacaseDeath = document.querySelector('.zaCaseDeath');
   const zacurDate = document.querySelector('.zaDate');
   zacaseConfirm.textContent = addCommaDecimal(data.cases);
   zacaseDeath.textContent = addCommaDecimal(data.deaths);
   zacurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/ss').then(response => response.json())
  .then(data => {
   const sscaseConfirm = document.querySelector('.ssCaseConfirm');
   const sscaseDeath = document.querySelector('.ssCaseDeath');
   const sscurDate = document.querySelector('.ssDate');
   sscaseConfirm.textContent = addCommaDecimal(data.cases);
   sscaseDeath.textContent = addCommaDecimal(data.deaths);
   sscurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/es').then(response => response.json())
  .then(data => {
   const escaseConfirm = document.querySelector('.esCaseConfirm');
   const escaseDeath = document.querySelector('.esCaseDeath');
   const escurDate = document.querySelector('.esDate');
   escaseConfirm.textContent = addCommaDecimal(data.cases);
   escaseDeath.textContent = addCommaDecimal(data.deaths);
   escurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/lk').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.lkCaseConfirm');
   const caseDeath = document.querySelector('.lkCaseDeath');
   const curDate = document.querySelector('.lkDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/ps').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.psCaseConfirm');
   const caseDeath = document.querySelector('.psCaseDeath');
   const curDate = document.querySelector('.psDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sd').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.sdCaseConfirm');
   const caseDeath = document.querySelector('.sdCaseDeath');
   const curDate = document.querySelector('.sdDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sr').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.srCaseConfirm');
   const caseDeath = document.querySelector('.srCaseDeath');
   const curDate = document.querySelector('.srDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sz').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.szCaseConfirm');
   const caseDeath = document.querySelector('.szCaseDeath');
   const curDate = document.querySelector('.szDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/se').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.seCaseConfirm');
   const caseDeath = document.querySelector('.seCaseDeath');
   const curDate = document.querySelector('.seDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/ch').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.chCaseConfirm');
   const caseDeath = document.querySelector('.chCaseDeath');
   const curDate = document.querySelector('.chDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sy').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.syCaseConfirm');
   const caseDeath = document.querySelector('.syCaseDeath');
   const curDate = document.querySelector('.syDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/tw').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.twCaseConfirm');
   const caseDeath = document.querySelector('.twCaseDeath');
   const curDate = document.querySelector('.twDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                
await fetch('https://covid19-api.org/api/status/tj').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.tjCaseConfirm');
   const caseDeath = document.querySelector('.tjCaseDeath');
   const curDate = document.querySelector('.tjDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                
await fetch('https://covid19-api.org/api/status/th').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.thCaseConfirm');
   const caseDeath = document.querySelector('.thCaseDeath');
   const curDate = document.querySelector('.thDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                
await fetch('https://covid19-api.org/api/status/tl').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.tlCaseConfirm');
   const caseDeath = document.querySelector('.tlCaseDeath');
   const curDate = document.querySelector('.tlDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                
await fetch('https://covid19-api.org/api/status/tg').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.tgCaseConfirm');
   const caseDeath = document.querySelector('.tgCaseDeath');
   const curDate = document.querySelector('.tgDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                
await fetch('https://covid19-api.org/api/status/tt').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ttCaseConfirm');
   const caseDeath = document.querySelector('.ttCaseDeath');
   const curDate = document.querySelector('.ttDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                
await fetch('https://covid19-api.org/api/status/tn').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.tnCaseConfirm');
   const caseDeath = document.querySelector('.tnCaseDeath');
   const curDate = document.querySelector('.tnDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                
await fetch('https://covid19-api.org/api/status/tr').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.trCaseConfirm');
   const caseDeath = document.querySelector('.trCaseDeath');
   const curDate = document.querySelector('.trDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                
await fetch('https://covid19-api.org/api/status/ug').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ugCaseConfirm');
   const caseDeath = document.querySelector('.ugCaseDeath');
   const curDate = document.querySelector('.ugDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                   
await fetch('https://covid19-api.org/api/status/ua').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.uaCaseConfirm');
   const caseDeath = document.querySelector('.uaCaseDeath');
   const curDate = document.querySelector('.uaDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                   
await fetch('https://covid19-api.org/api/status/ae').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.aeCaseConfirm');
   const caseDeath = document.querySelector('.aeCaseDeath');
   const curDate = document.querySelector('.aeDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                   
await fetch('https://covid19-api.org/api/status/gb').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gbCaseConfirm');
   const caseDeath = document.querySelector('.gbCaseDeath');
   const curDate = document.querySelector('.gbDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                   
await fetch('https://covid19-api.org/api/status/tz').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.tzCaseConfirm');
   const caseDeath = document.querySelector('.tzCaseDeath');
   const curDate = document.querySelector('.tzDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                   
await fetch('https://covid19-api.org/api/status/uy').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.uyCaseConfirm');
   const caseDeath = document.querySelector('.uyCaseDeath');
   const curDate = document.querySelector('.uyDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                   
await fetch('https://covid19-api.org/api/status/uz').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.uzCaseConfirm');
   const caseDeath = document.querySelector('.uzCaseDeath');
   const curDate = document.querySelector('.uzDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                   
await fetch('https://covid19-api.org/api/status/vu').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.vuCaseConfirm');
   const caseDeath = document.querySelector('.vuCaseDeath');
   const curDate = document.querySelector('.vuDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                      
await fetch('https://covid19-api.org/api/status/vn').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.vnCaseConfirm');
   const caseDeath = document.querySelector('.vnCaseDeath');
   const curDate = document.querySelector('.vnDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                      
await fetch('https://covid19-api.org/api/status/eh').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ehCaseConfirm');
   const caseDeath = document.querySelector('.ehCaseDeath');
   const curDate = document.querySelector('.ehDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                      
await fetch('https://covid19-api.org/api/status/ye').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.yeCaseConfirm');
   const caseDeath = document.querySelector('.yeCaseDeath');
   const curDate = document.querySelector('.yeDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                      
await fetch('https://covid19-api.org/api/status/zm').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.zmCaseConfirm');
   const caseDeath = document.querySelector('.zmCaseDeath');
   const curDate = document.querySelector('.zmDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                      
await fetch('https://covid19-api.org/api/status/zw').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.zyCaseConfirm');
   const caseDeath = document.querySelector('.zyCaseDeath');
   const curDate = document.querySelector('.zyDate');
   caseConfirm.textContent = addComma(data.cases);
   caseDeath.textContent = addComma(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
*/

getCountryCountFromCovidApi();

(async function() {
  let urlList = [
    "https://api.covidtracking.com/v1/us/current.json",
    "https://api.covidtracking.com/v1/states/current.json"
  ];

  const promiseList = urlList.map((url) => {
    return fetch(url)
        .then(response => response.json())
  })

  const jsonBaseList = await Promise.all(promiseList)
  console.log('All done.');
  console.log('jsonBaseList: ', jsonBaseList)
})()

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
      let result;
      let d = input.toString().length;
      if ((input.toString().length > 3 && input.toString().length < 7)) {
         result = input.toString().slice(0,d-3) + ',' + input.toString().slice(d-3,d);
      } else if ((input.toString().length >= 7 && input.toString().length < 10)) {
         result = input.toString().slice(0,d-6) + ',' + input.toString().slice(d-6,d-3) + ',' + input.toString().slice(d-3,d);
      } else if ((input.toString().length >= 10 && input.toString().length < 13)) {
         result = input.toString().slice(0,d-9) + ',' + input.toString().slice(d-9,d-6) + ',' + input.toString().slice(d-6,d-3) + ',' + input.toString().slice(d-3,d);
      } else {
         result = input;
      }
      return result;
    }

function addCommaDecimal(x) {
    if (x == undefined || x == null) {
      return x = "Error";
    } else {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }   
}

   const determineNull = input => input == undefined ? input = "NA" : input;
