'use strict';

class January2021NewsApp extends React.Component {
 render() {
      return e("div", null, 
e(NewsList, {newsType: "Non Media News", newsTitle: "Long-term sequelae following previous coronavirus epidemics", newsSource: "Clinical Medicine Journal", newsDate: "January 2021", newsLink: "https://doi.org/10.7861/clinmed.2020-0204"}),
e(NewsList, {newsType: "Media News", newsTitle: "When the Supreme Court Ruled a Vaccine Could Be Mandatory", newsSource: "History", newsDate: "January 2, 2021", newsLink: "https://www.history.com/news/smallpox-vaccine-supreme-court"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Implementation and Evolution of Mitigation Measures, Testing, and Contact Tracing in the National Football League, August 9–November 21, 2020", newsSource: "CDC", newsDate: "January 25, 2021", newsLink: "http://dx.doi.org/10.15585/mmwr.mm7004e2"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Association of Psychiatric Disorders With Mortality Among Patients With COVID-19", newsSource: "Jama Network", newsDate: "January 27, 2021", newsLink: "http://jamanetwork.com/article.aspx?doi=10.1001/jamapsychiatry.2020.4442"}),               
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
