'use strict';

const e = React.createElement;

class Hello extends React.Component {
  render() {
    return e("div", null, "Hello ", this.props.toWhat), 
      e("div", {id: "hhello", class: "dif3"}, "Hello");
  }
}

class NewsList extends React.Component {
  render() {
    return e("div", {class: "article-container"},
    e("div", {class: "news-box news-box-a"},
    e("i", {class: "fas fa-exclamation-circle fa-2x"}, this.props.newsType),
    e("h3", null, this.props.newsTitle), 
    e("p", {class: "price"}, "Source: ", this.props.newsSource, ", Published on ", this.props.newsDate), 
    e("a", {href: "{this.props.newsLink}", class: "btn"}, this.props.newlinkTitle)),
    e("div", {class: "news-box news-box-b"},
    e("img", {src: "img/coronavirus-19-mobile.jpg",alt: "COVID-19 News Image"})));
  }
}

ReactDOM.render(
  e(NewsList, {this.props.newsType:"Media News"}, {this.props.newsTitle:"Moderna Announces Initiation of Rolling Submission of Biologics License Application (BLA) with U.S. FDA for the Moderna COVID-19 Vaccine"}, {this.props.newsSource:"Moderna"}, {this.props.newsDate:"June 1, 2021"}, {this.props.newsLink:"https://investors.modernatx.com/news-releases/news-release-details/moderna-announces-initiation-rolling-submission-biologics"}, {this.props.newlinkTitle):"Link to Article"},
  e(NewsList, {this.props.newsType:"1"}, {this.props.newsTitle:"2"}, {this.props.newsSource:"3"}, {this.props.newsDate:"4"}, {this.props.newsLink:"https://investors.modernatx.com/news-releases/news-release-details/moderna-announces-initiation-rolling-submission-biologics"}, {this.props.newlinkTitle):"7"},
  document.getElementById('article-main-june2021')
);

/* https://reactjs.org/docs/react-without-jsx.html */
