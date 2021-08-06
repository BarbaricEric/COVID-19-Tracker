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
   const country1 = document.querySelector('.country1');
   const caseConfirm1 = document.querySelector('.CaseConfirm1');
   const caseDeath1 = document.querySelector('.CaseDeath1');
   const date1 = document.querySelector('.Date1');
   country1.textContent = data.Countries[1].Country
   caseConfirm1.textContent = addCommaDecimal(data.Countries[1].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[1].NewConfirmed) +')'
   caseDeath1.textContent = addCommaDecimal(data.Countries[1].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[1].NewDeaths) +')'
   date1.textContent = new Date(data.Countries[1].Date).toString().substring(0,15) 
      const country2 = document.querySelector('.country2');
   const caseConfirm2 = document.querySelector('.CaseConfirm2');
   const caseDeath2 = document.querySelector('.CaseDeath2');
   const date2 = document.querySelector('.Date2');
   country2.textContent = data.Countries[2].Country
   caseConfirm2.textContent = addCommaDecimal(data.Countries[2].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[2].NewConfirmed) +')'
   caseDeath2.textContent = addCommaDecimal(data.Countries[2].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[2].NewDeaths) +')'
   date2.textContent = new Date(data.Countries[2].Date).toString().substring(0,15)
      const country3 = document.querySelector('.country3');
   const caseConfirm3 = document.querySelector('.CaseConfirm3');
   const caseDeath3 = document.querySelector('.CaseDeath3');
   const date3 = document.querySelector('.Date3');
   country3.textContent = data.Countries[3].Country
   caseConfirm3.textContent = addCommaDecimal(data.Countries[3].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[3].NewConfirmed) +')'
   caseDeath3.textContent = addCommaDecimal(data.Countries[3].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[3].NewDeaths) +')'
   date3.textContent = new Date(data.Countries[3].Date).toString().substring(0,15)
      const country4 = document.querySelector('.country4');
   const caseConfirm4 = document.querySelector('.CaseConfirm4');
   const caseDeath4 = document.querySelector('.CaseDeath4');
   const date4 = document.querySelector('.Date4');
   country4.textContent = data.Countries[4].Country
   caseConfirm4.textContent = addCommaDecimal(data.Countries[4].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[4].NewConfirmed) +')'
   caseDeath4.textContent = addCommaDecimal(data.Countries[4].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[4].NewDeaths) +')'
   date4.textContent = new Date(data.Countries[4].Date).toString().substring(0,15)
      const country5 = document.querySelector('.country5');
   const caseConfirm5 = document.querySelector('.CaseConfirm5');
   const caseDeath5 = document.querySelector('.CaseDeath5');
   const date5 = document.querySelector('.Date5');
   country5.textContent = data.Countries[5].Country
   caseConfirm5.textContent = addCommaDecimal(data.Countries[5].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[5].NewConfirmed) +')'
   caseDeath5.textContent = addCommaDecimal(data.Countries[5].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[5].NewDeaths) +')'
   date5.textContent = new Date(data.Countries[5].Date).toString().substring(0,15)
      const country6 = document.querySelector('.country6');
   const caseConfirm6 = document.querySelector('.CaseConfirm6');
   const caseDeath6 = document.querySelector('.CaseDeath6');
   const date6 = document.querySelector('.Date6');
   country6.textContent = data.Countries[6].Country
   caseConfirm6.textContent = addCommaDecimal(data.Countries[6].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[6].NewConfirmed) +')'
   caseDeath6.textContent = addCommaDecimal(data.Countries[6].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[6].NewDeaths) +')'
   date6.textContent = new Date(data.Countries[6].Date).toString().substring(0,15)
      const country7 = document.querySelector('.country7');
   const caseConfirm7 = document.querySelector('.CaseConfirm7');
   const caseDeath7 = document.querySelector('.CaseDeath7');
   const date7 = document.querySelector('.Date7');
   country7.textContent = data.Countries[7].Country
   caseConfirm7.textContent = addCommaDecimal(data.Countries[7].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[7].NewConfirmed) +')'
   caseDeath7.textContent = addCommaDecimal(data.Countries[7].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[7].NewDeaths) +')'
   date7.textContent = new Date(data.Countries[7].Date).toString().substring(0,15)
      const country8 = document.querySelector('.country8');
   const caseConfirm8 = document.querySelector('.CaseConfirm8');
   const caseDeath8 = document.querySelector('.CaseDeath8');
   const date8 = document.querySelector('.Date8');
   country8.textContent = data.Countries[8].Country
   caseConfirm8.textContent = addCommaDecimal(data.Countries[8].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[8].NewConfirmed) +')'
   caseDeath8.textContent = addCommaDecimal(data.Countries[8].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[8].NewDeaths) +')'
   date8.textContent = new Date(data.Countries[8].Date).toString().substring(0,15)
      const country9 = document.querySelector('.country9');
   const caseConfirm9 = document.querySelector('.CaseConfirm9');
   const caseDeath9 = document.querySelector('.CaseDeath9');
   const date9 = document.querySelector('.Date9');
   country9.textContent = data.Countries[9].Country
   caseConfirm9.textContent = addCommaDecimal(data.Countries[9].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[9].NewConfirmed) +')'
   caseDeath9.textContent = addCommaDecimal(data.Countries[9].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[9].NewDeaths) +')'
   date9.textContent = new Date(data.Countries[9].Date).toString().substring(0,15)
      const country10 = document.querySelector('.country10');
   const caseConfirm10 = document.querySelector('.CaseConfirm10');
   const caseDeath10 = document.querySelector('.CaseDeath10');
   const date10 = document.querySelector('.Date10');
   country10.textContent = data.Countries[10].Country
   caseConfirm10.textContent = addCommaDecimal(data.Countries[10].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[10].NewConfirmed) +')'
   caseDeath10.textContent = addCommaDecimal(data.Countries[10].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[10].NewDeaths) +')'
   date10.textContent = new Date(data.Countries[10].Date).toString().substring(0,15)
      const country11 = document.querySelector('.country11');
   const caseConfirm11 = document.querySelector('.CaseConfirm11');
   const caseDeath11 = document.querySelector('.CaseDeath11');
   const date11 = document.querySelector('.Date11');
   country11.textContent = data.Countries[11].Country
   caseConfirm11.textContent = addCommaDecimal(data.Countries[11].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[11].NewConfirmed) +')'
   caseDeath11.textContent = addCommaDecimal(data.Countries[11].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[11].NewDeaths) +')'
   date11.textContent = new Date(data.Countries[11].Date).toString().substring(0,15)
      const country12 = document.querySelector('.country12');
   const caseConfirm12 = document.querySelector('.CaseConfirm12');
   const caseDeath12 = document.querySelector('.CaseDeath12');
   const date12 = document.querySelector('.Date12');
   country12.textContent = data.Countries[12].Country
   caseConfirm12.textContent = addCommaDecimal(data.Countries[12].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[12].NewConfirmed) +')'
   caseDeath12.textContent = addCommaDecimal(data.Countries[12].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[12].NewDeaths) +')'
   date12.textContent = new Date(data.Countries[12].Date).toString().substring(0,15) 
      const country13 = document.querySelector('.country13');
   const caseConfirm13 = document.querySelector('.CaseConfirm13');
   const caseDeath13 = document.querySelector('.CaseDeath13');
   const date13 = document.querySelector('.Date13');
   country13.textContent = data.Countries[13].Country
   caseConfirm13.textContent = addCommaDecimal(data.Countries[13].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[13].NewConfirmed) +')'
   caseDeath13.textContent = addCommaDecimal(data.Countries[13].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[13].NewDeaths) +')'
   date13.textContent = new Date(data.Countries[13].Date).toString().substring(0,15)   
      const country14 = document.querySelector('.country14');
   const caseConfirm14 = document.querySelector('.CaseConfirm14');
   const caseDeath14 = document.querySelector('.CaseDeath14');
   const date14 = document.querySelector('.Date14');
   country14.textContent = data.Countries[14].Country
   caseConfirm14.textContent = addCommaDecimal(data.Countries[14].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[14].NewConfirmed) +')'
   caseDeath14.textContent = addCommaDecimal(data.Countries[14].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[14].NewDeaths) +')'
   date14.textContent = new Date(data.Countries[14].Date).toString().substring(0,15)  
      const country15 = document.querySelector('.country15');
   const caseConfirm15 = document.querySelector('.CaseConfirm15');
   const caseDeath15 = document.querySelector('.CaseDeath15');
   const date15 = document.querySelector('.Date15');
   country15.textContent = data.Countries[15].Country
   caseConfirm15.textContent = addCommaDecimal(data.Countries[15].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[15].NewConfirmed) +')'
   caseDeath15.textContent = addCommaDecimal(data.Countries[15].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[15].NewDeaths) +')'
   date15.textContent = new Date(data.Countries[15].Date).toString().substring(0,15)
      const country16 = document.querySelector('.country16');
   const caseConfirm16 = document.querySelector('.CaseConfirm16');
   const caseDeath16 = document.querySelector('.CaseDeath16');
   const date16 = document.querySelector('.Date16');
   country16.textContent = data.Countries[16].Country
   caseConfirm16.textContent = addCommaDecimal(data.Countries[16].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[16].NewConfirmed) +')'
   caseDeath16.textContent = addCommaDecimal(data.Countries[16].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[16].NewDeaths) +')'
   date16.textContent = new Date(data.Countries[16].Date).toString().substring(0,15)
      const country17 = document.querySelector('.country17');
   const caseConfirm17 = document.querySelector('.CaseConfirm17');
   const caseDeath17 = document.querySelector('.CaseDeath17');
   const date17 = document.querySelector('.Date17');
   country17.textContent = data.Countries[17].Country
   caseConfirm17.textContent = addCommaDecimal(data.Countries[17].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[17].NewConfirmed) +')'
   caseDeath17.textContent = addCommaDecimal(data.Countries[17].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[17].NewDeaths) +')'
   date17.textContent = new Date(data.Countries[17].Date).toString().substring(0,15) 
      const country18 = document.querySelector('.country18');
   const caseConfirm18 = document.querySelector('.CaseConfirm18');
   const caseDeath18 = document.querySelector('.CaseDeath18');
   const date18 = document.querySelector('.Date18');
   country18.textContent = data.Countries[18].Country
   caseConfirm18.textContent = addCommaDecimal(data.Countries[18].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[18].NewConfirmed) +')'
   caseDeath18.textContent = addCommaDecimal(data.Countries[18].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[18].NewDeaths) +')'
   date18.textContent = new Date(data.Countries[18].Date).toString().substring(0,15)
      const country19 = document.querySelector('.country19');
   const caseConfirm19 = document.querySelector('.CaseConfirm19');
   const caseDeath19 = document.querySelector('.CaseDeath19');
   const date19 = document.querySelector('.Date19');
   country19.textContent = data.Countries[19].Country
   caseConfirm19.textContent = addCommaDecimal(data.Countries[19].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[19].NewConfirmed) +')'
   caseDeath19.textContent = addCommaDecimal(data.Countries[19].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[19].NewDeaths) +')'
   date19.textContent = new Date(data.Countries[19].Date).toString().substring(0,15)    
      const country20 = document.querySelector('.country20');
   const caseConfirm20 = document.querySelector('.CaseConfirm20');
   const caseDeath20 = document.querySelector('.CaseDeath20');
   const date20 = document.querySelector('.Date20');
   country20.textContent = data.Countries[20].Country
   caseConfirm20.textContent = addCommaDecimal(data.Countries[20].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[20].NewConfirmed) +')'
   caseDeath20.textContent = addCommaDecimal(data.Countries[20].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[20].NewDeaths) +')'
   date20.textContent = new Date(data.Countries[20].Date).toString().substring(0,15) 
      const country21 = document.querySelector('.country21');
   const caseConfirm21 = document.querySelector('.CaseConfirm21');
   const caseDeath21 = document.querySelector('.CaseDeath21');
   const date21 = document.querySelector('.Date21');
   country21.textContent = data.Countries[21].Country
   caseConfirm21.textContent = addCommaDecimal(data.Countries[21].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[21].NewConfirmed) +')'
   caseDeath21.textContent = addCommaDecimal(data.Countries[21].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[21].NewDeaths) +')'
   date21.textContent = new Date(data.Countries[21].Date).toString().substring(0,15)  
      const country22 = document.querySelector('.country22');
   const caseConfirm22 = document.querySelector('.CaseConfirm22');
   const caseDeath22 = document.querySelector('.CaseDeath22');
   const date22 = document.querySelector('.Date22');
   country22.textContent = data.Countries[22].Country
   caseConfirm22.textContent = addCommaDecimal(data.Countries[22].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[22].NewConfirmed) +')'
   caseDeath22.textContent = addCommaDecimal(data.Countries[22].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[22].NewDeaths) +')'
   date22.textContent = new Date(data.Countries[22].Date).toString().substring(0,15)
      const country23 = document.querySelector('.country23');
   const caseConfirm23 = document.querySelector('.CaseConfirm23');
   const caseDeath23 = document.querySelector('.CaseDeath23');
   const date23 = document.querySelector('.Date23');
   country23.textContent = data.Countries[23].Country
   caseConfirm23.textContent = addCommaDecimal(data.Countries[23].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[23].NewConfirmed) +')'
   caseDeath23.textContent = addCommaDecimal(data.Countries[23].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[23].NewDeaths) +')'
   date23.textContent = new Date(data.Countries[23].Date).toString().substring(0,15) 
      const country24 = document.querySelector('.country24');
   const caseConfirm24 = document.querySelector('.CaseConfirm24');
   const caseDeath24 = document.querySelector('.CaseDeath24');
   const date24 = document.querySelector('.Date24');
   country24.textContent = data.Countries[24].Country
   caseConfirm24.textContent = addCommaDecimal(data.Countries[24].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[24].NewConfirmed) +')'
   caseDeath24.textContent = addCommaDecimal(data.Countries[24].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[24].NewDeaths) +')'
   date24.textContent = new Date(data.Countries[24].Date).toString().substring(0,15)
      const country25 = document.querySelector('.country25');
   const caseConfirm25 = document.querySelector('.CaseConfirm25');
   const caseDeath25 = document.querySelector('.CaseDeath25');
   const date25 = document.querySelector('.Date25');
   country25.textContent = data.Countries[25].Country
   caseConfirm25.textContent = addCommaDecimal(data.Countries[25].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[25].NewConfirmed) +')'
   caseDeath25.textContent = addCommaDecimal(data.Countries[25].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[25].NewDeaths) +')'
   date25.textContent = new Date(data.Countries[25].Date).toString().substring(0,15) 
      const country26 = document.querySelector('.country26');
   const caseConfirm26 = document.querySelector('.CaseConfirm26');
   const caseDeath26 = document.querySelector('.CaseDeath26');
   const date26 = document.querySelector('.Date26');
   country26.textContent = data.Countries[26].Country
   caseConfirm26.textContent = addCommaDecimal(data.Countries[26].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[26].NewConfirmed) +')'
   caseDeath26.textContent = addCommaDecimal(data.Countries[26].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[26].NewDeaths) +')'
   date26.textContent = new Date(data.Countries[26].Date).toString().substring(0,15)
      const country27 = document.querySelector('.country27');
   const caseConfirm27 = document.querySelector('.CaseConfirm27');
   const caseDeath27 = document.querySelector('.CaseDeath27');
   const date27 = document.querySelector('.Date27');
   country27.textContent = data.Countries[27].Country
   caseConfirm27.textContent = addCommaDecimal(data.Countries[27].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[27].NewConfirmed) +')'
   caseDeath27.textContent = addCommaDecimal(data.Countries[27].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[27].NewDeaths) +')'
   date27.textContent = new Date(data.Countries[27].Date).toString().substring(0,15)  
      const country28 = document.querySelector('.country28');
   const caseConfirm28 = document.querySelector('.CaseConfirm28');
   const caseDeath28 = document.querySelector('.CaseDeath28');
   const date28 = document.querySelector('.Date28');
   country28.textContent = data.Countries[28].Country
   caseConfirm28.textContent = addCommaDecimal(data.Countries[28].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[28].NewConfirmed) +')'
   caseDeath28.textContent = addCommaDecimal(data.Countries[28].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[28].NewDeaths) +')'
   date28.textContent = new Date(data.Countries[28].Date).toString().substring(0,15)   
      const country29 = document.querySelector('.country29');
   const caseConfirm29 = document.querySelector('.CaseConfirm29');
   const caseDeath29 = document.querySelector('.CaseDeath29');
   const date29 = document.querySelector('.Date29');
   country29.textContent = data.Countries[29].Country
   caseConfirm29.textContent = addCommaDecimal(data.Countries[29].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[29].NewConfirmed) +')'
   caseDeath29.textContent = addCommaDecimal(data.Countries[29].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[29].NewDeaths) +')'
   date29.textContent = new Date(data.Countries[29].Date).toString().substring(0,15)     
      const country30 = document.querySelector('.country30');
   const caseConfirm30 = document.querySelector('.CaseConfirm30');
   const caseDeath30 = document.querySelector('.CaseDeath30');
   const date30 = document.querySelector('.Date30');
   country30.textContent = data.Countries[30].Country
   caseConfirm30.textContent = addCommaDecimal(data.Countries[30].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[30].NewConfirmed) +')'
   caseDeath30.textContent = addCommaDecimal(data.Countries[30].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[30].NewDeaths) +')'
   date30.textContent = new Date(data.Countries[30].Date).toString().substring(0,15)     
      const country40 = document.querySelector('.country40');
   const caseConfirm40 = document.querySelector('.CaseConfirm40');
   const caseDeath40 = document.querySelector('.CaseDeath40');
   const date40 = document.querySelector('.Date40');
   country40.textContent = data.Countries[40].Country
   caseConfirm40.textContent = addCommaDecimal(data.Countries[40].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[40].NewConfirmed) +')'
   caseDeath40.textContent = addCommaDecimal(data.Countries[40].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[40].NewDeaths) +')'
   date40.textContent = new Date(data.Countries[40].Date).toString().substring(0,15)     
      const country50 = document.querySelector('.country50');
   const caseConfirm50 = document.querySelector('.CaseConfirm50');
   const caseDeath50 = document.querySelector('.CaseDeath50');
   const date50 = document.querySelector('.Date50');
   country50.textContent = data.Countries[50].Country
   caseConfirm50.textContent = addCommaDecimal(data.Countries[50].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[50].NewConfirmed) +')'
   caseDeath50.textContent = addCommaDecimal(data.Countries[50].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[50].NewDeaths) +')'
   date50.textContent = new Date(data.Countries[50].Date).toString().substring(0,15)     
      const country60 = document.querySelector('.country60');
   const caseConfirm60 = document.querySelector('.CaseConfirm60');
   const caseDeath60 = document.querySelector('.CaseDeath60');
   const date60 = document.querySelector('.Date60');
   country60.textContent = data.Countries[60].Country
   caseConfirm60.textContent = addCommaDecimal(data.Countries[60].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[60].NewConfirmed) +')'
   caseDeath60.textContent = addCommaDecimal(data.Countries[60].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[60].NewDeaths) +')'
   date60.textContent = new Date(data.Countries[60].Date).toString().substring(0,15)     
      const country70 = document.querySelector('.country70');
   const caseConfirm70 = document.querySelector('.CaseConfirm70');
   const caseDeath70 = document.querySelector('.CaseDeath70');
   const date70 = document.querySelector('.Date70');
   country70.textContent = data.Countries[70].Country
   caseConfirm70.textContent = addCommaDecimal(data.Countries[70].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[70].NewConfirmed) +')'
   caseDeath70.textContent = addCommaDecimal(data.Countries[70].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[70].NewDeaths) +')'
   date70.textContent = new Date(data.Countries[70].Date).toString().substring(0,15)     
      const country80 = document.querySelector('.country80');
   const caseConfirm80 = document.querySelector('.CaseConfirm80');
   const caseDeath80 = document.querySelector('.CaseDeath80');
   const date80 = document.querySelector('.Date80');
   country80.textContent = data.Countries[80].Country
   caseConfirm80.textContent = addCommaDecimal(data.Countries[80].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[80].NewConfirmed) +')'
   caseDeath80.textContent = addCommaDecimal(data.Countries[80].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[80].NewDeaths) +')'
   date80.textContent = new Date(data.Countries[80].Date).toString().substring(0,15)
      const country90 = document.querySelector('.country90');
   const caseConfirm90 = document.querySelector('.CaseConfirm90');
   const caseDeath90 = document.querySelector('.CaseDeath90');
   const date90 = document.querySelector('.Date90');
   country90.textContent = data.Countries[90].Country
   caseConfirm90.textContent = addCommaDecimal(data.Countries[90].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[90].NewConfirmed) +')'
   caseDeath90.textContent = addCommaDecimal(data.Countries[90].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[90].NewDeaths) +')'
   date90.textContent = new Date(data.Countries[90].Date).toString().substring(0,15)
      const country100 = document.querySelector('.country100');
   const caseConfirm100 = document.querySelector('.CaseConfirm100');
   const caseDeath100 = document.querySelector('.CaseDeath100');
   const date100 = document.querySelector('.Date100');
   country100.textContent = data.Countries[100].Country
   caseConfirm100.textContent = addCommaDecimal(data.Countries[100].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[100].NewConfirmed) +')'
   caseDeath100.textContent = addCommaDecimal(data.Countries[100].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[100].NewDeaths) +')'
   date100.textContent = new Date(data.Countries[100].Date).toString().substring(0,15)
      const country110 = document.querySelector('.country110');
   const caseConfirm110 = document.querySelector('.CaseConfirm110');
   const caseDeath110 = document.querySelector('.CaseDeath110');
   const date110 = document.querySelector('.Date110');
   country110.textContent = data.Countries[110].Country
   caseConfirm110.textContent = addCommaDecimal(data.Countries[110].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[110].NewConfirmed) +')'
   caseDeath110.textContent = addCommaDecimal(data.Countries[110].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[110].NewDeaths) +')'
   date110.textContent = new Date(data.Countries[110].Date).toString().substring(0,15)
      const country120 = document.querySelector('.country120');
   const caseConfirm120 = document.querySelector('.CaseConfirm120');
   const caseDeath120 = document.querySelector('.CaseDeath120');
   const date120 = document.querySelector('.Date120');
   country120.textContent = data.Countries[120].Country
   caseConfirm120.textContent = addCommaDecimal(data.Countries[120].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[120].NewConfirmed) +')'
   caseDeath120.textContent = addCommaDecimal(data.Countries[120].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[120].NewDeaths) +')'
   date120.textContent = new Date(data.Countries[120].Date).toString().substring(0,15) 
      const country130 = document.querySelector('.country130');
   const caseConfirm130 = document.querySelector('.CaseConfirm130');
   const caseDeath130 = document.querySelector('.CaseDeath130');
   const date130 = document.querySelector('.Date130');
   country130.textContent = data.Countries[130].Country
   caseConfirm130.textContent = addCommaDecimal(data.Countries[130].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[130].NewConfirmed) +')'
   caseDeath130.textContent = addCommaDecimal(data.Countries[130].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[130].NewDeaths) +')'
   date130.textContent = new Date(data.Countries[130].Date).toString().substring(0,15) 
      const country140 = document.querySelector('.country140');
   const caseConfirm140 = document.querySelector('.CaseConfirm140');
   const caseDeath140 = document.querySelector('.CaseDeath140');
   const date140 = document.querySelector('.Date140');
   country140.textContent = data.Countries[140].Country
   caseConfirm140.textContent = addCommaDecimal(data.Countries[140].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[140].NewConfirmed) +')'
   caseDeath140.textContent = addCommaDecimal(data.Countries[140].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[140].NewDeaths) +')'
   date140.textContent = new Date(data.Countries[140].Date).toString().substring(0,15) 
      const country150 = document.querySelector('.country150');
   const caseConfirm150 = document.querySelector('.CaseConfirm150');
   const caseDeath150 = document.querySelector('.CaseDeath150');
   const date150 = document.querySelector('.Date150');
   country150.textContent = data.Countries[150].Country
   caseConfirm150.textContent = addCommaDecimal(data.Countries[150].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[150].NewConfirmed) +')'
   caseDeath150.textContent = addCommaDecimal(data.Countries[150].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[150].NewDeaths) +')'
   date150.textContent = new Date(data.Countries[150].Date).toString().substring(0,15)    
       const country160 = document.querySelector('.country160');
   const caseConfirm160 = document.querySelector('.CaseConfirm160');
   const caseDeath160 = document.querySelector('.CaseDeath160');
   const date160 = document.querySelector('.Date160');
   country160.textContent = data.Countries[160].Country
   caseConfirm160.textContent = addCommaDecimal(data.Countries[160].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[160].NewConfirmed) +')'
   caseDeath160.textContent = addCommaDecimal(data.Countries[160].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[160].NewDeaths) +')'
   date160.textContent = new Date(data.Countries[160].Date).toString().substring(0,15) 
      const country170 = document.querySelector('.country170');
   const caseConfirm170 = document.querySelector('.CaseConfirm170');
   const caseDeath170 = document.querySelector('.CaseDeath170');
   const date170 = document.querySelector('.Date170');
   country170.textContent = data.Countries[170].Country
   caseConfirm170.textContent = addCommaDecimal(data.Countries[170].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[170].NewConfirmed) +')'
   caseDeath170.textContent = addCommaDecimal(data.Countries[170].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[170].NewDeaths) +')'
   date170.textContent = new Date(data.Countries[170].Date).toString().substring(0,15)  
      const country180 = document.querySelector('.country180');
   const caseConfirm180 = document.querySelector('.CaseConfirm180');
   const caseDeath180 = document.querySelector('.CaseDeath180');
   const date180 = document.querySelector('.Date180');
   country180.textContent = data.Countries[180].Country
   caseConfirm180.textContent = addCommaDecimal(data.Countries[180].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[180].NewConfirmed) +')'
   caseDeath180.textContent = addCommaDecimal(data.Countries[180].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[180].NewDeaths) +')'
   date180.textContent = new Date(data.Countries[180].Date).toString().substring(0,15)     
    
    
   const country190 = document.querySelector('.country190');
   const caseConfirm190 = document.querySelector('.CaseConfirm190');
   const caseDeath190 = document.querySelector('.CaseDeath190');
   const date190 = document.querySelector('.Date190');
   country190.textContent = data.Countries[190].Country
   caseConfirm190.textContent = addCommaDecimal(data.Countries[190].TotalConfirmed) + ' (' + addCommaDecimal(data.Countries[190].NewConfirmed) +')'
   caseDeath190.textContent = addCommaDecimal(data.Countries[190].TotalDeaths) + ' (' + addCommaDecimal(data.Countries[190].NewDeaths) +')'
   date190.textContent = new Date(data.Countries[190].Date).toString().substring(0,15) 
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
