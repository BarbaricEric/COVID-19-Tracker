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

class May2021NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Non Media News", newsTitle: "Shared B cell memory to coronaviruses and other pathogens varies in human age groups and tissues", newsSource: "Science Magazine", newsDate: "May 14, 2021", newsLink: "https://doi.org/10.1126/science.abf6648"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Hemodynamic Profiles of Shock in Patients With COVID-19", newsSource: "American Journal of Cardiology", newsDate: "May 25, 2021", newsLink: "https://doi.org/10.1016/j.amjcard.2021.05.029"}),              
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
