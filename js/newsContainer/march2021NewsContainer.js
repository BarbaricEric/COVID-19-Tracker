'use strict';

class March2021NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Non Media News", newsTitle: "Association Between ABO and Rh Blood Groups and SARS-CoV-2 Infection or Severe COVID-19 Illness", newsSource: "ACP Journals", newsDate: "March 2021", newsLink: "https://doi.org/10.7326/M20-4511"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Highly functional virus-specific cellular immune response in asymptomatic SARS-CoV-2 infection", newsSource: "Journal of Experimental Medicine", newsDate: "March 1, 2021", newsLink: "https://doi.org/10.1084/jem.20202617"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Experimental SARS-CoV-2 Infection of Bank Voles", newsSource: "CDC", newsDate: "March 11, 2021", newsLink: "https://doi.org/10.3201/eid2704.204945"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Life expectancy in adulthood is falling for those without a BA degree, but as educational gaps have widened, racial gaps have narrowed", newsSource: "PNAS", newsDate: "March 16, 2021", newsLink: "https://doi.org/10.1073/pnas.2024777118"}),               
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
