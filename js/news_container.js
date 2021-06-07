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
    e("h3", null, this.props.newsTitle), 
    e("p", {class: "price"}, "Source: ", this.props.newsSource, ", Published on ", this.props.newsDate), 
    e("a", {href: "{this.props.newsLink}", class: "btn"}, this.props.newlinkTitle)),
    e("div", {class: "news-box news-box-b"},
    e("img", {src: "img/coronavirus-19-mobile.jpg",alt: "COVID-19 News Image"})));
  }
}

ReactDOM.render(
  e(NewsList, {newsType: "Media News"}, {newsTitle: "Moderna Announces Initiation of Rolling Submission of Biologics License Application (BLA) with U.S. FDA for the Moderna COVID-19 Vaccine"}, {newsSource: "Moderna"}, {newsDate: "June 1, 2021"}, {newsLink: "https://investors.modernatx.com/news-releases/news-release-details/moderna-announces-initiation-rolling-submission-biologics"}, {newlinkTitle: "Link to Article"}),
  e(NewsList, {newsType: "1"}, {newsTitle: "2"}, {newsSource: "3"}, {newsDate: "4"}, {newsLink: "https://investors.modernatx.com/news-releases/news-release-details/moderna-announces-initiation-rolling-submission-biologics"}, {newlinkTitle: "7"}),
  document.getElementById('article-main-june2021')
);

 https://reactjs.org/docs/react-without-jsx.html */

function Welcome(props) {
  return e("h1", null, "Hello, ", props.name);
}

class App extends React.Component {
 render() {
    return e("div", null, e(Welcome, {name: "Sara"}),
         e(Welcome, {name: "Cahal"}),
         e(Welcome, {name: "Edite"})); 
 }
}

function NewsList(props) {
    return e("div", {class: "article-container"},
    e("div", {class: "news-box news-box-a"},
    e("i", {class: "fas fa-exclamation-circle fa-2x"}, props.newsType),
    e("h3", null, props.newsTitle), 
    e("p", {class: "price"}, "Source: ", props.newsSource, ", Published on ", props.newsDate), 
    e("a", {href: "props.newsLink", class: "btn"}, props.newlinkTitle)),
    e("div", {class: "news-box news-box-b"},
    e("img", {src: "img/coronavirus-19-mobile.jpg",alt: "COVID-19 News Image"})));
}

class NewsApp extends React.Component {
 render() {
    return e("div", null, e(NewsList, {newsType: "Media News"}, {newsTitle: "How Virginia Improved Vaccination Rates Among Latinx Residents"}, {newsSource: "NPR"}, {newsDate: "June 6, 2021"}, {newsLink: "https://www.npr.org/2021/06/06/1003713835/how-virginia-improved-vaccination-rates-among-latinx-residents"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Anti-lockdown march in Montreal draws several thousand protesters"}, {newsSource: "Montreal Gazette"}, {newsDate: "June 6, 2021"}, {newsLink: "https://montrealgazette.com/news/local-news/anti-lockdown-march-in-montreal-draws-several-thousand-protesters"}, {newlinkTitle: "Link to Article"}),    
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Vaccination rates fall off, imperiling Biden’s July Fourth goal"}, {newsSource: "Washington Post"}, {newsDate: "June 6, 2021"}, {newsLink: "https://www.washingtonpost.com/health/2021/06/06/vaccination-rates-decline-us/"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "India to provide free vaccines to all in major policy shift"}, {newsSource: "AP News"}, {newsDate: "June 7, 2021"}, {newsLink: "https://apnews.com/article/india-lifestyle-coronavirus-pandemic-business-health-914d95c368553f08f0d4d307d797a078"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Major Chinese city battles Delta Covid variant first detected in India with lockdowns, mass testing"}, {newsSource: "CNBC"}, {newsDate: "June 7,201"}, {newsLink: "https://www.cnbc.com/2021/06/07/china-guangzhou-delta-covid-variant.html"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Spat at, abused, attacked: healthcare staff face rising violence during Covid"}, {newsSource: "Guardian"}, {newsDate: "June 7,201"}, {newsLink: "https://www.theguardian.com/global-development/2021/jun/07/spat-at-abused-attacked-healthcare-staff-face-rising-violence-during-covid"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Dr. Gottlieb: Fully vaccinated people should feel safe this summer but fall booster may be needed"}, {newsSource: "CNBC"}, {newsDate: "June 7,201"}, {newsLink: "https://www.cnbc.com/2021/06/07/dr-scott-gottlieb-says-covid-booster-shot-may-still-be-needed-in-fall.html"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "A victim of its own success: how Taiwan failed to plan for a major Covid outbreak"}, {newsSource: "Guardian"}, {newsDate: "June 7, 2021"}, {newsLink: "https://www.theguardian.com/world/2021/jun/07/a-victim-of-its-own-success-how-taiwan-failed-to-plan-for-a-major-covid-outbreak"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Nanobodies from camelid mice and llamas neutralize SARS-CoV-2 variants"}, {newsSource: "Nature"}, {newsDate: "June 7,201"}, {newsLink: "https://doi.org/10.1038/s41586-021-03676-z"}, {newlinkTitle: "Link to Study Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "SARS-CoV-2 RNAemia and proteomic trajectories inform prognostication in COVID-19 patients admitted to intensive care"}, {newsSource: "Nature"}, {newsDate: "June 7, 2021"}, {newsLink: "https://doi.org/10.1038/s41467-021-23494-1"}, {newlinkTitle: "Link to Study Article"})             
   ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(NewsApp), 
  //e(Hello, {toWhat: "Test"}),
  document.querySelector('#article-main-june2021')
  );
});
