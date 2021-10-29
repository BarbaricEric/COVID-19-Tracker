'use strict';

class December2020NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Non Media News", newsTitle: "Male sex identified by global COVID-19 meta-analysis as a risk factor for death and ITU admission", newsSource: "Nature", newsDate: "December 9, 2020", newsLink: "https://doi.org/10.1038/s41467-020-19741-6"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "COVID-19 Vaccines May Not Prevent Nasal SARS-CoV-2 Infection and Asymptomatic Transmission ", newsSource: "Sage Journals", newsDate: "December 15, 2020", newsLink: "https://doi.org/10.1177%2F0194599820982633"}),               
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
