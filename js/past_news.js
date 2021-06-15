'use strict';

const e = React.createElement;

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

class MayNewsApp extends React.Component {
 render() {
      return e("div", null, 
         e(NewsList, {newsType: "Non Media News", newsTitle: "Discovery of Novel Coronaviruses in Rodents", newsSource: "US National Library of Medicine", newsDate: "May 11, 2020", newsLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7980831/"}),      
         e(NewsList, {newsType: "Non Media News", newsTitle: "SARS-CoV-2 simulations go exascale to predict dramatic spike opening and cryptic pockets across the proteome", newsSource: "Nature", newsDate: "May 24, 2021", newsLink: "https://doi.org/10.1038/s41557-021-00707-0"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Boredom proneness, political orientation and adherence to social-distancing in the pandemic", newsSource: "Springer", newsDate: "May 25, 2021", newsLink: "https://doi.org/10.1007/s11031-021-09888-0"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "The Covid-19 Lab Leak Theory Is a Tale of Weaponized Uncertainty", newsSource: "Wired", newsDate: "May 28, 2021", newsLink: "https://www.wired.com/story/covid-19-lab-leak-theory-weaponized-uncertainty/"})      
         ); 
 }
} 

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(MatNewsApp), 
  //e(Welcome, {name: "Person"}),
  document.querySelector('.article-container-May2021')
  );
});
