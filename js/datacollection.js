//DOM Elements
const usCaseDeath = document.querySelector(".us-case-death");
const usCaseConfirm = document.querySelector(".us-case-confirmed");

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
   const { name, population, updated_at, deaths, confirmed, cases_per_million_population } = data;
   //Set DOM element from API
   usCaseDeath.textContent = data.deaths;
   usCaseConfirm.textContent = data.confirmed;
   });      
     
//Global Count from covid19api      
   fetch(globalapi2)
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });      

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
