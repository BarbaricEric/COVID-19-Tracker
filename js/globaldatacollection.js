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
   usCaseDeathJh.textContent = data.Global.TotalDeaths + ' as of ' + data.Date.toString().substring(0, 10);
   usCaseConfirmJh.textContent = data.Global.TotalConfirmed + ' as of ' + data.Date.toString().substring(0, 10);
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
   //usCaseConfirmJh.textContent = data.
   //usCaseDeathJh.textContent = data.   
   });

//Country Counts from covid19-api.org      
   fetch('https://covid19-api.org/api/status')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   /* const usCaseConfirm
   const usCaseDeath
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
   const iqCaseConfirm
   const iqCaseDeath
   const bdCaseConfirm
   const bdCaseDeath
   const pkCaseConfirm
   const pkCaseDeath
   const phCaseConfirm
   const phCaseDeath
   const seCaseConfirm
   const seCaseDeath
   const chCaseConfirm
   const chCaseDeath
   
   
   const afCaseConfirm
   const afCaseDeath
   const alCaseConfirm
   const alfCaseDeath
   */
   });


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
