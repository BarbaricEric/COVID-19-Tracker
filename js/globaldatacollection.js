//DOM Elements
const usCaseDeath = document.querySelector(".us-testing");
const usCaseConfirm = document.querySelector(".us-testing-two");

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
   usCaseDeath = getArrayFields(data.Countries[181], "TotalDeaths");
   usCaseConfirm = getArrayFields(data.181, "TotalConfirmed");
   });
   
//Global Count from corona-api      
   fetch(globalapi1)
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });
    
   function getArrayFields(input, field) {
    const output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}
