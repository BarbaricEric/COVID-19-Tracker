'use strict';

class July2021NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Non Media News", newsTitle: "COVID-19 false dichotomies and a comprehensive review of the evidence regarding public health, COVID-19 symptomatology, SARS-CoV-2 transmission, mask wearing, and reinfection", newsSource: "BMC", newsDate: "July 9, 2021", newsLink: "https://doi.org/10.1186/s12879-021-06357-4"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Estimating the early impact of vaccination against COVID-19 on deaths among elderly people in Brazil: Analyses of routinely-collected data on vaccine coverage and mortality", newsSource: "Lancet", newsDate: "July 15, 2021", newsLink: "https://doi.org/10.1016/j.eclinm.2021.101036"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Development of safe and highly protective live-attenuated SARS-CoV-2 vaccine candidates by genome recoding", newsSource: "Cell", newsDate: "July 19, 2021", newsLink: "https://doi.org/10.1016/j.celrep.2021.109493"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Experimental investigation of indoor aerosol dispersion and accumulation in the context of COVID-19: Effects of masks and ventilation", newsSource: "Physics of Fluids", newsDate: "July 21, 2021", newsLink: "https://doi.org/10.1063/5.0057100"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "A single dose of replication-competent VSV-vectored vaccine expressing SARS-CoV-2 S1 protects against virus replication in a hamster model of severe COVID-19", newsSource: "Nature", newsDate: "July 21, 2021", newsLink: "https://doi.org/10.1038/s41541-021-00352-1"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Housing, sanitation and living conditions affecting SARS-CoV-2 prevention interventions in 54 African countries", newsSource: "Cambridge University Press", newsDate: "July 23, 2021", newsLink: "https://doi.org/10.1017/S0950268821001734"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Single-cell RNA sequencing reveals ex vivo signatures of SARS-CoV-2-reactive T cells through ‘reverse phenotyping’", newsSource: "Nature", newsDate: "July 26, 2021", newsLink: "https://doi.org/10.1038/s41467-021-24730-4"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Postacute Sequelae of COVID-19 Pneumonia: 6-month Chest CT Follow-up", newsSource: "RSNA", newsDate: "July 27, 2021", newsLink: "https://doi.org/10.1148/radiol.2021210834"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "COVID vaccines to reach poorest countries in 2023 — despite recent pledges", newsSource: "Nature", newsDate: "July 27, 2021", newsLink: "https://doi.org/10.1038/d41586-021-01762-w"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Age-Related Differences in the Expression of Most Relevant Mediators of SARS-CoV-2 Infection in Human Respiratory and Gastrointestinal Tract", newsSource: "Frontiers", newsDate: "July 28, 2021", newsLink: "https://doi.org/10.3389/fped.2021.697390"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Cross-reactive antibodies against human coronaviruses and the animal coronavirome suggest diagnostics for future zoonotic spillovers", newsSource: "Science Magazine", newsDate: "July 29, 2021", newsLink: "https://doi.org/10.1126/sciimmunol.abe9950"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "The association of COVID-19 infection in pregnancy with preterm birth: A retrospective cohort study in California", newsSource: "Science Direct", newsDate: "July 30, 2021", newsLink: "https://www.sciencedirect.com/science/article/pii/S2667193X21000193"}),               
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(July2021NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "July , 2021", newsLink: ""}),
  document.querySelector('#article-main-jul2021')
  );
});
