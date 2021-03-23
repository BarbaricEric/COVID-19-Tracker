//DOM Elements
const usCaseDeath = document.querySelector(".us-case-death");
const usCaseConfirm = document.querySelector(".us-case-confirmed");
const waCaseConfirm = document.querySelector(".wa-case-confirmed");
const waCaseDeath = document.querySelector(".wa-case-confirmed");
const nyCaseDeath = document.querySelector(".ny-case-confirmed");
const nyCaseConfirm = document.querySelector(".ny-case-confirmed");
const caCaseDeath = document.querySelector("#us-covidtrack-ca-death");
const caCaseConfirm = document.querySelector("#us-covidtrack-ca-confirm");  

//Define API
const globalapi1 = 'https://corona-api.com/countries';
const globalapi2 = 'https://api.covid19api.com/summary';
const localapi1 = 'https://api.covidtracking.com/v1/us/current.json';
const localapi2 = 'https://corona-api.com/countries/US';

//US Count from covid19-api.org      
 fetch(globalapi2, {
  method: 'GET',
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },   
}).then(response => {
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
   const datea = new Intl.DateTimeFormat('default', options).format(date)   
   usCaseDeath.textContent = addCommas(data.Countries[181].TotalDeaths) + ' as of ' + datea;   
   usCaseConfirm.textContent = addCommas(data.Countries[181].TotalConfirmed) + ' as of ' + datea;   
   /*usCaseDeath.textContent = data.deaths + ' as of ' + data.last_update.toString().substring(6,7) + '/' + data.last_update.toString().substring(8,10) + '/' + data.last_update.toString().substring(0,4); 
   usCaseConfirm.textContent = data.cases + ' as of ' + data.last_update.toString().substring(6,7) + '/' + data.last_update.toString().substring(8,10) + '/' + data.last_update.toString().substring(0,4);
   data.last_update.toString().substring(0, 10).replace(/-{1,}/g, '/') => year/month/day*/;   
  });     
         
//US Count from covid-api.com      
   fetch('https://covid-api.com/api/reports?date=2021-03-22&iso=USA')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const usCaseConfirm = document.querySelector(".us-johnhopkins-confirm");
   const usCaseDeath = document.querySelector(".us-johnhopkins-death");
   const usCaseRecent = document.querySelector(".us-johnhopkins-recent");
   const alCaseConfirm = document.querySelector(".us-johnhopkins-al-confirm");
   const alCaseDeath = document.querySelector(".us-johnhopkins-al-death");
   const alCaseRecent = document.querySelector(".us-johnhopkins-al-recent");
   const akCaseConfirm = document.querySelector(".us-johnhopkins-ak-confirm");
   const akCaseDeath = document.querySelector(".us-johnhopkins-ak-death");
   const akCaseRecent = document.querySelector(".us-johnhopkins-ak-recent");
   const asCaseConfirm = document.querySelector(".us-johnhopkins-as-confirm");
   const asCaseDeath = document.querySelector(".us-johnhopkins-as-death");
   const asCaseRecent = document.querySelector(".us-johnhopkins-as-recent");
   const azCaseConfirm = document.querySelector(".us-johnhopkins-az-confirm");
   const azCaseDeath = document.querySelector(".us-johnhopkins-az-death");
   const azCaseRecent = document.querySelector(".us-johnhopkins-az-recent");
   const arCaseConfirm = document.querySelector(".us-johnhopkins-ar-confirm");
   const arCaseDeath = document.querySelector(".us-johnhopkins-ar-death");
   const arCaseRecent = document.querySelector(".us-johnhopkins-ar-recent");
   const caCaseConfirm = document.querySelector(".us-johnhopkins-ca-confirm");
   const caCaseDeath = document.querySelector(".us-johnhopkins-ca-death");
   const caCaseRecent = document.querySelector(".us-johnhopkins-ca-recent");
   const coCaseConfirm = document.querySelector(".us-johnhopkins-co-confirm");
   const coCaseDeath = document.querySelector(".us-johnhopkins-co-death");
   const coCaseRecent = document.querySelector(".us-johnhopkins-co-recent");
   const ctCaseConfirm = document.querySelector(".us-johnhopkins-ct-confirm");
   const ctCaseDeath = document.querySelector(".us-johnhopkins-ct-death");
   const ctCaseRecent = document.querySelector(".us-johnhopkins-ct-recent");
   const deCaseConfirm = document.querySelector(".us-johnhopkins-de-confirm");
   const deCaseDeath = document.querySelector(".us-johnhopkins-de-death");
   const deCaseRecent = document.querySelector(".us-johnhopkins-de-recent");
   const dcCaseConfirm = document.querySelector(".us-johnhopkins-dc-confirm");
   const dcCaseDeath = document.querySelector(".us-johnhopkins-dc-death");
   const dcCaseRecent = document.querySelector(".us-johnhopkins-dc-recent");
   const flCaseConfirm = document.querySelector(".us-johnhopkins-fl-confirm");
   const flCaseDeath = document.querySelector(".us-johnhopkins-fl-death");
   const flCaseRecent = document.querySelector(".us-johnhopkins-fl-recent");
   const gaCaseConfirm = document.querySelector(".us-johnhopkins-ga-confirm");
   const gaCaseDeath = document.querySelector(".us-johnhopkins-ga-death");
   const gaCaseRecent = document.querySelector(".us-johnhopkins-ga-recent");
   const guCaseConfirm = document.querySelector(".us-johnhopkins-gu-confirm");
   const guCaseDeath = document.querySelector(".us-johnhopkins-gu-death");
   const guCaseRecent = document.querySelector(".us-johnhopkins-gu-recent");
   const hiCaseConfirm = document.querySelector(".us-johnhopkins-hi-confirm");
   const hiCaseDeath = document.querySelector(".us-johnhopkins-hi-death");
   const hiCaseRecent = document.querySelector(".us-johnhopkins-hi-recent");
   const idCaseConfirm = document.querySelector(".us-johnhopkins-id-confirm");
   const idCaseDeath = document.querySelector(".us-johnhopkins-id-death");
   const idCaseRecent = document.querySelector(".us-johnhopkins-id-recent");
   const ilCaseConfirm = document.querySelector(".us-johnhopkins-il-confirm");
   const ilCaseDeath = document.querySelector(".us-johnhopkins-il-death");
   const ilCaseRecent = document.querySelector(".us-johnhopkins-il-recent");
   const inCaseConfirm = document.querySelector(".us-johnhopkins-in-confirm");
   const inCaseDeath = document.querySelector(".us-johnhopkins-in-death");
   const inCaseRecent = document.querySelector(".us-johnhopkins-in-recent");
   const iaCaseConfirm = document.querySelector(".us-johnhopkins-ia-confirm");
   const iaCaseDeath = document.querySelector(".us-johnhopkins-ia-death");
   const iaCaseRecent = document.querySelector(".us-johnhopkins-ia-recent");
   const ksCaseConfirm = document.querySelector(".us-johnhopkins-ks-confirm");
   const ksCaseDeath = document.querySelector(".us-johnhopkins-ks-death");
   const ksCaseRecent = document.querySelector(".us-johnhopkins-ks-recent");
   const kyCaseConfirm = document.querySelector(".us-johnhopkins-ky-confirm");
   const kyCaseDeath = document.querySelector(".us-johnhopkins-ky-death");
   const kyCaseRecent = document.querySelector(".us-johnhopkins-ky-recent");
   const laCaseConfirm = document.querySelector(".us-johnhopkins-la-confirm");
   const laCaseDeath = document.querySelector(".us-johnhopkins-la-death");
   const laCaseRecent = document.querySelector(".us-johnhopkins-la-recent");
   const meCaseConfirm = document.querySelector(".us-johnhopkins-me-confirm");
   const meCaseDeath = document.querySelector(".us-johnhopkins-me-death");
   const meCaseRecent = document.querySelector(".us-johnhopkins-me-recent");
   const mdCaseConfirm = document.querySelector(".us-johnhopkins-md-confirm");
   const mdCaseDeath = document.querySelector(".us-johnhopkins-md-death");
   const mdCaseRecent = document.querySelector(".us-johnhopkins-md-recent");
   const maCaseConfirm = document.querySelector(".us-johnhopkins-ma-confirm");
   const maCaseDeath = document.querySelector(".us-johnhopkins-ma-death");
   const maCaseRecent = document.querySelector(".us-johnhopkins-ma-recent");
   const miCaseConfirm = document.querySelector(".us-johnhopkins-mi-confirm");
   const miCaseDeath = document.querySelector(".us-johnhopkins-mi-death");
   const miCaseRecent = document.querySelector(".us-johnhopkins-mi-recent");
   const mnCaseConfirm = document.querySelector(".us-johnhopkins-mn-confirm");
   const mnCaseDeath = document.querySelector(".us-johnhopkins-mn-death");
   const mnCaseRecent = document.querySelector(".us-johnhopkins-mn-recent");
   const msCaseConfirm = document.querySelector(".us-johnhopkins-ms-confirm");
   const msCaseDeath = document.querySelector(".us-johnhopkins-ms-death");
   const msCaseRecent = document.querySelector(".us-johnhopkins-ms-recent");
   const moCaseConfirm = document.querySelector(".us-johnhopkins-mo-confirm");
   const moCaseDeath = document.querySelector(".us-johnhopkins-mo-death");
   const moCaseRecent = document.querySelector(".us-johnhopkins-mo-recent");
   const mtCaseConfirm = document.querySelector(".us-johnhopkins-mt-confirm");
   const mtCaseDeath = document.querySelector(".us-johnhopkins-mt-death");
   const mtCaseRecent = document.querySelector(".us-johnhopkins-mt-recent");
   const neCaseConfirm = document.querySelector(".us-johnhopkins-ne-confirm");
   const neCaseDeath = document.querySelector(".us-johnhopkins-ne-death");
   const neCaseRecent = document.querySelector(".us-johnhopkins-ne-recent");
   const nvCaseConfirm = document.querySelector(".us-johnhopkins-nv-confirm");
   const nvCaseDeath = document.querySelector(".us-johnhopkins-nv-death");
   const nvCaseRecent = document.querySelector(".us-johnhopkins-nv-recent");
   const nhCaseConfirm = document.querySelector(".us-johnhopkins-nh-confirm");
   const nhCaseDeath = document.querySelector(".us-johnhopkins-nh-death");
   const nhCaseRecent = document.querySelector(".us-johnhopkins-nh-recent");
   const njCaseConfirm = document.querySelector(".us-johnhopkins-nj-confirm");
   const njCaseDeath = document.querySelector(".us-johnhopkins-nj-death");
   const njCaseRecent = document.querySelector(".us-johnhopkins-nj-recent");
   const nmCaseConfirm = document.querySelector(".us-johnhopkins-nm-confirm");
   const nmCaseDeath = document.querySelector(".us-johnhopkins-nm-death");
   const nmCaseRecent = document.querySelector(".us-johnhopkins-nm-recent");
   const nyCaseConfirm = document.querySelector(".us-johnhopkins-ny-confirm");
   const nyCaseDeath = document.querySelector(".us-johnhopkins-ny-death");
   const nyCaseRecent = document.querySelector(".us-johnhopkins-ny-recent");
   const ncCaseConfirm = document.querySelector(".us-johnhopkins-nc-confirm");
   const ncCaseDeath = document.querySelector(".us-johnhopkins-nc-death");
   const ncCaseRecent = document.querySelector(".us-johnhopkins-nc-recent");
   const ndCaseConfirm = document.querySelector(".us-johnhopkins-nd-confirm");
   const ndCaseDeath = document.querySelector(".us-johnhopkins-nd-death");
   const ndCaseRecent = document.querySelector(".us-johnhopkins-nd-recent");
   const mpCaseConfirm = document.querySelector(".us-johnhopkins-mp-confirm");
   const mpCaseDeath = document.querySelector(".us-johnhopkins-mp-death");
   const mpCaseRecent = document.querySelector(".us-johnhopkins-mp-recent");
   const ohCaseConfirm = document.querySelector(".us-johnhopkins-oh-confirm");
   const ohCaseDeath = document.querySelector(".us-johnhopkins-oh-death");
   const ohCaseRecent = document.querySelector(".us-johnhopkins-oh-recent");
   const okCaseConfirm = document.querySelector(".us-johnhopkins-ok-confirm");
   const okCaseDeath = document.querySelector(".us-johnhopkins-ok-death");
   const okCaseRecent = document.querySelector(".us-johnhopkins-ok-recent");
   const orCaseConfirm = document.querySelector(".us-johnhopkins-or-confirm");
   const orCaseDeath = document.querySelector(".us-johnhopkins-or-death");
   const orCaseRecent = document.querySelector(".us-johnhopkins-or-recent");
   const paCaseConfirm = document.querySelector(".us-johnhopkins-pa-confirm");
   const paCaseDeath = document.querySelector(".us-johnhopkins-pa-death");
   const paCaseRecent = document.querySelector(".us-johnhopkins-pa-recent");
   const prCaseConfirm = document.querySelector(".us-johnhopkins-pr-confirm");
   const prCaseDeath = document.querySelector(".us-johnhopkins-pr-death");
   const prCaseRecent = document.querySelector(".us-johnhopkins-pr-recent");
   const riCaseConfirm = document.querySelector(".us-johnhopkins-ri-confirm");
   const riCaseDeath = document.querySelector(".us-johnhopkins-ri-death");
   const riCaseRecent = document.querySelector(".us-johnhopkins-ri-recent");
   const scCaseConfirm = document.querySelector(".us-johnhopkins-sc-confirm");
   const scCaseDeath = document.querySelector(".us-johnhopkins-sc-death");
   const scCaseRecent = document.querySelector(".us-johnhopkins-sc-recent");
   const sdCaseConfirm = document.querySelector(".us-johnhopkins-sd-confirm");
   const sdCaseDeath = document.querySelector(".us-johnhopkins-sd-death");
   const sdCaseRecent = document.querySelector(".us-johnhopkins-sd-recent");
   const tnCaseConfirm = document.querySelector(".us-johnhopkins-tn-confirm");
   const tnCaseDeath = document.querySelector(".us-johnhopkins-tn-death");
   const tnCaseRecent = document.querySelector(".us-johnhopkins-tn-recent");
   const txCaseConfirm = document.querySelector(".us-johnhopkins-tx-confirm");
   const txCaseDeath = document.querySelector(".us-johnhopkins-tx-death");
   const txCaseRecent = document.querySelector(".us-johnhopkins-tx-recent");
   const viCaseConfirm = document.querySelector(".us-johnhopkins-vi-confirm");
   const viCaseDeath = document.querySelector(".us-johnhopkins-vi-death");
   const viCaseRecent = document.querySelector(".us-johnhopkins-vi-recent");
   const utCaseConfirm = document.querySelector(".us-johnhopkins-ut-confirm");
   const utCaseDeath = document.querySelector(".us-johnhopkins-ut-death");
   const utCaseRecent = document.querySelector(".us-johnhopkins-ut-recent");
   const vtCaseConfirm = document.querySelector(".us-johnhopkins-vt-confirm");
   const vtCaseDeath = document.querySelector(".us-johnhopkins-vt-death");
   const vtCaseRecent = document.querySelector(".us-johnhopkins-vt-recent");
   const vaCaseConfirm = document.querySelector(".us-johnhopkins-va-confirm");
   const vaCaseDeath = document.querySelector(".us-johnhopkins-va-death");
   const vaCaseRecent = document.querySelector(".us-johnhopkins-va-recent");
   const waCaseConfirm = document.querySelector(".us-johnhopkins-wa-confirm");
   const waCaseDeath = document.querySelector(".us-johnhopkins-wa-death");
   const waCaseRecent = document.querySelector(".us-johnhopkins-wa-recent");
   const wvCaseConfirm = document.querySelector(".us-johnhopkins-wv-confirm");
   const wvCaseDeath = document.querySelector(".us-johnhopkins-wv-death");
   const wvCaseRecent = document.querySelector(".us-johnhopkins-wv-recent");
   const wiCaseConfirm = document.querySelector(".us-johnhopkins-wi-confirm");
   const wiCaseDeath = document.querySelector(".us-johnhopkins-wi-death");
   const wiCaseRecent = document.querySelector(".us-johnhopkins-wi-recent");
   const wyCaseConfirm = document.querySelector(".us-johnhopkins-wy-confirm");
   const wyCaseDeath = document.querySelector(".us-johnhopkins-wy-death");
   const wyCaseRecent = document.querySelector(".us-johnhopkins-wy-recent");  
   usCaseConfirm.textContent = addCommas(data.data[0].confirmed + data.data[1].confirmed + data.data[2].confirmed + data.data[3].confirmed + data.data[4].confirmed 
   + data.data[5].confirmed + data.data[6].confirmed + data.data[7].confirmed + data.data[8].confirmed + data.data[9].confirmed + data.data[10].confirmed + data.data[11].confirmed
   + data.data[12].confirmed + data.data[13].confirmed + data.data[14].confirmed + data.data[15].confirmed + data.data[16].confirmed + data.data[17].confirmed + data.data[18].confirmed
   + data.data[19].confirmed + data.data[20].confirmed + data.data[21].confirmed + data.data[22].confirmed + data.data[23].confirmed + data.data[24].confirmed
   + data.data[25].confirmed + data.data[26].confirmed + data.data[27].confirmed + data.data[28].confirmed + data.data[29].confirmed + data.data[30].confirmed
   + data.data[31].confirmed + data.data[32].confirmed + data.data[33].confirmed + data.data[34].confirmed + data.data[35].confirmed + data.data[36].confirmed
   + data.data[37].confirmed + data.data[38].confirmed + data.data[39].confirmed + data.data[40].confirmed + data.data[41].confirmed + data.data[42].confirmed
   + data.data[43].confirmed + data.data[44].confirmed + data.data[45].confirmed + data.data[46].confirmed + data.data[47].confirmed + data.data[48].confirmed
   + data.data[49].confirmed + data.data[50].confirmed + data.data[51].confirmed + data.data[52].confirmed + data.data[53].confirmed + data.data[54].confirmed
   + data.data[55].confirmed + data.data[56].confirmed + data.data[57].confirmed);
   usCaseDeath.textContent = addCommas(data.data[0].deaths + data.data[1].deaths + data.data[2].deaths + data.data[3].deaths + data.data[4].deaths 
   + data.data[5].deaths + data.data[6].deaths + data.data[7].deaths + data.data[8].deaths + data.data[9].deaths + data.data[10].deaths + data.data[11].deaths
   + data.data[12].deaths + data.data[13].deaths + data.data[14].deaths + data.data[15].deaths + data.data[16].deaths + data.data[17].deaths + data.data[18].deaths
   + data.data[19].deaths + data.data[20].deaths + data.data[21].deaths + data.data[22].deaths + data.data[23].deaths + data.data[24].deaths
   + data.data[25].deaths + data.data[26].deaths + data.data[27].deaths + data.data[28].deaths + data.data[29].deaths + data.data[30].deaths
   + data.data[31].deaths + data.data[32].deaths + data.data[33].deaths + data.data[34].deaths + data.data[35].deaths + data.data[36].deaths
   + data.data[37].deaths + data.data[38].deaths + data.data[39].deaths + data.data[40].deaths + data.data[41].deaths + data.data[42].deaths
   + data.data[43].deaths + data.data[44].deaths + data.data[45].deaths + data.data[46].deaths + data.data[47].deaths + data.data[48].deaths
   + data.data[49].deaths + data.data[50].deaths + data.data[51].deaths + data.data[52].deaths + data.data[53].deaths + data.data[54].deaths
   + data.data[55].deaths + data.data[56].deaths + data.data[57].deaths);   
   usCaseRecent.textContent = data.data[0].date;      
   alCaseConfirm.textContent = addCommas(data.data[0].confirmed);
   alCaseDeath.textContent = addCommas(data.data[0].deaths); 
   alCaseRecent.textContent = data.data[0].date;
   akCaseConfirm.textContent = addCommas(data.data[1].confirmed);
   akCaseDeath.textContent = addCommas(data.data[1].deaths); 
   akCaseRecent.textContent = data.data[1].date;
   asCaseConfirm.textContent = 0
   asCaseDeath.textContent = 0 
   asCaseRecent.textContent = data.data[1].date;
   azCaseConfirm.textContent = addCommas(data.data[2].confirmed);
   azCaseDeath.textContent = addCommas(data.data[2].deaths); 
   azCaseRecent.textContent = data.data[2].date;
   arCaseConfirm.textContent = addCommas(data.data[3].confirmed);
   arCaseDeath.textContent = addCommas(data.data[3].deaths); 
   arCaseRecent.textContent = data.data[3].date;
   caCaseConfirm.textContent = addCommas(data.data[4].confirmed);
   caCaseDeath.textContent = addCommas(data.data[4].deaths); 
   caCaseRecent.textContent = data.data[4].date;
   coCaseConfirm.textContent = addCommas(data.data[5].confirmed);
   coCaseDeath.textContent = addCommas(data.data[5].deaths); 
   coCaseRecent.textContent = data.data[5].date;
   ctCaseConfirm.textContent = addCommas(data.data[6].confirmed);
   ctCaseDeath.textContent = addCommas(data.data[6].deaths); 
   ctCaseRecent.textContent = data.data[6].date;
   deCaseConfirm.textContent = addCommas(data.data[7].confirmed);
   deCaseDeath.textContent = addCommas(data.data[7].deaths); 
   deCaseRecent.textContent = data.data[7].date;
   dcCaseConfirm.textContent = addCommas(data.data[9].confirmed);
   dcCaseDeath.textContent = addCommas(data.data[9].deaths); 
   dcCaseRecent.textContent = data.data[9].date;
   flCaseConfirm.textContent = addCommas(data.data[10].confirmed);
   flCaseDeath.textContent = addCommas(data.data[10].deaths); 
   flCaseRecent.textContent = data.data[10].date;
   gaCaseConfirm.textContent = addCommas(data.data[11].confirmed);
   gaCaseDeath.textContent = addCommas(data.data[11].deaths);
   gaCaseRecent.textContent = data.data[11].date;
   guCaseConfirm.textContent = addCommas(data.data[13].confirmed);
   guCaseDeath.textContent = addCommas(data.data[13].deaths);
   guCaseRecent.textContent = data.data[13].date;
   hiCaseConfirm.textContent = addCommas(data.data[14].confirmed);
   hiCaseDeath.textContent = addCommas(data.data[14].deaths);
   hiCaseRecent.textContent = data.data[14].date;
   idCaseConfirm.textContent = addCommas(data.data[15].confirmed);
   idCaseDeath.textContent = addCommas(data.data[15].deaths);
   idCaseRecent.textContent = data.data[15].date;
   ilCaseConfirm.textContent = addCommas(data.data[16].confirmed);
   ilCaseDeath.textContent = addCommas(data.data[16].deaths);
   ilCaseRecent.textContent = data.data[16].date;
   inCaseConfirm.textContent = addCommas(data.data[17].confirmed);
   inCaseDeath.textContent = addCommas(data.data[17].deaths);
   inCaseRecent.textContent = data.data[17].date;
   iaCaseConfirm.textContent = addCommas(data.data[18].confirmed);
   iaCaseDeath.textContent = addCommas(data.data[18].deaths);
   iaCaseRecent.textContent = data.data[18].date;
   ksCaseConfirm.textContent = addCommas(data.data[19].confirmed);
   ksCaseDeath.textContent = addCommas(data.data[19].deaths);
   ksCaseRecent.textContent = data.data[19].date;
   kyCaseConfirm.textContent = addCommas(data.data[20].confirmed);
   kyCaseDeath.textContent = addCommas(data.data[20].deaths);
   kyCaseRecent.textContent = data.data[20].date;
   laCaseConfirm.textContent = addCommas(data.data[21].confirmed);
   laCaseDeath.textContent = addCommas(data.data[21].deaths);
   laCaseRecent.textContent = data.data[21].date;
   meCaseConfirm.textContent = addCommas(data.data[22].confirmed);
   meCaseDeath.textContent = addCommas(data.data[22].deaths);
   meCaseRecent.textContent = data.data[22].date;
   mdCaseConfirm.textContent = addCommas(data.data[23].confirmed);
   mdCaseDeath.textContent = addCommas(data.data[23].deaths);
   mdCaseRecent.textContent = data.data[23].date;
   maCaseConfirm.textContent = addCommas(data.data[24].confirmed);
   maCaseDeath.textContent = addCommas(data.data[24].deaths);
   maCaseRecent.textContent = data.data[24].date;
   miCaseConfirm.textContent = addCommas(data.data[25].confirmed);
   miCaseDeath.textContent = addCommas(data.data[25].deaths);
   miCaseRecent.textContent = data.data[25].date;
   mnCaseConfirm.textContent = addCommas(data.data[26].confirmed);
   mnCaseDeath.textContent = addCommas(data.data[26].deaths);
   mnCaseRecent.textContent = data.data[26].date;
   msCaseConfirm.textContent = addCommas(data.data[27].confirmed);
   msCaseDeath.textContent = addCommas(data.data[27].deaths);
   msCaseRecent.textContent = data.data[27].date;
   moCaseConfirm.textContent = addCommas(data.data[28].confirmed);
   moCaseDeath.textContent = addCommas(data.data[28].deaths);
   moCaseRecent.textContent = data.data[28].date;
   mtCaseConfirm.textContent = addCommas(data.data[29].confirmed);
   mtCaseDeath.textContent = addCommas(data.data[29].deaths);
   mtCaseRecent.textContent = data.data[29].date;
   neCaseConfirm.textContent = addCommas(data.data[30].confirmed);
   neCaseDeath.textContent = addCommas(data.data[30].deaths);
   neCaseRecent.textContent = data.data[30].date;
   nvCaseConfirm.textContent = addCommas(data.data[31].confirmed);
   nvCaseDeath.textContent = addCommas(data.data[31].deaths);
   nvCaseRecent.textContent = data.data[31].date;
   nhCaseConfirm.textContent = addCommas(data.data[32].confirmed);
   nhCaseDeath.textContent = addCommas(data.data[32].deaths);
   nhCaseRecent.textContent = data.data[32].date;
   njCaseConfirm.textContent = addCommas(data.data[33].confirmed);
   njCaseDeath.textContent = addCommas(data.data[33].deaths);
   njCaseRecent.textContent = data.data[33].date;
   nmCaseConfirm.textContent = addCommas(data.data[34].confirmed);
   nmCaseDeath.textContent = addCommas(data.data[34].deaths);
   nmCaseRecent.textContent = data.data[34].date;
   nyCaseConfirm.textContent = addCommas(data.data[35].confirmed);
   nyCaseDeath.textContent = addCommas(data.data[35].deaths);
   nyCaseRecent.textContent = data.data[35].date;
   ncCaseConfirm.textContent = addCommas(data.data[36].confirmed);
   ncCaseDeath.textContent = addCommas(data.data[36].deaths);
   ncCaseRecent.textContent = data.data[36].date;
   ndCaseConfirm.textContent = data.data[37].confirmed;
   ndCaseDeath.textContent = addCommas(data.data[37].deaths);
   ndCaseRecent.textContent = data.data[37].date;
   mpCaseConfirm.textContent = addCommas(data.data[38].confirmed);
   mpCaseDeath.textContent = addCommas(data.data[38].deaths);
   mpCaseRecent.textContent = data.data[38].date;
   ohCaseConfirm.textContent = addCommas(data.data[39].confirmed);
   ohCaseDeath.textContent = addCommas(data.data[39].deaths);
   ohCaseRecent.textContent = data.data[39].date;
   okCaseConfirm.textContent = addCommas(data.data[40].confirmed);
   okCaseDeath.textContent = addCommas(data.data[40].deaths);
   okCaseRecent.textContent = data.data[40].date;
   orCaseConfirm.textContent = addCommas(data.data[41].confirmed);
   orCaseDeath.textContent = addCommas(data.data[41].deaths);
   orCaseRecent.textContent = data.data[41].date;
   paCaseConfirm.textContent = addCommas(data.data[42].confirmed);
   paCaseDeath.textContent = addCommas(data.data[42].deaths);
   paCaseRecent.textContent = data.data[42].date;
   prCaseConfirm.textContent = addCommas(data.data[43].confirmed);
   prCaseDeath.textContent = addCommas(data.data[43].deaths);
   prCaseRecent.textContent = data.data[43].date;
   riCaseConfirm.textContent = addCommas(data.data[45].confirmed);
   riCaseDeath.textContent = addCommas(data.data[45].deaths);
   riCaseRecent.textContent = data.data[45].date;
   scCaseConfirm.textContent = addCommas(data.data[46].confirmed);
   scCaseDeath.textContent = addCommas(data.data[46].deaths);
   scCaseRecent.textContent = data.data[46].date;
   sdCaseConfirm.textContent = addCommas(data.data[47].confirmed);
   sdCaseDeath.textContent = addCommas(data.data[47].deaths);
   sdCaseRecent.textContent = data.data[47].date;
   tnCaseConfirm.textContent = addCommas(data.data[48].confirmed);
   tnCaseDeath.textContent = addCommas(data.data[48].deaths);
   tnCaseRecent.textContent = data.data[48].date;
   txCaseConfirm.textContent = addCommas(data.data[49].confirmed);
   txCaseDeath.textContent = addCommas(data.data[49].deaths);
   txCaseRecent.textContent = data.data[49].date;
   viCaseConfirm.textContent = addCommas(data.data[50].confirmed);
   viCaseDeath.textContent = addCommas(data.data[50].deaths);
   viCaseRecent.textContent = data.data[50].date;
   utCaseConfirm.textContent = addCommas(data.data[51].confirmed);
   utCaseDeath.textContent = addCommas(data.data[51].deaths);
   utCaseRecent.textContent = data.data[51].date;
   vtCaseConfirm.textContent = addCommas(data.data[52].confirmed);
   vtCaseDeath.textContent = addCommas(data.data[52].deaths);
   vtCaseRecent.textContent = data.data[52].date;
   vaCaseConfirm.textContent = addCommas(data.data[53].confirmed);
   vaCaseDeath.textContent = addCommas(data.data[53].deaths);
   vaCaseRecent.textContent = data.data[53].date;
   waCaseConfirm.textContent = addCommas(data.data[54].confirmed);
   waCaseDeath.textContent = addCommas(data.data[54].deaths);
   waCaseRecent.textContent = data.data[54].date;
   wvCaseConfirm.textContent = addCommas(data.data[55].confirmed);
   wvCaseDeath.textContent = addCommas(data.data[55].deaths);
   wvCaseRecent.textContent = data.data[55].date;
   wiCaseConfirm.textContent = addCommas(data.data[56].confirmed);
   wiCaseDeath.textContent = addCommas(data.data[56].deaths);
   wiCaseRecent.textContent = data.data[56].date;
   wyCaseConfirm.textContent = addCommas(data.data[57].confirmed);
   wyCaseDeath.textContent = addCommas(data.data[57].deaths);
   wyCaseRecent.textContent = data.data[57].date;     
  });   

//US Count from New York Times
  d3.csv("./nytimes_covid_19_data/nytimes_us_total.csv").then(function(data) {
   console.log(data);  
   const usCaseConfirm = document.querySelector(".us-newyorktimes-confirm");
   const usCaseDeath = document.querySelector(".us-newyorktimes-death");
   const usCaseRecent = document.querySelector(".us-newyorktimes-recent");
   usCaseConfirm.textContent = addCommas(data[426].cases);
   usCaseDeath.textContent = addCommas(data[426].deaths); 
   usCaseRecent.textContent = data[426].date;
  });

//NY Count from New York Times
  d3.csv("./nytimes_covid_19_data/nytimes_daily_reports/03-22-2021.csv").then(function(data) {
   console.log(data);
   const alCaseConfirm = document.querySelector(".us-newyorktimes-al-confirm");
   const alCaseDeath = document.querySelector(".us-newyorktimes-al-death");
   const alCaseRecent = document.querySelector(".us-newyorktimes-al-recent");
   const akCaseConfirm = document.querySelector(".us-newyorktimes-ak-confirm");
   const akCaseDeath = document.querySelector(".us-newyorktimes-ak-death");
   const akCaseRecent = document.querySelector(".us-newyorktimes-ak-recent");
   const asCaseConfirm = document.querySelector(".us-newyorktimes-as-confirm");
   const asCaseDeath = document.querySelector(".us-newyorktimes-as-death");
   const asCaseRecent = document.querySelector(".us-newyorktimes-as-recent");
   const azCaseConfirm = document.querySelector(".us-newyorktimes-az-confirm");
   const azCaseDeath = document.querySelector(".us-newyorktimes-az-death");
   const azCaseRecent = document.querySelector(".us-newyorktimes-az-recent");
   const arCaseConfirm = document.querySelector(".us-newyorktimes-ar-confirm");
   const arCaseDeath = document.querySelector(".us-newyorktimes-ar-death");
   const arCaseRecent = document.querySelector(".us-newyorktimes-ar-recent");
   const caCaseConfirm = document.querySelector(".us-newyorktimes-ca-confirm");
   const caCaseDeath = document.querySelector(".us-newyorktimes-ca-death");
   const caCaseRecent = document.querySelector(".us-newyorktimes-ca-recent");
   const coCaseConfirm = document.querySelector(".us-newyorktimes-co-confirm");
   const coCaseDeath = document.querySelector(".us-newyorktimes-co-death");
   const coCaseRecent = document.querySelector(".us-newyorktimes-co-recent");
   const ctCaseConfirm = document.querySelector(".us-newyorktimes-ct-confirm");
   const ctCaseDeath = document.querySelector(".us-newyorktimes-ct-death");
   const ctCaseRecent = document.querySelector(".us-newyorktimes-ct-recent");
   const deCaseConfirm = document.querySelector(".us-newyorktimes-de-confirm");
   const deCaseDeath = document.querySelector(".us-newyorktimes-de-death");
   const deCaseRecent = document.querySelector(".us-newyorktimes-de-recent");
   const dcCaseConfirm = document.querySelector(".us-newyorktimes-dc-confirm");
   const dcCaseDeath = document.querySelector(".us-newyorktimes-dc-death");
   const dcCaseRecent = document.querySelector(".us-newyorktimes-dc-recent");
   const flCaseConfirm = document.querySelector(".us-newyorktimes-fl-confirm");
   const flCaseDeath = document.querySelector(".us-newyorktimes-fl-death");
   const flCaseRecent = document.querySelector(".us-newyorktimes-fl-recent");
   const gaCaseConfirm = document.querySelector(".us-newyorktimes-ga-confirm");
   const gaCaseDeath = document.querySelector(".us-newyorktimes-ga-death");
   const gaCaseRecent = document.querySelector(".us-newyorktimes-ga-recent");
   const guCaseConfirm = document.querySelector(".us-newyorktimes-gu-confirm");
   const guCaseDeath = document.querySelector(".us-newyorktimes-gu-death");
   const guCaseRecent = document.querySelector(".us-newyorktimes-gu-recent");
   const hiCaseConfirm = document.querySelector(".us-newyorktimes-hi-confirm");
   const hiCaseDeath = document.querySelector(".us-newyorktimes-hi-death");
   const hiCaseRecent = document.querySelector(".us-newyorktimes-hi-recent");
   const idCaseConfirm = document.querySelector(".us-newyorktimes-id-confirm");
   const idCaseDeath = document.querySelector(".us-newyorktimes-id-death");
   const idCaseRecent = document.querySelector(".us-newyorktimes-id-recent");
   const ilCaseConfirm = document.querySelector(".us-newyorktimes-il-confirm");
   const ilCaseDeath = document.querySelector(".us-newyorktimes-il-death");
   const ilCaseRecent = document.querySelector(".us-newyorktimes-il-recent");
   const inCaseConfirm = document.querySelector(".us-newyorktimes-in-confirm");
   const inCaseDeath = document.querySelector(".us-newyorktimes-in-death");
   const inCaseRecent = document.querySelector(".us-newyorktimes-in-recent");
   const iaCaseConfirm = document.querySelector(".us-newyorktimes-ia-confirm");
   const iaCaseDeath = document.querySelector(".us-newyorktimes-ia-death");
   const iaCaseRecent = document.querySelector(".us-newyorktimes-ia-recent");
   const ksCaseConfirm = document.querySelector(".us-newyorktimes-ks-confirm");
   const ksCaseDeath = document.querySelector(".us-newyorktimes-ks-death");
   const ksCaseRecent = document.querySelector(".us-newyorktimes-ks-recent");
   const kyCaseConfirm = document.querySelector(".us-newyorktimes-ky-confirm");
   const kyCaseDeath = document.querySelector(".us-newyorktimes-ky-death");
   const kyCaseRecent = document.querySelector(".us-newyorktimes-ky-recent");
   const laCaseConfirm = document.querySelector(".us-newyorktimes-la-confirm");
   const laCaseDeath = document.querySelector(".us-newyorktimes-la-death");
   const laCaseRecent = document.querySelector(".us-newyorktimes-la-recent");
   const meCaseConfirm = document.querySelector(".us-newyorktimes-me-confirm");
   const meCaseDeath = document.querySelector(".us-newyorktimes-me-death");
   const meCaseRecent = document.querySelector(".us-newyorktimes-me-recent");
   const mdCaseConfirm = document.querySelector(".us-newyorktimes-md-confirm");
   const mdCaseDeath = document.querySelector(".us-newyorktimes-md-death");
   const mdCaseRecent = document.querySelector(".us-newyorktimes-md-recent");
   const maCaseConfirm = document.querySelector(".us-newyorktimes-ma-confirm");
   const maCaseDeath = document.querySelector(".us-newyorktimes-ma-death");
   const maCaseRecent = document.querySelector(".us-newyorktimes-ma-recent");
   const miCaseConfirm = document.querySelector(".us-newyorktimes-mi-confirm");
   const miCaseDeath = document.querySelector(".us-newyorktimes-mi-death");
   const miCaseRecent = document.querySelector(".us-newyorktimes-mi-recent");
   const mnCaseConfirm = document.querySelector(".us-newyorktimes-mn-confirm");
   const mnCaseDeath = document.querySelector(".us-newyorktimes-mn-death");
   const mnCaseRecent = document.querySelector(".us-newyorktimes-mn-recent");
   const msCaseConfirm = document.querySelector(".us-newyorktimes-ms-confirm");
   const msCaseDeath = document.querySelector(".us-newyorktimes-ms-death");
   const msCaseRecent = document.querySelector(".us-newyorktimes-ms-recent");
   const moCaseConfirm = document.querySelector(".us-newyorktimes-mo-confirm");
   const moCaseDeath = document.querySelector(".us-newyorktimes-mo-death");
   const moCaseRecent = document.querySelector(".us-newyorktimes-mo-recent");
   const mtCaseConfirm = document.querySelector(".us-newyorktimes-mt-confirm");
   const mtCaseDeath = document.querySelector(".us-newyorktimes-mt-death");
   const mtCaseRecent = document.querySelector(".us-newyorktimes-mt-recent");
   const neCaseConfirm = document.querySelector(".us-newyorktimes-ne-confirm");
   const neCaseDeath = document.querySelector(".us-newyorktimes-ne-death");
   const neCaseRecent = document.querySelector(".us-newyorktimes-ne-recent");
   const nvCaseConfirm = document.querySelector(".us-newyorktimes-nv-confirm");
   const nvCaseDeath = document.querySelector(".us-newyorktimes-nv-death");
   const nvCaseRecent = document.querySelector(".us-newyorktimes-nv-recent");
   const nhCaseConfirm = document.querySelector(".us-newyorktimes-nh-confirm");
   const nhCaseDeath = document.querySelector(".us-newyorktimes-nh-death");
   const nhCaseRecent = document.querySelector(".us-newyorktimes-nh-recent");
   const njCaseConfirm = document.querySelector(".us-newyorktimes-nj-confirm");
   const njCaseDeath = document.querySelector(".us-newyorktimes-nj-death");
   const njCaseRecent = document.querySelector(".us-newyorktimes-nj-recent");
   const nmCaseConfirm = document.querySelector(".us-newyorktimes-nm-confirm");
   const nmCaseDeath = document.querySelector(".us-newyorktimes-nm-death");
   const nmCaseRecent = document.querySelector(".us-newyorktimes-nm-recent");
   const nyCaseConfirm = document.querySelector(".us-newyorktimes-ny-confirm");
   const nyCaseDeath = document.querySelector(".us-newyorktimes-ny-death");
   const nyCaseRecent = document.querySelector(".us-newyorktimes-ny-recent");
   const ncCaseConfirm = document.querySelector(".us-newyorktimes-nc-confirm");
   const ncCaseDeath = document.querySelector(".us-newyorktimes-nc-death");
   const ncCaseRecent = document.querySelector(".us-newyorktimes-nc-recent");
   const ndCaseConfirm = document.querySelector(".us-newyorktimes-nd-confirm");
   const ndCaseDeath = document.querySelector(".us-newyorktimes-nd-death");
   const ndCaseRecent = document.querySelector(".us-newyorktimes-nd-recent");
   const mpCaseConfirm = document.querySelector(".us-newyorktimes-mp-confirm");
   const mpCaseDeath = document.querySelector(".us-newyorktimes-mp-death");
   const mpCaseRecent = document.querySelector(".us-newyorktimes-mp-recent");
   const ohCaseConfirm = document.querySelector(".us-newyorktimes-oh-confirm");
   const ohCaseDeath = document.querySelector(".us-newyorktimes-oh-death");
   const ohCaseRecent = document.querySelector(".us-newyorktimes-oh-recent");
   const okCaseConfirm = document.querySelector(".us-newyorktimes-ok-confirm");
   const okCaseDeath = document.querySelector(".us-newyorktimes-ok-death");
   const okCaseRecent = document.querySelector(".us-newyorktimes-ok-recent");
   const orCaseConfirm = document.querySelector(".us-newyorktimes-or-confirm");
   const orCaseDeath = document.querySelector(".us-newyorktimes-or-death");
   const orCaseRecent = document.querySelector(".us-newyorktimes-or-recent");
   const paCaseConfirm = document.querySelector(".us-newyorktimes-pa-confirm");
   const paCaseDeath = document.querySelector(".us-newyorktimes-pa-death");
   const paCaseRecent = document.querySelector(".us-newyorktimes-pa-recent");
   const prCaseConfirm = document.querySelector(".us-newyorktimes-pr-confirm");
   const prCaseDeath = document.querySelector(".us-newyorktimes-pr-death");
   const prCaseRecent = document.querySelector(".us-newyorktimes-pr-recent");
   const riCaseConfirm = document.querySelector(".us-newyorktimes-ri-confirm");
   const riCaseDeath = document.querySelector(".us-newyorktimes-ri-death");
   const riCaseRecent = document.querySelector(".us-newyorktimes-ri-recent");
   const scCaseConfirm = document.querySelector(".us-newyorktimes-sc-confirm");
   const scCaseDeath = document.querySelector(".us-newyorktimes-sc-death");
   const scCaseRecent = document.querySelector(".us-newyorktimes-sc-recent");
   const sdCaseConfirm = document.querySelector(".us-newyorktimes-sd-confirm");
   const sdCaseDeath = document.querySelector(".us-newyorktimes-sd-death");
   const sdCaseRecent = document.querySelector(".us-newyorktimes-sd-recent");
   const tnCaseConfirm = document.querySelector(".us-newyorktimes-tn-confirm");
   const tnCaseDeath = document.querySelector(".us-newyorktimes-tn-death");
   const tnCaseRecent = document.querySelector(".us-newyorktimes-tn-recent");
   const txCaseConfirm = document.querySelector(".us-newyorktimes-tx-confirm");
   const txCaseDeath = document.querySelector(".us-newyorktimes-tx-death");
   const txCaseRecent = document.querySelector(".us-newyorktimes-tx-recent");
   const viCaseConfirm = document.querySelector(".us-newyorktimes-vi-confirm");
   const viCaseDeath = document.querySelector(".us-newyorktimes-vi-death");
   const viCaseRecent = document.querySelector(".us-newyorktimes-vi-recent");
   const utCaseConfirm = document.querySelector(".us-newyorktimes-ut-confirm");
   const utCaseDeath = document.querySelector(".us-newyorktimes-ut-death");
   const utCaseRecent = document.querySelector(".us-newyorktimes-ut-recent");
   const vtCaseConfirm = document.querySelector(".us-newyorktimes-vt-confirm");
   const vtCaseDeath = document.querySelector(".us-newyorktimes-vt-death");
   const vtCaseRecent = document.querySelector(".us-newyorktimes-vt-recent");
   const vaCaseConfirm = document.querySelector(".us-newyorktimes-va-confirm");
   const vaCaseDeath = document.querySelector(".us-newyorktimes-va-death");
   const vaCaseRecent = document.querySelector(".us-newyorktimes-va-recent");
   const waCaseConfirm = document.querySelector(".us-newyorktimes-wa-confirm");
   const waCaseDeath = document.querySelector(".us-newyorktimes-wa-death");
   const waCaseRecent = document.querySelector(".us-newyorktimes-wa-recent");
   const wvCaseConfirm = document.querySelector(".us-newyorktimes-wv-confirm");
   const wvCaseDeath = document.querySelector(".us-newyorktimes-wv-death");
   const wvCaseRecent = document.querySelector(".us-newyorktimes-wv-recent");
   const wiCaseConfirm = document.querySelector(".us-newyorktimes-wi-confirm");
   const wiCaseDeath = document.querySelector(".us-newyorktimes-wi-death");
   const wiCaseRecent = document.querySelector(".us-newyorktimes-wi-recent");
   const wyCaseConfirm = document.querySelector(".us-newyorktimes-wy-confirm");
   const wyCaseDeath = document.querySelector(".us-newyorktimes-wy-death");
   const wyCaseRecent = document.querySelector(".us-newyorktimes-wy-recent");
   alCaseConfirm.textContent = addCommas(data[0].cases);
   alCaseDeath.textContent = addCommas(data[0].deaths);
   alCaseRecent.textContent = data[0].date;  
   akCaseConfirm.textContent = addCommas(data[1].cases);
   akCaseDeath.textContent = addCommas(data[1].deaths);
   akCaseRecent.textContent = data[1].date;   
   azCaseConfirm.textContent = addCommas(data[2].cases);
   azCaseDeath.textContent = addCommas(data[2].deaths);
   azCaseRecent.textContent = data[2].date;   
   asCaseConfirm.textContent = 0;
   asCaseDeath.textContent = 0;
   asCaseRecent.textContent = data[2].date;  
   arCaseConfirm.textContent = addCommas(data[3].cases);
   arCaseDeath.textContent = addCommas(data[3].deaths);
   arCaseRecent.textContent = data[3].date;   
   caCaseConfirm.textContent = addCommas(data[4].cases);
   caCaseDeath.textContent = addCommas(data[4].deaths);
   caCaseRecent.textContent = data[4].date;   
   coCaseConfirm.textContent = addCommas(data[5].cases);
   coCaseDeath.textContent = addCommas(data[5].deaths);
   coCaseRecent.textContent = data[5].date;   
   ctCaseConfirm.textContent = addCommas(data[6].cases);
   ctCaseDeath.textContent = addCommas(data[6].deaths);
   ctCaseRecent.textContent = data[6].date;   
   deCaseConfirm.textContent = addCommas(data[7].cases);
   deCaseDeath.textContent = addCommas(data[7].deaths);
   deCaseRecent.textContent = data[7].date; 
   dcCaseConfirm.textContent = addCommas(data[8].cases);
   dcCaseDeath.textContent = addCommas(data[8].deaths);
   dcCaseRecent.textContent = data[8].date;
   flCaseConfirm.textContent = addCommas(data[9].cases);
   flCaseDeath.textContent = addCommas(data[9].deaths);
   flCaseRecent.textContent = data[9].date;
   gaCaseConfirm.textContent = addCommas(data[10].cases);
   gaCaseDeath.textContent = addCommas(data[10].deaths);
   gaCaseRecent.textContent = data[10].date;
   guCaseConfirm.textContent = addCommas(data[11].cases);
   guCaseDeath.textContent = addCommas(data[11].deaths);
   guCaseRecent.textContent = data[11].date;
   hiCaseConfirm.textContent = addCommas(data[12].cases);
   hiCaseDeath.textContent = addCommas(data[12].deaths);
   hiCaseRecent.textContent = data[12].date;
   idCaseConfirm.textContent = addCommas(data[13].cases);
   idCaseDeath.textContent = addCommas(data[13].deaths);
   idCaseRecent.textContent = data[13].date;
   ilCaseConfirm.textContent = addCommas(data[14].cases);
   ilCaseDeath.textContent = addCommas(data[14].deaths);
   ilCaseRecent.textContent = data[14].date;
   inCaseConfirm.textContent = addCommas(data[15].cases);
   inCaseDeath.textContent = addCommas(data[15].deaths);
   inCaseRecent.textContent = data[15].date;
   iaCaseConfirm.textContent = addCommas(data[16].cases);
   iaCaseDeath.textContent = addCommas(data[16].deaths);
   iaCaseRecent.textContent = data[16].date;
   ksCaseConfirm.textContent = addCommas(data[17].cases);
   ksCaseDeath.textContent = addCommas(data[17].deaths);
   ksCaseRecent.textContent = data[17].date;
   kyCaseConfirm.textContent = addCommas(data[18].cases);
   kyCaseDeath.textContent = addCommas(data[18].deaths);
   kyCaseRecent.textContent = data[18].date;
   laCaseConfirm.textContent = addCommas(data[19].cases);
   laCaseDeath.textContent = addCommas(data[19].deaths);
   laCaseRecent.textContent = data[19].date;
   meCaseConfirm.textContent = addCommas(data[20].cases);
   meCaseDeath.textContent = addCommas(data[20].deaths);
   meCaseRecent.textContent = data[20].date;
   mdCaseConfirm.textContent = addCommas(data[21].cases);
   mdCaseDeath.textContent = addCommas(data[21].deaths);
   mdCaseRecent.textContent = data[21].date;
   maCaseConfirm.textContent = addCommas(data[22].cases);
   maCaseDeath.textContent = addCommas(data[22].deaths);
   maCaseRecent.textContent = data[22].date;
   miCaseConfirm.textContent = addCommas(data[23].cases);
   miCaseDeath.textContent = addCommas(data[23].deaths);
   miCaseRecent.textContent = data[23].date;
   mnCaseConfirm.textContent = addCommas(data[24].cases);
   mnCaseDeath.textContent = addCommas(data[24].deaths);
   mnCaseRecent.textContent = data[24].date;
   msCaseConfirm.textContent = addCommas(data[25].cases);
   msCaseDeath.textContent = addCommas(data[25].deaths);
   msCaseRecent.textContent = data[25].date;
   moCaseConfirm.textContent = addCommas(data[26].cases);
   moCaseDeath.textContent = addCommas(data[26].deaths);
   moCaseRecent.textContent = data[26].date;
   mtCaseConfirm.textContent = addCommas(data[27].cases);
   mtCaseDeath.textContent = addCommas(data[27].deaths);
   mtCaseRecent.textContent = data[27].date;
   neCaseConfirm.textContent = addCommas(data[28].cases);
   neCaseDeath.textContent = addCommas(data[28].deaths);
   neCaseRecent.textContent = data[28].date;
   nvCaseConfirm.textContent = addCommas(data[29].cases);
   nvCaseDeath.textContent = addCommas(data[29].deaths);
   nvCaseRecent.textContent = data[29].date;
   nhCaseConfirm.textContent = addCommas(data[30].cases);
   nhCaseDeath.textContent = addCommas(data[30].deaths);
   nhCaseRecent.textContent = data[30].date;
   njCaseConfirm.textContent = addCommas(data[31].cases);
   njCaseDeath.textContent = addCommas(data[31].deaths);
   njCaseRecent.textContent = data[31].date;     
   nmCaseConfirm.textContent = addCommas(data[32].cases);
   nmCaseDeath.textContent = addCommas(data[32].deaths);
   nmCaseRecent.textContent = data[32].date;
   nyCaseConfirm.textContent = addCommas(data[33].cases);
   nyCaseDeath.textContent = addCommas(data[33].deaths);
   nyCaseRecent.textContent = data[33].date;
   ncCaseConfirm.textContent = addCommas(data[34].cases);
   ncCaseDeath.textContent = addCommas(data[34].deaths);
   ncCaseRecent.textContent = data[34].date;
   ndCaseConfirm.textContent = addCommas(data[35].cases);
   ndCaseDeath.textContent = addCommas(data[35].deaths);
   ndCaseRecent.textContent = data[35].date;
   mpCaseConfirm.textContent = addCommas(data[36].cases);
   mpCaseDeath.textContent = addCommas(data[36].deaths);
   mpCaseRecent.textContent = data[36].date;
   ohCaseConfirm.textContent = addCommas(data[37].cases);
   ohCaseDeath.textContent = addCommas(data[37].deaths);
   ohCaseRecent.textContent = data[37].date;
   okCaseConfirm.textContent = addCommas(data[38].cases);
   okCaseDeath.textContent = addCommas(data[38].deaths);
   okCaseRecent.textContent = data[38].date;
   orCaseConfirm.textContent = addCommas(data[39].cases);
   orCaseDeath.textContent = addCommas(data[39].deaths);
   orCaseRecent.textContent = data[39].date;
   paCaseConfirm.textContent = addCommas(data[40].cases);
   paCaseDeath.textContent = addCommas(data[40].deaths);
   paCaseRecent.textContent = data[40].date;
   prCaseConfirm.textContent = addCommas(data[41].cases);
   prCaseDeath.textContent = addCommas(data[41].deaths);
   prCaseRecent.textContent = data[41].date;
   riCaseConfirm.textContent = addCommas(data[42].cases);
   riCaseDeath.textContent = addCommas(data[42].deaths);
   riCaseRecent.textContent = data[42].date;
   scCaseConfirm.textContent = addCommas(data[43].cases);
   scCaseDeath.textContent = addCommas(data[43].deaths);
   scCaseRecent.textContent = data[43].date;
   sdCaseConfirm.textContent = addCommas(data[44].cases);
   sdCaseDeath.textContent = addCommas(data[44].deaths);
   sdCaseRecent.textContent = data[44].date;
   tnCaseConfirm.textContent = addCommas(data[45].cases);
   tnCaseDeath.textContent = addCommas(data[45].deaths);
   tnCaseRecent.textContent = data[45].date;
   txCaseConfirm.textContent = addCommas(data[46].cases);
   txCaseDeath.textContent = addCommas(data[46].deaths);
   txCaseRecent.textContent = data[46].date;
   viCaseConfirm.textContent = addCommas(data[47].cases);
   viCaseDeath.textContent = addCommas(data[47].deaths);
   viCaseRecent.textContent = data[47].date;
   utCaseConfirm.textContent = addCommas(data[48].cases);
   utCaseDeath.textContent = addCommas(data[48].deaths);
   utCaseRecent.textContent = data[48].date;
   vtCaseConfirm.textContent = addCommas(data[49].cases);
   vtCaseDeath.textContent = addCommas(data[49].deaths);
   vtCaseRecent.textContent = data[49].date;
   vaCaseConfirm.textContent = addCommas(data[50].cases);
   vaCaseDeath.textContent = addCommas(data[50].deaths);
   vaCaseRecent.textContent = data[50].date;
   waCaseConfirm.textContent = addCommas(data[51].cases);
   waCaseDeath.textContent = addCommas(data[51].deaths);
   waCaseRecent.textContent = data[51].date;
   wvCaseConfirm.textContent = addCommas(data[52].cases);
   wvCaseDeath.textContent = addCommas(data[52].deaths);
   wvCaseRecent.textContent = data[52].date;
   wiCaseConfirm.textContent = addCommas(data[53].cases);
   wiCaseDeath.textContent = addCommas(data[53].deaths);
   wiCaseRecent.textContent = data[53].date;
   wyCaseConfirm.textContent = addCommas(data[54].cases);
   wyCaseDeath.textContent = addCommas(data[54].deaths);
   wyCaseRecent.textContent = data[54].date;    
  });

//AL Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/al/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const alCaseDeath = document.querySelector(".us-covidtrack-al-death");
   const alCaseConfirm = document.querySelector(".us-covidtrack-al-confirm");
   const alTotHos = document.querySelector(".us-covidtrack-al-tothos");
   const alCurHos = document.querySelector(".us-covidtrack-al-curhos");
   const alCurIcu = document.querySelector(".us-covidtrack-al-curicu");
   const alRecent = document.querySelector(".us-covidtrack-al-recent");   
   alCaseDeath.textContent = addCommas(data.death);
   alCaseConfirm.textContent = addCommas(data.positive);
   alTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   alCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   alCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   alRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/
   });

//AK Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ak/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const akCaseDeath = document.querySelector(".us-covidtrack-ak-death");
   const akCaseConfirm = document.querySelector(".us-covidtrack-ak-confirm");
   const akTotHos = document.querySelector(".us-covidtrack-ak-tothos");
   const akCurHos = document.querySelector(".us-covidtrack-ak-curhos");
   const akCurIcu = document.querySelector(".us-covidtrack-ak-curicu");
   const akRecent = document.querySelector(".us-covidtrack-ak-recent");       
   akCaseDeath.textContent = addCommas(data.death);
   akCaseConfirm.textContent = addCommas(data.positive);
   akTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   akCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   akCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   akRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//AS Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/as/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const asCaseDeath = document.querySelector(".us-covidtrack-as-death");
   const asCaseConfirm = document.querySelector(".us-covidtrack-as-confirm");
   const asTotHos = document.querySelector(".us-covidtrack-as-tothos");
   const asCurHos = document.querySelector(".us-covidtrack-as-curhos");
   const asCurIcu = document.querySelector(".us-covidtrack-as-curicu");
   const asRecent = document.querySelector(".us-covidtrack-as-recent");       
   asCaseDeath.textContent = addCommas(data.death);
   asCaseConfirm.textContent = addCommas(data.positive);
   asTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   asCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   asCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   asRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//AZ Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/az/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const azCaseDeath = document.querySelector(".us-covidtrack-az-death");
   const azCaseConfirm = document.querySelector(".us-covidtrack-az-confirm");
   const azTotHos = document.querySelector(".us-covidtrack-az-tothos");
   const azCurHos = document.querySelector(".us-covidtrack-az-curhos");
   const azCurIcu = document.querySelector(".us-covidtrack-az-curicu");
   const azRecent = document.querySelector(".us-covidtrack-az-recent");      
   azCaseDeath.textContent = addCommas(data.death);
   azCaseConfirm.textContent = addCommas(data.positive);
   azTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   azCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   azCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   azRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/    
   });

//AR Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ar/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const arCaseDeath = document.querySelector(".us-covidtrack-ar-death");
   const arCaseConfirm = document.querySelector(".us-covidtrack-ar-confirm");
   const arTotHos = document.querySelector(".us-covidtrack-ar-tothos");
   const arCurHos = document.querySelector(".us-covidtrack-ar-curhos");
   const arCurIcu = document.querySelector(".us-covidtrack-ar-curicu");
   const arRecent = document.querySelector(".us-covidtrack-ar-recent");      
   arCaseDeath.textContent = addCommas(data.death);
   arCaseConfirm.textContent = addCommas(data.positive);
   arTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   arCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   arCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   arRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//CA Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ca/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const caTotHos = document.querySelector(".us-covidtrack-ca-tothos");
   const caCurHos = document.querySelector(".us-covidtrack-ca-curhos");
   const caCurIcu = document.querySelector(".us-covidtrack-ca-curicu");
   const caRecent = document.querySelector(".us-covidtrack-ca-recent");       
   caCaseDeath.textContent = addCommas(data.death);
   caCaseConfirm.textContent = addCommas(data.positive);
   caTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   caCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   caCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   caRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//CO Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/co/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const coCaseDeath = document.querySelector(".us-covidtrack-co-death");
   const coCaseConfirm = document.querySelector(".us-covidtrack-co-confirm");
   const coTotHos = document.querySelector(".us-covidtrack-co-tothos");
   const coCurHos = document.querySelector(".us-covidtrack-co-curhos");
   const coCurIcu = document.querySelector(".us-covidtrack-co-curicu");
   const coRecent = document.querySelector(".us-covidtrack-co-recent");      
   coCaseDeath.textContent = addCommas(data.death);
   coCaseConfirm.textContent = addCommas(data.positive);
   coTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   coCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   coCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   coRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/     
   });

//CT Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ct/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const ctCaseDeath = document.querySelector(".us-covidtrack-ct-death");
   const ctCaseConfirm = document.querySelector(".us-covidtrack-ct-confirm");
   const ctTotHos = document.querySelector(".us-covidtrack-ct-tothos");
   const ctCurHos = document.querySelector(".us-covidtrack-ct-curhos");
   const ctCurIcu = document.querySelector(".us-covidtrack-ct-curicu");
   const ctRecent = document.querySelector(".us-covidtrack-ct-recent");      
   ctCaseDeath.textContent = addCommas(data.death);
   ctCaseConfirm.textContent = addCommas(data.positive);
   ctTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   ctCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   ctCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   ctRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//DE Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/de/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const deCaseDeath = document.querySelector(".us-covidtrack-de-death");
   const deCaseConfirm = document.querySelector(".us-covidtrack-de-confirm");
   const deTotHos = document.querySelector(".us-covidtrack-de-tothos");
   const deCurHos = document.querySelector(".us-covidtrack-de-curhos");
   const deCurIcu = document.querySelector(".us-covidtrack-de-curicu");
   const deRecent = document.querySelector(".us-covidtrack-de-recent");      
   deCaseDeath.textContent = addCommas(data.death);
   deCaseConfirm.textContent = addCommas(data.positive);
   deTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   deCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   deCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   deRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//DC Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/dc/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const dcCaseDeath = document.querySelector(".us-covidtrack-dc-death");
   const dcCaseConfirm = document.querySelector(".us-covidtrack-dc-confirm");
   const dcTotHos = document.querySelector(".us-covidtrack-dc-tothos");
   const dcCurHos = document.querySelector(".us-covidtrack-dc-curhos");
   const dcCurIcu = document.querySelector(".us-covidtrack-dc-curicu");
   const dcRecent = document.querySelector(".us-covidtrack-dc-recent");      
   dcCaseDeath.textContent = addCommas(data.death);
   dcCaseConfirm.textContent = addCommas(data.positive);
   dcTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   dcCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   dcCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   dcRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//FL Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/fl/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const flCaseDeath = document.querySelector(".us-covidtrack-fl-death");
   const flCaseConfirm = document.querySelector(".us-covidtrack-fl-confirm");
   const flTotHos = document.querySelector(".us-covidtrack-fl-tothos");
   const flCurHos = document.querySelector(".us-covidtrack-fl-curhos");
   const flCurIcu = document.querySelector(".us-covidtrack-fl-curicu");
   const flRecent = document.querySelector(".us-covidtrack-fl-recent");      
   flCaseDeath.textContent = addCommas(data.death);
   flCaseConfirm.textContent = addCommas(data.positive);
   flTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   flCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   flCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   flRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//GA Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ga/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const gaCaseDeath = document.querySelector(".us-covidtrack-ga-death");
   const gaCaseConfirm = document.querySelector(".us-covidtrack-ga-confirm");
   const gaTotHos = document.querySelector(".us-covidtrack-ga-tothos");
   const gaCurHos = document.querySelector(".us-covidtrack-ga-curhos");
   const gaCurIcu = document.querySelector(".us-covidtrack-ga-curicu");
   const gaRecent = document.querySelector(".us-covidtrack-ga-recent");      
   gaCaseDeath.textContent = addCommas(data.death);
   gaCaseConfirm.textContent = addCommas(data.positive);
   gaTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   gaCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   gaCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   gaRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/     
   });

//GU Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/gu/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const guCaseDeath = document.querySelector(".us-covidtrack-gu-death");
   const guCaseConfirm = document.querySelector(".us-covidtrack-gu-confirm");
   const guTotHos = document.querySelector(".us-covidtrack-gu-tothos");
   const guCurHos = document.querySelector(".us-covidtrack-gu-curhos");
   const guCurIcu = document.querySelector(".us-covidtrack-gu-curicu");
   const guRecent = document.querySelector(".us-covidtrack-gu-recent");      
   guCaseDeath.textContent = addCommas(data.death);
   guCaseConfirm.textContent = addCommas(data.positive);
   guTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   guCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   guCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   guRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//HI Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/hi/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const hiCaseDeath = document.querySelector(".us-covidtrack-hi-death");
   const hiCaseConfirm = document.querySelector(".us-covidtrack-hi-confirm");
   const hiTotHos = document.querySelector(".us-covidtrack-hi-tothos");
   const hiCurHos = document.querySelector(".us-covidtrack-hi-curhos");
   const hiCurIcu = document.querySelector(".us-covidtrack-hi-curicu");
   const hiRecent = document.querySelector(".us-covidtrack-hi-recent");      
   hiCaseDeath.textContent = addCommas(data.death);
   hiCaseConfirm.textContent = addCommas(data.positive);
   hiTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   hiCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   hiCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   hiRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//ID Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/id/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const idCaseDeath = document.querySelector(".us-covidtrack-id-death");
   const idCaseConfirm = document.querySelector(".us-covidtrack-id-confirm");
   const idTotHos = document.querySelector(".us-covidtrack-id-tothos");
   const idCurHos = document.querySelector(".us-covidtrack-id-curhos");
   const idCurIcu = document.querySelector(".us-covidtrack-id-curicu");
   const idRecent = document.querySelector(".us-covidtrack-id-recent");       
   idCaseDeath.textContent = addCommas(data.death);
   idCaseConfirm.textContent = addCommas(data.positive);
   idTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   idCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   idCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   idRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//IL Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/il/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const ilCaseDeath = document.querySelector(".us-covidtrack-il-death");
   const ilCaseConfirm = document.querySelector(".us-covidtrack-il-confirm");
   const ilTotHos = document.querySelector(".us-covidtrack-il-tothos");
   const ilCurHos = document.querySelector(".us-covidtrack-il-curhos");
   const ilCurIcu = document.querySelector(".us-covidtrack-il-curicu");
   const ilRecent = document.querySelector(".us-covidtrack-il-recent");       
   ilCaseDeath.textContent = addCommas(data.death);
   ilCaseConfirm.textContent = addCommas(data.positive);
   ilTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   ilCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   ilCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   ilRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/         
   });

//IN Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/in/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const inCaseDeath = document.querySelector(".us-covidtrack-in-death");
   const inCaseConfirm = document.querySelector(".us-covidtrack-in-confirm");
   const inTotHos = document.querySelector(".us-covidtrack-in-tothos");
   const inCurHos = document.querySelector(".us-covidtrack-in-curhos");
   const inCurIcu = document.querySelector(".us-covidtrack-in-curicu");
   const inRecent = document.querySelector(".us-covidtrack-in-recent");       
   inCaseDeath.textContent = addCommas(data.death);
   inCaseConfirm.textContent = addCommas(data.positive);
   inTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   inCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   inCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   inRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/        
   });

//IA Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ia/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const iaCaseDeath = document.querySelector(".us-covidtrack-ia-death");
   const iaCaseConfirm = document.querySelector(".us-covidtrack-ia-confirm");
   const iaTotHos = document.querySelector(".us-covidtrack-ia-tothos");
   const iaCurHos = document.querySelector(".us-covidtrack-ia-curhos");
   const iaCurIcu = document.querySelector(".us-covidtrack-ia-curicu");
   const iaRecent = document.querySelector(".us-covidtrack-ia-recent");       
   iaCaseDeath.textContent = addCommas(data.death);
   iaCaseConfirm.textContent = addCommas(data.positive);
   iaTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   iaCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   iaCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   iaRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//KS Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ks/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const ksCaseDeath = document.querySelector(".us-covidtrack-ks-death");
   const ksCaseConfirm = document.querySelector(".us-covidtrack-ks-confirm");
   const ksTotHos = document.querySelector(".us-covidtrack-ks-tothos");
   const ksCurHos = document.querySelector(".us-covidtrack-ks-curhos");
   const ksCurIcu = document.querySelector(".us-covidtrack-ks-curicu");
   const ksRecent = document.querySelector(".us-covidtrack-ks-recent");       
   ksCaseDeath.textContent = addCommas(data.death);
   ksCaseConfirm.textContent = addCommas(data.positive);
   ksTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   ksCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   ksCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   ksRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//KY Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ky/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const kyCaseDeath = document.querySelector(".us-covidtrack-ky-death");
   const kyCaseConfirm = document.querySelector(".us-covidtrack-ky-confirm");
   const kyTotHos = document.querySelector(".us-covidtrack-ky-tothos");
   const kyCurHos = document.querySelector(".us-covidtrack-ky-curhos");
   const kyCurIcu = document.querySelector(".us-covidtrack-ky-curicu");
   const kyRecent = document.querySelector(".us-covidtrack-ky-recent");       
   kyCaseDeath.textContent = addCommas(data.death);
   kyCaseConfirm.textContent = addCommas(data.positive);
   kyTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   kyCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   kyCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   kyRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//LA Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/la/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const laCaseDeath = document.querySelector(".us-covidtrack-la-death");
   const laCaseConfirm = document.querySelector(".us-covidtrack-la-confirm");
   const laTotHos = document.querySelector(".us-covidtrack-la-tothos");
   const laCurHos = document.querySelector(".us-covidtrack-la-curhos");
   const laCurIcu = document.querySelector(".us-covidtrack-la-curicu");
   const laRecent = document.querySelector(".us-covidtrack-la-recent");       
   laCaseDeath.textContent = addCommas(data.death);
   laCaseConfirm.textContent = addCommas(data.positive);
   laTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   laCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   laCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   laRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//ME Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/me/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const meCaseDeath = document.querySelector(".us-covidtrack-me-death");
   const meCaseConfirm = document.querySelector(".us-covidtrack-me-confirm");
   const meTotHos = document.querySelector(".us-covidtrack-me-tothos");
   const meCurHos = document.querySelector(".us-covidtrack-me-curhos");
   const meCurIcu = document.querySelector(".us-covidtrack-me-curicu");
   const meRecent = document.querySelector(".us-covidtrack-me-recent");      
   meCaseDeath.textContent = addCommas(data.death);
   meCaseConfirm.textContent = addCommas(data.positive);
   meTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   meCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   meCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   meRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });


//MD Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/md/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const mdCaseDeath = document.querySelector(".us-covidtrack-md-death");
   const mdCaseConfirm = document.querySelector(".us-covidtrack-md-confirm");
   const mdTotHos = document.querySelector(".us-covidtrack-md-tothos");
   const mdCurHos = document.querySelector(".us-covidtrack-md-curhos");
   const mdCurIcu = document.querySelector(".us-covidtrack-md-curicu");
   const mdRecent = document.querySelector(".us-covidtrack-md-recent");      
   mdCaseDeath.textContent = addCommas(data.death);
   mdCaseConfirm.textContent = addCommas(data.positive);
   mdTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   mdCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   mdCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   mdRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//MA Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ma/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const maCaseDeath = document.querySelector(".us-covidtrack-ma-death");
   const maCaseConfirm = document.querySelector(".us-covidtrack-ma-confirm");
   const maTotHos = document.querySelector(".us-covidtrack-ma-tothos");
   const maCurHos = document.querySelector(".us-covidtrack-ma-curhos");
   const maCurIcu = document.querySelector(".us-covidtrack-ma-curicu");
   const maRecent = document.querySelector(".us-covidtrack-ma-recent");      
   maCaseDeath.textContent = addCommas(data.death);
   maCaseConfirm.textContent = addCommas(data.positive);
   maTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   maCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   maCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   maRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//MI Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/mi/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const miCaseDeath = document.querySelector(".us-covidtrack-mi-death");
   const miCaseConfirm = document.querySelector(".us-covidtrack-mi-confirm");
   const miTotHos = document.querySelector(".us-covidtrack-mi-tothos");
   const miCurHos = document.querySelector(".us-covidtrack-mi-curhos");
   const miCurIcu = document.querySelector(".us-covidtrack-mi-curicu");
   const miRecent = document.querySelector(".us-covidtrack-mi-recent");      
   miCaseDeath.textContent = addCommas(data.death);
   miCaseConfirm.textContent = addCommas(data.positive);
   miTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   miCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   miCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   miRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//MN Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/mn/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const mnCaseDeath = document.querySelector(".us-covidtrack-mn-death");
   const mnCaseConfirm = document.querySelector(".us-covidtrack-mn-confirm");
   const mnTotHos = document.querySelector(".us-covidtrack-mn-tothos");
   const mnCurHos = document.querySelector(".us-covidtrack-mn-curhos");
   const mnCurIcu = document.querySelector(".us-covidtrack-mn-curicu");
   const mnRecent = document.querySelector(".us-covidtrack-mn-recent");      
   mnCaseDeath.textContent = addCommas(data.death);
   mnCaseConfirm.textContent = addCommas(data.positive);
   mnTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   mnCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   mnCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   mnRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//MS Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ms/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const msCaseDeath = document.querySelector(".us-covidtrack-ms-death");
   const msCaseConfirm = document.querySelector(".us-covidtrack-ms-confirm");
   const msTotHos = document.querySelector(".us-covidtrack-ms-tothos");
   const msCurHos = document.querySelector(".us-covidtrack-ms-curhos");
   const msCurIcu = document.querySelector(".us-covidtrack-ms-curicu");
   const msRecent = document.querySelector(".us-covidtrack-ms-recent");      
   msCaseDeath.textContent = addCommas(data.death);
   msCaseConfirm.textContent = addCommas(data.positive);
   msTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   msCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   msCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   msRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//MO Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/mo/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const moCaseDeath = document.querySelector(".us-covidtrack-mo-death");
   const moCaseConfirm = document.querySelector(".us-covidtrack-mo-confirm");
   const moTotHos = document.querySelector(".us-covidtrack-mo-tothos");
   const moCurHos = document.querySelector(".us-covidtrack-mo-curhos");
   const moCurIcu = document.querySelector(".us-covidtrack-mo-curicu");
   const moRecent = document.querySelector(".us-covidtrack-mo-recent");      
   moCaseDeath.textContent = addCommas(data.death);
   moCaseConfirm.textContent = addCommas(data.positive);
   moTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   moCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   moCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   moRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//MT Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/mt/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const mtCaseDeath = document.querySelector(".us-covidtrack-mt-death");
   const mtCaseConfirm = document.querySelector(".us-covidtrack-mt-confirm");
   const mtTotHos = document.querySelector(".us-covidtrack-mt-tothos");
   const mtCurHos = document.querySelector(".us-covidtrack-mt-curhos");
   const mtCurIcu = document.querySelector(".us-covidtrack-mt-curicu");
   const mtRecent = document.querySelector(".us-covidtrack-mt-recent");      
   mtCaseDeath.textContent = addCommas(data.death);
   mtCaseConfirm.textContent = addCommas(data.positive);
   mtTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   mtCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   mtCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   mtRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//NE Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ne/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const neCaseDeath = document.querySelector(".us-covidtrack-ne-death");
   const neCaseConfirm = document.querySelector(".us-covidtrack-ne-confirm");
   const neTotHos = document.querySelector(".us-covidtrack-ne-tothos");
   const neCurHos = document.querySelector(".us-covidtrack-ne-curhos");
   const neCurIcu = document.querySelector(".us-covidtrack-ne-curicu");
   const neRecent = document.querySelector(".us-covidtrack-ne-recent");      
   neCaseDeath.textContent = addCommas(data.death);
   neCaseConfirm.textContent = addCommas(data.positive);
   neTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   neCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   neCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   neRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//NV Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/nv/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const nvCaseDeath = document.querySelector(".us-covidtrack-nv-death");
   const nvCaseConfirm = document.querySelector(".us-covidtrack-nv-confirm");
   const nvTotHos = document.querySelector(".us-covidtrack-nv-tothos");
   const nvCurHos = document.querySelector(".us-covidtrack-nv-curhos");
   const nvCurIcu = document.querySelector(".us-covidtrack-nv-curicu");
   const nvRecent = document.querySelector(".us-covidtrack-nv-recent");      
   nvCaseDeath.textContent = addCommas(data.death);
   nvCaseConfirm.textContent = addCommas(data.positive);
   nvTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   nvCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   nvCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   nvRecent.textContent = new Date(addDateComma(data.date)).toString().substring(4,15); /*determineNull(data.dateModified.toString().substring(0, 10));*/       
   });

//NH Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/nh/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const nhCaseDeath = document.querySelector(".us-covidtrack-nh-death");
   const nhCaseConfirm = document.querySelector(".us-covidtrack-nh-confirm");
   const nhTotHos = document.querySelector(".us-covidtrack-nh-tothos");
   const nhCurHos = document.querySelector(".us-covidtrack-nh-curhos");
   const nhCurIcu = document.querySelector(".us-covidtrack-nh-curicu");
   const nhRecent = document.querySelector(".us-covidtrack-nh-recent");      
   nhCaseDeath.textContent = addCommas(data.death);
   nhCaseConfirm.textContent = addCommas(data.positive);
   nhTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   nhCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   nhCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   nhRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//NJ Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/nj/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const njCaseDeath = document.querySelector(".us-covidtrack-nj-death");
   const njCaseConfirm = document.querySelector(".us-covidtrack-nj-confirm");
   const njTotHos = document.querySelector(".us-covidtrack-nj-tothos");
   const njCurHos = document.querySelector(".us-covidtrack-nj-curhos");
   const njCurIcu = document.querySelector(".us-covidtrack-nj-curicu");
   const njRecent = document.querySelector(".us-covidtrack-nj-recent");      
   njCaseDeath.textContent = addCommas(data.death);
   njCaseConfirm.textContent = addCommas(data.positive);
   njTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   njCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   njCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   njRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//NM Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/nm/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const nmCaseDeath = document.querySelector(".us-covidtrack-nm-death");
   const nmCaseConfirm = document.querySelector(".us-covidtrack-nm-confirm");
   const nmTotHos = document.querySelector(".us-covidtrack-nm-tothos");
   const nmCurHos = document.querySelector(".us-covidtrack-nm-curhos");
   const nmCurIcu = document.querySelector(".us-covidtrack-nm-curicu");
   const nmRecent = document.querySelector(".us-covidtrack-nm-recent");      
   nmCaseDeath.textContent = addCommas(data.death);
   nmCaseConfirm.textContent = addCommas(data.positive);
   nmTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   nmCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   nmCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   nmRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//NY Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ny/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const nyCaseDeath = document.querySelector(".us-covidtrack-ny-death");
   const nyCaseConfirm = document.querySelector(".us-covidtrack-ny-confirm");
   const nyTotHos = document.querySelector(".us-covidtrack-ny-tothos");
   const nyCurHos = document.querySelector(".us-covidtrack-ny-curhos");
   const nyCurIcu = document.querySelector(".us-covidtrack-ny-curicu");
   const nyRecent = document.querySelector(".us-covidtrack-ny-recent");       
   nyCaseDeath.textContent = addCommas(data.death);
   nyCaseConfirm.textContent = addCommas(data.positive);
   nyTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   nyCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   nyCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   nyRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/     
   });

//NC Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/nc/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const ncCaseDeath = document.querySelector(".us-covidtrack-nc-death");
   const ncCaseConfirm = document.querySelector(".us-covidtrack-nc-confirm");
   const ncTotHos = document.querySelector(".us-covidtrack-nc-tothos");
   const ncCurHos = document.querySelector(".us-covidtrack-nc-curhos");
   const ncCurIcu = document.querySelector(".us-covidtrack-nc-curicu");
   const ncRecent = document.querySelector(".us-covidtrack-nc-recent");      
   ncCaseDeath.textContent = addCommas(data.death);
   ncCaseConfirm.textContent = addCommas(data.positive);
   ncTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   ncCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   ncCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   ncRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//ND Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/nd/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const ndCaseDeath = document.querySelector(".us-covidtrack-nd-death");
   const ndCaseConfirm = document.querySelector(".us-covidtrack-nd-confirm");
   const ndTotHos = document.querySelector(".us-covidtrack-nd-tothos");
   const ndCurHos = document.querySelector(".us-covidtrack-nd-curhos");
   const ndCurIcu = document.querySelector(".us-covidtrack-nd-curicu");
   const ndRecent = document.querySelector(".us-covidtrack-nd-recent");      
   ndCaseDeath.textContent = addCommas(data.death);
   ndCaseConfirm.textContent = addCommas(data.positive);
   ndTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   ndCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   ndCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   ndRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//MP Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/mp/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const mpCaseDeath = document.querySelector(".us-covidtrack-mp-death");
   const mpCaseConfirm = document.querySelector(".us-covidtrack-mp-confirm");
   const mpTotHos = document.querySelector(".us-covidtrack-mp-tothos");
   const mpCurHos = document.querySelector(".us-covidtrack-mp-curhos");
   const mpCurIcu = document.querySelector(".us-covidtrack-mp-curicu");
   const mpRecent = document.querySelector(".us-covidtrack-mp-recent");      
   mpCaseDeath.textContent = addCommas(data.death);
   mpCaseConfirm.textContent = addCommas(data.positive);
   mpTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   mpCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   mpCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   mpRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//OH Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/oh/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const ohCaseDeath = document.querySelector(".us-covidtrack-oh-death");
   const ohCaseConfirm = document.querySelector(".us-covidtrack-oh-confirm");
   const ohTotHos = document.querySelector(".us-covidtrack-oh-tothos");
   const ohCurHos = document.querySelector(".us-covidtrack-oh-curhos");
   const ohCurIcu = document.querySelector(".us-covidtrack-oh-curicu");
   const ohRecent = document.querySelector(".us-covidtrack-oh-recent");      
   ohCaseDeath.textContent = addCommas(data.death);
   ohCaseConfirm.textContent = addCommas(data.positive);
   ohTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   ohCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   ohCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   ohRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//OK Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ok/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const okCaseDeath = document.querySelector(".us-covidtrack-ok-death");
   const okCaseConfirm = document.querySelector(".us-covidtrack-ok-confirm");
   const okTotHos = document.querySelector(".us-covidtrack-ok-tothos");
   const okCurHos = document.querySelector(".us-covidtrack-ok-curhos");
   const okCurIcu = document.querySelector(".us-covidtrack-ok-curicu");
   const okRecent = document.querySelector(".us-covidtrack-ok-recent");      
   okCaseDeath.textContent = addCommas(data.death);
   okCaseConfirm.textContent = addCommas(data.positive);
   okTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   okCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   okCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   okRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//OR Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/or/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const orCaseDeath = document.querySelector(".us-covidtrack-or-death");
   const orCaseConfirm = document.querySelector(".us-covidtrack-or-confirm");
   const orTotHos = document.querySelector(".us-covidtrack-or-tothos");
   const orCurHos = document.querySelector(".us-covidtrack-or-curhos");
   const orCurIcu = document.querySelector(".us-covidtrack-or-curicu");
   const orRecent = document.querySelector(".us-covidtrack-or-recent");      
   orCaseDeath.textContent = addCommas(data.death);
   orCaseConfirm.textContent = addCommas(data.positive);
   orTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   orCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   orCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   orRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//PA Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/pa/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const paCaseDeath = document.querySelector(".us-covidtrack-pa-death");
   const paCaseConfirm = document.querySelector(".us-covidtrack-pa-confirm");
   const paTotHos = document.querySelector(".us-covidtrack-pa-tothos");
   const paCurHos = document.querySelector(".us-covidtrack-pa-curhos");
   const paCurIcu = document.querySelector(".us-covidtrack-pa-curicu");
   const paRecent = document.querySelector(".us-covidtrack-pa-recent");      
   paCaseDeath.textContent = addCommas(data.death);
   paCaseConfirm.textContent = addCommas(data.positive);
   paTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   paCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   paCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   paRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//PR Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/pr/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const prCaseDeath = document.querySelector(".us-covidtrack-pr-death");
   const prCaseConfirm = document.querySelector(".us-covidtrack-pr-confirm");
   const prTotHos = document.querySelector(".us-covidtrack-pr-tothos");
   const prCurHos = document.querySelector(".us-covidtrack-pr-curhos");
   const prCurIcu = document.querySelector(".us-covidtrack-pr-curicu");
   const prRecent = document.querySelector(".us-covidtrack-pr-recent");      
   prCaseDeath.textContent = addCommas(data.death);
   prCaseConfirm.textContent = addCommas(data.positive);
   prTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   prCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   prCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   prRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//RI Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ri/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const riCaseDeath = document.querySelector(".us-covidtrack-ri-death");
   const riCaseConfirm = document.querySelector(".us-covidtrack-ri-confirm");
   const riTotHos = document.querySelector(".us-covidtrack-ri-tothos");
   const riCurHos = document.querySelector(".us-covidtrack-ri-curhos");
   const riCurIcu = document.querySelector(".us-covidtrack-ri-curicu");
   const riRecent = document.querySelector(".us-covidtrack-ri-recent");      
   riCaseDeath.textContent = addCommas(data.death);
   riCaseConfirm.textContent = addCommas(data.positive);
   riTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   riCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   riCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   riRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//SC Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/sc/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const scCaseDeath = document.querySelector(".us-covidtrack-sc-death");
   const scCaseConfirm = document.querySelector(".us-covidtrack-sc-confirm");
   const scTotHos = document.querySelector(".us-covidtrack-sc-tothos");
   const scCurHos = document.querySelector(".us-covidtrack-sc-curhos");
   const scCurIcu = document.querySelector(".us-covidtrack-sc-curicu");
   const scRecent = document.querySelector(".us-covidtrack-sc-recent");      
   scCaseDeath.textContent = addCommas(data.death);
   scCaseConfirm.textContent = addCommas(data.positive);
   scTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   scCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   scCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   scRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//SD Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/sd/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const sdCaseDeath = document.querySelector(".us-covidtrack-sd-death");
   const sdCaseConfirm = document.querySelector(".us-covidtrack-sd-confirm");
   const sdTotHos = document.querySelector(".us-covidtrack-sd-tothos");
   const sdCurHos = document.querySelector(".us-covidtrack-sd-curhos");
   const sdCurIcu = document.querySelector(".us-covidtrack-sd-curicu");
   const sdRecent = document.querySelector(".us-covidtrack-sd-recent");      
   sdCaseDeath.textContent = addCommas(data.death);
   sdCaseConfirm.textContent = addCommas(data.positive);
   sdTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   sdCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   sdCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   sdRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//TN Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/tn/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const tnCaseDeath = document.querySelector(".us-covidtrack-tn-death");
   const tnCaseConfirm = document.querySelector(".us-covidtrack-tn-confirm");
   const tnTotHos = document.querySelector(".us-covidtrack-tn-tothos");
   const tnCurHos = document.querySelector(".us-covidtrack-tn-curhos");
   const tnCurIcu = document.querySelector(".us-covidtrack-tn-curicu");
   const tnRecent = document.querySelector(".us-covidtrack-tn-recent");      
   tnCaseDeath.textContent = addCommas(data.death);
   tnCaseConfirm.textContent = addCommas(data.positive);
   tnTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   tnCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   tnCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   tnRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//TX Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/tx/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const txCaseDeath = document.querySelector(".us-covidtrack-tx-death");
   const txCaseConfirm = document.querySelector(".us-covidtrack-tx-confirm");
   const txTotHos = document.querySelector(".us-covidtrack-tx-tothos");
   const txCurHos = document.querySelector(".us-covidtrack-tx-curhos");
   const txCurIcu = document.querySelector(".us-covidtrack-tx-curicu");
   const txRecent = document.querySelector(".us-covidtrack-tx-recent");       
   txCaseDeath.textContent = addCommas(data.death);
   txCaseConfirm.textContent = addCommas(data.positive);
   txTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   txCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   txCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   txRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//VI Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/vi/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const viCaseDeath = document.querySelector(".us-covidtrack-vi-death");
   const viCaseConfirm = document.querySelector(".us-covidtrack-vi-confirm");
   const viTotHos = document.querySelector(".us-covidtrack-vi-tothos");
   const viCurHos = document.querySelector(".us-covidtrack-vi-curhos");
   const viCurIcu = document.querySelector(".us-covidtrack-vi-curicu");
   const viRecent = document.querySelector(".us-covidtrack-vi-recent");      
   viCaseDeath.textContent = addCommas(data.death);
   viCaseConfirm.textContent = addCommas(data.positive);
   viTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   viCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   viCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   viRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//UT Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ut/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const utCaseDeath = document.querySelector(".us-covidtrack-ut-death");
   const utCaseConfirm = document.querySelector(".us-covidtrack-ut-confirm");
   const utTotHos = document.querySelector(".us-covidtrack-ut-tothos");
   const utCurHos = document.querySelector(".us-covidtrack-ut-curhos");
   const utCurIcu = document.querySelector(".us-covidtrack-ut-curicu");
   const utRecent = document.querySelector(".us-covidtrack-ut-recent");      
   utCaseDeath.textContent = addCommas(data.death);
   utCaseConfirm.textContent = addCommas(data.positive);
   utTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   utCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   utCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   utRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//VT Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/vt/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const vtCaseDeath = document.querySelector(".us-covidtrack-vt-death");
   const vtCaseConfirm = document.querySelector(".us-covidtrack-vt-confirm");
   const vtTotHos = document.querySelector(".us-covidtrack-vt-tothos");
   const vtCurHos = document.querySelector(".us-covidtrack-vt-curhos");
   const vtCurIcu = document.querySelector(".us-covidtrack-vt-curicu");
   const vtRecent = document.querySelector(".us-covidtrack-vt-recent");      
   vtCaseDeath.textContent = addCommas(data.death);
   vtCaseConfirm.textContent = addCommas(data.positive);
   vtTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   vtCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   vtCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   vtRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       
   });

//VA Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/va/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const vaCaseDeath = document.querySelector(".us-covidtrack-va-death");
   const vaCaseConfirm = document.querySelector(".us-covidtrack-va-confirm");
   const vaTotHos = document.querySelector(".us-covidtrack-va-tothos");
   const vaCurHos = document.querySelector(".us-covidtrack-va-curhos");
   const vaCurIcu = document.querySelector(".us-covidtrack-va-curicu");
   const vaRecent = document.querySelector(".us-covidtrack-va-recent");      
   vaCaseDeath.textContent = addCommas(data.death);
   vaCaseConfirm.textContent = addCommas(data.positive);
   vaTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   vaCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   vaCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   vaRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//WA Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/wa/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const waCaseDeath = document.querySelector(".us-covidtrack-wa-death");
   const waCaseConfirm = document.querySelector(".us-covidtrack-wa-confirm");
   const waTotHos = document.querySelector(".us-covidtrack-wa-tothos");
   const waCurHos = document.querySelector(".us-covidtrack-wa-curhos");
   const waCurIcu = document.querySelector(".us-covidtrack-wa-curicu");
   const waRecent = document.querySelector(".us-covidtrack-wa-recent");       
   waCaseDeath.textContent = addCommas(data.death);
   waCaseConfirm.textContent = addCommas(data.positive);
   waTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   waCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   waCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   waRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//WV Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/wv/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const wvCaseDeath = document.querySelector(".us-covidtrack-wv-death");
   const wvCaseConfirm = document.querySelector(".us-covidtrack-wv-confirm");
   const wvTotHos = document.querySelector(".us-covidtrack-wv-tothos");
   const wvCurHos = document.querySelector(".us-covidtrack-wv-curhos");
   const wvCurIcu = document.querySelector(".us-covidtrack-wv-curicu");
   const wvRecent = document.querySelector(".us-covidtrack-wv-recent");       
   wvCaseDeath.textContent = addCommas(data.death);
   wvCaseConfirm.textContent = addCommas(data.positive);
   wvTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   wvCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   wvCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   wvRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//WI Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/wi/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const wiCaseDeath = document.querySelector(".us-covidtrack-wi-death");
   const wiCaseConfirm = document.querySelector(".us-covidtrack-wi-confirm");
   const wiTotHos = document.querySelector(".us-covidtrack-wi-tothos");
   const wiCurHos = document.querySelector(".us-covidtrack-wi-curhos");
   const wiCurIcu = document.querySelector(".us-covidtrack-wi-curicu");
   const wiRecent = document.querySelector(".us-covidtrack-wi-recent");       
   wiCaseDeath.textContent = addCommas(data.death);
   wiCaseConfirm.textContent = addCommas(data.positive);
   wiTotHos.textContent = addCommas(determineNull(data.hospitalizedCumulative));
   wiCurHos.textContent = addCommas(determineNull(data.hospitalizedCurrently));
   wiCurIcu.textContent = addCommas(determineNull(data.inIcuCurrently));
   wiRecent.textContent = new Date(data.dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      
   });

//WY Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/wy/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const wyCaseDeath = document.querySelector(".us-covidtrack-wy-death");
   const wyCaseConfirm = document.querySelector(".us-covidtrack-wy-confirm");
   const wyTotHos = document.querySelector(".us-covidtrack-wy-tothos");
   const wyCurHos = document.querySelector(".us-covidtrack-wy-curhos");
   const wyCurIcu = document.querySelector(".us-covidtrack-wy-curicu");
   const wyRecent = document.querySelector(".us-covidtrack-wy-recent");      
   wyCaseDeath.textContent = addCommas(data.death);
   wyCaseConfirm.textContent = addCommas(data.positive);
   wyTotHos.textContent = determineNull(addCommas(data.hospitalizedCumulative));
   wyCurHos.textContent = determineNull(addCommas(data.hospitalizedCurrently));
   wyCurIcu.textContent = determineNull(addCommas(data.inIcuCurrently));
   wyRecent.textContent = new Date(data.dateModified).toString().substring(4,15);       
   });

//US Count from COVID Tracking Project 
   fetch(localapi1)
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const usCaseDeathCTP = document.querySelector(".us-covidtrack-death");
   const usCaseConfirmCTP = document.querySelector(".us-covidtrack-confirm");
   const usTotHos = document.querySelector(".us-covidtrack-tothos");
   const usCurHos = document.querySelector(".us-covidtrack-curhos");
   const usCurIcu = document.querySelector(".us-covidtrack-curicu");
   const usRecent = document.querySelector(".us-covidtrack-recent");   
   const updateDate = getArrayFields(data, "lastModified").toString();    
   usCaseDeathCTP.textContent = addCommas(getArrayFields(data, "death"));
   usCaseConfirmCTP.textContent = addCommas(getArrayFields(data, "positive"));
   usTotHos.textContent = addCommas(getArrayFields(data, "hospitalizedCumulative"));
   usCurHos.textContent = addCommas(getArrayFields(data, "hospitalizedCurrently"));
   usCurIcu.textContent = addCommas(getArrayFields(data, "inIcuCurrently"));
   usRecent.textContent = updateDate.substring(0, 10);
   });

//US Total Count from COVID Tracking Project 
   fetch('https://api.covidtracking.com/v1/us/daily.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);   
   });

//US States Total Count from COVID Tracking Project 
   fetch('https://api.covidtracking.com/v1/states/daily.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);   
   }); 

//Global Functions
function getArrayFields(input, field) {
    const output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

function addCommas(x) {
    if (x == undefined || x == null) {
      return x = "Error";
    } else {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }   
}

function addDateComma(dateinput) {
 let p = dateinput.toString()
 let d = p.substring(0,4) + ',' + p.substring(4,6) + ',' + p.substring(6,8)
 return d
}
/* example: 
let test = new Date(addDateComma(20201221)).toString().substring(4,15)
console.log(test); --> "Dec 21 2020" */


const determineNull = input => input == undefined ? input = "NA" : input;/*{
    if (input == undefined) {
     return input = "NA";
   } else {
     return input
   }   
}*/

/*        fetch('.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
                mainContainer.appendChild(div);
            }
        }*/

/*
objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];
I want to extract a field from each object, and get an array containing the values, for example field foo would give array [ 1, 3, 5 ].

function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

var result = getFields(objArray, "foo"); // returns [ 1, 3, 5 ]

*/
