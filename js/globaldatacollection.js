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
   const auCaseConfirm = document.querySelector('.auCaseConfirm');
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
         
 await fetch('https://covid19-api.org/api/status/ca').then(response => response.json())
  .then(data => {
   const caCaseConfirm = document.querySelector('.caCaseConfirm');
   const caCaseDeath = document.querySelector('.caCaseDeath');
   const caDate = document.querySelector('.caDate');
   caCaseConfirm.textContent = data.cases;
   caCaseDeath.textContent = data.deaths;
   caDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/ky').then(response => response.json())
  .then(data => {
   const kyCaseConfirm = document.querySelector('.kyCaseConfirm');
   const kyCaseDeath = document.querySelector('.kyCaseDeath');
   const kyDate = document.querySelector('.kyDate');
   kyCaseConfirm.textContent = data.cases;
   kyCaseDeath.textContent = data.deaths;
   kyDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/cf').then(response => response.json())
  .then(data => {
   const cfCaseConfirm = document.querySelector('.cfCaseConfirm');
   const cfCaseDeath = document.querySelector('.cfCaseDeath');
   const cfDate = document.querySelector('.cfDate');
   cfCaseConfirm.textContent = data.cases;
   cfCaseDeath.textContent = data.deaths;
   cfDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/td').then(response => response.json())
  .then(data => {
   const tdCaseConfirm = document.querySelector('.tdCaseConfirm');
   const tdCaseDeath = document.querySelector('.tdCaseDeath');
   const tdDate = document.querySelector('.tdDate');
   tdCaseConfirm.textContent = data.cases;
   tdCaseDeath.textContent = data.deaths;
   tdDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/cl').then(response => response.json())
  .then(data => {
   const clCaseConfirm = document.querySelector('.clCaseConfirm');
   const clCaseDeath = document.querySelector('.clCaseDeath');
   const clDate = document.querySelector('.clDate');
   clCaseConfirm.textContent = data.cases;
   clCaseDeath.textContent = data.deaths;
   clDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/cn').then(response => response.json())
  .then(data => {
   const cnCaseConfirm = document.querySelector('.cnCaseConfirm');
   const cnCaseDeath = document.querySelector('.cnCaseDeath');
   const cnDate = document.querySelector('.cnDate');
   cnCaseConfirm.textContent = data.cases;
   cnCaseDeath.textContent = data.deaths;
   cnDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/co').then(response => response.json())
  .then(data => {
   const coCaseConfirm = document.querySelector('.coCaseConfirm');
   const coCaseDeath = document.querySelector('.coCaseDeath');
   const coDate = document.querySelector('.coDate');
   coCaseConfirm.textContent = data.cases;
   coCaseDeath.textContent = data.deaths;
   coDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/km').then(response => response.json())
  .then(data => {
   const kmCaseConfirm = document.querySelector('.kmCaseConfirm');
   const kmCaseDeath = document.querySelector('.kmCaseDeath');
   const kmDate = document.querySelector('.kmDate');
   kmCaseConfirm.textContent = data.cases;
   kmCaseDeath.textContent = data.deaths;
   kmDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/cg').then(response => response.json())
  .then(data => {
   const cgCaseConfirm = document.querySelector('.cgCaseConfirm');
   const cgCaseDeath = document.querySelector('.cgCaseDeath');
   const cgDate = document.querySelector('.cgDate');
   cgCaseConfirm.textContent = data.cases;
   cgCaseDeath.textContent = data.deaths;
   cgDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/cr').then(response => response.json())
  .then(data => {
   const crCaseConfirm = document.querySelector('.crCaseConfirm');
   const crCaseDeath = document.querySelector('.crCaseDeath');
   const crDate = document.querySelector('.crDate');
   crCaseConfirm.textContent = data.cases;
   crCaseDeath.textContent = data.deaths;
   crDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/ci').then(response => response.json())
  .then(data => {
   const ciCaseConfirm = document.querySelector('.ciCaseConfirm');
   const ciCaseDeath = document.querySelector('.ciCaseDeath');
   const ciDate = document.querySelector('.ciDate');
   ciCaseConfirm.textContent = data.cases;
   ciCaseDeath.textContent = data.deaths;
   ciDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
 await fetch('https://covid19-api.org/api/status/hr').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.hrCaseConfirm');
   const caseDeath = document.querySelector('.hrCaseDeath');
   const curDate = document.querySelector('.hrDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
            
 await fetch('https://covid19-api.org/api/status/cu').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.cuCaseConfirm');
   const caseDeath = document.querySelector('.cuCaseDeath');
   const curDate = document.querySelector('.cuDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
               
 await fetch('https://covid19-api.org/api/status/cw').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.cwCaseConfirm');
   const caseDeath = document.querySelector('.cwCaseDeath');
   const curDate = document.querySelector('.cwDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
               
 await fetch('https://covid19-api.org/api/status/cy').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.cyCaseConfirm');
   const caseDeath = document.querySelector('.cyCaseDeath');
   const curDate = document.querySelector('.cyDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
               
 await fetch('https://covid19-api.org/api/status/cz').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.czCaseConfirm');
   const caseDeath = document.querySelector('.czCaseDeath');
   const curDate = document.querySelector('.czDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
               
 await fetch('https://covid19-api.org/api/status/kp').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.kpCaseConfirm');
   const caseDeath = document.querySelector('.kpCaseDeath');
   const curDate = document.querySelector('.kpDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
               
 await fetch('https://covid19-api.org/api/status/cd').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.cdCaseConfirm');
   const caseDeath = document.querySelector('.cdCaseDeath');
   const curDate = document.querySelector('.cdDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
               
 await fetch('https://covid19-api.org/api/status/dk').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.dkCaseConfirm');
   const caseDeath = document.querySelector('.dkCaseDeath');
   const curDate = document.querySelector('.dkDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
 await fetch('https://covid19-api.org/api/status/dj').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.djCaseConfirm');
   const caseDeath = document.querySelector('.djCaseDeath');
   const curDate = document.querySelector('.djDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
 await fetch('https://covid19-api.org/api/status/dm').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.dmCaseConfirm');
   const caseDeath = document.querySelector('.dmCaseDeath');
   const curDate = document.querySelector('.dmDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
 await fetch('https://covid19-api.org/api/status/do').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.doCaseConfirm');
   const caseDeath = document.querySelector('.doCaseDeath');
   const curDate = document.querySelector('.doDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
 await fetch('https://covid19-api.org/api/status/ec').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ecCaseConfirm');
   const caseDeath = document.querySelector('.ecCaseDeath');
   const curDate = document.querySelector('.ecDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/eg').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.egCaseConfirm');
   const caseDeath = document.querySelector('.egCaseDeath');
   const curDate = document.querySelector('.egDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/sv').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.svCaseConfirm');
   const caseDeath = document.querySelector('.svCaseDeath');
   const curDate = document.querySelector('.svDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/gq').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gqCaseConfirm');
   const caseDeath = document.querySelector('.gqCaseDeath');
   const curDate = document.querySelector('.gqDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/er').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.erCaseConfirm');
   const caseDeath = document.querySelector('.erCaseDeath');
   const curDate = document.querySelector('.erDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/ee').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.eeCaseConfirm');
   const caseDeath = document.querySelector('.eeCaseDeath');
   const curDate = document.querySelector('.eeDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/et').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.etCaseConfirm');
   const caseDeath = document.querySelector('.etCaseDeath');
   const curDate = document.querySelector('.etDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/fo').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.foCaseConfirm');
   const caseDeath = document.querySelector('.foCaseDeath');
   const curDate = document.querySelector('.foDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
 await fetch('https://covid19-api.org/api/status/fj').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.fjCaseConfirm');
   const caseDeath = document.querySelector('.fjCaseDeath');
   const curDate = document.querySelector('.fjDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
 await fetch('https://covid19-api.org/api/status/fi').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.fiCaseConfirm');
   const caseDeath = document.querySelector('.fiCaseDeath');
   const curDate = document.querySelector('.fiDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
 await fetch('https://covid19-api.org/api/status/fr').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.frCaseConfirm');
   const caseDeath = document.querySelector('.frCaseDeath');
   const curDate = document.querySelector('.frDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
 await fetch('https://covid19-api.org/api/status/gf').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gfCaseConfirm');
   const caseDeath = document.querySelector('.gfCaseDeath');
   const curDate = document.querySelector('.gfDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/ga').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gaCaseConfirm');
   const caseDeath = document.querySelector('.gaCaseDeath');
   const curDate = document.querySelector('.gaDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gm').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gmCaseConfirm');
   const caseDeath = document.querySelector('.gmCaseDeath');
   const curDate = document.querySelector('.gmDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gm').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gmCaseConfirm');
   const caseDeath = document.querySelector('.gmCaseDeath');
   const curDate = document.querySelector('.gmDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/ge').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.geCaseConfirm');
   const caseDeath = document.querySelector('.geCaseDeath');
   const curDate = document.querySelector('.geDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/de').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.deCaseConfirm');
   const caseDeath = document.querySelector('.deCaseDeath');
   const curDate = document.querySelector('.deDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gh').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ghCaseConfirm');
   const caseDeath = document.querySelector('.ghCaseDeath');
   const curDate = document.querySelector('.ghDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gi').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.giCaseConfirm');
   const caseDeath = document.querySelector('.giCaseDeath');
   const curDate = document.querySelector('.giDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gr').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.grCaseConfirm');
   const caseDeath = document.querySelector('.grCaseDeath');
   const curDate = document.querySelector('.grDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gl').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.glCaseConfirm');
   const caseDeath = document.querySelector('.glCaseDeath');
   const curDate = document.querySelector('.glDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gd').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gdCaseConfirm');
   const caseDeath = document.querySelector('.gdCaseDeath');
   const curDate = document.querySelector('.gdDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gp').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gpCaseConfirm');
   const caseDeath = document.querySelector('.gpCaseDeath');
   const curDate = document.querySelector('.gpDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gu').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.guCaseConfirm');
   const caseDeath = document.querySelector('.guCaseDeath');
   const curDate = document.querySelector('.guDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gt').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gtCaseConfirm');
   const caseDeath = document.querySelector('.gtCaseDeath');
   const curDate = document.querySelector('.gtDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
await fetch('https://covid19-api.org/api/status/gg').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ggCaseConfirm');
   const caseDeath = document.querySelector('.ggCaseDeath');
   const curDate = document.querySelector('.ggDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
await fetch('https://covid19-api.org/api/status/gn').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gnCaseConfirm');
   const caseDeath = document.querySelector('.gnCaseDeath');
   const curDate = document.querySelector('.gnDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
await fetch('https://covid19-api.org/api/status/gw').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gwCaseConfirm');
   const caseDeath = document.querySelector('.gwCaseDeath');
   const curDate = document.querySelector('.gwDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
await fetch('https://covid19-api.org/api/status/gy').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gyCaseConfirm');
   const caseDeath = document.querySelector('.gyCaseDeath');
   const curDate = document.querySelector('.gyDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
await fetch('https://covid19-api.org/api/status/ht').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.htCaseConfirm');
   const caseDeath = document.querySelector('.htCaseDeath');
   const curDate = document.querySelector('.htDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
await fetch('https://covid19-api.org/api/status/va').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.vaCaseConfirm');
   const caseDeath = document.querySelector('.vaCaseDeath');
   const curDate = document.querySelector('.vaDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
await fetch('https://covid19-api.org/api/status/hn').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.hnCaseConfirm');
   const caseDeath = document.querySelector('.hnCaseDeath');
   const curDate = document.querySelector('.hnDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
await fetch('https://covid19-api.org/api/status/hk').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.hkCaseConfirm');
   const caseDeath = document.querySelector('.hkCaseDeath');
   const curDate = document.querySelector('.hkDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
await fetch('https://covid19-api.org/api/status/hu').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.huCaseConfirm');
   const caseDeath = document.querySelector('.huCaseDeath');
   const curDate = document.querySelector('.huDate');
   caseConfirm.textContent = data.cases;
   caseDeath.textContent = data.deaths;
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
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
