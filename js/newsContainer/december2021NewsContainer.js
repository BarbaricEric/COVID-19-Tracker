'use strict';

class December2021NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Non Media News", newsTitle: "Implication of coughing dynamics on safe social distancing in an indoor environment—A numerical perspective", newsSource: "Science Direct", newsDate: "December 2021", newsLink: "https://www.sciencedirect.com/science/article/abs/pii/S036013232100679X"}),               
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(December2021NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "December , 2021", newsLink: ""}),
  document.querySelector('#article-main-dec2021')
  );
});
