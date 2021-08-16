'use strict';

const e = React.createElement;

class January2021NewsApp extends React.Component {
 render() {
      return e("div", null, 
e(NewsList, {newsType: "Non Media News", newsTitle: "Long-term sequelae following previous coronavirus epidemics", newsSource: "Clinical Medicine Journal", newsDate: "January 2021", newsLink: "https://doi.org/10.7861/clinmed.2020-0204"}),
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(January2021NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "August , 2021", newsLink: ""}),
  document.querySelector('#article-main-january2021')
  );
});
