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
   country191.textContent = data.Countries[191].Country
   caseConfirm191.textContent = addCommaDecimal(data.Countries[191].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[191].NewConfirmed) +')'
   caseDeath191.textContent = addCommaDecimal(data.Countries[191].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[191].NewDeaths) +')'
   date191.textContent = new Date(data.Countries[191].Date).toString().substring(0,15)    
  });
}

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
