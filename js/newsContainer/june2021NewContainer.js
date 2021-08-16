'use strict';

const e = React.createElement;

class July2021NewsApp extends React.Component {
 render() {
      return e("div", null, 
e(NewsList, {newsType: "Non Media News", newsTitle: "Socioeconomic disparities and COVID-19 vaccination acceptance: a nationwide ecologic study", newsSource: "Science Direct", newsDate: "June 7, 2021", newsLink: "https://www.sciencedirect.com/science/article/pii/S1198743X21002779"}),
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "August , 2021", newsLink: ""}),
  document.querySelector('#article-main-june2021')
  );
});
