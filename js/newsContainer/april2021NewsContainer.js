'use strict';

class April2021NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Media News", newsTitle: "How coronavirus spreads through a population and how we can beat it", newsSource: "Guardian", newsDate: "April 2020", newsLink: "https://www.theguardian.com/world/datablog/ng-interactive/2021/sep/06/how-contagious-delta-variant-covid-19-r0-r-factor-value-number-explainer-see-how-coronavirus-spread-infectious-flatten-the-curve"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Humoral immune response to COVID-19 mRNA vaccine in patients with multiple sclerosis treated with high-efficacy disease-modifying therapies", newsSource: "Journal Sage", newsDate: "April 22, 2021", newsLink: "https://doi.org/10.1177/17562864211012835"}),               
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(April2021NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "April , 2021", newsLink: ""}),
  document.querySelector('#article-main-apr2021')
  );
});
