'use strict';

class NewsList extends React.Component {
  render() {
    return e("div", {class: "article-container"},
    e("div", {class: "news-box news-box-a"},
    e("i", {class: "fas fa-exclamation-circle fa-2x"}, this.props.newsType),
    e("h3", null, this.props.newsTitle), 
    e("p", {class: "price"}, "Source: ", this.props.newsSource, ", Published on ", this.props.newsDate), 
    e("a", {target: "_blank", href: `${this.props.newsLink}`, class: "btn"}, "Link to Article")),  
    e("div", {class: "news-box news-box-b"}, 
    e("img", {src: "img/coronavirus-19-mobile.jpg",alt: "COVID-19 News Image"
    }))
    );
  }
}

class July2021NewsApp extends React.Component {
 render() {
      return e("div", null, 
e(NewsList, {newsType: "Non Media News", newsTitle: "Estimating the early impact of vaccination against COVID-19 on deaths among elderly people in Brazil: Analyses of routinely-collected data on vaccine coverage and mortality", newsSource: "Lancet", newsDate: "July 15, 2021", newsLink: "https://doi.org/10.1016/j.eclinm.2021.101036"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Development of safe and highly protective live-attenuated SARS-CoV-2 vaccine candidates by genome recoding", newsSource: "Cell", newsDate: "July 19, 2021", newsLink: "https://doi.org/10.1016/j.celrep.2021.109493"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Experimental investigation of indoor aerosol dispersion and accumulation in the context of COVID-19: Effects of masks and ventilation", newsSource: "Physics of Fluids", newsDate: "July 21, 2021", newsLink: "https://doi.org/10.1063/5.0057100"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "A single dose of replication-competent VSV-vectored vaccine expressing SARS-CoV-2 S1 protects against virus replication in a hamster model of severe COVID-19", newsSource: "Nature", newsDate: "July 21, 2021", newsLink: "https://doi.org/10.1038/s41541-021-00352-1"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Housing, sanitation and living conditions affecting SARS-CoV-2 prevention interventions in 54 African countries", newsSource: "Cambridge University Press", newsDate: "July 23, 2021", newsLink: "https://doi.org/10.1017/S0950268821001734"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Single-cell RNA sequencing reveals ex vivo signatures of SARS-CoV-2-reactive T cells through ‘reverse phenotyping’", newsSource: "Nature", newsDate: "July 26, 2021", newsLink: "https://doi.org/10.1038/s41467-021-24730-4"}), 
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
