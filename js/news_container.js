'use strict';

const e = React.createElement;

class Hello extends React.Component {
  render() {
    return e("div", null, "Hello ", this.props.toWhat), 
      e("div", {id: "hhello", class: "dif3"}, "Hello");
  }
}

/*class NewsList extends React.Component {
  render() {
    return e("div", {class: "article-container"},
    e("div", {class: "news-box news-box-a"},
    e("i", {class: "fas fa-exclamation-circle fa-2x"}, this.props.newsType),
    e("h3", null, this.props.newsStory), 
    e("p", {class: "price"}, "Source: ", this.props.newsSource, ", Published on ", this.props.newsDate), 
    e("a", {href: "{this.props.newsLink}", class: "btn"}, this.props.newlinkTitle)),
    e("div", {class: "news-box news-box-b"},
    e("img", {src: "img/coronavirus-19-mobile.jpg",alt: "COVID-19 News Image"})));
  }
}

ReactDOM.render(
  e(Hello, {toWhat: "World"}),
  e(NewsList, {this.props.newsType:}, {this.props.newsStory:}, {this.props.newsSource:}, {this.props.newsDate:}, {this.props.newsLink:}, {this.props.newlinkTitle):},
  document.getElementById('article-main')
);

 https://reactjs.org/docs/react-without-jsx.html */
