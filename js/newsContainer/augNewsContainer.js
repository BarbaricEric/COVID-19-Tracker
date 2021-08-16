'use strict';

const e = React.createElement;

class August2021NewsApp extends React.Component {
 render() {
      return e("div", null, 
         e(NewsList, {newsType: "Media News", newsTitle: "", newsSource: "", newsDate: "", newsLink: ""})
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "August , 2021", newsLink: ""}),
  document.querySelector('#article-main-aug2021')
  );
});