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
e(NewsList, {newsType: "Media News", newsTitle: "Half of Beijing’s flights are canceled as China’s capital city tightens Covid restrictions", newsSource: "CNBC", newsDate: "November 2, 2021", newsLink: "https://www.cnbc.com/2021/11/02/beijing-flights-cancelled-as-city-tightens-covid-travel-restrictions.html"}),
e(NewsList, {newsType: "Media News", newsTitle: "China’s Latest Delta Outbreak its Most Widespread Since Wuhan", newsSource: "Bloomberg", newsDate: "November 2, 2021", newsLink: "https://www.bloomberg.com/news/articles/2021-11-03/china-s-fast-spreading-delta-outbreak-now-its-widest-since-wuhan"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "CDC Recommends Pediatric COVID-19 Vaccine for Children 5 to 11 Years", newsSource: "CDC", newsDate: "November 2, 2021", newsLink: "https://www.cdc.gov/media/releases/2021/s1102-PediatricCOVID-19Vaccine.html"}),
e(NewsList, {newsType: "Media News", newsTitle: "NYC police unions warned vaccine mandates would pull 10,000 officers off streets. So far, the number is 34.", newsSource: "Washington Post", newsDate: "November 2, 2021", newsLink: "https://www.washingtonpost.com/nation/2021/11/02/nypd-unpaid-leave-vaccine-mandate/"}),               
e(NewsList, {newsType: "Media News", newsTitle: "Chinese stock up on food as temperatures fall and Covid spreads", newsSource: "NBC News", newsDate: "November 3, 2021", newsLink: "https://www.nbcnews.com/news/world/chinese-stock-food-temperatures-fall-covid-spreads-rcna4415"}),               
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
