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

class December2020NewsApp extends React.Component {
 render() {
      return e("div", null, 
e(NewsList, {newsType: "Non Media News", newsTitle: "Coronavirus vaccine development: from SARS and MERS to COVID-19", newsSource: "BMC", newsDate: "December 20, 2020", newsLink: "https://doi.org/10.1186/s12929-020-00695-2"}),
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(December2020NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "August , 2021", newsLink: ""}),
  document.querySelector('#article-main-december2020')
  );
});