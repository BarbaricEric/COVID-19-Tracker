'use strict';

const e = React.createElement;

class June2021NewsApp extends React.Component {
 render() {
      return e("div", null, 
e(NewsList, {newsType: "Non Media News", newsTitle: "Socioeconomic disparities and COVID-19 vaccination acceptance: a nationwide ecologic study", newsSource: "Science Direct", newsDate: "June 7, 2021", newsLink: "https://www.sciencedirect.com/science/article/pii/S1198743X21002779"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Polθ reverse transcribes RNA and promotes RNA-templated DNA repair", newsSource: "Science Magazine", newsDate: "June 11, 2021", newsLink: "https://doi.org/10.1126/sciadv.abf1771"}),               
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(June2021NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "June , 2021", newsLink: ""}),
  document.querySelector('#article-main-june2021')
  );
});
