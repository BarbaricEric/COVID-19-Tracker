'use strict';

class May2021NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Non Media News", newsTitle: "COVID-19 testing turns to T cells", newsSource: "Nature", newsDate: "May 12, 2021", newsLink: "https://doi.org/10.1038/s41587-021-00920-9"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Shared B cell memory to coronaviruses and other pathogens varies in human age groups and tissues", newsSource: "Science Magazine", newsDate: "May 14, 2021", newsLink: "https://doi.org/10.1126/science.abf6648"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Assessment of Feasibility of Face Covering in School-Aged Children With Autism Spectrum Disorders and Attention-Deficit/Hyperactivity Disorder", newsSource: "Jama Network", newsDate: "May 17, 2021", newsLink: "http://jamanetwork.com/article.aspx?doi=10.1001/jamanetworkopen.2021.10281"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Preexisting and Post–COVID-19 Immune Responses to SARS-CoV-2 in Patients with Cancer", newsSource: "American Association for Cancer Research", newsDate: "May 19, 2021", newsLink: "https://doi.org/10.1158/2159-8290.CD-21-0191"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Simulated Sunlight Rapidly Inactivates SARS-CoV-2 on Surfaces", newsSource: "Oxford Academic", newsDate: "May 20, 2021", newsLink: "https://doi.org/10.1093/infdis/jiaa274"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Mask Use and Ventilation Improvements to Reduce COVID-19 Incidence in Elementary Schools — Georgia, November 16–December 11, 2020", newsSource: "CDC", newsDate: "May 21, 2021", newsLink: "http://dx.doi.org/10.15585/mmwr.mm7021e1"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Carceral-community epidemiology, structural racism, and COVID-19 disparities", newsSource: "PNAS", newsDate: "May 25, 2021", newsLink: "https://doi.org/10.1073/pnas.2026577118"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Hemodynamic Profiles of Shock in Patients With COVID-19", newsSource: "American Journal of Cardiology", newsDate: "May 25, 2021", newsLink: "https://doi.org/10.1016/j.amjcard.2021.05.029"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Doing it for us: Community identification predicts willingness to receive a COVID-19 vaccination via perceived sense of duty to the community", newsSource: "Wiley Online Library", newsDate: "May 25, 2021", newsLink: "https://doi.org/10.1002/casp.2542"}),               
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(May2021NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "May , 2021", newsLink: ""}),
  document.querySelector('#article-main-may2021')
  );
});
