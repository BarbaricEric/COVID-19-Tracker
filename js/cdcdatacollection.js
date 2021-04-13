(async function() {
  let urlList = [
    "https://data.cdc.gov/resource/saz5-9hgg.json",
    "https://data.cdc.gov/resource/b7pe-5nws.json",
    "https://data.cdc.gov/resource/w9zu-fywh.json"
  ];

  const promiseList = urlList.map((url) => {
    return fetch(url)
        .then(response => response.json())
  })

  const jsonBaseList = await Promise.all(promiseList)
  console.log('All done.');
  console.log('jsonBaseList: ', jsonBaseList)
})()

//US Administration Count from CDC
  d3v6.csv("./cdc_vaccination/vaccine_administration.csv").then(function(data) {
   console.log(data);
   const adminNum = document.querySelector(".administer-num")
   adminNum.style.cssText = "color: red; font-size:46px";
   adminNum.textContent = addCommas(parseInt(data[0].PfizerBioNTech) + parseInt(data[0].Moderna) + parseInt(data[0].Janssen) + parseInt(data[0].NotIdentified)) 
  });

//US Delivered Count from CDC
  d3v6.csv("./cdc_vaccination/vaccine_delivered.csv").then(function(data) {
   console.log(data); 
   const distNum = document.querySelector(".distribute-num")
   distNum.style.cssText = "color: red; font-size:46px";
   distNum.textContent = addCommas(parseInt(data[0].PfizerBioNTech) + parseInt(data[0].Moderna) + parseInt(data[0].Janssen))
  });

//US Fully Vaccinated Count from CDC
  d3v6.csv("./cdc_vaccination/vaccined_fully.csv").then(function(data) { 
   const vacNum = document.querySelector(".vac-num")
   vacNum.style.cssText = "color: green; font-size:46px";
   vacNum.textContent = addCommas(parseInt(data[0].PfizerBioNTech) + parseInt(data[0].Moderna) + parseInt(data[0].Janssen) + parseInt(data[0].NotIdentified))
  });

function addCommas(x) {
    if (x == undefined || x == null) {
      return x = "Error";
    } else {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }   
}
