'use strict';

const e = React.createElement;

/*class Hello extends React.Component {
  render() {
    return e("div", null,
    e("div", {class: "efd"}, "Hello ", this.props.toWhat),
    e("a", {href: `${this.props.email}`}, "email"), 
    e("a", {href: 'http://google.com'}, "Google"), 
    e("div", null, "Hello ", this.props.toName));
  }
}

ReactDOM.render( 
  e(Hello, {toWhat: "World", toName: "Ted", email: "http://youtube.com"}),
  document.querySelector('#article-main-june2021')
);


React.createElement(Link, {
  to: "/Path"
}, " Contact us ");

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

class NewsList extends React.Component {
  render() {
    return e("div", {class: "article-container"},
    e("div", {class: "news-box news-box-a"},
    e("i", {class: "fas fa-exclamation-circle fa-2x"}, this.props.newsType),
    e("h3", null, this.props.newsTitle), 
    e("p", {class: "price"}, "Source: ", this.props.newsSource, ", Published on ", this.props.newsDate), 
    e("a", {href: `${this.props.newsLink}`, class: "btn"}, "Link to Article")),  
    e("div", {class: "news-box news-box-b"}, 
    e("img", {src: "img/coronavirus-19-mobile.jpg",alt: "COVID-19 News Image"
    })));
  }
}

class NewsApp extends React.Component {
 render() {
    return e("div", null,
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "In-hospital use of statins is associated with a reduced risk of mortality in coronavirus-2019 (COVID-19): systematic review and meta-analysis"}, {newsSource: "Springer"}, {newsDate: "February 20, 2021"}, {newsLink: "https://doi.org/10.1007/s43440-021-00233-3"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Reverse-transcribed SARS-CoV-2 RNA can integrate into the genome of cultured human cells and can be expressed in patient-derived tissues"}, {newsSource: "PNAS"}, {newsDate: "May 25, 2021"}, {newsLink: "https://doi.org/10.1073/pnas.2105968118"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Count the cost of disability caused by COVID-19"}, {newsSource: "Nature"}, {newsDate: "May 26, 2021"}, {newsLink: "https://doi.org/10.1038/d41586-021-01392-2"}, {newlinkTitle: "Link to Article"}),    
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "CRISPR diagnostics"}, {newsSource: "Science Magazine"}, {newsDate: "May 28, 2021"}, {newsLink: "https://doi.org/10.1126/science.abi9335"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Six months of COVID vaccines: what 1.7 billion doses have taught scientists"}, {newsSource: "Nature"}, {newsDate: "June 4, 2021"}, {newsLink: "https://doi.org/10.1038/d41586-021-01505-x"}, {newlinkTitle: "Link to Article"}),    
         e(NewsList, {newsType: "Media News"}, {newsTitle: "The ‘two societies’: 97% of new COVID cases are among people who haven’t gotten the shots "}, {newsSource: "Seattle Times"}, {newsDate: "June 5, 2021"}, {newsLink: "https://www.seattletimes.com/seattle-news/health/the-two-societies-97-of-new-covid-cases-are-among-people-who-havent-gotten-the-shots/"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "How Virginia Improved Vaccination Rates Among Latinx Residents"}, {newsSource: "NPR"}, {newsDate: "June 6, 2021"}, {newsLink: "https://www.npr.org/2021/06/06/1003713835/how-virginia-improved-vaccination-rates-among-latinx-residents"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Ivermectin and outcomes from Covid-19 pneumonia: A systematic review and meta-analysis of randomized clinical trial studies"}, {newsSource: "Wiley Online Library"}, {newsDate: "June 6, 2021"}, {newsLink: "https://doi.org/10.1002/rmv.2265"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Anti-lockdown march in Montreal draws several thousand protesters"}, {newsSource: "Montreal Gazette"}, {newsDate: "June 6, 2021"}, {newsLink: "https://montrealgazette.com/news/local-news/anti-lockdown-march-in-montreal-draws-several-thousand-protesters"}, {newlinkTitle: "Link to Article"}),    
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Vaccination rates fall off, imperiling Biden’s July Fourth goal"}, {newsSource: "Washington Post"}, {newsDate: "June 6, 2021"}, {newsLink: "https://www.washingtonpost.com/health/2021/06/06/vaccination-rates-decline-us/"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Children are ‘vulnerable host’ for Covid as cases recede, US expert warns"}, {newsSource: "Guardian"}, {newsDate: "June 7, 2021"}, {newsLink: "https://www.theguardian.com/world/2021/jun/07/children-covid-vulnerable-host-cases-recede-us"}, {newlinkTitle: "Link to Article"}),    
         e(NewsList, {newsType: "Media News"}, {newsTitle: "India to provide free vaccines to all in major policy shift"}, {newsSource: "AP News"}, {newsDate: "June 7, 2021"}, {newsLink: "https://apnews.com/article/india-lifestyle-coronavirus-pandemic-business-health-914d95c368553f08f0d4d307d797a078"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Major Chinese city battles Delta Covid variant first detected in India with lockdowns, mass testing"}, {newsSource: "CNBC"}, {newsDate: "June 7,201"}, {newsLink: "https://www.cnbc.com/2021/06/07/china-guangzhou-delta-covid-variant.html"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Spat at, abused, attacked: healthcare staff face rising violence during Covid"}, {newsSource: "Guardian"}, {newsDate: "June 7,201"}, {newsLink: "https://www.theguardian.com/global-development/2021/jun/07/spat-at-abused-attacked-healthcare-staff-face-rising-violence-during-covid"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Dr. Gottlieb: Fully vaccinated people should feel safe this summer but fall booster may be needed"}, {newsSource: "CNBC"}, {newsDate: "June 7,201"}, {newsLink: "https://www.cnbc.com/2021/06/07/dr-scott-gottlieb-says-covid-booster-shot-may-still-be-needed-in-fall.html"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "A victim of its own success: how Taiwan failed to plan for a major Covid outbreak"}, {newsSource: "Guardian"}, {newsDate: "June 7, 2021"}, {newsLink: "https://www.theguardian.com/world/2021/jun/07/a-victim-of-its-own-success-how-taiwan-failed-to-plan-for-a-major-covid-outbreak"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Most COVID Rules End When 70% of NY Adults Have 1 Dose, Schools Keep Masks Indoors"}, {newsSource: "NBC New York"}, {newsDate: "June 7, 2021"}, {newsLink: "https://www.nbcnewyork.com/news/coronavirus/in-about-face-ny-delays-universal-end-to-school-face-mask-mandate/3093133/"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Scientists begin to unravel the mysteries of the coronavirus and brains"}, {newsSource: "Washington Post"}, {newsDate: "June 7, 2021"}, {newsLink: "https://www.washingtonpost.com/health/2021/06/07/covid-are-brains-affected/"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Gov. Greg Abbott signs bill to punish businesses that require proof of COVID-19 vaccination"}, {newsSource: "Texas Tribune"}, {newsDate: "June 7, 2021"}, {newsLink: "https://www.texastribune.org/2021/06/07/texas-vaccine-passports-covid-19/"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Spread of Misinformation About Face Masks and COVID-19 by Automated Software on Facebook"}, {newsSource: "Jama Network"}, {newsDate: "June 7,201"}, {newsLink: "http://jamanetwork.com/article.aspx?doi=10.1001/jamainternmed.2021.2498"}, {newlinkTitle: "Link to Study Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Nanobodies from camelid mice and llamas neutralize SARS-CoV-2 variants"}, {newsSource: "Nature"}, {newsDate: "June 7,201"}, {newsLink: "https://doi.org/10.1038/s41586-021-03676-z"}, {newlinkTitle: "Link to Study Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "SARS-CoV-2 RNAemia and proteomic trajectories inform prognostication in COVID-19 patients admitted to intensive care"}, {newsSource: "Nature"}, {newsDate: "June 7, 2021"}, {newsLink: "https://doi.org/10.1038/s41467-021-23494-1"}, {newlinkTitle: "Link to Study Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Increased platelet activation in SARS-CoV-2 infected non-hospitalised children and adults, and their household contacts"}, {newsSource: "Wiley Online Library"}, {newsDate: "June 7, 2021"}, {newsLink: "https://doi.org/10.1111/bjh.17629"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Calcifediol treatment and COVID-19-related outcomes"}, {newsSource: "Oxford Academics"}, {newsDate: "June 7, 2021"}, {newsLink: "https://doi.org/10.1210/clinem/dgab405"}, {newlinkTitle: "Link to Article"}),             
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "RECOVERY trial finds aspirin does not improve survival for patients hospitalised with COVID-19"}, {newsSource: "Recovery"}, {newsDate: "June 8, 2021"}, {newsLink: "https://www.recoverytrial.net/news/recovery-trial-finds-aspirin-does-not-improve-survival-for-patients-hospitalised-with-covid-19"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "EU regulator does not expect approval for CureVac vaccine before August"}, {newsSource: "Reuters"}, {newsDate: "June 8, 2021"}, {newsLink: "https://www.reuters.com/business/healthcare-pharmaceuticals/eu-regulator-does-not-expect-approval-curevac-vaccine-before-august-source-2021-06-08/"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "EU regulator to give verdict on Moderna COVID-19 shot for teens in July"}, {newsSource: "Euro News"}, {newsDate: "June 8, 2021"}, {newsLink: "https://www.euronews.com/2021/06/08/us-health-coronavirus-moderna-ema"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "'Breakthrough' COVID Infections May Be Common in Vaccinated Transplant Patients"}, {newsSource: "US News"}, {newsDate: "June 8, 2021"}, {newsLink: "https://www.usnews.com/news/health-news/articles/2021-06-08/breakthrough-covid-infections-may-be-common-in-vaccinated-transplant-patients"}, {newlinkTitle: "Link to Article"}),    
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Anti-Vaccine Film Targeted To Black Americans Spreads False Information"}, {newsSource: "NPR"}, {newsDate: "June 8, 2021"}, {newsLink: "https://www.npr.org/sections/health-shots/2021/06/08/1004214189/anti-vaccine-film-targeted-to-black-americans-spreads-false-information"}, {newlinkTitle: "Link to Article"})    
   ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(NewsApp), 
  e(Welcome, {name: "Person"}),
  document.querySelector('#article-main-june2021')
  );
});
