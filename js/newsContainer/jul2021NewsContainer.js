'use strict';

const e = React.createElement;

class July2021NewsApp extends React.Component {
 render() {
      return e("div", null, 
e(NewsList, {newsType: "Non Media News", newsTitle: "Estimating the early impact of vaccination against COVID-19 on deaths among elderly people in Brazil: Analyses of routinely-collected data on vaccine coverage and mortality", newsSource: "Lancet", newsDate: "July 15, 2021", newsLink: "https://doi.org/10.1016/j.eclinm.2021.101036"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Cross-reactive antibodies against human coronaviruses and the animal coronavirome suggest diagnostics for future zoonotic spillovers", newsSource: "Science Magazine", newsDate: "July 29, 2021", newsLink: "https://doi.org/10.1126/sciimmunol.abe9950"}),
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "August , 2021", newsLink: ""}),
  document.querySelector('#article-main-jul2021')
  );
});
