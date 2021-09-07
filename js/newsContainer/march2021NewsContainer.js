'use strict';

class March2021NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Non Media News", newsTitle: "Highly functional virus-specific cellular immune response in asymptomatic SARS-CoV-2 infection", newsSource: "Journal of Experimental Medicine", newsDate: "March 1, 2021", newsLink: "https://doi.org/10.1084/jem.20202617"}),               
); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(March2021NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "March , 2021", newsLink: ""}),
  document.querySelector('#article-main-march2021')
  );
});               
