'use strict';

class December2020NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Non Media News", newsTitle: "Susceptibility of Domestic Swine to Experimental Infection with Severe Acute Respiratory Syndrome Coronavirus 2", newsSource: "CDC", newsDate: "December 18, 2020", newsLink: "https://doi.org/10.3201/eid2701.203399"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Coronavirus vaccine development: from SARS and MERS to COVID-19", newsSource: "BMC", newsDate: "December 20, 2020", newsLink: "https://doi.org/10.1186/s12929-020-00695-2"}),
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(December2020NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "December , 2020", newsLink: ""}),
  document.querySelector('#article-main-december2020')
  );
});
