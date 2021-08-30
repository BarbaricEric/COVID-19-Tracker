'use strict';

class May2021NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Non Media News", newsTitle: "Shared B cell memory to coronaviruses and other pathogens varies in human age groups and tissues", newsSource: "Science Magazine", newsDate: "May 14, 2021", newsLink: "https://doi.org/10.1126/science.abf6648"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Mask Use and Ventilation Improvements to Reduce COVID-19 Incidence in Elementary Schools — Georgia, November 16–December 11, 2020", newsSource: "CDC", newsDate: "May 21, 2021", newsLink: "http://dx.doi.org/10.15585/mmwr.mm7021e1"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Hemodynamic Profiles of Shock in Patients With COVID-19", newsSource: "American Journal of Cardiology", newsDate: "May 25, 2021", newsLink: "https://doi.org/10.1016/j.amjcard.2021.05.029"}),              
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(May2021NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "May , 2021", newsLink: ""}),
  document.querySelector('#article-main-may2021')
  );
});
