'use strict';

class November2020NewsApp extends React.Component {
 render() {
      return e("div", null, 
e(NewsList, {newsType: "Non Media News", newsTitle: "Electronic health record analysis identifies kidney disease as the leading risk factor for hospitalization in confirmed COVID-19 patients", newsSource: "PLOS", newsDate: "November 12, 2020", newsLink: "https://doi.org/10.1371/journal.pone.0242182"}),         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(November2020NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "November , 2020", newsLink: ""}),
  document.querySelector('#article-main-nov2020')
  );
});
