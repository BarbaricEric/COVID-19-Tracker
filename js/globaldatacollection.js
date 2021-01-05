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
   usCaseConfirmJh.textContent = data[0].total_cases + ' as of ' + data.last_update.toString().substring(6,7) + '/' + data.last_update.toString().substring(9,10) + '/' + data.last_update.toString().substring(0,4); 
   usCaseDeathJh.textContent = data[0].total_deaths + ' as of ' + data.last_update.toString().substring(6,7) + '/' + data.last_update.toString().substring(9,10) + '/' + data.last_update.toString().substring(0,4);   
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
   const ilCaseConfirm
   const ilCaseDeath
   const maCaseConfirm
   const maCaseDeath
   const ptCaseConfirm
   const ptCaseDeath
   const atCaseConfirm
   const atCaseDeath
   const saCaseConfirm
   const saCaseDeath
   const rsCaseConfirm
   const rsCaseDeath
   const huCaseConfirm
   const huCaseDeath
   const joCaseConfirm
   const joCaseDeath
   const npCaseConfirm
   const npCaseDeath
   const paCaseConfirm
   const paCaseDeath
   const jpCaseConfirm
   const jpCaseDeath
   const geCaseConfirm
   const geCaseDeath
   const azCaseConfirm
   const azCaseDeath
   const ecCaseConfirm
   const ecCaseDeath
   const aeCaseConfirm
   const aeCaseDeath
   const hrCaseConfirm
   const hrCaseDeath
   const kzCaseConfirm
   const kzCaseDeath
   const bgCaseConfirm
   const bgCaseDeath
   const byCaseConfirm
   const byCaseDeath
   const lbCaseConfirm
   const lbCaseDeath
   const skCaseConfirm
   const skCaseDeath
   const doCaseConfirm
   const doCaseDeath
   const dkCaseConfirm
   const dkCaseDeath
   const crCaseConfirm
   const crCaseDeath
   const boCaseConfirm
   const boCaseDeath
   const amCaseConfirm
   const amCaseDeath
   const kwCaseConfirm
   const kwCaseDeath
   const ltCaseConfirm
   const ltCaseDeath
   const mdCaseConfirm
   const mdCaseDeath
   const qaCaseConfirm
   const qaCaseDeath
   const tnCaseConfirm
   const tnCaseDeath
   62
   
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
