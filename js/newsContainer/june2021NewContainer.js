'use strict';

class June2021NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Non Media News", newsTitle: "Neutralising antibody activity against SARS-CoV-2 VOCs B.1.617.2 and B.1.351 by BNT162b2 vaccination", newsSource: "Lancet", newsDate: "June 3, 2021", newsLink: "https://doi.org/10.1016/S0140-6736(21)01290-3"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Socioeconomic disparities and COVID-19 vaccination acceptance: a nationwide ecologic study", newsSource: "Science Direct", newsDate: "June 7, 2021", newsLink: "https://www.sciencedirect.com/science/article/pii/S1198743X21002779"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "First report of a de novo iTTP episode associated with an mRNA-based anti-COVID-19 vaccination", newsSource: "Wiley Online Library", newsDate: "June 8, 2021", newsLink: "https://doi.org/10.1111/jth.15418"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "SARS-CoV-2 envelope protein causes acute respiratory distress syndrome (ARDS)-like pathological damages and constitutes an antiviral target", newsSource: "Nature", newsDate: "June 10, 2021", newsLink: "https://doi.org/10.1038/s41422-021-00519-4"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Polθ reverse transcribes RNA and promotes RNA-templated DNA repair", newsSource: "Science Magazine", newsDate: "June 11, 2021", newsLink: "https://doi.org/10.1126/sciadv.abf1771"}),
e(NewsList, {newsType: "Media News", newsTitle: "KFF COVID-19 Vaccine Monitor: Profile Of The Unvaccinated", newsSource: "KFF", newsDate: "June 11, 2021", newsLink: "https://www.kff.org/coronavirus-covid-19/poll-finding/kff-covid-19-vaccine-monitor-profile-of-the-unvaccinated/"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Manipulation of the unfolded protein response: A pharmacological strategy against coronavirus infection", newsSource: "PLOS", newsDate: "June 17, 2021", newsLink: "https://doi.org/10.1371/journal.ppat.1009644"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "COVID-19 Vaccination Coverage Among Adults — United States, December 14, 2020–May 22, 2021", newsSource: "CDC", newsDate: "June 21, 2021", newsLink: "http://dx.doi.org/10.15585/mmwr.mm7025e1"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Association between COVID-19 outcomes and mask mandates, adherence, and attitudes", newsSource: "PLOS", newsDate: "June 23, 2021", newsLink: "https://doi.org/10.1371/journal.pone.0252315"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "COVID-19 Infection, Reinfection, and Vaccine Effectiveness in Arizona Frontline and Essential Workers: Protocol for a Longitudinal Cohort Study", newsSource: "JMIR Publications", newsDate: "June 24, 2021", newsLink: "https://doi.org/10.2196/28925"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "DRUL for school: Opening Pre-K with safe, simple, sensitive saliva testing for SARS-CoV-2", newsSource: "PLOS", newsDate: "June 25, 2021", newsLink: "https://doi.org/10.1371/journal.pone.0252949"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Ivermectin for the Treatment of Coronavirus Disease 2019: A Systematic Review and Meta-analysis of Randomized Controlled Trials", newsSource: "Oxford Academics", newsDate: "June 28, 2021", newsLink: "https://doi.org/10.1093/cid/ciab591"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Myocarditis Following Immunization With mRNA COVID-19 Vaccines in Members of the US Military", newsSource: "Jama Network", newsDate: "June 29, 2021", newsLink: "http://jamanetwork.com/article.aspx?doi=10.1001/jamacardio.2021.2833"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Predictors of Nonseroconversion after SARS-CoV-2 Infection", newsSource: "CDC", newsDate: "June 30, 2021", newsLink: "https://doi.org/10.3201/eid2709.211042"}),               
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(June2021NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "June , 2021", newsLink: ""}),
  document.querySelector('#article-main-june2021')
  );
});
