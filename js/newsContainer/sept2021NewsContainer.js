'use strict';

class September2021NewsApp extends React.Component {
 render() {
      return e("div", null,  
e(NewsList, {newsType: "Non Media News", newsTitle: "Common factors of COVID-19 cases and deaths among the most affected 50 countries", newsSource: "Science Direct", newsDate: "September 2021", newsLink: "https://www.sciencedirect.com/science/article/pii/S1871402121002678"}),
e(NewsList, {newsType: "Media News", newsTitle: "Oxygen supplies grow precarious amid COVID surge", newsSource: "AP News", newsDate: "September 1, 2021", newsLink: "https://apnews.com/article/health-coronavirus-pandemic-90b57b82ed2f07a1cafbc68cd57246e9"}),
e(NewsList, {newsType: "Media News", newsTitle: "Covid’s toxic divides could shape Europe for years, study says", newsSource: "Guardian", newsDate: "September 1, 2021", newsLink: "https://www.theguardian.com/world/2021/sep/01/covid-toxic-divides-could-shape-europe-years-study"}),
e(NewsList, {newsType: "Media News", newsTitle: "A sound bite reexamined: ‘Pandemic of the unvaccinated’", newsSource: "AP News", newsDate: "September 1, 2021", newsLink: "https://apnews.com/article/health-pandemics-coronavirus-pandemic-9845c7257300ff6546c20489e642a1ea"}),
e(NewsList, {newsType: "Media News", newsTitle: "Welcome to September and the ‘I don’t know’ economy", newsSource: "Washington Post", newsDate: "September 1, 2021", newsLink: "https://www.washingtonpost.com/business/2021/09/01/september-not-return-to-normal-economy/"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "The Impact of Mask Distribution and Promotion on Mask Uptake and COVID-19 in Bangladesh", newsSource: "Innovations for Poverty Action", newsDate: "September 2021", newsLink: "https://www.poverty-action.org/study/impact-mask-distribution-and-promotion-mask-uptake-and-covid-19-bangladesh"}),
e(NewsList, {newsType: "Media News", newsTitle: "Verbal and physical attacks on health workers surge as emotions boil during latest COVID-19 wave", newsSource: "Texas Tribune", newsDate: "September 1, 2021", newsLink: "https://www.texastribune.org/2021/09/01/coronavirus-texas-hospital-attacks-health-workers/"}),
e(NewsList, {newsType: "Media News", newsTitle: "Reddit communities ‘go dark’ in protest over Covid misinformation", newsSource: "Guardian", newsDate: "September 1, 2021", newsLink: "https://www.theguardian.com/technology/2021/sep/01/reddit-communities-go-dark-in-protest-over-covid-misinformation"}),
e(NewsList, {newsType: "Media News", newsTitle: "At least 15M Covid vaccine doses have been wasted in the U.S. since March, new data shows", newsSource: "NBC News", newsDate: "September 1, 2021", newsLink: "https://www.nbcnews.com/news/us-news/america-has-wasted-least-15-million-covid-vaccine-doses-march-n1278211"}),
e(NewsList, {newsType: "Media News", newsTitle: "Children's Hospitals Are Pleading For Federal Help To Deal With A Capacity Crisis", newsSource: "NPR", newsDate: "September 1, 2021", newsLink: "https://www.npr.org/sections/coronavirus-live-updates/2021/09/01/1033233408/childrens-hospitals-coronavirus-covid-capacity-federal-help"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Outcomes Associated With Social Distancing Policies in St Louis, Missouri, During the Early Phase of the COVID-19 Pandemic", newsSource: "Jama Network", newsDate: "September 1, 2021", newsLink: "http://jamanetwork.com/article.aspx?doi=10.1001/jamanetworkopen.2021.23374"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Efficacy and safety of baricitinib for the treatment of hospitalised adults with COVID-19 (COV-BARRIER): a randomised, double-blind, parallel-group, placebo-controlled phase 3 trial", newsSource: "Lancet", newsDate: "September 1, 2021", newsLink: "https://doi.org/10.1016/S2213-2600(21)00331-3"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Evaluating the effects of vaccine messaging on immunization intentions and behavior: Evidence from two randomized controlled trials in Vermont", newsSource: "Science Direct", newsDate: "September 1, 2021", newsLink: "https://www.sciencedirect.com/science/article/pii/S0264410X21010951"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Short-range exposure to airborne virus transmission and current guidelines", newsSource: "PNAS", newsDate: "September 14, 2021", newsLink: "https://doi.org/10.1073/pnas.2105279118"}),               
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
