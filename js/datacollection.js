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
const globalapi2 = 'https://api.covid19api.com/total/dayone/country/united-states';//'https://api.covid19api.com/summary';
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
   usCaseConfirm.textContent = addCommas(data[(data.length - 1)].Confirmed) + ' as of ' + datea;   
   usCaseDeath.textContent = addCommas(data[(data.length - 1)].Deaths) + ' as of ' + datea;   
   /*usCaseDeath.textContent = data.deaths + ' as of ' + data.last_update.toString().substring(6,7) + '/' + data.last_update.toString().substring(8,10) + '/' + data.last_update.toString().substring(0,4); 
   usCaseConfirm.textContent = data.cases + ' as of ' + data.last_update.toString().substring(6,7) + '/' + data.last_update.toString().substring(8,10) + '/' + data.last_update.toString().substring(0,4);
   data.last_update.toString().substring(0, 10).replace(/-{1,}/g, '/') => year/month/day*/;   
  });     
         
//US Count from covid-api.com      
   fetch('https://covid-api.com/api/reports?date=2021-08-16&iso=USA', {
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
   + data.data[55].confirmed + data.data[56].confirmed);
   usCaseDeath.textContent = addCommas(data.data[0].deaths + data.data[1].deaths + data.data[2].deaths + data.data[3].deaths + data.data[4].deaths 
   + data.data[5].deaths + data.data[6].deaths + data.data[7].deaths + data.data[8].deaths + data.data[9].deaths + data.data[10].deaths + data.data[11].deaths
   + data.data[12].deaths + data.data[13].deaths + data.data[14].deaths + data.data[15].deaths + data.data[16].deaths + data.data[17].deaths + data.data[18].deaths
   + data.data[19].deaths + data.data[20].deaths + data.data[21].deaths + data.data[22].deaths + data.data[23].deaths + data.data[24].deaths
   + data.data[25].deaths + data.data[26].deaths + data.data[27].deaths + data.data[28].deaths + data.data[29].deaths + data.data[30].deaths
   + data.data[31].deaths + data.data[32].deaths + data.data[33].deaths + data.data[34].deaths + data.data[35].deaths + data.data[36].deaths
   + data.data[37].deaths + data.data[38].deaths + data.data[39].deaths + data.data[40].deaths + data.data[41].deaths + data.data[42].deaths
   + data.data[43].deaths + data.data[44].deaths + data.data[45].deaths + data.data[46].deaths + data.data[47].deaths + data.data[48].deaths
   + data.data[49].deaths + data.data[50].deaths + data.data[51].deaths + data.data[52].deaths + data.data[53].deaths + data.data[54].deaths
   + data.data[55].deaths + data.data[56].deaths);   
   usCaseRecent.textContent = data.data[0].date;      
   alCaseConfirm.textContent = addCommas(data.data[52].confirmed) + ' (' + addCommas(data.data[52].confirmed_diff) + ')';
   alCaseDeath.textContent = addCommas(data.data[52].deaths) + ' (' + addCommas(data.data[52].deaths_diff) + ')'; 
   alCaseRecent.textContent = data.data[52].date;
   akCaseConfirm.textContent = addCommas(data.data[39].confirmed) + ' (' + addCommas(data.data[39].confirmed_diff) + ')';
   akCaseDeath.textContent = addCommas(data.data[39].deaths) + ' (' + addCommas(data.data[39].deaths_diff) + ')';
   akCaseRecent.textContent = data.data[39].date;
   asCaseConfirm.textContent = 0
   asCaseDeath.textContent = 0 
   asCaseRecent.textContent = data.data[1].date;
   azCaseConfirm.textContent = addCommas(data.data[3].confirmed) + ' (' + addCommas(data.data[3].confirmed_diff) + ')';
   azCaseDeath.textContent = addCommas(data.data[3].deaths) + ' (' + addCommas(data.data[3].deaths_diff) + ')';
   azCaseRecent.textContent = data.data[3].date;
   arCaseConfirm.textContent = addCommas(data.data[40].confirmed) + ' (' + addCommas(data.data[40].confirmed_diff) + ')';
   arCaseDeath.textContent = addCommas(data.data[40].deaths) + ' (' + addCommas(data.data[40].deaths_diff) + ')';; 
   arCaseRecent.textContent = data.data[40].date;
   caCaseConfirm.textContent = addCommas(data.data[2].confirmed) + ' (' + addCommas(data.data[2].confirmed_diff) + ')';
   caCaseDeath.textContent = addCommas(data.data[2].deaths) + ' (' + addCommas(data.data[2].deaths_diff) + ')'; 
   caCaseRecent.textContent = data.data[2].date;
   coCaseConfirm.textContent = addCommas(data.data[9].confirmed) + ' (' + addCommas(data.data[9].confirmed_diff) + ')';
   coCaseDeath.textContent = addCommas(data.data[9].deaths) + ' (' + addCommas(data.data[9].deaths_diff) + ')'; 
   coCaseRecent.textContent = data.data[9].date;
   ctCaseConfirm.textContent = addCommas(data.data[31].confirmed) + ' (' + addCommas(data.data[31].confirmed_diff) + ')';
   ctCaseDeath.textContent = addCommas(data.data[31].deaths) + ' (' + addCommas(data.data[31].deaths_diff) + ')'; 
   ctCaseRecent.textContent = data.data[31].date;
   deCaseConfirm.textContent = addCommas(data.data[41].confirmed) + ' (' + addCommas(data.data[41].confirmed_diff) + ')';
   deCaseDeath.textContent = addCommas(data.data[41].deaths) + ' (' + addCommas(data.data[41].deaths_diff) + ')'; 
   deCaseRecent.textContent = data.data[41].date;
   dcCaseConfirm.textContent = addCommas(data.data[23].confirmed) + ' (' + addCommas(data.data[23].confirmed_diff) + ')';
   dcCaseDeath.textContent = addCommas(data.data[23].deaths) + ' (' + addCommas(data.data[23].deaths_diff) + ')'; 
   dcCaseRecent.textContent = data.data[23].date;
   flCaseConfirm.textContent = addCommas(data.data[10].confirmed) + ' (' + addCommas(data.data[10].confirmed_diff) + ')';
   flCaseDeath.textContent = addCommas(data.data[10].deaths) + ' (' + addCommas(data.data[10].deaths_diff) + ')'; 
   flCaseRecent.textContent = data.data[10].date;
   gaCaseConfirm.textContent = addCommas(data.data[8].confirmed) + ' (' + addCommas(data.data[8].confirmed_diff) + ')';
   gaCaseDeath.textContent = addCommas(data.data[8].deaths) + ' (' + addCommas(data.data[8].deaths_diff) + ')';
   gaCaseRecent.textContent = data.data[8].date;
   guCaseConfirm.textContent = addCommas(data.data[54].confirmed) + ' (' + addCommas(data.data[54].confirmed_diff) + ')';
   guCaseDeath.textContent = addCommas(data.data[54].deaths) + ' (' + addCommas(data.data[54].deaths_diff) + ')';
   guCaseRecent.textContent = data.data[54].date;
   hiCaseConfirm.textContent = addCommas(data.data[32].confirmed) + ' (' + addCommas(data.data[32].confirmed_diff) + ')';
   hiCaseDeath.textContent = addCommas(data.data[32].deaths) + ' (' + addCommas(data.data[32].deaths_diff) + ')';
   hiCaseRecent.textContent = data.data[32].date;
   idCaseConfirm.textContent = addCommas(data.data[42].confirmed) + ' (' + addCommas(data.data[42].confirmed_diff) + ')';
   idCaseDeath.textContent = addCommas(data.data[42].deaths) + ' (' + addCommas(data.data[42].deaths_diff) + ')';
   idCaseRecent.textContent = data.data[42].date;
   ilCaseConfirm.textContent = addCommas(data.data[1].confirmed) + ' (' + addCommas(data.data[1].confirmed_diff) + ')';
   ilCaseDeath.textContent = addCommas(data.data[1].deaths) + ' (' + addCommas(data.data[1].deaths_diff) + ')';
   ilCaseRecent.textContent = data.data[1].date;
   inCaseConfirm.textContent = addCommas(data.data[21].confirmed) + ' (' + addCommas(data.data[21].confirmed_diff) + ')';
   inCaseDeath.textContent = addCommas(data.data[21].deaths) + ' (' + addCommas(data.data[21].deaths_diff) + ')';
   inCaseRecent.textContent = data.data[21].date;
   iaCaseConfirm.textContent = addCommas(data.data[15].confirmed) + ' (' + addCommas(data.data[15].confirmed_diff) + ')';
   iaCaseDeath.textContent = addCommas(data.data[15].deaths) + ' (' + addCommas(data.data[15].deaths_diff) + ')';
   iaCaseRecent.textContent = data.data[15].date;
   ksCaseConfirm.textContent = addCommas(data.data[35].confirmed) + ' (' + addCommas(data.data[35].confirmed_diff) + ')';
   ksCaseDeath.textContent = addCommas(data.data[35].deaths) + ' (' + addCommas(data.data[35].deaths_diff) + ')';
   ksCaseRecent.textContent = data.data[35].date;
   kyCaseConfirm.textContent = addCommas(data.data[22].confirmed) + ' (' + addCommas(data.data[22].confirmed_diff) + ')';
   kyCaseDeath.textContent = addCommas(data.data[22].deaths) + ' (' + addCommas(data.data[22].deaths_diff) + ')';
   kyCaseRecent.textContent = data.data[22].date;
   laCaseConfirm.textContent = addCommas(data.data[36].confirmed) + ' (' + addCommas(data.data[36].confirmed_diff) + ')';
   laCaseDeath.textContent = addCommas(data.data[36].deaths) + ' (' + addCommas(data.data[36].deaths_diff) + ')';
   laCaseRecent.textContent = data.data[36].date;
   meCaseConfirm.textContent = addCommas(data.data[43].confirmed) + ' (' + addCommas(data.data[43].confirmed_diff) + ')';
   meCaseDeath.textContent = addCommas(data.data[43].deaths) + ' (' + addCommas(data.data[43].deaths_diff) + ')';
   meCaseRecent.textContent = data.data[43].date;
   mdCaseConfirm.textContent = addCommas(data.data[16].confirmed) + ' (' + addCommas(data.data[16].confirmed_diff) + ')';
   mdCaseDeath.textContent = addCommas(data.data[16].deaths) + ' (' + addCommas(data.data[16].deaths_diff) + ')';
   mdCaseRecent.textContent = data.data[16].date;
   maCaseConfirm.textContent = addCommas(data.data[5].confirmed) + ' (' + addCommas(data.data[5].confirmed_diff) + ')';
   maCaseDeath.textContent = addCommas(data.data[5].deaths) + ' (' + addCommas(data.data[5].deaths_diff) + ')';
   maCaseRecent.textContent = data.data[5].date;
   miCaseConfirm.textContent = addCommas(data.data[44].confirmed) + ' (' + addCommas(data.data[44].confirmed_diff) + ')';
   miCaseDeath.textContent = addCommas(data.data[44].deaths) + ' (' + addCommas(data.data[44].deaths_diff) + ')';
   miCaseRecent.textContent = data.data[44].date;
   mnCaseConfirm.textContent = addCommas(data.data[26].confirmed) + ' (' + addCommas(data.data[26].confirmed_diff) + ')';
   mnCaseDeath.textContent = addCommas(data.data[26].deaths) + ' (' + addCommas(data.data[26].deaths_diff) + ')';
   mnCaseRecent.textContent = data.data[26].date;
   msCaseConfirm.textContent = addCommas(data.data[45].confirmed) + ' (' + addCommas(data.data[45].confirmed_diff) + ')';
   msCaseDeath.textContent = addCommas(data.data[45].deaths) + ' (' + addCommas(data.data[45].deaths_diff) + ')';
   msCaseRecent.textContent = data.data[45].date;
   moCaseConfirm.textContent = addCommas(data.data[37].confirmed) + ' (' + addCommas(data.data[37].confirmed_diff) + ')';
   moCaseDeath.textContent = addCommas(data.data[37].deaths) + ' (' + addCommas(data.data[37].deaths_diff) + ')';
   moCaseRecent.textContent = data.data[37].date;
   mtCaseConfirm.textContent = addCommas(data.data[46].confirmed) + ' (' + addCommas(data.data[46].confirmed_diff) + ')';
   mtCaseDeath.textContent = addCommas(data.data[46].deaths) + ' (' + addCommas(data.data[46].deaths_diff) + ')';
   mtCaseRecent.textContent = data.data[46].date;
   neCaseConfirm.textContent = addCommas(data.data[27].confirmed) + ' (' + addCommas(data.data[27].confirmed_diff) + ')';
   neCaseDeath.textContent = addCommas(data.data[27].deaths) + ' (' + addCommas(data.data[27].deaths_diff) + ')';
   neCaseRecent.textContent = data.data[27].date;
   nvCaseConfirm.textContent = addCommas(data.data[24].confirmed) + ' (' + addCommas(data.data[24].confirmed_diff) + ')';
   nvCaseDeath.textContent = addCommas(data.data[24].deaths) + ' (' + addCommas(data.data[24].deaths_diff) + ')';
   nvCaseRecent.textContent = data.data[24].date;
   nhCaseConfirm.textContent = addCommas(data.data[25].confirmed) + ' (' + addCommas(data.data[25].confirmed_diff) + ')';
   nhCaseDeath.textContent = addCommas(data.data[25].deaths) + ' (' + addCommas(data.data[25].deaths_diff) + ')';
   nhCaseRecent.textContent = data.data[25].date;
   njCaseConfirm.textContent = addCommas(data.data[11].confirmed) + ' (' + addCommas(data.data[11].confirmed_diff) + ')';
   njCaseDeath.textContent = addCommas(data.data[11].deaths) + ' (' + addCommas(data.data[11].deaths_diff) + ')';
   njCaseRecent.textContent = data.data[11].date;
   nmCaseConfirm.textContent = addCommas(data.data[47].confirmed) + ' (' + addCommas(data.data[47].confirmed_diff) + ')';
   nmCaseDeath.textContent = addCommas(data.data[47].deaths) + ' (' + addCommas(data.data[47].deaths_diff) + ')';
   nmCaseRecent.textContent = data.data[47].date;
   nyCaseConfirm.textContent = addCommas(data.data[4].confirmed) + ' (' + addCommas(data.data[4].confirmed_diff) + ')';
   nyCaseDeath.textContent = addCommas(data.data[4].deaths) + ' (' + addCommas(data.data[4].deaths_diff) + ')';
   nyCaseRecent.textContent = data.data[4].date;
   ncCaseConfirm.textContent = addCommas(data.data[17].confirmed) + ' (' + addCommas(data.data[17].confirmed_diff) + ')';
   ncCaseDeath.textContent = addCommas(data.data[17].deaths) + ' (' + addCommas(data.data[17].deaths_diff) + ')';
   ncCaseRecent.textContent = data.data[17].date;
   ndCaseConfirm.textContent = addCommas(data.data[48].confirmed) + ' (' + addCommas(data.data[48].confirmed_diff) + ')';
   ndCaseDeath.textContent = addCommas(data.data[48].deaths) + ' (' + addCommas(data.data[48].deaths_diff) + ')';
   ndCaseRecent.textContent = data.data[48].date;
   mpCaseConfirm.textContent = addCommas(data.data[56].confirmed) + ' (' + addCommas(data.data[56].confirmed_diff) + ')';
   mpCaseDeath.textContent = addCommas(data.data[56].deaths) + ' (' + addCommas(data.data[56].deaths_diff) + ')';
   mpCaseRecent.textContent = data.data[56].date;
   ohCaseConfirm.textContent = addCommas(data.data[28].confirmed) + ' (' + addCommas(data.data[28].confirmed_diff) + ')';
   ohCaseDeath.textContent = addCommas(data.data[28].deaths) + ' (' + addCommas(data.data[28].deaths_diff) + ')';
   ohCaseRecent.textContent = data.data[28].date;
   okCaseConfirm.textContent = addCommas(data.data[33].confirmed) + ' (' + addCommas(data.data[33].confirmed_diff) + ')';
   okCaseDeath.textContent = addCommas(data.data[33].deaths) + ' (' + addCommas(data.data[33].deaths_diff) + ')';
   okCaseRecent.textContent = data.data[33].date;
   orCaseConfirm.textContent = addCommas(data.data[12].confirmed) + ' (' + addCommas(data.data[12].confirmed_diff) + ')';
   orCaseDeath.textContent = addCommas(data.data[12].deaths) + ' (' + addCommas(data.data[12].deaths_diff) + ')';
   orCaseRecent.textContent = data.data[12].date;
   paCaseConfirm.textContent = addCommas(data.data[14].confirmed) + ' (' + addCommas(data.data[14].confirmed_diff) + ')';
   paCaseDeath.textContent = addCommas(data.data[14].deaths) + ' (' + addCommas(data.data[14].deaths_diff) + ')';
   paCaseRecent.textContent = data.data[14].date;
   prCaseConfirm.textContent = addCommas(data.data[53].confirmed) + ' (' + addCommas(data.data[53].confirmed_diff) + ')';
   prCaseDeath.textContent = addCommas(data.data[53].deaths) + ' (' + addCommas(data.data[53].deaths_diff) + ')';
   prCaseRecent.textContent = data.data[53].date;
   riCaseConfirm.textContent = addCommas(data.data[29].confirmed) + ' (' + addCommas(data.data[29].confirmed_diff) + ')';
   riCaseDeath.textContent = addCommas(data.data[29].deaths) + ' (' + addCommas(data.data[29].deaths_diff) + ')';
   riCaseRecent.textContent = data.data[29].date;
   scCaseConfirm.textContent = addCommas(data.data[18].confirmed) + ' (' + addCommas(data.data[18].confirmed_diff) + ')';
   scCaseDeath.textContent = addCommas(data.data[18].deaths) + ' (' + addCommas(data.data[18].deaths_diff) + ')';
   scCaseRecent.textContent = data.data[18].date;
   sdCaseConfirm.textContent = addCommas(data.data[49].confirmed) + ' (' + addCommas(data.data[49].confirmed_diff) + ')';
   sdCaseDeath.textContent = addCommas(data.data[49].deaths) + ' (' + addCommas(data.data[49].deaths_diff) + ')';
   sdCaseRecent.textContent = data.data[49].date;
   tnCaseConfirm.textContent = addCommas(data.data[19].confirmed) + ' (' + addCommas(data.data[19].confirmed_diff) + ')';
   tnCaseDeath.textContent = addCommas(data.data[19].deaths) + ' (' + addCommas(data.data[19].deaths_diff) + ')';
   tnCaseRecent.textContent = data.data[19].date;
   txCaseConfirm.textContent = addCommas(data.data[13].confirmed) + ' (' + addCommas(data.data[13].confirmed_diff) + ')';
   txCaseDeath.textContent = addCommas(data.data[13].deaths) + ' (' + addCommas(data.data[13].deaths_diff) + ')';
   txCaseRecent.textContent = data.data[13].date;
   viCaseConfirm.textContent = addCommas(data.data[55].confirmed) + ' (' + addCommas(data.data[55].confirmed_diff) + ')';
   viCaseDeath.textContent = addCommas(data.data[55].deaths) + ' (' + addCommas(data.data[55].deaths_diff) + ')';
   viCaseRecent.textContent = data.data[55].date;
   utCaseConfirm.textContent = addCommas(data.data[34].confirmed) + ' (' + addCommas(data.data[34].confirmed_diff) + ')';
   utCaseDeath.textContent = addCommas(data.data[34].deaths) + ' (' + addCommas(data.data[34].deaths_diff) + ')';
   utCaseRecent.textContent = data.data[34].date;
   vtCaseConfirm.textContent = addCommas(data.data[38].confirmed) + ' (' + addCommas(data.data[38].confirmed_diff) + ')';
   vtCaseDeath.textContent = addCommas(data.data[38].deaths) + ' (' + addCommas(data.data[38].deaths_diff) + ')';
   vtCaseRecent.textContent = data.data[38].date;
   vaCaseConfirm.textContent = addCommas(data.data[20].confirmed) + ' (' + addCommas(data.data[20].confirmed_diff) + ')';
   vaCaseDeath.textContent = addCommas(data.data[20].deaths) + ' (' + addCommas(data.data[20].deaths_diff) + ')';
   vaCaseRecent.textContent = data.data[20].date;
   waCaseConfirm.textContent = addCommas(data.data[0].confirmed) + ' (' + addCommas(data.data[0].confirmed_diff) + ')';
   waCaseDeath.textContent = addCommas(data.data[0].deaths) + ' (' + addCommas(data.data[0].deaths_diff) + ')';
   waCaseRecent.textContent = data.data[0].date;
   wvCaseConfirm.textContent = addCommas(data.data[50].confirmed) + ' (' + addCommas(data.data[50].confirmed_diff) + ')';
   wvCaseDeath.textContent = addCommas(data.data[50].deaths) + ' (' + addCommas(data.data[50].deaths_diff) + ')';
   wvCaseRecent.textContent = data.data[50].date;
   wiCaseConfirm.textContent = addCommas(data.data[30].confirmed) + ' (' + addCommas(data.data[30].confirmed_diff) + ')';
   wiCaseDeath.textContent = addCommas(data.data[30].deaths) + ' (' + addCommas(data.data[30].deaths_diff) + ')';
   wiCaseRecent.textContent = data.data[30].date;
   wyCaseConfirm.textContent = addCommas(data.data[51].confirmed) + ' (' + addCommas(data.data[51].confirmed_diff) + ')';
   wyCaseDeath.textContent = addCommas(data.data[51].deaths) + ' (' + addCommas(data.data[51].deaths_diff) + ')';
   wyCaseRecent.textContent = data.data[51].date;     
  });   

//US Count from New York Times
d3v6.csv("./nytimes_covid_19_data/nytimes_us_total.csv").then(function(data) {
   console.log(data);  
   const usCaseConfirm = document.querySelector(".us-newyorktimes-confirm");
   const usCaseDeath = document.querySelector(".us-newyorktimes-death");
   const usCaseRecent = document.querySelector(".us-newyorktimes-recent");
   usCaseConfirm.textContent = addCommas(data[(data.length - 1)].cases);
   usCaseDeath.textContent = addCommas(data[(data.length - 1)].deaths); 
   usCaseRecent.textContent = data[(data.length - 1)].date;
  });

//NY Count from New York Times
d3v6.csv("./nytimes_covid_19_data/nytimes_daily_reports/daily.csv").then(function(data) {
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

//Latest States Count from COVID Tracking Project
  d3v6.json("./covidtrack_covid_19_data/covidtrackstates.json").then(function(data) {
  console.log(data);
//AL Count from COVID Tracking Project   
   const alCaseDeath = document.querySelector(".us-covidtrack-al-death");
   const alCaseConfirm = document.querySelector(".us-covidtrack-al-confirm");
   const alTotHos = document.querySelector(".us-covidtrack-al-tothos");
   const alCurHos = document.querySelector(".us-covidtrack-al-curhos");
   const alCurIcu = document.querySelector(".us-covidtrack-al-curicu");
   const alRecent = document.querySelector(".us-covidtrack-al-recent");   
   alCaseDeath.textContent = addCommas(data[1].death);
   alCaseConfirm.textContent = addCommas(data[1].positive);
   alTotHos.textContent = addCommas(determineNull(data[1].hospitalizedCumulative));
   alCurHos.textContent = addCommas(determineNull(data[1].hospitalizedCurrently));
   alCurIcu.textContent = addCommas(determineNull(data[1].inIcuCurrently));
   alRecent.textContent = new Date(data[1].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/

//AK Count from COVID Tracking Project
   const akCaseDeath = document.querySelector(".us-covidtrack-ak-death");
   const akCaseConfirm = document.querySelector(".us-covidtrack-ak-confirm");
   const akTotHos = document.querySelector(".us-covidtrack-ak-tothos");
   const akCurHos = document.querySelector(".us-covidtrack-ak-curhos");
   const akCurIcu = document.querySelector(".us-covidtrack-ak-curicu");
   const akRecent = document.querySelector(".us-covidtrack-ak-recent");       
   akCaseDeath.textContent = addCommas(data[0].death);
   akCaseConfirm.textContent = addCommas(data[0].positive);
   akTotHos.textContent = addCommas(determineNull(data[0].hospitalizedCumulative));
   akCurHos.textContent = addCommas(determineNull(data[0].hospitalizedCurrently));
   akCurIcu.textContent = addCommas(determineNull(data[0].inIcuCurrently));
   akRecent.textContent = new Date(data[0].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//AS Count from COVID Tracking Project
   const asCaseDeath = document.querySelector(".us-covidtrack-as-death");
   const asCaseConfirm = document.querySelector(".us-covidtrack-as-confirm");
   const asTotHos = document.querySelector(".us-covidtrack-as-tothos");
   const asCurHos = document.querySelector(".us-covidtrack-as-curhos");
   const asCurIcu = document.querySelector(".us-covidtrack-as-curicu");
   const asRecent = document.querySelector(".us-covidtrack-as-recent");       
   asCaseDeath.textContent = addCommas(data[3].death);
   asCaseConfirm.textContent = addCommas(data[3].positive);
   asTotHos.textContent = addCommas(determineNull(data[3].hospitalizedCumulative));
   asCurHos.textContent = addCommas(determineNull(data[3].hospitalizedCurrently));
   asCurIcu.textContent = addCommas(determineNull(data[3].inIcuCurrently));
   asRecent.textContent = new Date(data[3].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//AZ Count from COVID Tracking Project
   const azCaseDeath = document.querySelector(".us-covidtrack-az-death");
   const azCaseConfirm = document.querySelector(".us-covidtrack-az-confirm");
   const azTotHos = document.querySelector(".us-covidtrack-az-tothos");
   const azCurHos = document.querySelector(".us-covidtrack-az-curhos");
   const azCurIcu = document.querySelector(".us-covidtrack-az-curicu");
   const azRecent = document.querySelector(".us-covidtrack-az-recent");      
   azCaseDeath.textContent = addCommas(data[4].death);
   azCaseConfirm.textContent = addCommas(data[4].positive);
   azTotHos.textContent = addCommas(determineNull(data[4].hospitalizedCumulative));
   azCurHos.textContent = addCommas(determineNull(data[4].hospitalizedCurrently));
   azCurIcu.textContent = addCommas(determineNull(data[4].inIcuCurrently));
   azRecent.textContent = new Date(data[4].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/    

//AR Count from COVID Tracking Project
   const arCaseDeath = document.querySelector(".us-covidtrack-ar-death");
   const arCaseConfirm = document.querySelector(".us-covidtrack-ar-confirm");
   const arTotHos = document.querySelector(".us-covidtrack-ar-tothos");
   const arCurHos = document.querySelector(".us-covidtrack-ar-curhos");
   const arCurIcu = document.querySelector(".us-covidtrack-ar-curicu");
   const arRecent = document.querySelector(".us-covidtrack-ar-recent");      
   arCaseDeath.textContent = addCommas(data[2].death);
   arCaseConfirm.textContent = addCommas(data[2].positive);
   arTotHos.textContent = addCommas(determineNull(data[2].hospitalizedCumulative));
   arCurHos.textContent = addCommas(determineNull(data[2].hospitalizedCurrently));
   arCurIcu.textContent = addCommas(determineNull(data[2].inIcuCurrently));
   arRecent.textContent = new Date(data[2].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//CA Count from COVID Tracking Project
   const caTotHos = document.querySelector(".us-covidtrack-ca-tothos");
   const caCurHos = document.querySelector(".us-covidtrack-ca-curhos");
   const caCurIcu = document.querySelector(".us-covidtrack-ca-curicu");
   const caRecent = document.querySelector(".us-covidtrack-ca-recent");       
   caCaseDeath.textContent = addCommas(data[5].death);
   caCaseConfirm.textContent = addCommas(data[5].positive);
   caTotHos.textContent = addCommas(determineNull(data[5].hospitalizedCumulative));
   caCurHos.textContent = addCommas(determineNull(data[5].hospitalizedCurrently));
   caCurIcu.textContent = addCommas(determineNull(data[5].inIcuCurrently));
   caRecent.textContent = new Date(data[5].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//CO Count from COVID Tracking Project
   const coCaseDeath = document.querySelector(".us-covidtrack-co-death");
   const coCaseConfirm = document.querySelector(".us-covidtrack-co-confirm");
   const coTotHos = document.querySelector(".us-covidtrack-co-tothos");
   const coCurHos = document.querySelector(".us-covidtrack-co-curhos");
   const coCurIcu = document.querySelector(".us-covidtrack-co-curicu");
   const coRecent = document.querySelector(".us-covidtrack-co-recent");      
   coCaseDeath.textContent = addCommas(data[6].death);
   coCaseConfirm.textContent = addCommas(data[6].positive);
   coTotHos.textContent = addCommas(determineNull(data[6].hospitalizedCumulative));
   coCurHos.textContent = addCommas(determineNull(data[6].hospitalizedCurrently));
   coCurIcu.textContent = addCommas(determineNull(data[6].inIcuCurrently));
   coRecent.textContent = new Date(data[6].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/     

//CT Count from COVID Tracking Project
   const ctCaseDeath = document.querySelector(".us-covidtrack-ct-death");
   const ctCaseConfirm = document.querySelector(".us-covidtrack-ct-confirm");
   const ctTotHos = document.querySelector(".us-covidtrack-ct-tothos");
   const ctCurHos = document.querySelector(".us-covidtrack-ct-curhos");
   const ctCurIcu = document.querySelector(".us-covidtrack-ct-curicu");
   const ctRecent = document.querySelector(".us-covidtrack-ct-recent");      
   ctCaseDeath.textContent = addCommas(data[7].death);
   ctCaseConfirm.textContent = addCommas(data[7].positive);
   ctTotHos.textContent = addCommas(determineNull(data[7].hospitalizedCumulative));
   ctCurHos.textContent = addCommas(determineNull(data[7].hospitalizedCurrently));
   ctCurIcu.textContent = addCommas(determineNull(data[7].inIcuCurrently));
   ctRecent.textContent = new Date(data[7].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//DE Count from COVID Tracking Project
   const deCaseDeath = document.querySelector(".us-covidtrack-de-death");
   const deCaseConfirm = document.querySelector(".us-covidtrack-de-confirm");
   const deTotHos = document.querySelector(".us-covidtrack-de-tothos");
   const deCurHos = document.querySelector(".us-covidtrack-de-curhos");
   const deCurIcu = document.querySelector(".us-covidtrack-de-curicu");
   const deRecent = document.querySelector(".us-covidtrack-de-recent");      
   deCaseDeath.textContent = addCommas(data[9].death);
   deCaseConfirm.textContent = addCommas(data[9].positive);
   deTotHos.textContent = addCommas(determineNull(data[9].hospitalizedCumulative));
   deCurHos.textContent = addCommas(determineNull(data[9].hospitalizedCurrently));
   deCurIcu.textContent = addCommas(determineNull(data[9].inIcuCurrently));
   deRecent.textContent = new Date(data[9].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//DC Count from COVID Tracking Project
   const dcCaseDeath = document.querySelector(".us-covidtrack-dc-death");
   const dcCaseConfirm = document.querySelector(".us-covidtrack-dc-confirm");
   const dcTotHos = document.querySelector(".us-covidtrack-dc-tothos");
   const dcCurHos = document.querySelector(".us-covidtrack-dc-curhos");
   const dcCurIcu = document.querySelector(".us-covidtrack-dc-curicu");
   const dcRecent = document.querySelector(".us-covidtrack-dc-recent");      
   dcCaseDeath.textContent = addCommas(data[8].death);
   dcCaseConfirm.textContent = addCommas(data[8].positive);
   dcTotHos.textContent = addCommas(determineNull(data[8].hospitalizedCumulative));
   dcCurHos.textContent = addCommas(determineNull(data[8].hospitalizedCurrently));
   dcCurIcu.textContent = addCommas(determineNull(data[8].inIcuCurrently));
   dcRecent.textContent = new Date(data[8].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//FL Count from COVID Tracking Project
   const flCaseDeath = document.querySelector(".us-covidtrack-fl-death");
   const flCaseConfirm = document.querySelector(".us-covidtrack-fl-confirm");
   const flTotHos = document.querySelector(".us-covidtrack-fl-tothos");
   const flCurHos = document.querySelector(".us-covidtrack-fl-curhos");
   const flCurIcu = document.querySelector(".us-covidtrack-fl-curicu");
   const flRecent = document.querySelector(".us-covidtrack-fl-recent");      
   flCaseDeath.textContent = addCommas(data[10].death);
   flCaseConfirm.textContent = addCommas(data[10].positive);
   flTotHos.textContent = addCommas(determineNull(data[10].hospitalizedCumulative));
   flCurHos.textContent = addCommas(determineNull(data[10].hospitalizedCurrently));
   flCurIcu.textContent = addCommas(determineNull(data[10].inIcuCurrently));
   flRecent.textContent = new Date(data[10].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//GA Count from COVID Tracking Project
   const gaCaseDeath = document.querySelector(".us-covidtrack-ga-death");
   const gaCaseConfirm = document.querySelector(".us-covidtrack-ga-confirm");
   const gaTotHos = document.querySelector(".us-covidtrack-ga-tothos");
   const gaCurHos = document.querySelector(".us-covidtrack-ga-curhos");
   const gaCurIcu = document.querySelector(".us-covidtrack-ga-curicu");
   const gaRecent = document.querySelector(".us-covidtrack-ga-recent");      
   gaCaseDeath.textContent = addCommas(data[11].death);
   gaCaseConfirm.textContent = addCommas(data[11].positive);
   gaTotHos.textContent = addCommas(determineNull(data[11].hospitalizedCumulative));
   gaCurHos.textContent = addCommas(determineNull(data[11].hospitalizedCurrently));
   gaCurIcu.textContent = addCommas(determineNull(data[11].inIcuCurrently));
   gaRecent.textContent = new Date(data[11].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/     

//GU Count from COVID Tracking Project
   const guCaseDeath = document.querySelector(".us-covidtrack-gu-death");
   const guCaseConfirm = document.querySelector(".us-covidtrack-gu-confirm");
   const guTotHos = document.querySelector(".us-covidtrack-gu-tothos");
   const guCurHos = document.querySelector(".us-covidtrack-gu-curhos");
   const guCurIcu = document.querySelector(".us-covidtrack-gu-curicu");
   const guRecent = document.querySelector(".us-covidtrack-gu-recent");      
   guCaseDeath.textContent = addCommas(data[12].death);
   guCaseConfirm.textContent = addCommas(data[12].positive);
   guTotHos.textContent = addCommas(determineNull(data[12].hospitalizedCumulative));
   guCurHos.textContent = addCommas(determineNull(data[12].hospitalizedCurrently));
   guCurIcu.textContent = addCommas(determineNull(data[12].inIcuCurrently));
   guRecent.textContent = new Date(data[12].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//HI Count from COVID Tracking Project
   const hiCaseDeath = document.querySelector(".us-covidtrack-hi-death");
   const hiCaseConfirm = document.querySelector(".us-covidtrack-hi-confirm");
   const hiTotHos = document.querySelector(".us-covidtrack-hi-tothos");
   const hiCurHos = document.querySelector(".us-covidtrack-hi-curhos");
   const hiCurIcu = document.querySelector(".us-covidtrack-hi-curicu");
   const hiRecent = document.querySelector(".us-covidtrack-hi-recent");      
   hiCaseDeath.textContent = addCommas(data[13].death);
   hiCaseConfirm.textContent = addCommas(data[13].positive);
   hiTotHos.textContent = addCommas(determineNull(data[13].hospitalizedCumulative));
   hiCurHos.textContent = addCommas(determineNull(data[13].hospitalizedCurrently));
   hiCurIcu.textContent = addCommas(determineNull(data[13].inIcuCurrently));
   hiRecent.textContent = new Date(data[13].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//ID Count from COVID Tracking Project
   const idCaseDeath = document.querySelector(".us-covidtrack-id-death");
   const idCaseConfirm = document.querySelector(".us-covidtrack-id-confirm");
   const idTotHos = document.querySelector(".us-covidtrack-id-tothos");
   const idCurHos = document.querySelector(".us-covidtrack-id-curhos");
   const idCurIcu = document.querySelector(".us-covidtrack-id-curicu");
   const idRecent = document.querySelector(".us-covidtrack-id-recent");       
   idCaseDeath.textContent = addCommas(data[15].death);
   idCaseConfirm.textContent = addCommas(data[15].positive);
   idTotHos.textContent = addCommas(determineNull(data[15].hospitalizedCumulative));
   idCurHos.textContent = addCommas(determineNull(data[15].hospitalizedCurrently));
   idCurIcu.textContent = addCommas(determineNull(data[15].inIcuCurrently));
   idRecent.textContent = new Date(data[15].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//IL Count from COVID Tracking Project
   const ilCaseDeath = document.querySelector(".us-covidtrack-il-death");
   const ilCaseConfirm = document.querySelector(".us-covidtrack-il-confirm");
   const ilTotHos = document.querySelector(".us-covidtrack-il-tothos");
   const ilCurHos = document.querySelector(".us-covidtrack-il-curhos");
   const ilCurIcu = document.querySelector(".us-covidtrack-il-curicu");
   const ilRecent = document.querySelector(".us-covidtrack-il-recent");       
   ilCaseDeath.textContent = addCommas(data[16].death);
   ilCaseConfirm.textContent = addCommas(data[16].positive);
   ilTotHos.textContent = addCommas(determineNull(data[16].hospitalizedCumulative));
   ilCurHos.textContent = addCommas(determineNull(data[16].hospitalizedCurrently));
   ilCurIcu.textContent = addCommas(determineNull(data[16].inIcuCurrently));
   ilRecent.textContent = new Date(data[16].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/         

//IN Count from COVID Tracking Project
   const inCaseDeath = document.querySelector(".us-covidtrack-in-death");
   const inCaseConfirm = document.querySelector(".us-covidtrack-in-confirm");
   const inTotHos = document.querySelector(".us-covidtrack-in-tothos");
   const inCurHos = document.querySelector(".us-covidtrack-in-curhos");
   const inCurIcu = document.querySelector(".us-covidtrack-in-curicu");
   const inRecent = document.querySelector(".us-covidtrack-in-recent");       
   inCaseDeath.textContent = addCommas(data[17].death);
   inCaseConfirm.textContent = addCommas(data[17].positive);
   inTotHos.textContent = addCommas(determineNull(data[17].hospitalizedCumulative));
   inCurHos.textContent = addCommas(determineNull(data[17].hospitalizedCurrently));
   inCurIcu.textContent = addCommas(determineNull(data[17].inIcuCurrently));
   inRecent.textContent = new Date(data[17].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/        

//IA Count from COVID Tracking Project
   const iaCaseDeath = document.querySelector(".us-covidtrack-ia-death");
   const iaCaseConfirm = document.querySelector(".us-covidtrack-ia-confirm");
   const iaTotHos = document.querySelector(".us-covidtrack-ia-tothos");
   const iaCurHos = document.querySelector(".us-covidtrack-ia-curhos");
   const iaCurIcu = document.querySelector(".us-covidtrack-ia-curicu");
   const iaRecent = document.querySelector(".us-covidtrack-ia-recent");       
   iaCaseDeath.textContent = addCommas(data[14].death);
   iaCaseConfirm.textContent = addCommas(data[14].positive);
   iaTotHos.textContent = addCommas(determineNull(data[14].hospitalizedCumulative));
   iaCurHos.textContent = addCommas(determineNull(data[14].hospitalizedCurrently));
   iaCurIcu.textContent = addCommas(determineNull(data[14].inIcuCurrently));
   iaRecent.textContent = new Date(data[14].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//KS Count from COVID Tracking Project
   const ksCaseDeath = document.querySelector(".us-covidtrack-ks-death");
   const ksCaseConfirm = document.querySelector(".us-covidtrack-ks-confirm");
   const ksTotHos = document.querySelector(".us-covidtrack-ks-tothos");
   const ksCurHos = document.querySelector(".us-covidtrack-ks-curhos");
   const ksCurIcu = document.querySelector(".us-covidtrack-ks-curicu");
   const ksRecent = document.querySelector(".us-covidtrack-ks-recent");       
   ksCaseDeath.textContent = addCommas(data[18].death);
   ksCaseConfirm.textContent = addCommas(data[18].positive);
   ksTotHos.textContent = addCommas(determineNull(data[18].hospitalizedCumulative));
   ksCurHos.textContent = addCommas(determineNull(data[18].hospitalizedCurrently));
   ksCurIcu.textContent = addCommas(determineNull(data[18].inIcuCurrently));
   ksRecent.textContent = new Date(data[18].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//KY Count from COVID Tracking Project
   const kyCaseDeath = document.querySelector(".us-covidtrack-ky-death");
   const kyCaseConfirm = document.querySelector(".us-covidtrack-ky-confirm");
   const kyTotHos = document.querySelector(".us-covidtrack-ky-tothos");
   const kyCurHos = document.querySelector(".us-covidtrack-ky-curhos");
   const kyCurIcu = document.querySelector(".us-covidtrack-ky-curicu");
   const kyRecent = document.querySelector(".us-covidtrack-ky-recent");       
   kyCaseDeath.textContent = addCommas(data[19].death);
   kyCaseConfirm.textContent = addCommas(data[19].positive);
   kyTotHos.textContent = addCommas(determineNull(data[19].hospitalizedCumulative));
   kyCurHos.textContent = addCommas(determineNull(data[19].hospitalizedCurrently));
   kyCurIcu.textContent = addCommas(determineNull(data[19].inIcuCurrently));
   kyRecent.textContent = new Date(data[19].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//LA Count from COVID Tracking Project
   const laCaseDeath = document.querySelector(".us-covidtrack-la-death");
   const laCaseConfirm = document.querySelector(".us-covidtrack-la-confirm");
   const laTotHos = document.querySelector(".us-covidtrack-la-tothos");
   const laCurHos = document.querySelector(".us-covidtrack-la-curhos");
   const laCurIcu = document.querySelector(".us-covidtrack-la-curicu");
   const laRecent = document.querySelector(".us-covidtrack-la-recent");       
   laCaseDeath.textContent = addCommas(data[20].death);
   laCaseConfirm.textContent = addCommas(data[20].positive);
   laTotHos.textContent = addCommas(determineNull(data[20].hospitalizedCumulative));
   laCurHos.textContent = addCommas(determineNull(data[20].hospitalizedCurrently));
   laCurIcu.textContent = addCommas(determineNull(data[20].inIcuCurrently));
   laRecent.textContent = new Date(data[20].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//ME Count from COVID Tracking Project
   const meCaseDeath = document.querySelector(".us-covidtrack-me-death");
   const meCaseConfirm = document.querySelector(".us-covidtrack-me-confirm");
   const meTotHos = document.querySelector(".us-covidtrack-me-tothos");
   const meCurHos = document.querySelector(".us-covidtrack-me-curhos");
   const meCurIcu = document.querySelector(".us-covidtrack-me-curicu");
   const meRecent = document.querySelector(".us-covidtrack-me-recent");      
   meCaseDeath.textContent = addCommas(data[23].death);
   meCaseConfirm.textContent = addCommas(data[23].positive);
   meTotHos.textContent = addCommas(determineNull(data[23].hospitalizedCumulative));
   meCurHos.textContent = addCommas(determineNull(data[23].hospitalizedCurrently));
   meCurIcu.textContent = addCommas(determineNull(data[23].inIcuCurrently));
   meRecent.textContent = new Date(data[23].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//MD Count from COVID Tracking Project
   const mdCaseDeath = document.querySelector(".us-covidtrack-md-death");
   const mdCaseConfirm = document.querySelector(".us-covidtrack-md-confirm");
   const mdTotHos = document.querySelector(".us-covidtrack-md-tothos");
   const mdCurHos = document.querySelector(".us-covidtrack-md-curhos");
   const mdCurIcu = document.querySelector(".us-covidtrack-md-curicu");
   const mdRecent = document.querySelector(".us-covidtrack-md-recent");      
   mdCaseDeath.textContent = addCommas(data[22].death);
   mdCaseConfirm.textContent = addCommas(data[22].positive);
   mdTotHos.textContent = addCommas(determineNull(data[22].hospitalizedCumulative));
   mdCurHos.textContent = addCommas(determineNull(data[22].hospitalizedCurrently));
   mdCurIcu.textContent = addCommas(determineNull(data[22].inIcuCurrently));
   mdRecent.textContent = new Date(data[22].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//MA Count from COVID Tracking Project
   const maCaseDeath = document.querySelector(".us-covidtrack-ma-death");
   const maCaseConfirm = document.querySelector(".us-covidtrack-ma-confirm");
   const maTotHos = document.querySelector(".us-covidtrack-ma-tothos");
   const maCurHos = document.querySelector(".us-covidtrack-ma-curhos");
   const maCurIcu = document.querySelector(".us-covidtrack-ma-curicu");
   const maRecent = document.querySelector(".us-covidtrack-ma-recent");      
   maCaseDeath.textContent = addCommas(data[21].death);
   maCaseConfirm.textContent = addCommas(data[21].positive);
   maTotHos.textContent = addCommas(determineNull(data[21].hospitalizedCumulative));
   maCurHos.textContent = addCommas(determineNull(data[21].hospitalizedCurrently));
   maCurIcu.textContent = addCommas(determineNull(data[21].inIcuCurrently));
   maRecent.textContent = new Date(data[21].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//MI Count from COVID Tracking Project
   const miCaseDeath = document.querySelector(".us-covidtrack-mi-death");
   const miCaseConfirm = document.querySelector(".us-covidtrack-mi-confirm");
   const miTotHos = document.querySelector(".us-covidtrack-mi-tothos");
   const miCurHos = document.querySelector(".us-covidtrack-mi-curhos");
   const miCurIcu = document.querySelector(".us-covidtrack-mi-curicu");
   const miRecent = document.querySelector(".us-covidtrack-mi-recent");      
   miCaseDeath.textContent = addCommas(data[24].death);
   miCaseConfirm.textContent = addCommas(data[24].positive);
   miTotHos.textContent = addCommas(determineNull(data[24].hospitalizedCumulative));
   miCurHos.textContent = addCommas(determineNull(data[24].hospitalizedCurrently));
   miCurIcu.textContent = addCommas(determineNull(data[24].inIcuCurrently));
   miRecent.textContent = new Date(data[24].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//MN Count from COVID Tracking Project
   const mnCaseDeath = document.querySelector(".us-covidtrack-mn-death");
   const mnCaseConfirm = document.querySelector(".us-covidtrack-mn-confirm");
   const mnTotHos = document.querySelector(".us-covidtrack-mn-tothos");
   const mnCurHos = document.querySelector(".us-covidtrack-mn-curhos");
   const mnCurIcu = document.querySelector(".us-covidtrack-mn-curicu");
   const mnRecent = document.querySelector(".us-covidtrack-mn-recent");      
   mnCaseDeath.textContent = addCommas(data[25].death);
   mnCaseConfirm.textContent = addCommas(data[25].positive);
   mnTotHos.textContent = addCommas(determineNull(data[25].hospitalizedCumulative));
   mnCurHos.textContent = addCommas(determineNull(data[25].hospitalizedCurrently));
   mnCurIcu.textContent = addCommas(determineNull(data[25].inIcuCurrently));
   mnRecent.textContent = new Date(data[25].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//MS Count from COVID Tracking Project
   const msCaseDeath = document.querySelector(".us-covidtrack-ms-death");
   const msCaseConfirm = document.querySelector(".us-covidtrack-ms-confirm");
   const msTotHos = document.querySelector(".us-covidtrack-ms-tothos");
   const msCurHos = document.querySelector(".us-covidtrack-ms-curhos");
   const msCurIcu = document.querySelector(".us-covidtrack-ms-curicu");
   const msRecent = document.querySelector(".us-covidtrack-ms-recent");      
   msCaseDeath.textContent = addCommas(data[28].death);
   msCaseConfirm.textContent = addCommas(data[28].positive);
   msTotHos.textContent = addCommas(determineNull(data[28].hospitalizedCumulative));
   msCurHos.textContent = addCommas(determineNull(data[28].hospitalizedCurrently));
   msCurIcu.textContent = addCommas(determineNull(data[28].inIcuCurrently));
   msRecent.textContent = new Date(data[28].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//MO Count from COVID Tracking Project
   const moCaseDeath = document.querySelector(".us-covidtrack-mo-death");
   const moCaseConfirm = document.querySelector(".us-covidtrack-mo-confirm");
   const moTotHos = document.querySelector(".us-covidtrack-mo-tothos");
   const moCurHos = document.querySelector(".us-covidtrack-mo-curhos");
   const moCurIcu = document.querySelector(".us-covidtrack-mo-curicu");
   const moRecent = document.querySelector(".us-covidtrack-mo-recent");      
   moCaseDeath.textContent = addCommas(data[26].death);
   moCaseConfirm.textContent = addCommas(data[26].positive);
   moTotHos.textContent = addCommas(determineNull(data[26].hospitalizedCumulative));
   moCurHos.textContent = addCommas(determineNull(data[26].hospitalizedCurrently));
   moCurIcu.textContent = addCommas(determineNull(data[26].inIcuCurrently));
   moRecent.textContent = new Date(data[26].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//MT Count from COVID Tracking Project
   const mtCaseDeath = document.querySelector(".us-covidtrack-mt-death");
   const mtCaseConfirm = document.querySelector(".us-covidtrack-mt-confirm");
   const mtTotHos = document.querySelector(".us-covidtrack-mt-tothos");
   const mtCurHos = document.querySelector(".us-covidtrack-mt-curhos");
   const mtCurIcu = document.querySelector(".us-covidtrack-mt-curicu");
   const mtRecent = document.querySelector(".us-covidtrack-mt-recent");      
   mtCaseDeath.textContent = addCommas(data[29].death);
   mtCaseConfirm.textContent = addCommas(data[29].positive);
   mtTotHos.textContent = addCommas(determineNull(data[29].hospitalizedCumulative));
   mtCurHos.textContent = addCommas(determineNull(data[29].hospitalizedCurrently));
   mtCurIcu.textContent = addCommas(determineNull(data[29].inIcuCurrently));
   mtRecent.textContent = new Date(data[29].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//NE Count from COVID Tracking Project
   const neCaseDeath = document.querySelector(".us-covidtrack-ne-death");
   const neCaseConfirm = document.querySelector(".us-covidtrack-ne-confirm");
   const neTotHos = document.querySelector(".us-covidtrack-ne-tothos");
   const neCurHos = document.querySelector(".us-covidtrack-ne-curhos");
   const neCurIcu = document.querySelector(".us-covidtrack-ne-curicu");
   const neRecent = document.querySelector(".us-covidtrack-ne-recent");      
   neCaseDeath.textContent = addCommas(data[32].death);
   neCaseConfirm.textContent = addCommas(data[32].positive);
   neTotHos.textContent = addCommas(determineNull(data[32].hospitalizedCumulative));
   neCurHos.textContent = addCommas(determineNull(data[32].hospitalizedCurrently));
   neCurIcu.textContent = addCommas(determineNull(data[32].inIcuCurrently));
   neRecent.textContent = new Date(data[32].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//NV Count from COVID Tracking Project
   const nvCaseDeath = document.querySelector(".us-covidtrack-nv-death");
   const nvCaseConfirm = document.querySelector(".us-covidtrack-nv-confirm");
   const nvTotHos = document.querySelector(".us-covidtrack-nv-tothos");
   const nvCurHos = document.querySelector(".us-covidtrack-nv-curhos");
   const nvCurIcu = document.querySelector(".us-covidtrack-nv-curicu");
   const nvRecent = document.querySelector(".us-covidtrack-nv-recent");      
   nvCaseDeath.textContent = addCommas(data[36].death);
   nvCaseConfirm.textContent = addCommas(data[36].positive);
   nvTotHos.textContent = addCommas(determineNull(data[36].hospitalizedCumulative));
   nvCurHos.textContent = addCommas(determineNull(data[36].hospitalizedCurrently));
   nvCurIcu.textContent = addCommas(determineNull(data[36].inIcuCurrently));
   nvRecent.textContent = new Date(addDateComma(data[36].date)).toString().substring(4,15); /*determineNull(data.dateModified.toString().substring(0, 10));*/       

//NH Count from COVID Tracking Project
   const nhCaseDeath = document.querySelector(".us-covidtrack-nh-death");
   const nhCaseConfirm = document.querySelector(".us-covidtrack-nh-confirm");
   const nhTotHos = document.querySelector(".us-covidtrack-nh-tothos");
   const nhCurHos = document.querySelector(".us-covidtrack-nh-curhos");
   const nhCurIcu = document.querySelector(".us-covidtrack-nh-curicu");
   const nhRecent = document.querySelector(".us-covidtrack-nh-recent");      
   nhCaseDeath.textContent = addCommas(data[33].death);
   nhCaseConfirm.textContent = addCommas(data[33].positive);
   nhTotHos.textContent = addCommas(determineNull(data[33].hospitalizedCumulative));
   nhCurHos.textContent = addCommas(determineNull(data[33].hospitalizedCurrently));
   nhCurIcu.textContent = addCommas(determineNull(data[33].inIcuCurrently));
   nhRecent.textContent = new Date(data[33].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//NJ Count from COVID Tracking Project
   const njCaseDeath = document.querySelector(".us-covidtrack-nj-death");
   const njCaseConfirm = document.querySelector(".us-covidtrack-nj-confirm");
   const njTotHos = document.querySelector(".us-covidtrack-nj-tothos");
   const njCurHos = document.querySelector(".us-covidtrack-nj-curhos");
   const njCurIcu = document.querySelector(".us-covidtrack-nj-curicu");
   const njRecent = document.querySelector(".us-covidtrack-nj-recent");      
   njCaseDeath.textContent = addCommas(data[34].death);
   njCaseConfirm.textContent = addCommas(data[34].positive);
   njTotHos.textContent = addCommas(determineNull(data[34].hospitalizedCumulative));
   njCurHos.textContent = addCommas(determineNull(data[34].hospitalizedCurrently));
   njCurIcu.textContent = addCommas(determineNull(data[34].inIcuCurrently));
   njRecent.textContent = new Date(data[34].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//NM Count from COVID Tracking Project
   const nmCaseDeath = document.querySelector(".us-covidtrack-nm-death");
   const nmCaseConfirm = document.querySelector(".us-covidtrack-nm-confirm");
   const nmTotHos = document.querySelector(".us-covidtrack-nm-tothos");
   const nmCurHos = document.querySelector(".us-covidtrack-nm-curhos");
   const nmCurIcu = document.querySelector(".us-covidtrack-nm-curicu");
   const nmRecent = document.querySelector(".us-covidtrack-nm-recent");      
   nmCaseDeath.textContent = addCommas(data[35].death);
   nmCaseConfirm.textContent = addCommas(data[35].positive);
   nmTotHos.textContent = addCommas(determineNull(data[35].hospitalizedCumulative));
   nmCurHos.textContent = addCommas(determineNull(data[35].hospitalizedCurrently));
   nmCurIcu.textContent = addCommas(determineNull(data[35].inIcuCurrently));
   nmRecent.textContent = new Date(data[35].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//NY Count from COVID Tracking Project
   const nyCaseDeath = document.querySelector(".us-covidtrack-ny-death");
   const nyCaseConfirm = document.querySelector(".us-covidtrack-ny-confirm");
   const nyTotHos = document.querySelector(".us-covidtrack-ny-tothos");
   const nyCurHos = document.querySelector(".us-covidtrack-ny-curhos");
   const nyCurIcu = document.querySelector(".us-covidtrack-ny-curicu");
   const nyRecent = document.querySelector(".us-covidtrack-ny-recent");       
   nyCaseDeath.textContent = addCommas(data[37].death);
   nyCaseConfirm.textContent = addCommas(data[37].positive);
   nyTotHos.textContent = addCommas(determineNull(data[37].hospitalizedCumulative));
   nyCurHos.textContent = addCommas(determineNull(data[37].hospitalizedCurrently));
   nyCurIcu.textContent = addCommas(determineNull(data[37].inIcuCurrently));
   nyRecent.textContent = new Date(data[37].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/     

//NC Count from COVID Tracking Project
   const ncCaseDeath = document.querySelector(".us-covidtrack-nc-death");
   const ncCaseConfirm = document.querySelector(".us-covidtrack-nc-confirm");
   const ncTotHos = document.querySelector(".us-covidtrack-nc-tothos");
   const ncCurHos = document.querySelector(".us-covidtrack-nc-curhos");
   const ncCurIcu = document.querySelector(".us-covidtrack-nc-curicu");
   const ncRecent = document.querySelector(".us-covidtrack-nc-recent");      
   ncCaseDeath.textContent = addCommas(data[30].death);
   ncCaseConfirm.textContent = addCommas(data[30].positive);
   ncTotHos.textContent = addCommas(determineNull(data[30].hospitalizedCumulative));
   ncCurHos.textContent = addCommas(determineNull(data[30].hospitalizedCurrently));
   ncCurIcu.textContent = addCommas(determineNull(data[30].inIcuCurrently));
   ncRecent.textContent = new Date(data[30].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//ND Count from COVID Tracking Project
   const ndCaseDeath = document.querySelector(".us-covidtrack-nd-death");
   const ndCaseConfirm = document.querySelector(".us-covidtrack-nd-confirm");
   const ndTotHos = document.querySelector(".us-covidtrack-nd-tothos");
   const ndCurHos = document.querySelector(".us-covidtrack-nd-curhos");
   const ndCurIcu = document.querySelector(".us-covidtrack-nd-curicu");
   const ndRecent = document.querySelector(".us-covidtrack-nd-recent");      
   ndCaseDeath.textContent = addCommas(data[31].death);
   ndCaseConfirm.textContent = addCommas(data[31].positive);
   ndTotHos.textContent = addCommas(determineNull(data[31].hospitalizedCumulative));
   ndCurHos.textContent = addCommas(determineNull(data[31].hospitalizedCurrently));
   ndCurIcu.textContent = addCommas(determineNull(data[31].inIcuCurrently));
   ndRecent.textContent = new Date(data[31].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//MP Count from COVID Tracking Project
   const mpCaseDeath = document.querySelector(".us-covidtrack-mp-death");
   const mpCaseConfirm = document.querySelector(".us-covidtrack-mp-confirm");
   const mpTotHos = document.querySelector(".us-covidtrack-mp-tothos");
   const mpCurHos = document.querySelector(".us-covidtrack-mp-curhos");
   const mpCurIcu = document.querySelector(".us-covidtrack-mp-curicu");
   const mpRecent = document.querySelector(".us-covidtrack-mp-recent");      
   mpCaseDeath.textContent = addCommas(data[27].death);
   mpCaseConfirm.textContent = addCommas(data[27].positive);
   mpTotHos.textContent = addCommas(determineNull(data[27].hospitalizedCumulative));
   mpCurHos.textContent = addCommas(determineNull(data[27].hospitalizedCurrently));
   mpCurIcu.textContent = addCommas(determineNull(data[27].inIcuCurrently));
   mpRecent.textContent = new Date(data[27].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//OH Count from COVID Tracking Project
   const ohCaseDeath = document.querySelector(".us-covidtrack-oh-death");
   const ohCaseConfirm = document.querySelector(".us-covidtrack-oh-confirm");
   const ohTotHos = document.querySelector(".us-covidtrack-oh-tothos");
   const ohCurHos = document.querySelector(".us-covidtrack-oh-curhos");
   const ohCurIcu = document.querySelector(".us-covidtrack-oh-curicu");
   const ohRecent = document.querySelector(".us-covidtrack-oh-recent");      
   ohCaseDeath.textContent = addCommas(data[38].death);
   ohCaseConfirm.textContent = addCommas(data[38].positive);
   ohTotHos.textContent = addCommas(determineNull(data[38].hospitalizedCumulative));
   ohCurHos.textContent = addCommas(determineNull(data[38].hospitalizedCurrently));
   ohCurIcu.textContent = addCommas(determineNull(data[38].inIcuCurrently));
   ohRecent.textContent = new Date(data[38].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/    

//OK Count from COVID Tracking Project
   const okCaseDeath = document.querySelector(".us-covidtrack-ok-death");
   const okCaseConfirm = document.querySelector(".us-covidtrack-ok-confirm");
   const okTotHos = document.querySelector(".us-covidtrack-ok-tothos");
   const okCurHos = document.querySelector(".us-covidtrack-ok-curhos");
   const okCurIcu = document.querySelector(".us-covidtrack-ok-curicu");
   const okRecent = document.querySelector(".us-covidtrack-ok-recent");      
   okCaseDeath.textContent = addCommas(data[39].death);
   okCaseConfirm.textContent = addCommas(data[39].positive);
   okTotHos.textContent = addCommas(determineNull(data[39].hospitalizedCumulative));
   okCurHos.textContent = addCommas(determineNull(data[39].hospitalizedCurrently));
   okCurIcu.textContent = addCommas(determineNull(data[39].inIcuCurrently));
   okRecent.textContent = new Date(data[39].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//OR Count from COVID Tracking Project
   const orCaseDeath = document.querySelector(".us-covidtrack-or-death");
   const orCaseConfirm = document.querySelector(".us-covidtrack-or-confirm");
   const orTotHos = document.querySelector(".us-covidtrack-or-tothos");
   const orCurHos = document.querySelector(".us-covidtrack-or-curhos");
   const orCurIcu = document.querySelector(".us-covidtrack-or-curicu");
   const orRecent = document.querySelector(".us-covidtrack-or-recent");      
   orCaseDeath.textContent = addCommas(data[40].death);
   orCaseConfirm.textContent = addCommas(data[40].positive);
   orTotHos.textContent = addCommas(determineNull(data[40].hospitalizedCumulative));
   orCurHos.textContent = addCommas(determineNull(data[40].hospitalizedCurrently));
   orCurIcu.textContent = addCommas(determineNull(data[40].inIcuCurrently));
   orRecent.textContent = new Date(data[40].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//PA Count from COVID Tracking Project
   const paCaseDeath = document.querySelector(".us-covidtrack-pa-death");
   const paCaseConfirm = document.querySelector(".us-covidtrack-pa-confirm");
   const paTotHos = document.querySelector(".us-covidtrack-pa-tothos");
   const paCurHos = document.querySelector(".us-covidtrack-pa-curhos");
   const paCurIcu = document.querySelector(".us-covidtrack-pa-curicu");
   const paRecent = document.querySelector(".us-covidtrack-pa-recent");      
   paCaseDeath.textContent = addCommas(data[41].death);
   paCaseConfirm.textContent = addCommas(data[41].positive);
   paTotHos.textContent = addCommas(determineNull(data[41].hospitalizedCumulative));
   paCurHos.textContent = addCommas(determineNull(data[41].hospitalizedCurrently));
   paCurIcu.textContent = addCommas(determineNull(data[41].inIcuCurrently));
   paRecent.textContent = new Date(data[41].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//PR Count from COVID Tracking Project
   const prCaseDeath = document.querySelector(".us-covidtrack-pr-death");
   const prCaseConfirm = document.querySelector(".us-covidtrack-pr-confirm");
   const prTotHos = document.querySelector(".us-covidtrack-pr-tothos");
   const prCurHos = document.querySelector(".us-covidtrack-pr-curhos");
   const prCurIcu = document.querySelector(".us-covidtrack-pr-curicu");
   const prRecent = document.querySelector(".us-covidtrack-pr-recent");      
   prCaseDeath.textContent = addCommas(data[42].death);
   prCaseConfirm.textContent = addCommas(data[42].positive);
   prTotHos.textContent = addCommas(determineNull(data[42].hospitalizedCumulative));
   prCurHos.textContent = addCommas(determineNull(data[42].hospitalizedCurrently));
   prCurIcu.textContent = addCommas(determineNull(data[42].inIcuCurrently));
   prRecent.textContent = new Date(data[42].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//RI Count from COVID Tracking Project
   const riCaseDeath = document.querySelector(".us-covidtrack-ri-death");
   const riCaseConfirm = document.querySelector(".us-covidtrack-ri-confirm");
   const riTotHos = document.querySelector(".us-covidtrack-ri-tothos");
   const riCurHos = document.querySelector(".us-covidtrack-ri-curhos");
   const riCurIcu = document.querySelector(".us-covidtrack-ri-curicu");
   const riRecent = document.querySelector(".us-covidtrack-ri-recent");      
   riCaseDeath.textContent = addCommas(data[43].death);
   riCaseConfirm.textContent = addCommas(data[43].positive);
   riTotHos.textContent = addCommas(determineNull(data[43].hospitalizedCumulative));
   riCurHos.textContent = addCommas(determineNull(data[43].hospitalizedCurrently));
   riCurIcu.textContent = addCommas(determineNull(data[43].inIcuCurrently));
   riRecent.textContent = new Date(data[43].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//SC Count from COVID Tracking Project
   const scCaseDeath = document.querySelector(".us-covidtrack-sc-death");
   const scCaseConfirm = document.querySelector(".us-covidtrack-sc-confirm");
   const scTotHos = document.querySelector(".us-covidtrack-sc-tothos");
   const scCurHos = document.querySelector(".us-covidtrack-sc-curhos");
   const scCurIcu = document.querySelector(".us-covidtrack-sc-curicu");
   const scRecent = document.querySelector(".us-covidtrack-sc-recent");      
   scCaseDeath.textContent = addCommas(data[44].death);
   scCaseConfirm.textContent = addCommas(data[44].positive);
   scTotHos.textContent = addCommas(determineNull(data[44].hospitalizedCumulative));
   scCurHos.textContent = addCommas(determineNull(data[44].hospitalizedCurrently));
   scCurIcu.textContent = addCommas(determineNull(data[44].inIcuCurrently));
   scRecent.textContent = new Date(data[44].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//SD Count from COVID Tracking Project
   const sdCaseDeath = document.querySelector(".us-covidtrack-sd-death");
   const sdCaseConfirm = document.querySelector(".us-covidtrack-sd-confirm");
   const sdTotHos = document.querySelector(".us-covidtrack-sd-tothos");
   const sdCurHos = document.querySelector(".us-covidtrack-sd-curhos");
   const sdCurIcu = document.querySelector(".us-covidtrack-sd-curicu");
   const sdRecent = document.querySelector(".us-covidtrack-sd-recent");      
   sdCaseDeath.textContent = addCommas(data[45].death);
   sdCaseConfirm.textContent = addCommas(data[45].positive);
   sdTotHos.textContent = addCommas(determineNull(data[45].hospitalizedCumulative));
   sdCurHos.textContent = addCommas(determineNull(data[45].hospitalizedCurrently));
   sdCurIcu.textContent = addCommas(determineNull(data[45].inIcuCurrently));
   sdRecent.textContent = new Date(data[45].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//TN Count from COVID Tracking Project
   const tnCaseDeath = document.querySelector(".us-covidtrack-tn-death");
   const tnCaseConfirm = document.querySelector(".us-covidtrack-tn-confirm");
   const tnTotHos = document.querySelector(".us-covidtrack-tn-tothos");
   const tnCurHos = document.querySelector(".us-covidtrack-tn-curhos");
   const tnCurIcu = document.querySelector(".us-covidtrack-tn-curicu");
   const tnRecent = document.querySelector(".us-covidtrack-tn-recent");      
   tnCaseDeath.textContent = addCommas(data[46].death);
   tnCaseConfirm.textContent = addCommas(data[46].positive);
   tnTotHos.textContent = addCommas(determineNull(data[46].hospitalizedCumulative));
   tnCurHos.textContent = addCommas(determineNull(data[46].hospitalizedCurrently));
   tnCurIcu.textContent = addCommas(determineNull(data[46].inIcuCurrently));
   tnRecent.textContent = new Date(data[46].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//TX Count from COVID Tracking Project
   const txCaseDeath = document.querySelector(".us-covidtrack-tx-death");
   const txCaseConfirm = document.querySelector(".us-covidtrack-tx-confirm");
   const txTotHos = document.querySelector(".us-covidtrack-tx-tothos");
   const txCurHos = document.querySelector(".us-covidtrack-tx-curhos");
   const txCurIcu = document.querySelector(".us-covidtrack-tx-curicu");
   const txRecent = document.querySelector(".us-covidtrack-tx-recent");       
   txCaseDeath.textContent = addCommas(data[47].death);
   txCaseConfirm.textContent = addCommas(data[47].positive);
   txTotHos.textContent = addCommas(determineNull(data[47].hospitalizedCumulative));
   txCurHos.textContent = addCommas(determineNull(data[47].hospitalizedCurrently));
   txCurIcu.textContent = addCommas(determineNull(data[47].inIcuCurrently));
   txRecent.textContent = new Date(data[47].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//VI Count from COVID Tracking Project
   const viCaseDeath = document.querySelector(".us-covidtrack-vi-death");
   const viCaseConfirm = document.querySelector(".us-covidtrack-vi-confirm");
   const viTotHos = document.querySelector(".us-covidtrack-vi-tothos");
   const viCurHos = document.querySelector(".us-covidtrack-vi-curhos");
   const viCurIcu = document.querySelector(".us-covidtrack-vi-curicu");
   const viRecent = document.querySelector(".us-covidtrack-vi-recent");      
   viCaseDeath.textContent = addCommas(data[50].death);
   viCaseConfirm.textContent = addCommas(data[50].positive);
   viTotHos.textContent = addCommas(determineNull(data[50].hospitalizedCumulative));
   viCurHos.textContent = addCommas(determineNull(data[50].hospitalizedCurrently));
   viCurIcu.textContent = addCommas(determineNull(data[50].inIcuCurrently));
   viRecent.textContent = new Date(data[50].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//UT Count from COVID Tracking Project
   const utCaseDeath = document.querySelector(".us-covidtrack-ut-death");
   const utCaseConfirm = document.querySelector(".us-covidtrack-ut-confirm");
   const utTotHos = document.querySelector(".us-covidtrack-ut-tothos");
   const utCurHos = document.querySelector(".us-covidtrack-ut-curhos");
   const utCurIcu = document.querySelector(".us-covidtrack-ut-curicu");
   const utRecent = document.querySelector(".us-covidtrack-ut-recent");      
   utCaseDeath.textContent = addCommas(data[48].death);
   utCaseConfirm.textContent = addCommas(data[48].positive);
   utTotHos.textContent = addCommas(determineNull(data[48].hospitalizedCumulative));
   utCurHos.textContent = addCommas(determineNull(data[48].hospitalizedCurrently));
   utCurIcu.textContent = addCommas(determineNull(data[48].inIcuCurrently));
   utRecent.textContent = new Date(data[48].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//VT Count from COVID Tracking Project
   const vtCaseDeath = document.querySelector(".us-covidtrack-vt-death");
   const vtCaseConfirm = document.querySelector(".us-covidtrack-vt-confirm");
   const vtTotHos = document.querySelector(".us-covidtrack-vt-tothos");
   const vtCurHos = document.querySelector(".us-covidtrack-vt-curhos");
   const vtCurIcu = document.querySelector(".us-covidtrack-vt-curicu");
   const vtRecent = document.querySelector(".us-covidtrack-vt-recent");      
   vtCaseDeath.textContent = addCommas(data[51].death);
   vtCaseConfirm.textContent = addCommas(data[51].positive);
   vtTotHos.textContent = addCommas(determineNull(data[51].hospitalizedCumulative));
   vtCurHos.textContent = addCommas(determineNull(data[51].hospitalizedCurrently));
   vtCurIcu.textContent = addCommas(determineNull(data[51].inIcuCurrently));
   vtRecent.textContent = new Date(data[51].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/       

//VA Count from COVID Tracking Project
   const vaCaseDeath = document.querySelector(".us-covidtrack-va-death");
   const vaCaseConfirm = document.querySelector(".us-covidtrack-va-confirm");
   const vaTotHos = document.querySelector(".us-covidtrack-va-tothos");
   const vaCurHos = document.querySelector(".us-covidtrack-va-curhos");
   const vaCurIcu = document.querySelector(".us-covidtrack-va-curicu");
   const vaRecent = document.querySelector(".us-covidtrack-va-recent");      
   vaCaseDeath.textContent = addCommas(data[49].death);
   vaCaseConfirm.textContent = addCommas(data[49].positive);
   vaTotHos.textContent = addCommas(determineNull(data[49].hospitalizedCumulative));
   vaCurHos.textContent = addCommas(determineNull(data[49].hospitalizedCurrently));
   vaCurIcu.textContent = addCommas(determineNull(data[49].inIcuCurrently));
   vaRecent.textContent = new Date(data[49].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//WA Count from COVID Tracking Project
   const waCaseDeath = document.querySelector(".us-covidtrack-wa-death");
   const waCaseConfirm = document.querySelector(".us-covidtrack-wa-confirm");
   const waTotHos = document.querySelector(".us-covidtrack-wa-tothos");
   const waCurHos = document.querySelector(".us-covidtrack-wa-curhos");
   const waCurIcu = document.querySelector(".us-covidtrack-wa-curicu");
   const waRecent = document.querySelector(".us-covidtrack-wa-recent");       
   waCaseDeath.textContent = addCommas(data[52].death);
   waCaseConfirm.textContent = addCommas(data[52].positive);
   waTotHos.textContent = addCommas(determineNull(data[52].hospitalizedCumulative));
   waCurHos.textContent = addCommas(determineNull(data[52].hospitalizedCurrently));
   waCurIcu.textContent = addCommas(determineNull(data[52].inIcuCurrently));
   waRecent.textContent = new Date(data[52].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//WV Count from COVID Tracking Project
   const wvCaseDeath = document.querySelector(".us-covidtrack-wv-death");
   const wvCaseConfirm = document.querySelector(".us-covidtrack-wv-confirm");
   const wvTotHos = document.querySelector(".us-covidtrack-wv-tothos");
   const wvCurHos = document.querySelector(".us-covidtrack-wv-curhos");
   const wvCurIcu = document.querySelector(".us-covidtrack-wv-curicu");
   const wvRecent = document.querySelector(".us-covidtrack-wv-recent");       
   wvCaseDeath.textContent = addCommas(data[54].death);
   wvCaseConfirm.textContent = addCommas(data[54].positive);
   wvTotHos.textContent = addCommas(determineNull(data[54].hospitalizedCumulative));
   wvCurHos.textContent = addCommas(determineNull(data[54].hospitalizedCurrently));
   wvCurIcu.textContent = addCommas(determineNull(data[54].inIcuCurrently));
   wvRecent.textContent = new Date(data[54].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/      

//WI Count from COVID Tracking Project
   const wiCaseDeath = document.querySelector(".us-covidtrack-wi-death");
   const wiCaseConfirm = document.querySelector(".us-covidtrack-wi-confirm");
   const wiTotHos = document.querySelector(".us-covidtrack-wi-tothos");
   const wiCurHos = document.querySelector(".us-covidtrack-wi-curhos");
   const wiCurIcu = document.querySelector(".us-covidtrack-wi-curicu");
   const wiRecent = document.querySelector(".us-covidtrack-wi-recent");       
   wiCaseDeath.textContent = addCommas(data[53].death);
   wiCaseConfirm.textContent = addCommas(data[53].positive);
   wiTotHos.textContent = addCommas(determineNull(data[53].hospitalizedCumulative));
   wiCurHos.textContent = addCommas(determineNull(data[53].hospitalizedCurrently));
   wiCurIcu.textContent = addCommas(determineNull(data[53].inIcuCurrently));
   wiRecent.textContent = new Date(data[53].dateModified).toString().substring(4,15); /*data.dateModified.toString().substring(0, 10);*/     

//WY Count from COVID Tracking Project
   const wyCaseDeath = document.querySelector(".us-covidtrack-wy-death");
   const wyCaseConfirm = document.querySelector(".us-covidtrack-wy-confirm");
   const wyTotHos = document.querySelector(".us-covidtrack-wy-tothos");
   const wyCurHos = document.querySelector(".us-covidtrack-wy-curhos");
   const wyCurIcu = document.querySelector(".us-covidtrack-wy-curicu");
   const wyRecent = document.querySelector(".us-covidtrack-wy-recent");      
   wyCaseDeath.textContent = addCommas(data[55].death);
   wyCaseConfirm.textContent = addCommas(data[55].positive);
   wyTotHos.textContent = determineNull(addCommas(data[55].hospitalizedCumulative));
   wyCurHos.textContent = determineNull(addCommas(data[55].hospitalizedCurrently));
   wyCurIcu.textContent = determineNull(addCommas(data[55].inIcuCurrently));
   wyRecent.textContent = new Date(data[55].dateModified).toString().substring(4,15);       
   });

//US Count from COVID Tracking Project 
  d3v6.json("./covidtrack_covid_19_data/covidtrackus.json").then(function(data) {
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

/*US Total Count from COVID Tracking Project 
   fetch('https://api.covidtracking.com/v1/us/daily.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);   
   });

US States Total Count from COVID Tracking Project 
   fetch('https://api.covidtracking.com/v1/states/daily.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);   
   }); */

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
