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
