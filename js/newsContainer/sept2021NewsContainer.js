'use strict';

class September2021NewsApp extends React.Component {
 render() {
      return e("div", null, 
e(NewsList, {newsType: "Non Media News", newsTitle: "Common factors of COVID-19 cases and deaths among the most affected 50 countries", newsSource: "Science Direct", newsDate: "September 2021", newsLink: "https://www.sciencedirect.com/science/article/pii/S1871402121002678"}),
e(NewsList, {newsType: "Media News", newsTitle: "", newsSource: "", newsDate: "September, 2021", newsLink: ""}),
e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "September, 2021", newsLink: ""}),
e(NewsList, {newsType: "Media News", newsTitle: "", newsSource: "", newsDate: "September, 2021", newsLink: ""}),
e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "September, 2021", newsLink: ""}),
e(NewsList, {newsType: "Media News", newsTitle: "", newsSource: "", newsDate: "September, 2021", newsLink: ""}),
e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "September, 2021", newsLink: ""}),
e(NewsList, {newsType: "Media News", newsTitle: "", newsSource: "", newsDate: "September, 2021", newsLink: ""}),               
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(September2021NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "September , 2021", newsLink: ""}),
  document.querySelector('#article-main-sept2021')
  );
});