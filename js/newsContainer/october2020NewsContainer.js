'use strict';

class October2020NewsApp extends React.Component {
 render() {
      return e("div", null, 
e(NewsList, {newsType: "Non Media News", newsTitle: "Enhancing innate immunity against virus in times of COVID-19: Trying to untangle facts from fictions", newsSource: "World Allergy Organization Journal", newsDate: "October 9, 2020", newsLink: "https://doi.org/10.1016/j.waojou.2020.100476"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Facial Masking for Covid-19 — Potential for “Variolation” as We Await a Vaccine", newsSource: "New England Journal of Medicine", newsDate: "October 20, 2020", newsLink: "https://www.nejm.org/doi/full/10.1056/nejmp2026913"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Inflammation and Intussusceptive Angiogenesis in COVID-19: everything in and out of Flow", newsSource: "European Respiratory Society", newsDate: "October 20, 2020", newsLink: "https://doi.org/10.1183/13993003.03147-2020"}),               
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(October2020NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "October , 2020", newsLink: ""}),
  document.querySelector('#article-main-october2020')
  );
});
