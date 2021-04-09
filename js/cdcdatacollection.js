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
