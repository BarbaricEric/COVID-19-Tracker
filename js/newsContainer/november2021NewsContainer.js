'use strict';

class November2021NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Non Media News", newsTitle: "COVID-19 mortality and the overweight: Cross-Country Evidence", newsSource: "Science Direct", newsDate: "November 2021", newsLink: "https://www.sciencedirect.com/science/article/pii/S266653522100104X"}),
e(NewsList, {newsType: "Media News", newsTitle: "Federal contractors get broad flexibility to enforce Covid vaccine rules for millions of workers", newsSource: "CNBC", newsDate: "November 1, 2021", newsLink: "https://www.cnbc.com/2021/11/01/federal-contractors-will-have-broad-flexibility-to-enforce-covid-vaccine-rules.html"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Safety and efficacy of fluvoxamine in COVID-19 ICU patients: an open label, prospective cohort trial with matched controls", newsSource: "British Journal of Clinical Pharmacology", newsDate: "November 1, 2021", newsLink: "https://doi.org/10.1111/bcp.15126"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "How conspiracists exploited COVID-19 science", newsSource: "Nature", newsDate: "November 1, 2021", newsLink: "https://doi.org/10.1038/s41562-021-01217-2"}), 
e(NewsList, {newsType: "Media News", newsTitle: "Facebook failing to protect users from Covid misinformation, says monitor", newsSource: "Guardian", newsDate: "November 1, 2021", newsLink: "https://www.theguardian.com/technology/2021/nov/02/facebook-failing-to-protect-users-from-covid-misinformation-says-monitor"}),
e(NewsList, {newsType: "Media News", newsTitle: "More than 2,000 New York City firefighters out sick as vaccine mandate takes effect", newsSource: "CBS News", newsDate: "November 1, 2021", newsLink: "https://www.cbsnews.com/news/covid-vaccine-mandate-firefighters-fdny-call-sick-new-york/"}), 
e(NewsList, {newsType: "Non Media News", newsTitle: "Durability of Antibody Levels After Vaccination With mRNA SARS-CoV-2 Vaccine in Individuals With or Without Prior Infection", newsSource: "Jama Network", newsDate: "November 1, 2021", newsLink: "http://jamanetwork.com/article.aspx?doi=10.1001/jama.2021.19996"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Analysis of the Effectiveness of the Ad26.COV2.S Adenoviral Vector Vaccine for Preventing COVID-19", newsSource: "Jama Network", newsDate: "November 2, 2021", newsLink: "http://jamanetwork.com/article.aspx?doi=10.1001/jamanetworkopen.2021.32540"}),               
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
