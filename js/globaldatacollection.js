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
   options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric', 
      dayPeriod: 'short',
      timeZone: 'America/Los_Angeles'
   };
   const date = new Date();
   const datea = new Intl.DateTimeFormat('default', options).format(date);    
   usCaseConfirmJh.textContent = data[0].total_cases + ' as of ' + datea;
   usCaseDeathJh.textContent = data[0].total_deaths + ' as of ' + datea;   
   /*
   const birthday = new Date();
   const date1 = birthday.getDate();
   const date2 = birthday.getFullYear();
   const date3 = birthday.getMonth() + 1;
   const date4 = date3 + "/" + date1 + "/" + date2;
   usCaseConfirmJh.textContent = data[0].total_cases + ' as of ' + data[0].last_update.toString().substring(6,7) + '/' + data[0].last_update.toString().substring(8,10) + '/' + data[0].last_update.toString().substring(0,4); 
   usCaseDeathJh.textContent = data[0].total_deaths + ' as of ' + data[0].last_update.toString().substring(6,7) + '/' + data[0].last_update.toString().substring(8,10) + '/' + data[0].last_update.toString().substring(0,4);*/   
   });

//Country Counts from covid19-api.org      
   fetch('https://covid19-api.org/api/status')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

async function getCountryCountFromCovidApi() {
 await fetch('https://covid19-api.org/api/status/us').then(response => response.json())
  .then(data => {
   const usCaseConfirm = document.querySelector('.usCaseConfirm');
   const usCaseDeath = document.querySelector('.usCaseDeath');
   const usDate = document.querySelector('.usDate');
   usCaseConfirm.textContent = data.cases;
   usCaseDeath.textContent = data.deaths;
   usDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
 
  await fetch('https://covid19-api.org/api/status/in').then(response => response.json())
  .then(data => {
   const inCaseConfirm = document.querySelector('.inCaseConfirm');
   const inCaseDeath = document.querySelector('.inCaseDeath');
   const inDate = document.querySelector(".inDate");
   inCaseConfirm.textContent = data.cases;
   inCaseDeath.textContent = data.deaths;
   inDate.textContent = new Date(data.last_update).toString().substring(0,15);
  });
   
 await fetch('https://covid19-api.org/api/status/af').then(response => response.json())
  .then(data => {
   const afCaseConfirm = document.querySelector('.afCaseConfirm');
   const afCaseDeath = document.querySelector('.afCaseDeath');
   const afDate = document.querySelector('.afDate');
   afCaseConfirm.textContent = data.cases;
   afCaseDeath.textContent = data.deaths;
   afDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
 await fetch('https://covid19-api.org/api/status/al').then(response => response.json())
  .then(data => {
   const alCaseConfirm = document.querySelector('.alCaseConfirm');
   const alCaseDeath = document.querySelector('.alCaseDeath');
   const alDate = document.querySelector('.alDate');
   alCaseConfirm.textContent = data.cases;
   alCaseDeath.textContent = data.deaths;
   alDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/dz').then(response => response.json())
  .then(data => {
   const dzCaseConfirm = document.querySelector('.dzCaseConfirm');
   const dzCaseDeath = document.querySelector('.dzCaseDeath');
   const dzDate = document.querySelector('.dzDate');
   dzCaseConfirm.textContent = data.cases;
   dzCaseDeath.textContent = data.deaths;
   dzDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/ad').then(response => response.json())
  .then(data => {
   const adCaseConfirm = document.querySelector('.adCaseConfirm');
   const adCaseDeath = document.querySelector('.adCaseDeath');
   const adDate = document.querySelector('.adDate');
   adCaseConfirm.textContent = data.cases;
   adCaseDeath.textContent = data.deaths;
   adDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/ao').then(response => response.json())
  .then(data => {
   const aoCaseConfirm = document.querySelector('.aoCaseConfirm');
   const aoCaseDeath = document.querySelector('.aoCaseDeath');
   const aoDate = document.querySelector('.aoDate');
   aoCaseConfirm.textContent = data.cases;
   aoCaseDeath.textContent = data.deaths;
   aoDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/ag').then(response => response.json())
  .then(data => {
   const agCaseConfirm = document.querySelector('.agCaseConfirm');
   const agCaseDeath = document.querySelector('.agCaseDeath');
   const agDate = document.querySelector('.agDate');
   agCaseConfirm.textContent = data.cases;
   agCaseDeath.textContent = data.deaths;
   agDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/al').then(response => response.json())
  .then(data => {
   const alCaseConfirm = document.querySelector('.alCaseConfirm');
   const alCaseDeath = document.querySelector('.alCaseDeath');
   const alDate = document.querySelector('.alDate');
   alCaseConfirm.textContent = data.cases;
   alCaseDeath.textContent = data.deaths;
   alDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/ar').then(response => response.json())
  .then(data => {
   const arCaseConfirm = document.querySelector('.arCaseConfirm');
   const arCaseDeath = document.querySelector('.arCaseDeath');
   const arDate = document.querySelector('.arDate');
   arCaseConfirm.textContent = data.cases;
   arCaseDeath.textContent = data.deaths;
   arDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/am').then(response => response.json())
  .then(data => {
   const amCaseConfirm = document.querySelector('.amCaseConfirm');
   const amCaseDeath = document.querySelector('.amCaseDeath');
   const amDate = document.querySelector('.amDate');
   amCaseConfirm.textContent = data.cases;
   amCaseDeath.textContent = data.deaths;
   amDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/aw').then(response => response.json())
  .then(data => {
   const awCaseConfirm = document.querySelector('.awCaseConfirm');
   const awCaseDeath = document.querySelector('.awCaseDeath');
   const awDate = document.querySelector('.awDate');
   awCaseConfirm.textContent = data.cases;
   awCaseDeath.textContent = data.deaths;
   awDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/au').then(response => response.json())
  .then(data => {
   const auCaseConfirm = document.querySelector('.aCuaseConfirm');
   const auCaseDeath = document.querySelector('.auCaseDeath');
   const auDate = document.querySelector('.auDate');
   auCaseConfirm.textContent = data.cases;
   auCaseDeath.textContent = data.deaths;
   auDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/at').then(response => response.json())
  .then(data => {
   const atCaseConfirm = document.querySelector('.atCaseConfirm');
   const atCaseDeath = document.querySelector('.atCaseDeath');
   const atDate = document.querySelector('.atDate');
   atCaseConfirm.textContent = data.cases;
   atCaseDeath.textContent = data.deaths;
   atDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/az').then(response => response.json())
  .then(data => {
   const azCaseConfirm = document.querySelector('.azCaseConfirm');
   const azCaseDeath = document.querySelector('.azCaseDeath');
   const azDate = document.querySelector('.azDate');
   azCaseConfirm.textContent = data.cases;
   azCaseDeath.textContent = data.deaths;
   azDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
 await fetch('https://covid19-api.org/api/status/bs').then(response => response.json())
  .then(data => {
   const bsCaseConfirm = document.querySelector('.bsCaseConfirm');
   const bsCaseDeath = document.querySelector('.bsCaseDeath');
   const bsDate = document.querySelector('.bsDate');
   bsCaseConfirm.textContent = data.cases;
   bsCaseDeath.textContent = data.deaths;
   bsDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/bh').then(response => response.json())
  .then(data => {
   const bhCaseConfirm = document.querySelector('.bhCaseConfirm');
   const bhCaseDeath = document.querySelector('.bhCaseDeath');
   const bhDate = document.querySelector('.bhDate');
   bhCaseConfirm.textContent = data.cases;
   bhCaseDeath.textContent = data.deaths;
   bhDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/bd').then(response => response.json())
  .then(data => {
   const bdCaseConfirm = document.querySelector('.bdCaseConfirm');
   const bdCaseDeath = document.querySelector('.bdCaseDeath');
   const bdDate = document.querySelector('.bdDate');
   bdCaseConfirm.textContent = data.cases;
   bdCaseDeath.textContent = data.deaths;
   bdDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/bb').then(response => response.json())
  .then(data => {
   const bbCaseConfirm = document.querySelector('.bbCaseConfirm');
   const bbCaseDeath = document.querySelector('.bbCaseDeath');
   const bbDate = document.querySelector('.bbDate');
   bbCaseConfirm.textContent = data.cases;
   bbCaseDeath.textContent = data.deaths;
   bbDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/by').then(response => response.json())
  .then(data => {
   const byCaseConfirm = document.querySelector('.byCaseConfirm');
   const byCaseDeath = document.querySelector('.byCaseDeath');
   const byDate = document.querySelector('.byDate');
   byCaseConfirm.textContent = data.cases;
   byCaseDeath.textContent = data.deaths;
   byDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/be').then(response => response.json())
  .then(data => {
   const beCaseConfirm = document.querySelector('.beCaseConfirm');
   const beCaseDeath = document.querySelector('.beCaseDeath');
   const beDate = document.querySelector('.beDate');
   beCaseConfirm.textContent = data.cases;
   beCaseDeath.textContent = data.deaths;
   beDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/bz').then(response => response.json())
  .then(data => {
   const bzCaseConfirm = document.querySelector('.bzCaseConfirm');
   const bzCaseDeath = document.querySelector('.bzCaseDeath');
   const bzDate = document.querySelector('.bzDate');
   bzCaseConfirm.textContent = data.cases;
   bzCaseDeath.textContent = data.deaths;
   bzDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/bj').then(response => response.json())
  .then(data => {
   const bjCaseConfirm = document.querySelector('.bjCaseConfirm');
   const bjCaseDeath = document.querySelector('.bjCaseDeath');
   const bjDate = document.querySelector('.bjDate');
   bjCaseConfirm.textContent = data.cases;
   bjCaseDeath.textContent = data.deaths;
   bjDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/bt').then(response => response.json())
  .then(data => {
   const btCaseConfirm = document.querySelector('.btCaseConfirm');
   const btCaseDeath = document.querySelector('.btCaseDeath');
   const btDate = document.querySelector('.btDate');
   btCaseConfirm.textContent = data.cases;
   btCaseDeath.textContent = data.deaths;
   btDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });

 await fetch('https://covid19-api.org/api/status/ve').then(response => response.json())
  .then(data => {
   const veCaseConfirm = document.querySelector('.veCaseConfirm');
   const veCaseDeath = document.querySelector('.veCaseDeath');
   const veDate = document.querySelector('.veDate');
   veCaseConfirm.textContent = data.cases;
   veCaseDeath.textContent = data.deaths;
   veDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });  
   
 await fetch('https://covid19-api.org/api/status/ba').then(response => response.json())
  .then(data => {
   const baCaseConfirm = document.querySelector('.baCaseConfirm');
   const baCaseDeath = document.querySelector('.baCaseDeath');
   const baDate = document.querySelector('.baDate');
   baCaseConfirm.textContent = data.cases;
   baCaseDeath.textContent = data.deaths;
   baDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });   
   
 await fetch('https://covid19-api.org/api/status/bw').then(response => response.json())
  .then(data => {
   const bwCaseConfirm = document.querySelector('.bwCaseConfirm');
   const bwCaseDeath = document.querySelector('.bwCaseDeath');
   const bwDate = document.querySelector('.bwDate');
   bwCaseConfirm.textContent = data.cases;
   bwCaseDeath.textContent = data.deaths;
   bwDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
 await fetch('https://covid19-api.org/api/status/br').then(response => response.json())
  .then(data => {
   const brCaseConfirm = document.querySelector('.brCaseConfirm');
   const brCaseDeath = document.querySelector('.brCaseDeath');
   const brDate = document.querySelector('.brDate');
   brCaseConfirm.textContent = data.cases;
   brCaseDeath.textContent = data.deaths;
   brDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
 await fetch('https://covid19-api.org/api/status/bn').then(response => response.json())
  .then(data => {
   const bnCaseConfirm = document.querySelector('.bnCaseConfirm');
   const bnCaseDeath = document.querySelector('.bnCaseDeath');
   const bnDate = document.querySelector('.bnDate');
   bnCaseConfirm.textContent = data.cases;
   bnCaseDeath.textContent = data.deaths;
   bnDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });   
      
 await fetch('https://covid19-api.org/api/status/bg').then(response => response.json())
  .then(data => {
   const bgCaseConfirm = document.querySelector('.bgCaseConfirm');
   const bgCaseDeath = document.querySelector('.bgCaseDeath');
   const bgDate = document.querySelector('.bgDate');
   bgCaseConfirm.textContent = data.cases;
   bgCaseDeath.textContent = data.deaths;
   bgDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  }); 
      
 await fetch('https://covid19-api.org/api/status/bf').then(response => response.json())
  .then(data => {
   const bfCaseConfirm = document.querySelector('.bfCaseConfirm');
   const bfCaseDeath = document.querySelector('.bfCaseDeath');
   const bfDate = document.querySelector('.bfDate');
   bfCaseConfirm.textContent = data.cases;
   bfCaseDeath.textContent = data.deaths;
   bfDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  }); 
      
 await fetch('https://covid19-api.org/api/status/bi').then(response => response.json())
  .then(data => {
   const biCaseConfirm = document.querySelector('.biCaseConfirm');
   const biCaseDeath = document.querySelector('.biCaseDeath');
   const biDate = document.querySelector('.biDate');
   biCaseConfirm.textContent = data.cases;
   biCaseDeath.textContent = data.deaths;
   biDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  }); 
      
 await fetch('https://covid19-api.org/api/status/cv').then(response => response.json())
  .then(data => {
   const cvCaseConfirm = document.querySelector('.cvCaseConfirm');
   const cvCaseDeath = document.querySelector('.cvCaseDeath');
   const cvDate = document.querySelector('.cvDate');
   cvCaseConfirm.textContent = data.cases;
   cvCaseDeath.textContent = data.deaths;
   cvDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  }); 
      
 await fetch('https://covid19-api.org/api/status/kh').then(response => response.json())
  .then(data => {
   const khCaseConfirm = document.querySelector('.khCaseConfirm');
   const khCaseDeath = document.querySelector('.khCaseDeath');
   const khDate = document.querySelector('.khDate');
   khCaseConfirm.textContent = data.cases;
   khCaseDeath.textContent = data.deaths;
   khDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  }); 
      
 await fetch('https://covid19-api.org/api/status/cm').then(response => response.json())
  .then(data => {
   const cmCaseConfirm = document.querySelector('.cmCaseConfirm');
   const cmCaseDeath = document.querySelector('.cmCaseDeath');
   const cmDate = document.querySelector('.cmDate');
   cmCaseConfirm.textContent = data.cases;
   cmCaseDeath.textContent = data.deaths;
   cmDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  }); 
   
}

getCountryCountFromCovidApi();

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
