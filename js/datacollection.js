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
   usCaseDeath.textContent = data.Countries[181].TotalDeaths + ' as of ' + data.Countries[181].Date.toString().substring(0, 10) + ' 12:00 AM ';
   usCaseConfirm.textContent = data.Countries[181].TotalConfirmed + ' as of ' + data.Countries[181].Date.toString().substring(0, 10) + ' 12:00 AM ';   
   ;   
   });

//AL Count from New York Times
  d3.csv("us-states.csv").then(function(data) {
   console.log(data); // [{"Hello": "world"}, …]
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
   });

//KS Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ks/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//KY Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ky/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
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
   mdCaseDeath.textContent = data.death;
   mdCaseConfirm.textContent = data.positive;   
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
   txCaseDeath.textContent = data.death;
   txCaseConfirm.textContent = data.positive;   
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
   waCaseDeath.textContent = data.death;
   waCaseConfirm.textContent = data.positive;    
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
   nyCaseDeath.textContent = data.death;
   nyCaseConfirm.textContent = data.positive;    
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
   if (input === 'null') {
     let input.value = "Unavailble";
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
