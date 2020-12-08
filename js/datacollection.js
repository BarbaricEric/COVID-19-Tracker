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

//US Count from about-corona
   fetch(localapi2)
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);   
   const { deaths, confirmed } = data.data.latest_data;
   /*Set DOM element from API
   usCaseDeath.textContent = deaths;
   usCaseConfirm.textContent = confirmed;*/
   });      
     
//Global Count from covid19api      
   fetch(globalapi2)
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   usCaseDeath.textContent = data.Countries[181].TotalDeaths + ' as of ' + data.Countries[181].Date.toString().substring(0, 10) + ' 12:00 AM PST ';
   usCaseConfirm.textContent = data.Countries[181].TotalConfirmed + ' as of ' + data.Countries[181].Date.toString().substring(0, 10) + ' 12:00 AM PST ';      
   });

//US Count from covid-api.com      
   fetch('https://covid-api.com/api/reports?date=2020-12-07&iso=USA')
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
   alCaseConfirm.textContent = data.data[0].confirmed;
   alCaseDeath.textContent = data.data[0].deaths; 
   alCaseRecent.textContent = data.data[0].date;   
      
  });   

//US Count from New York Times
  d3.csv("./nytimes_covid_19_data/nytimes_us_total.csv").then(function(data) {
   console.log(data);  
   const usCaseConfirm = document.querySelector(".us-newyorktimes-confirm");
   const usCaseDeath = document.querySelector(".us-newyorktimes-death");
   const usCaseRecent = document.querySelector(".us-newyorktimes-recent");
   usCaseConfirm.textContent = data[316].cases;
   usCaseDeath.textContent = data[316].deaths; 
   usCaseRecent.textContent = data[316].date;
  });

//NY Count from New York Times
  d3.csv("us-states.csv").then(function(data) {
   console.log(data);  
   const nyCaseConfirm = document.querySelector(".us-newyorktimes-ny-confirm");
   const nyCaseDeath = document.querySelector(".us-newyorktimes-ny-death");
   const nyCaseRecent = document.querySelector(".us-newyorktimes-ny-recent");  
   nyCaseConfirm.textContent = data[15062].cases;
   nyCaseDeath.textContent = data[15062].deaths;
   nyCaseRecent.textContent = data[15062].date;  
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
   alCaseDeath.textContent = data.death;
   alCaseConfirm.textContent = data.positive;
   alTotHos.textContent = data.hospitalizedCumulative;
   alCurHos.textContent = data.hospitalizedCurrently;
   alCurIcu.textContent = determineNull(data.inIcuCurrently);
   alRecent.textContent = data.dateModified.toString().substring(0, 10);
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
   akCaseDeath.textContent = data.death;
   akCaseConfirm.textContent = data.positive;
   akTotHos.textContent = data.hospitalizedCumulative;
   akCurHos.textContent = data.hospitalizedCurrently;
   akCurIcu.textContent = determineNull(data.inIcuCurrently);
   akRecent.textContent = data.dateModified.toString().substring(0, 10);      
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
   asCaseDeath.textContent = data.death;
   asCaseConfirm.textContent = data.positive;
   asTotHos.textContent = data.hospitalizedCumulative;
   asCurHos.textContent = data.hospitalizedCurrently;
   asCurIcu.textContent = determineNull(data.inIcuCurrently);
   asRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   azCaseDeath.textContent = data.death;
   azCaseConfirm.textContent = data.positive;
   azTotHos.textContent = data.hospitalizedCumulative;
   azCurHos.textContent = data.hospitalizedCurrently;
   azCurIcu.textContent = determineNull(data.inIcuCurrently);
   azRecent.textContent = data.dateModified.toString().substring(0, 10);    
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
   arCaseDeath.textContent = data.death;
   arCaseConfirm.textContent = data.positive;
   arTotHos.textContent = data.hospitalizedCumulative;
   arCurHos.textContent = data.hospitalizedCurrently;
   arCurIcu.textContent = determineNull(data.inIcuCurrently);
   arRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   caCaseDeath.textContent = data.death;
   caCaseConfirm.textContent = data.positive;
   caTotHos.textContent = data.hospitalizedCumulative;
   caCurHos.textContent = data.hospitalizedCurrently;
   caCurIcu.textContent = determineNull(data.inIcuCurrently);
   caRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   coCaseDeath.textContent = data.death;
   coCaseConfirm.textContent = data.positive;
   coTotHos.textContent = data.hospitalizedCumulative;
   coCurHos.textContent = data.hospitalizedCurrently;
   coCurIcu.textContent = determineNull(data.inIcuCurrently);
   coRecent.textContent = data.dateModified.toString().substring(0, 10);      
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
   ctCaseDeath.textContent = data.death;
   ctCaseConfirm.textContent = data.positive;
   ctTotHos.textContent = data.hospitalizedCumulative;
   ctCurHos.textContent = data.hospitalizedCurrently;
   ctCurIcu.textContent = determineNull(data.inIcuCurrently);
   ctRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   deCaseDeath.textContent = data.death;
   deCaseConfirm.textContent = data.positive;
   deTotHos.textContent = data.hospitalizedCumulative;
   deCurHos.textContent = data.hospitalizedCurrently;
   deCurIcu.textContent = determineNull(data.inIcuCurrently);
   deRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   dcCaseDeath.textContent = data.death;
   dcCaseConfirm.textContent = data.positive;
   dcTotHos.textContent = data.hospitalizedCumulative;
   dcCurHos.textContent = data.hospitalizedCurrently;
   dcCurIcu.textContent = determineNull(data.inIcuCurrently);
   dcRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   flCaseDeath.textContent = data.death;
   flCaseConfirm.textContent = data.positive;
   flTotHos.textContent = data.hospitalizedCumulative;
   flCurHos.textContent = data.hospitalizedCurrently;
   flCurIcu.textContent = determineNull(data.inIcuCurrently);
   flRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   gaCaseDeath.textContent = data.death;
   gaCaseConfirm.textContent = data.positive;
   gaTotHos.textContent = data.hospitalizedCumulative;
   gaCurHos.textContent = data.hospitalizedCurrently;
   gaCurIcu.textContent = determineNull(data.inIcuCurrently);
   gaRecent.textContent = data.dateModified.toString().substring(0, 10);      
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
   guCaseDeath.textContent = data.death;
   guCaseConfirm.textContent = data.positive;
   guTotHos.textContent = data.hospitalizedCumulative;
   guCurHos.textContent = data.hospitalizedCurrently;
   guCurIcu.textContent = determineNull(data.inIcuCurrently);
   guRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   hiCaseDeath.textContent = data.death;
   hiCaseConfirm.textContent = data.positive;
   hiTotHos.textContent = data.hospitalizedCumulative;
   hiCurHos.textContent = data.hospitalizedCurrently;
   hiCurIcu.textContent = determineNull(data.inIcuCurrently);
   hiRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   idCaseDeath.textContent = data.death;
   idCaseConfirm.textContent = data.positive;
   idTotHos.textContent = data.hospitalizedCumulative;
   idCurHos.textContent = data.hospitalizedCurrently;
   idCurIcu.textContent = determineNull(data.inIcuCurrently);
   idRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   ilCaseDeath.textContent = data.death;
   ilCaseConfirm.textContent = data.positive;
   ilTotHos.textContent = data.hospitalizedCumulative;
   ilCurHos.textContent = data.hospitalizedCurrently;
   ilCurIcu.textContent = determineNull(data.inIcuCurrently);
   ilRecent.textContent = data.dateModified.toString().substring(0, 10);         
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
   inCaseDeath.textContent = data.death;
   inCaseConfirm.textContent = data.positive;
   inTotHos.textContent = data.hospitalizedCumulative;
   inCurHos.textContent = data.hospitalizedCurrently;
   inCurIcu.textContent = determineNull(data.inIcuCurrently);
   inRecent.textContent = data.dateModified.toString().substring(0, 10);         
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
   iaCaseDeath.textContent = data.death;
   iaCaseConfirm.textContent = data.positive;
   iaTotHos.textContent = data.hospitalizedCumulative;
   iaCurHos.textContent = data.hospitalizedCurrently;
   iaCurIcu.textContent = determineNull(data.inIcuCurrently);
   iaRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   ksCaseDeath.textContent = data.death;
   ksCaseConfirm.textContent = data.positive;
   ksTotHos.textContent = data.hospitalizedCumulative;
   ksCurHos.textContent = data.hospitalizedCurrently;
   ksCurIcu.textContent = determineNull(data.inIcuCurrently);
   ksRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   kyCaseDeath.textContent = data.death;
   kyCaseConfirm.textContent = data.positive;
   kyTotHos.textContent = data.hospitalizedCumulative;
   kyCurHos.textContent = data.hospitalizedCurrently;
   kyCurIcu.textContent = determineNull(data.inIcuCurrently);
   kyRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   laCaseDeath.textContent = data.death;
   laCaseConfirm.textContent = data.positive;
   laTotHos.textContent = data.hospitalizedCumulative;
   laCurHos.textContent = data.hospitalizedCurrently;
   laCurIcu.textContent = determineNull(data.inIcuCurrently);
   laRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   meCaseDeath.textContent = data.death;
   meCaseConfirm.textContent = data.positive;
   meTotHos.textContent = data.hospitalizedCumulative;
   meCurHos.textContent = data.hospitalizedCurrently;
   meCurIcu.textContent = determineNull(data.inIcuCurrently);
   meRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   mdCaseDeath.textContent = data.death;
   mdCaseConfirm.textContent = data.positive;
   mdTotHos.textContent = data.hospitalizedCumulative;
   mdCurHos.textContent = data.hospitalizedCurrently;
   mdCurIcu.textContent = determineNull(data.inIcuCurrently);
   mdRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   maCaseDeath.textContent = data.death;
   maCaseConfirm.textContent = data.positive;
   maTotHos.textContent = data.hospitalizedCumulative;
   maCurHos.textContent = data.hospitalizedCurrently;
   maCurIcu.textContent = determineNull(data.inIcuCurrently);
   maRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   miCaseDeath.textContent = data.death;
   miCaseConfirm.textContent = data.positive;
   miTotHos.textContent = data.hospitalizedCumulative;
   miCurHos.textContent = data.hospitalizedCurrently;
   miCurIcu.textContent = determineNull(data.inIcuCurrently);
   miRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   mnCaseDeath.textContent = data.death;
   mnCaseConfirm.textContent = data.positive;
   mnTotHos.textContent = data.hospitalizedCumulative;
   mnCurHos.textContent = data.hospitalizedCurrently;
   mnCurIcu.textContent = determineNull(data.inIcuCurrently);
   mnRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   msCaseDeath.textContent = data.death;
   msCaseConfirm.textContent = data.positive;
   msTotHos.textContent = data.hospitalizedCumulative;
   msCurHos.textContent = data.hospitalizedCurrently;
   msCurIcu.textContent = determineNull(data.inIcuCurrently);
   msRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   moCaseDeath.textContent = data.death;
   moCaseConfirm.textContent = data.positive;
   moTotHos.textContent = data.hospitalizedCumulative;
   moCurHos.textContent = data.hospitalizedCurrently;
   moCurIcu.textContent = determineNull(data.inIcuCurrently);
   moRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   mtCaseDeath.textContent = data.death;
   mtCaseConfirm.textContent = data.positive;
   mtTotHos.textContent = data.hospitalizedCumulative;
   mtCurHos.textContent = data.hospitalizedCurrently;
   mtCurIcu.textContent = determineNull(data.inIcuCurrently);
   mtRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   neCaseDeath.textContent = data.death;
   neCaseConfirm.textContent = data.positive;
   neTotHos.textContent = data.hospitalizedCumulative;
   neCurHos.textContent = data.hospitalizedCurrently;
   neCurIcu.textContent = determineNull(data.inIcuCurrently);
   neRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   nvCaseDeath.textContent = data.death;
   nvCaseConfirm.textContent = data.positive;
   nvTotHos.textContent = data.hospitalizedCumulative;
   nvCurHos.textContent = data.hospitalizedCurrently;
   nvCurIcu.textContent = determineNull(data.inIcuCurrently);
   nvRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   nhCaseDeath.textContent = data.death;
   nhCaseConfirm.textContent = data.positive;
   nhTotHos.textContent = data.hospitalizedCumulative;
   nhCurHos.textContent = data.hospitalizedCurrently;
   nhCurIcu.textContent = determineNull(data.inIcuCurrently);
   nhRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   njCaseDeath.textContent = data.death;
   njCaseConfirm.textContent = data.positive;
   njTotHos.textContent = data.hospitalizedCumulative;
   njCurHos.textContent = data.hospitalizedCurrently;
   njCurIcu.textContent = determineNull(data.inIcuCurrently);
   njRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   nmCaseDeath.textContent = data.death;
   nmCaseConfirm.textContent = data.positive;
   nmTotHos.textContent = data.hospitalizedCumulative;
   nmCurHos.textContent = data.hospitalizedCurrently;
   nmCurIcu.textContent = determineNull(data.inIcuCurrently);
   nmRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   nyCaseDeath.textContent = data.death;
   nyCaseConfirm.textContent = data.positive;
   nyTotHos.textContent = data.hospitalizedCumulative;
   nyCurHos.textContent = data.hospitalizedCurrently;
   nyCurIcu.textContent = determineNull(data.inIcuCurrently);
   nyRecent.textContent = data.dateModified.toString().substring(0, 10);      
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
   ncCaseDeath.textContent = data.death;
   ncCaseConfirm.textContent = data.positive;
   ncTotHos.textContent = data.hospitalizedCumulative;
   ncCurHos.textContent = data.hospitalizedCurrently;
   ncCurIcu.textContent = determineNull(data.inIcuCurrently);
   ncRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   ndCaseDeath.textContent = data.death;
   ndCaseConfirm.textContent = data.positive;
   ndTotHos.textContent = data.hospitalizedCumulative;
   ndCurHos.textContent = data.hospitalizedCurrently;
   ndCurIcu.textContent = determineNull(data.inIcuCurrently);
   ndRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   mpCaseDeath.textContent = data.death;
   mpCaseConfirm.textContent = data.positive;
   mpTotHos.textContent = data.hospitalizedCumulative;
   mpCurHos.textContent = data.hospitalizedCurrently;
   mpCurIcu.textContent = determineNull(data.inIcuCurrently);
   mpRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   ohCaseDeath.textContent = data.death;
   ohCaseConfirm.textContent = data.positive;
   ohTotHos.textContent = data.hospitalizedCumulative;
   ohCurHos.textContent = data.hospitalizedCurrently;
   ohCurIcu.textContent = determineNull(data.inIcuCurrently);
   ohRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   okCaseDeath.textContent = data.death;
   okCaseConfirm.textContent = data.positive;
   okTotHos.textContent = data.hospitalizedCumulative;
   okCurHos.textContent = data.hospitalizedCurrently;
   okCurIcu.textContent = determineNull(data.inIcuCurrently);
   okRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   orCaseDeath.textContent = data.death;
   orCaseConfirm.textContent = data.positive;
   orTotHos.textContent = data.hospitalizedCumulative;
   orCurHos.textContent = data.hospitalizedCurrently;
   orCurIcu.textContent = determineNull(data.inIcuCurrently);
   orRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   paCaseDeath.textContent = data.death;
   paCaseConfirm.textContent = data.positive;
   paTotHos.textContent = data.hospitalizedCumulative;
   paCurHos.textContent = data.hospitalizedCurrently;
   paCurIcu.textContent = determineNull(data.inIcuCurrently);
   paRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   prCaseDeath.textContent = data.death;
   prCaseConfirm.textContent = data.positive;
   prTotHos.textContent = data.hospitalizedCumulative;
   prCurHos.textContent = data.hospitalizedCurrently;
   prCurIcu.textContent = determineNull(data.inIcuCurrently);
   prRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   riCaseDeath.textContent = data.death;
   riCaseConfirm.textContent = data.positive;
   riTotHos.textContent = data.hospitalizedCumulative;
   riCurHos.textContent = data.hospitalizedCurrently;
   riCurIcu.textContent = determineNull(data.inIcuCurrently);
   riRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   scCaseDeath.textContent = data.death;
   scCaseConfirm.textContent = data.positive;
   scTotHos.textContent = data.hospitalizedCumulative;
   scCurHos.textContent = data.hospitalizedCurrently;
   scCurIcu.textContent = determineNull(data.inIcuCurrently);
   scRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   sdCaseDeath.textContent = data.death;
   sdCaseConfirm.textContent = data.positive;
   sdTotHos.textContent = data.hospitalizedCumulative;
   sdCurHos.textContent = data.hospitalizedCurrently;
   sdCurIcu.textContent = determineNull(data.inIcuCurrently);
   sdRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   tnCaseDeath.textContent = data.death;
   tnCaseConfirm.textContent = data.positive;
   tnTotHos.textContent = data.hospitalizedCumulative;
   tnCurHos.textContent = data.hospitalizedCurrently;
   tnCurIcu.textContent = determineNull(data.inIcuCurrently);
   tnRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   txCaseDeath.textContent = data.death;
   txCaseConfirm.textContent = data.positive;
   txTotHos.textContent = data.hospitalizedCumulative;
   txCurHos.textContent = data.hospitalizedCurrently;
   txCurIcu.textContent = determineNull(data.inIcuCurrently);
   txRecent.textContent = data.dateModified.toString().substring(0, 10);      
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
   viCaseDeath.textContent = data.death;
   viCaseConfirm.textContent = data.positive;
   viTotHos.textContent = data.hospitalizedCumulative;
   viCurHos.textContent = data.hospitalizedCurrently;
   viCurIcu.textContent = determineNull(data.inIcuCurrently);
   viRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   utCaseDeath.textContent = data.death;
   utCaseConfirm.textContent = data.positive;
   utTotHos.textContent = data.hospitalizedCumulative;
   utCurHos.textContent = data.hospitalizedCurrently;
   utCurIcu.textContent = determineNull(data.inIcuCurrently);
   utRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   vtCaseDeath.textContent = data.death;
   vtCaseConfirm.textContent = data.positive;
   vtTotHos.textContent = data.hospitalizedCumulative;
   vtCurHos.textContent = data.hospitalizedCurrently;
   vtCurIcu.textContent = determineNull(data.inIcuCurrently);
   vtRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   vaCaseDeath.textContent = data.death;
   vaCaseConfirm.textContent = data.positive;
   vaTotHos.textContent = data.hospitalizedCumulative;
   vaCurHos.textContent = data.hospitalizedCurrently;
   vaCurIcu.textContent = determineNull(data.inIcuCurrently);
   vaRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   waCaseDeath.textContent = data.death;
   waCaseConfirm.textContent = data.positive;
   waTotHos.textContent = data.hospitalizedCumulative;
   waCurHos.textContent = data.hospitalizedCurrently;
   waCurIcu.textContent = determineNull(data.inIcuCurrently);
   waRecent.textContent = data.dateModified.toString().substring(0, 10);      
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
   wvCaseDeath.textContent = data.death;
   wvCaseConfirm.textContent = data.positive;
   wvTotHos.textContent = data.hospitalizedCumulative;
   wvCurHos.textContent = data.hospitalizedCurrently;
   wvCurIcu.textContent = determineNull(data.inIcuCurrently);
   wvRecent.textContent = data.dateModified.toString().substring(0, 10);      
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
   wiCaseDeath.textContent = data.death;
   wiCaseConfirm.textContent = data.positive;
   wiTotHos.textContent = data.hospitalizedCumulative;
   wiCurHos.textContent = data.hospitalizedCurrently;
   wiCurIcu.textContent = determineNull(data.inIcuCurrently);
   wiRecent.textContent = data.dateModified.toString().substring(0, 10);      
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
   wyCaseDeath.textContent = data.death;
   wyCaseConfirm.textContent = data.positive;
   wyTotHos.textContent = data.hospitalizedCumulative;
   wyCurHos.textContent = data.hospitalizedCurrently;
   wyCurIcu.textContent = determineNull(data.inIcuCurrently);
   wyRecent.textContent = data.dateModified.toString().substring(0, 10);       
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
   usCaseDeathCTP.textContent = getArrayFields(data, "death");
   usCaseConfirmCTP.textContent = getArrayFields(data, "positive");
   usTotHos.textContent = getArrayFields(data, "hospitalizedCumulative");
   usCurHos.textContent = getArrayFields(data, "hospitalizedCurrently");
   usCurIcu.textContent = getArrayFields(data, "inIcuCurrently");
   usRecent.textContent = updateDate.substring(0, 10);
   });  

//Functions
function getArrayFields(input, field) {
    const output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

function getCommas() {

}

function determineNull(input) {
   if (input == undefined) {
     return input = "Unavailble";
   } else {
     return input
   }   
}

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
