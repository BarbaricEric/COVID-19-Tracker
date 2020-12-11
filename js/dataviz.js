//covid-api.com api
let ustimeline = []
let catimeline = []

async getUsCountFromCovidApi() {
 const fish = await fetch('https://covid-api.com/api/reports?date=2020-03-01&iso=USA').then(response => response.json());
 const fish2 = await fetch('https://covid-api.com/api/reports?date=2020-03-02&iso=USA').then(response => response.json()); 
}

getUsCountFromCovidApi();

//US Count from covid-api.com    
fetch('https://covid-api.com/api/reports?date=2020-03-01&iso=USA')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
  });

fetch('https://covid-api.com/api/reports?date=2020-03-02&iso=USA')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
  });
