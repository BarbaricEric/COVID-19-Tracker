'use strict';

const e = React.createElement;

class Hello extends React.Component {
  render() {
    return e("div", null,
    e("div", {class: "efd"}, "Hello ", this.props.toWhat),
    e("a", {href: `${this.props.email}`}, "email"), 
    e("a", {href: 'http://google.com'}, "Google"), 
    e("div", null, "Hello ", this.props.toName));
  }
}

ReactDOM.render( 
  e(Hello, {toWhat: "World", toName: "Ted", email: "http://www.youtube.com"}),
  e(Hello, {toWhat: "World", toName: "Kyle", email: "http://www.google.com"}),
  document.querySelector('#article-main-june2021')
);


/*React.createElement(Link, {
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

/*class NewsApp extends React.Component {
 render() {
    return e("div", null,
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "In-hospital use of statins is associated with a reduced risk of mortality in coronavirus-2019 (COVID-19): systematic review and meta-analysis"}, {newsSource: "Springer"}, {newsDate: "February 20, 2021"}, {newsLink: "https://doi.org/10.1007/s43440-021-00233-3"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Children with long covid"}, {newsSource: "US National Library of Medicine"}, {newsDate: "February 27, 2021"}, {newsLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7927578/"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Reverse-transcribed SARS-CoV-2 RNA can integrate into the genome of cultured human cells and can be expressed in patient-derived tissues"}, {newsSource: "PNAS"}, {newsDate: "May 25, 2021"}, {newsLink: "https://doi.org/10.1073/pnas.2105968118"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Count the cost of disability caused by COVID-19"}, {newsSource: "Nature"}, {newsDate: "May 26, 2021"}, {newsLink: "https://doi.org/10.1038/d41586-021-01392-2"}, {newlinkTitle: "Link to Article"}),    
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "CRISPR diagnostics"}, {newsSource: "Science Magazine"}, {newsDate: "May 28, 2021"}, {newsLink: "https://doi.org/10.1126/science.abi9335"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "SARS-CoV-2 proteins and anti-COVID-19 drugs induce lytic reactivation of an oncogenic virus"}, {newsSource: "Nature"}, {newsDate: "June 3, 2021"}, {newsLink: "https://doi.org/10.1038/s42003-021-02220-z"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Six months of COVID vaccines: what 1.7 billion doses have taught scientists"}, {newsSource: "Nature"}, {newsDate: "June 4, 2021"}, {newsLink: "https://doi.org/10.1038/d41586-021-01505-x"}, {newlinkTitle: "Link to Article"}),    
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Therapeutic versus prophylactic anticoagulation for patients admitted to hospital with COVID-19 and elevated D-dimer concentration (ACTION): an open-label, multicentre, randomised, controlled trial"}, {newsSource: "Lancet"}, {newsDate: "June 4, 2021"}, {newsLink: "https://doi.org/10.1016/S0140-6736(21)01203-4"}, {newlinkTitle: "Link to Article"}), 
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Open science saves lives: lessons from the COVID-19 pandemic"}, {newsSource: "BioMedCentral"}, {newsDate: "June 5, 2021"}, {newsLink: "https://doi.org/10.1186/s12874-021-01304-y"}, {newlinkTitle: "Link to Article"}), 
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
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Anti-Vaccine Film Targeted To Black Americans Spreads False Information"}, {newsSource: "NPR"}, {newsDate: "June 8, 2021"}, {newsLink: "https://www.npr.org/sections/health-shots/2021/06/08/1004214189/anti-vaccine-film-targeted-to-black-americans-spreads-false-information"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Fauci says U.S. must vaccinate more people before Delta becomes dominant Covid variant in America"}, {newsSource: "CNBC"}, {newsDate: "June 8, 2021"}, {newsLink: "https://www.cnbc.com/2021/06/08/fauci-says-us-must-vaccinate-more-people-before-delta-becomes-dominant-covid-variant-in-america.html"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Pfizer to test COVID-19 vaccine in larger group of children below 12"}, {newsSource: "Reuters"}, {newsDate: "June 8, 2021"}, {newsLink: "https://www.reuters.com/business/healthcare-pharmaceuticals/pfizer-start-large-study-test-covid-19-vaccine-children-below-12-2021-06-08/"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "US increasingly unlikely to meet Biden’s July 4 vax goal"}, {newsSource: "AP News"}, {newsDate: "June 8, 2021"}, {newsLink: "https://apnews.com/article/us-news-coronavirus-pandemic-health-government-and-politics-e8ca280afabb5040c21e13201cd82dda"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "The Highly Contagious Delta Variant Is On The Rise In The U.S."}, {newsSource: "NPR"}, {newsDate: "June 8, 2021"}, {newsLink: "https://www.npr.org/sections/coronavirus-live-updates/2021/06/08/1004597294/the-highly-contagious-delta-variant-of-covid-is-on-the-rise-in-the-u-s"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Definition and validation of serum biomarkers for optimal differentiation of hyperferritinaemic cytokine storm conditions in children: a retrospective cohort study"}, {newsSource: "Lancet"}, {newsDate: "June 8, 2021"}, {newsLink: "https://doi.org/10.1016/S2665-9913(21)00115-6"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Inflammatory biomarkers in COVID-19-associated multisystem inflammatory syndrome in children, Kawasaki disease, and macrophage activation syndrome: a cohort study"}, {newsSource: "Lancet"}, {newsDate: "June 8, 2021"}, {newsLink: "https://doi.org/10.1016/S2665-9913(21)00139-9"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Antibodies elicited by mRNA-1273 vaccination bind more broadly to the receptor binding domain than do those from SARS-CoV-2 infection"}, {newsSource: "Science Magazine"}, {newsDate: "June 8, 2021"}, {newsLink: "https://doi.org/10.1126/scitranslmed.abi9915"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Molecular evidence of SARS-CoV-2 in New York before the first pandemic wave"}, {newsSource: "Nature"}, {newsDate: "June 8, 2021"}, {newsLink: "https://doi.org/10.1038/s41467-021-23688-7"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "SARS-CoV-2 mRNA vaccination induces functionally diverse antibodies to NTD, RBD and S2"}, {newsSource: "Cell"}, {newsDate: "June 8, 2021"}, {newsLink: "https://doi.org/10.1016/j.cell.2021.06.005"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Expiratory aerosol particle escape from surgical masks due to imperfect sealing"}, {newsSource: "Nature"}, {newsDate: "June 8, 2021"}, {newsLink: "https://doi.org/10.1038/s41598-021-91487-7"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "How COVID-19 Can Lead to Diabetes"}, {newsSource: "NIH Director Blog"}, {newsDate: "June 8, 2021"}, {newsLink: "https://directorsblog.nih.gov/2021/06/08/how-covid-19-can-lead-to-diabetes/"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "For those who lost loved ones to covid, there is no return to normal"}, {newsSource: "Washington Post"}, {newsDate: "June 8, 2021"}, {newsLink: "https://www.washingtonpost.com/local/social-issues/covid-widows-reopening/2021/06/07/7a55f9e6-c3bc-11eb-8c18-fd53a628b992_story.html"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "China is vaccinating a staggering 20 million people a day"}, {newsSource: "Nature"}, {newsDate: "June 9, 2021"}, {newsLink: "https://doi.org/10.1038/d41586-021-01545-3"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "The four most urgent questions about long COVID"}, {newsSource: "Nature"}, {newsDate: "June 9, 2021"}, {newsLink: "https://doi.org/10.1038/d41586-021-01511-z"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Identification of novel bat coronaviruses sheds light on the evolutionary origins of SARS-CoV-2 and related viruses"}, {newsSource: "Cell"}, {newsDate: "June 9, 2021"}, {newsLink: "https://doi.org/10.1016/j.cell.2021.06.008"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Non Media News"}, {newsTitle: "Immunogenicity of Ad26.COV2.S vaccine against SARS-CoV-2 variants in humans"}, {newsSource: "Nature"}, {newsDate: "June 9, 2021"}, {newsLink: "https://doi.org/10.1038/s41586-021-03681-2"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "There's A Stark Red-Blue Divide When It Comes To States' Vaccination Rates"}, {newsSource: "NPR"}, {newsDate: "June 9, 2021"}, {newsLink: "https://www.npr.org/2021/06/09/1004430257/theres-a-stark-red-blue-divide-when-it-comes-to-states-vaccination-rates"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "In the U.S., hospitalizations are rising in areas with low vaccination rates."}, {newsSource: "NY Times"}, {newsDate: "June 9, 2021"}, {newsLink: "https://www.nytimes.com/2021/06/09/us/in-the-us-hospitalizations-are-rising-in-areas-with-low-vaccination-rates.html"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Washington state offers ‘joints for jabs’ to boost vaccination rates"}, {newsSource: "Guardian"}, {newsDate: "June 9, 2021"}, {newsLink: "https://www.theguardian.com/us-news/2021/jun/09/washington-state-joints-for-jabs-boost-vaccination-rates"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Mixing COVID-19 vaccines appears to boost immune responses"}, {newsSource: "Science Magazine"}, {newsDate: "June 9, 2021"}, {newsLink: "https://www.sciencemag.org/news/2021/06/mixing-covid-19-vaccines-appears-boost-immune-responses"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "Covid vaccine incentives: Australian doctors now allowed to offer cash, prizes and alternative medicines"}, {newsSource: "Guardian"}, {newsDate: "June 9, 2021"}, {newsLink: "https://www.theguardian.com/australia-news/2021/jun/09/covid-vaccine-incentives-australian-doctors-now-allowed-to-offer-cash-prizes-and-alternative-medicines"}, {newlinkTitle: "Link to Article"}),
         e(NewsList, {newsType: "Media News"}, {newsTitle: "No ‘Freedom Day’? UK could delay lifting of all Covid restrictions due to Delta variant"}, {newsSource: "CNBC"}, {newsDate: "June 9, 2021"}, {newsLink: "https://www.cnbc.com/2021/06/09/uk-could-delay-june-21-lifting-of-covid-measures-due-to-delta-variant.html"}, {newlinkTitle: "Link to Article"})
   ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(NewsApp), 
  //e(Welcome, {name: "Person"}),
  document.querySelector('#article-main-june2021')
  );
});*/
