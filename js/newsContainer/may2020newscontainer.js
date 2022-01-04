'use strict';

class May2020NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Media News", newsTitle: "Why do some COVID-19 patients infect many others, whereas most don't spread the virus at all?", newsSource: "Science", newsDate: "May 19, 2020", newsLink: "https://www.science.org/content/article/why-do-some-covid-19-patients-infect-many-others-whereas-most-don-t-spread-virus-all"}),               
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(May2020NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "May , 2022", newsLink: ""}),
  document.querySelector('#article-main-may2020')
  );
});
