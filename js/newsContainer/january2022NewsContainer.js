'use strict';

class January2022NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Non Media News", newsTitle: "Predictors of smell recovery in a nationwide prospective cohort of patients with COVID-19", newsSource: "Science Direct", newsDate: "January - February 2022", newsLink: "https://www.sciencedirect.com/science/article/pii/S0196070921003409"}),               
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(January2022NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "January , 2022", newsLink: ""}),
  document.querySelector('#article-main-jan2022')
  );
});
