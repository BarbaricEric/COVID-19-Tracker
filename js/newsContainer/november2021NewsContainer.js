'use strict';

class November2021NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Non Media News", newsTitle: "COVID-19 mortality and the overweight: Cross-Country Evidence", newsSource: "Science Direct", newsDate: "November 2021", newsLink: "https://www.sciencedirect.com/science/article/pii/S266653522100104X"}),
              ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(November2021NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "November , 2021", newsLink: ""}),
  document.querySelector('#article-main-november2021')
  );
});
