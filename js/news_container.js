'use strict';

const e = React.createElement;

class Hello extends React.Component {
  render() {
    return e("div", null,
    e("div", {class: "efd"}, "Hello ", this.props.toWhat),
    e("a", {target: "_blank", href: `${this.props.email}`}, "email"), 
    e("a", {href: 'http://google.com'}, "Google"), 
    e("div", null, "Hello ", this.props.toName));
  }
}

class HelloList extends React.Component {
  render() {
    return e("div", null,
    e(Hello, {toWhat: "World", toName: "Ted", email: "http://www.youtube.com"}),
    e(Hello, {toWhat: "The", toName: "Ktle", email: "http://www.github.com"})
    )
  }
}

/*ReactDOM.render( 
  //e(Hello, {toWhat: "World", toName: "Ted", email: "http://www.youtube.com"}),
  e(HelloList),            
  document.querySelector('#article-main-june2021')
);


React.createElement(Link, {
  to: "/Path"
}, " Contact us ");

https://www.frontiersin.org/articles/10.3389/fimmu.2021.700782/abstract

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
    e("a", {target: "_blank", href: `${this.props.newsLink}`, class: "btn"}, "Link to Article")),  
    e("div", {class: "news-box news-box-b"}, 
    e("img", {src: "img/coronavirus-19-mobile.jpg",alt: "COVID-19 News Image"
    }))
    );
  }
}

class MarchNewsApp extends React.Component {
 render() {
      return e("div", null, 
         e(NewsList, {newsType: "Non Media News", newsTitle: "Factors associated with myocardial SARS-CoV-2 infection, myocarditis, and cardiac inflammation in patients with COVID-19", newsSource: "Nature", newsDate: "March 17, 2021", newsLink: "https://doi.org/10.1038/s41379-021-00790-1"})      
         ); 
 }
}  

class MayNewsApp extends React.Component {
 render() {
      return e("div", null, 
         e(NewsList, {newsType: "Non Media News", newsTitle: "SARS-CoV-2 simulations go exascale to predict dramatic spike opening and cryptic pockets across the proteome", newsSource: "Nature", newsDate: "May 24, 2021", newsLink: "https://doi.org/10.1038/s41557-021-00707-0"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Boredom proneness, political orientation and adherence to social-distancing in the pandemic", newsSource: "Springer", newsDate: "May 25, 2021", newsLink: "https://doi.org/10.1007/s11031-021-09888-0"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "The Covid-19 Lab Leak Theory Is a Tale of Weaponized Uncertainty", newsSource: "Wired", newsDate: "May 28, 2021", newsLink: "https://www.wired.com/story/covid-19-lab-leak-theory-weaponized-uncertainty/"})      
         ); 
 }
}  


class NewsApp extends React.Component {
 render() {
    return e("div", null,
         e(NewsList, {newsType: "Non Media News", newsTitle: "In-hospital use of statins is associated with a reduced risk of mortality in coronavirus-2019 (COVID-19): systematic review and meta-analysis", newsSource: "Springer", newsDate: "February 20, 2021", newsLink: "https://doi.org/10.1007/s43440-021-00233-3"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Children with long covid"}, {newsSource: "US National Library of Medicine", newsDate: "February 27, 2021", newsLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7927578/"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Reverse-transcribed SARS-CoV-2 RNA can integrate into the genome of cultured human cells and can be expressed in patient-derived tissues", newsSource: "PNAS", newsDate: "May 25, 2021", newsLink: "https://doi.org/10.1073/pnas.2105968118"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Count the cost of disability caused by COVID-19", newsSource: "Nature", newsDate: "May 26, 2021", newsLink: "https://doi.org/10.1038/d41586-021-01392-2"}),    
         e(NewsList, {newsType: "Non Media News", newsTitle: "CRISPR diagnostics", newsSource: "Science Magazine", newsDate: "May 28, 2021", newsLink: "https://doi.org/10.1126/science.abi9335"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "SARS-CoV-2 proteins and anti-COVID-19 drugs induce lytic reactivation of an oncogenic virus", newsSource: "Nature", newsDate: "June 3, 2021", newsLink: "https://doi.org/10.1038/s42003-021-02220-z"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Six months of COVID vaccines: what 1.7 billion doses have taught scientists", newsSource: "Nature", newsDate: "June 4, 2021", newsLink: "https://doi.org/10.1038/d41586-021-01505-x"}),    
         e(NewsList, {newsType: "Non Media News", newsTitle: "Therapeutic versus prophylactic anticoagulation for patients admitted to hospital with COVID-19 and elevated D-dimer concentration (ACTION): an open-label, multicentre, randomised, controlled trial", newsSource: "Lancet", newsDate: "June 4, 2021", newsLink: "https://doi.org/10.1016/S0140-6736(21)01203-4"}), 
         e(NewsList, {newsType: "Non Media News", newsTitle: "Open science saves lives: lessons from the COVID-19 pandemic", newsSource: "BioMedCentral", newsDate: "June 5, 2021", newsLink: "https://doi.org/10.1186/s12874-021-01304-y"}), 
         e(NewsList, {newsType: "Media News", newsTitle: "The ‘two societies’: 97% of new COVID cases are among people who haven’t gotten the shots ", newsSource: "Seattle Times", newsDate: "June 5, 2021", newsLink: "https://www.seattletimes.com/seattle-news/health/the-two-societies-97-of-new-covid-cases-are-among-people-who-havent-gotten-the-shots/"}),
         e(NewsList, {newsType: "Media News", newsTitle: "How Virginia Improved Vaccination Rates Among Latinx Residents", newsSource: "NPR", newsDate: "June 6, 2021", newsLink: "https://www.npr.org/2021/06/06/1003713835/how-virginia-improved-vaccination-rates-among-latinx-residents"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Ivermectin and outcomes from Covid-19 pneumonia: A systematic review and meta-analysis of randomized clinical trial studies", newsSource: "Wiley Online Library", newsDate: "June 6, 2021", newsLink: "https://doi.org/10.1002/rmv.2265"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Anti-lockdown march in Montreal draws several thousand protesters", newsSource: "Montreal Gazette"}, {newsDate: "June 6, 2021", newsLink: "https://montrealgazette.com/news/local-news/anti-lockdown-march-in-montreal-draws-several-thousand-protesters"}),    
         e(NewsList, {newsType: "Media News", newsTitle: "Vaccination rates fall off, imperiling Biden’s July Fourth goal", newsSource: "Washington Post", newsDate: "June 6, 2021", newsLink: "https://www.washingtonpost.com/health/2021/06/06/vaccination-rates-decline-us/"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Children are ‘vulnerable host’ for Covid as cases recede, US expert warns", newsSource: "Guardian", newsDate: "June 7, 2021", newsLink: "https://www.theguardian.com/world/2021/jun/07/children-covid-vulnerable-host-cases-recede-us"}),    
         e(NewsList, {newsType: "Media News", newsTitle: "India to provide free vaccines to all in major policy shift", newsSource: "AP News", newsDate: "June 7, 2021", newsLink: "https://apnews.com/article/india-lifestyle-coronavirus-pandemic-business-health-914d95c368553f08f0d4d307d797a078"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Major Chinese city battles Delta Covid variant first detected in India with lockdowns, mass testing", newsSource: "CNBC", newsDate: "June 7,201", newsLink: "https://www.cnbc.com/2021/06/07/china-guangzhou-delta-covid-variant.html"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Spat at, abused, attacked: healthcare staff face rising violence during Covid", newsSource: "Guardian", newsDate: "June 7,201", newsLink: "https://www.theguardian.com/global-development/2021/jun/07/spat-at-abused-attacked-healthcare-staff-face-rising-violence-during-covid"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Dr. Gottlieb: Fully vaccinated people should feel safe this summer but fall booster may be needed", newsSource: "CNBC", newsDate: "June 7,201", newsLink: "https://www.cnbc.com/2021/06/07/dr-scott-gottlieb-says-covid-booster-shot-may-still-be-needed-in-fall.html"}),
         e(NewsList, {newsType: "Media News", newsTitle: "A victim of its own success: how Taiwan failed to plan for a major Covid outbreak", newsSource: "Guardian", newsDate: "June 7, 2021", newsLink: "https://www.theguardian.com/world/2021/jun/07/a-victim-of-its-own-success-how-taiwan-failed-to-plan-for-a-major-covid-outbreak"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Most COVID Rules End When 70% of NY Adults Have 1 Dose, Schools Keep Masks Indoors", newsSource: "NBC New York", newsDate: "June 7, 2021", newsLink: "https://www.nbcnewyork.com/news/coronavirus/in-about-face-ny-delays-universal-end-to-school-face-mask-mandate/3093133/"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Scientists begin to unravel the mysteries of the coronavirus and brains", newsSource: "Washington Post", newsDate: "June 7, 2021", newsLink: "https://www.washingtonpost.com/health/2021/06/07/covid-are-brains-affected/"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Gov. Greg Abbott signs bill to punish businesses that require proof of COVID-19 vaccination", newsSource: "Texas Tribune", newsDate: "June 7, 2021", newsLink: "https://www.texastribune.org/2021/06/07/texas-vaccine-passports-covid-19/"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Spread of Misinformation About Face Masks and COVID-19 by Automated Software on Facebook", newsSource: "Jama Network", newsDate: "June 7,201", newsLink: "http://jamanetwork.com/article.aspx?doi=10.1001/jamainternmed.2021.2498"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Nanobodies from camelid mice and llamas neutralize SARS-CoV-2 variants", newsSource: "Nature", newsDate: "June 7,201", newsLink: "https://doi.org/10.1038/s41586-021-03676-z"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "SARS-CoV-2 RNAemia and proteomic trajectories inform prognostication in COVID-19 patients admitted to intensive care", newsSource: "Nature", newsDate: "June 7, 2021", newsLink: "https://doi.org/10.1038/s41467-021-23494-1"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Increased platelet activation in SARS-CoV-2 infected non-hospitalised children and adults, and their household contacts", newsSource: "Wiley Online Library", newsDate: "June 7, 2021", newsLink: "https://doi.org/10.1111/bjh.17629"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Calcifediol treatment and COVID-19-related outcomes", newsSource: "Oxford Academics", newsDate: "June 7, 2021", newsLink: "https://doi.org/10.1210/clinem/dgab405"}),             
         e(NewsList, {newsType: "Media News", newsTitle: "Gangrene, Hearing Loss Show Delta Variant May Be More Severe", newsSource: "Bloomberg", newsDate: "June 7, 2021", newsLink: "https://www.bloomberg.com/news/articles/2021-06-07/gangrene-hearing-loss-point-to-delta-variant-being-more-severe"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "RECOVERY trial finds aspirin does not improve survival for patients hospitalised with COVID-19", newsSource: "Recovery", newsDate: "June 8, 2021", newsLink: "https://www.recoverytrial.net/news/recovery-trial-finds-aspirin-does-not-improve-survival-for-patients-hospitalised-with-covid-19"}),
         e(NewsList, {newsType: "Media News", newsTitle: "EU regulator does not expect approval for CureVac vaccine before August", newsSource: "Reuters", newsDate: "June 8, 2021", newsLink: "https://www.reuters.com/business/healthcare-pharmaceuticals/eu-regulator-does-not-expect-approval-curevac-vaccine-before-august-source-2021-06-08/"}),
         e(NewsList, {newsType: "Media News", newsTitle: "EU regulator to give verdict on Moderna COVID-19 shot for teens in July", newsSource: "Euro News", newsDate: "June 8, 2021", newsLink: "https://www.euronews.com/2021/06/08/us-health-coronavirus-moderna-ema"}),
         e(NewsList, {newsType: "Media News", newsTitle: "'Breakthrough' COVID Infections May Be Common in Vaccinated Transplant Patients", newsSource: "US News", newsDate: "June 8, 2021", newsLink: "https://www.usnews.com/news/health-news/articles/2021-06-08/breakthrough-covid-infections-may-be-common-in-vaccinated-transplant-patients"}),    
         e(NewsList, {newsType: "Media News", newsTitle: "Anti-Vaccine Film Targeted To Black Americans Spreads False Information", newsSource: "NPR", newsDate: "June 8, 2021", newsLink: "https://www.npr.org/sections/health-shots/2021/06/08/1004214189/anti-vaccine-film-targeted-to-black-americans-spreads-false-information"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Fauci says U.S. must vaccinate more people before Delta becomes dominant Covid variant in America", newsSource: "CNBC", newsDate: "June 8, 2021", newsLink: "https://www.cnbc.com/2021/06/08/fauci-says-us-must-vaccinate-more-people-before-delta-becomes-dominant-covid-variant-in-america.html"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Pfizer to test COVID-19 vaccine in larger group of children below 12", newsSource: "Reuters", newsDate: "June 8, 2021", newsLink: "https://www.reuters.com/business/healthcare-pharmaceuticals/pfizer-start-large-study-test-covid-19-vaccine-children-below-12-2021-06-08/"}),
         e(NewsList, {newsType: "Media News", newsTitle: "US increasingly unlikely to meet Biden’s July 4 vax goal", newsSource: "AP News", newsDate: "June 8, 2021", newsLink: "https://apnews.com/article/us-news-coronavirus-pandemic-health-government-and-politics-e8ca280afabb5040c21e13201cd82dda"}),
         e(NewsList, {newsType: "Media News", newsTitle: "The Highly Contagious Delta Variant Is On The Rise In The U.S.", newsSource: "NPR", newsDate: "June 8, 2021", newsLink: "https://www.npr.org/sections/coronavirus-live-updates/2021/06/08/1004597294/the-highly-contagious-delta-variant-of-covid-is-on-the-rise-in-the-u-s"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Definition and validation of serum biomarkers for optimal differentiation of hyperferritinaemic cytokine storm conditions in children: a retrospective cohort study", newsSource: "Lancet", newsDate: "June 8, 2021", newsLink: "https://doi.org/10.1016/S2665-9913(21)00115-6"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Inflammatory biomarkers in COVID-19-associated multisystem inflammatory syndrome in children, Kawasaki disease, and macrophage activation syndrome: a cohort study", newsSource: "Lancet", newsDate: "June 8, 2021", newsLink: "https://doi.org/10.1016/S2665-9913(21)00139-9"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Antibodies elicited by mRNA-1273 vaccination bind more broadly to the receptor binding domain than do those from SARS-CoV-2 infection", newsSource: "Science Magazine", newsDate: "June 8, 2021", newsLink: "https://doi.org/10.1126/scitranslmed.abi9915"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Molecular evidence of SARS-CoV-2 in New York before the first pandemic wave", newsSource: "Nature", newsDate: "June 8, 2021", newsLink: "https://doi.org/10.1038/s41467-021-23688-7"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "The COVID lab-leak hypothesis: what scientists do and don’t know", newsSource: "Nature", newsDate: "June 8, 2021", newsLink: "https://doi.org/10.1038/d41586-021-01529-3"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "SARS-CoV-2 mRNA vaccination induces functionally diverse antibodies to NTD, RBD and S2", newsSource: "Cell", newsDate: "June 8, 2021", newsLink: "https://doi.org/10.1016/j.cell.2021.06.005"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Expiratory aerosol particle escape from surgical masks due to imperfect sealing", newsSource: "Nature", newsDate: "June 8, 2021", newsLink: "https://doi.org/10.1038/s41598-021-91487-7"}),
         e(NewsList, {newsType: "Media News", newsTitle: "How COVID-19 Can Lead to Diabetes"}, {newsSource: "NIH Director Blog", newsDate: "June 8, 2021", newsLink: "https://directorsblog.nih.gov/2021/06/08/how-covid-19-can-lead-to-diabetes/"}),
         e(NewsList, {newsType: "Media News", newsTitle: "For those who lost loved ones to covid, there is no return to normal", newsSource: "Washington Post", newsDate: "June 8, 2021", newsLink: "https://www.washingtonpost.com/local/social-issues/covid-widows-reopening/2021/06/07/7a55f9e6-c3bc-11eb-8c18-fd53a628b992_story.html"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "China is vaccinating a staggering 20 million people a day", newsSource: "Nature", newsDate: "June 9, 2021", newsLink: "https://doi.org/10.1038/d41586-021-01545-3"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Network medicine links SARS-CoV-2/COVID-19 infection to brain microvascular injury and neuroinflammation in dementia-like cognitive impairment", newsSource: "BioMedCentral", newsDate: "June 9, 2021", newsLink: "https://doi.org/10.1186/s13195-021-00850-3"}),    
         e(NewsList, {newsType: "Non Media News", newsTitle: "The four most urgent questions about long COVID", newsSource: "Nature", newsDate: "June 9, 2021", newsLink: "https://doi.org/10.1038/d41586-021-01511-z"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Deep spatial profiling of human COVID-19 brains reveals neuroinflammation with distinct microanatomical microglia-T cell interactions", newsSource: "Cell", newsDate: "June 9, 2021", newsLink: "https://doi.org/10.1016/j.immuni.2021.06.002"}),  
         e(NewsList, {newsType: "Non Media News", newsTitle: "Identification of novel bat coronaviruses sheds light on the evolutionary origins of SARS-CoV-2 and related viruses", newsSource: "Cell", newsDate: "June 9, 2021", newsLink: "https://doi.org/10.1016/j.cell.2021.06.008"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Immunogenicity of Ad26.COV2.S vaccine against SARS-CoV-2 variants in humans", newsSource: "Nature", newsDate: "June 9, 2021", newsLink: "https://doi.org/10.1038/s41586-021-03681-2"}),
         e(NewsList, {newsType: "Media News", newsTitle: "There's A Stark Red-Blue Divide When It Comes To States' Vaccination Rates", newsSource: "NPR", newsDate: "June 9, 2021", newsLink: "https://www.npr.org/2021/06/09/1004430257/theres-a-stark-red-blue-divide-when-it-comes-to-states-vaccination-rates"}),
         e(NewsList, {newsType: "Media News", newsTitle: "In the U.S., hospitalizations are rising in areas with low vaccination rates.", newsSource: "NY Times", newsDate: "June 9, 2021", newsLink: "https://www.nytimes.com/2021/06/09/us/in-the-us-hospitalizations-are-rising-in-areas-with-low-vaccination-rates.html"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Washington state offers ‘joints for jabs’ to boost vaccination rates", newsSource: "Guardian", newsDate: "June 9, 2021", newsLink: "https://www.theguardian.com/us-news/2021/jun/09/washington-state-joints-for-jabs-boost-vaccination-rates"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Mixing COVID-19 vaccines appears to boost immune responses", newsSource: "Science Magazine", newsDate: "June 9, 2021", newsLink: "https://www.sciencemag.org/news/2021/06/mixing-covid-19-vaccines-appears-boost-immune-responses"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Covid vaccine incentives: Australian doctors now allowed to offer cash, prizes and alternative medicines", newsSource: "Guardian", newsDate: "June 9, 2021"}, {newsLink: "https://www.theguardian.com/australia-news/2021/jun/09/covid-vaccine-incentives-australian-doctors-now-allowed-to-offer-cash-prizes-and-alternative-medicines"}),
         e(NewsList, {newsType: "Media News", newsTitle: "No ‘Freedom Day’? UK could delay lifting of all Covid restrictions due to Delta variant", newsSource: "CNBC", newsDate: "June 9, 2021", newsLink: "https://www.cnbc.com/2021/06/09/uk-could-delay-june-21-lifting-of-covid-measures-due-to-delta-variant.html"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Despite Ample Shots and Incentives, Vaccine Rates Lag Far Behind in the South", newsSource: "NY Times", newsDate: "June 9, 2021", newsLink: "https://www.nytimes.com/2021/06/09/us/virus-vaccine-south.html"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Covid could become seasonal epidemic by winter, says German expert", newsSource: "Guardian", newsDate: "June 9, 2021", newsLink: "https://www.theguardian.com/world/2021/jun/09/covid-could-become-seasonal-epidemic-by-winter-says-german-expert"}),    
         e(NewsList, {newsType: "Media News", newsTitle: "Passengers on Mediterranean cruise test positive for covid-19", newsSource: "Washington Post", newsDate: "June 9, 2021", newsLink: "https://www.washingtonpost.com/travel/2021/06/09/msc-cruise-covid-passenger-italy/"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Regulators back down from new California workplace mask rules", newsSource: "Mercury News", newsDate: "June 9, 2021", newsLink: "https://www.mercurynews.com/2021/06/09/regulators-back-down-from-new-california-workplace-mask-rules/"}),   
         e(NewsList, {newsType: "Media News", newsTitle: "CDC finds deaths from heart disease and diabetes climbed amid Covid in U.S.", newsSource: "NBC News", newsDate: "June 9, 2021", newsLink: "https://www.nbcnews.com/health/health-news/cdc-finds-deaths-heart-disease-diabetes-climbed-amid-covid-u-n1270260"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Ohio nurse hilariously fails to prove COVID vaccine makes people magnetic, key falls from her neck", newsSource: "NY Daily News", newsDate: "June 9, 2021", newsLink: "https://www.nydailynews.com/news/national/ny-ohio-nurse-covid-vaccine-magnetic-20210610-mumke7o5sncg3lngicytageczu-story.html"}),
         e(NewsList, {newsType: "Media News", newsTitle: "New Evidence Suggests COVID-19 Vaccines Remain Effective Against Variants", newsSource: "NPR", newsDate: "June 9, 2021", newsLink: "https://www.npr.org/sections/health-shots/2021/06/09/1004738276/new-evidence-suggests-covid-19-vaccines-remain-effective-against-variants"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Social, economic, and environmental factors influencing the basic reproduction number of COVID-19 across countries", newsSource: "PLOS", newsDate: "June 9, 2021", newsLink: "https://doi.org/10.1371/journal.pone.0252373"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Covid distancing may have weakened children’s immune system, experts say", newsSource: "Guardian", newsDate: "June 9, 2021", newsLink: "https://www.theguardian.com/society/2021/jun/09/covid-distancing-may-have-weakened-childrens-immune-system-experts-say"}),
         e(NewsList, {newsType: "Media News", newsTitle: "The Olympics Are Really Happening. For Athletes, That Means A Huge Number Of Rules", newsSource: "NPR", newsDate: "June 9, 2021", newsLink: "https://www.npr.org/2021/06/09/1004765190/the-olympics-are-really-happening-for-athletes-that-means-a-huge-number-of-rules"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Biden administration tells federal agencies they should not require employees to be vaccinated to work on-site", newsSource: "Washington Post", newsDate: "June 9, 2021", newsLink: "https://www.washingtonpost.com/politics/biden-administraton-federal-workers-vaccines/2021/06/09/19dea94c-c947-11eb-afd0-9726f7ec0ba6_story.html"}),    
         e(NewsList, {newsType: "Media News", newsTitle: "Biden administration to buy 500 million Pfizer coronavirus vaccine doses to donate to the world", newsSource: "Washington Post", newsDate: "June 9, 2021", newsLink: "https://www.washingtonpost.com/politics/biden-vaccine-donate/2021/06/09/c2744674-c934-11eb-93fa-9053a95eb9f2_story.html"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Danes ditch masks, allow more Euro 2020 fans in lockdown deal", newsSource: "Euro News", newsDate: "June 10, 2021", newsLink: "https://www.euronews.com/2021/06/10/us-health-coronavirus-denmark"}),
         e(NewsList, {newsType: "Media News", newsTitle: "G7 leaders will call for fresh WHO inquiry into Covid origins, leaked communique suggests", newsSource: "Guardian", newsDate: "June 10, 2021", newsLink: "https://www.theguardian.com/world/2021/jun/10/g7-communique-leak-covid-origins-inquiry-vaccines-forced-labour"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Celebrations (and questions) greet US vaccine donation plan", newsSource: "AP News", newsDate: "June 10, 2021", newsLink: "https://apnews.com/article/joe-biden-asia-g-7-summit-coronavirus-pandemic-business-8ce6cca4689cce38a81e2cc8a790edb6"}),
         e(NewsList, {newsType: "Media News", newsTitle: "German panel gives limited approval for COVID-19 shot for adolescents", newsSource: "Reuters", newsDate: "June 10, 2021", newsLink: "https://www.reuters.com/article/health-coronavirus-germany-biontech/german-panel-gives-limited-approval-for-covid-19-shot-for-adolescents-idUSL5N2NK1OI"}),
         e(NewsList, {newsType: "Media News", newsTitle: "CDC says heart inflammation was higher than expected in 16- to 24-year-olds after second Covid vaccine shot, but still rare", newsSource: "CNBC", newsDate: "June 10, 2021", newsLink: "https://www.cnbc.com/2021/06/10/covid-vaccine-cdc-says-heart-inflammation-cases-in-16-to-24-year-olds-higher-than-expected-after-second-shot.html"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Moderna Files for Emergency Use Authorization for its COVID-19 Vaccine in Adolescents in the United States", newsSource: "Moderna", newsDate: "June 10, 2021", newsLink: "https://investors.modernatx.com/news-releases/news-release-details/moderna-files-emergency-use-authorization-its-covid-19-vaccine"}),  
         e(NewsList, {newsType: "Non Media News", newsTitle: "BNT162b2-elicited neutralization of B.1.617 and other SARS-CoV-2 variants", newsSource: "Nature", newsDate: "June 10, 2021", newsLink: "https://doi.org/10.1038/s41586-021-03693-y"}), 
         e(NewsList, {newsType: "Media News", newsTitle: "Drop in childhood vaccinations during pandemic may raise risk of other outbreaks when schools reopen, CDC says", newsSource: "Washington Post", newsDate: "June 10, 2021", newsLink: "https://www.washingtonpost.com/health/2021/06/10/childhood-vaccination-falloff-increased-risk-disease-outbreaks/"}), 
         e(NewsList, {newsType: "Non Media News", newsTitle: "Incidence of Multisystem Inflammatory Syndrome in Children Among US Persons Infected With SARS-CoV-2", newsSource: "Jama Network", newsDate: "June 10, 2021", newsLink: "http://jamanetwork.com/article.aspx?doi=10.1001/jamanetworkopen.2021.16420"}), 
         e(NewsList, {newsType: "Media News", newsTitle: "FDA advisers debate standards on a coronavirus vaccine for young children", newsSource: "Washington Post", newsDate: "June 10, 2021", newsLink: "https://www.washingtonpost.com/health/2021/06/10/covid-vaccines-for-children/"}),
         e(NewsList, {newsType: "Media News", newsTitle: "As more kids go down the ‘deep, dark tunnel’ of long Covid, doctors still can’t predict who is at risk", newsSource: "Stat News", newsDate: "June 10, 2021", newsLink: "https://www.statnews.com/2021/06/10/as-more-kids-get-long-covid-doctors-still-cant-predict-who-is-at-risk/"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Tinnitus, hearing loss not uncommon in COVID-19 patients", newsSource: "UPI", newsDate: "June 10, 2021", newsLink: "https://www.upi.com/Health_News/2021/06/10/coronavirus-hearing-loss-research/7501623345172/"}),
         e(NewsList, {newsType: "Media News", newsTitle: "FDA accuses company of distributing unapproved Covid test and using falsified data", newsSource: "Stat News", newsDate: "June 10, 2021", newsLink: "https://www.statnews.com/2021/06/10/fda-accuses-company-of-distributing-unapproved-covid-test-using-falsified-data/"}),
         e(NewsList, {newsType: "Media News", newsTitle: "The COVID-19 virus can cause diabetes, new studies find", newsSource: "ABC News", newsDate: "June 10, 2021", newsLink: "https://abcnews.go.com/Health/covid-19-virus-diabetes-studies-find/story?id=78168634"}),
         e(NewsList, {newsType: "Media News", newsTitle: "US extends expiration dates for J&J COVID vaccine by 6 weeks", newsSource: "AP News", newsDate: "June 10, 2021", newsLink: "https://apnews.com/article/joe-biden-coronavirus-vaccine-science-coronavirus-pandemic-business-6d04574617b35c56e7ca2c711cc5585f"}),
         e(NewsList, {newsType: "Media News", newsTitle: "EU foregoes 100 million J&J vaccines, considers donating other doses", newsSource: "Reuters", newsDate: "June 10, 2021", newsLink: "https://www.reuters.com/world/europe/eu-foregoes-100-million-jj-vaccines-considers-donating-other-doses-sources-2021-06-10/"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "US Department of Labor's OSHA issues emergency temporary standard to protect health care workers from the coronavirus", newsSource: "U.S. Department of Labor", newsDate: "June 10, 2021", newsLink: "https://www.osha.gov/news/newsreleases/national/06102021"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Bitcoin conference attendees report testing positive for Covid after returning from Miami", newsSource: "CNBC", newsDate: "June 10, 2021", newsLink: "https://www.cnbc.com/2021/06/10/bitcoin-2021-attendees-report-covid-cases-after-returning-from-miami.html"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Anatomy of Japan’s joyless Olympics: A hyper-cautious bureaucracy and slow vaccine rollout", newsSource: "Washington Post", newsDate: "June 10, 2021", newsLink: "https://www.washingtonpost.com/world/asia_pacific/japan-olympics-pandemic-vaccines/2021/06/10/97bdbbda-c84f-11eb-8708-64991f2acf28_story.html"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "Community-level evidence for SARS-CoV-2 vaccine protection of unvaccinated individuals", newsSource: "Nature", newsDate: "June 10, 2021", newsLink: "https://doi.org/10.1038/s41591-021-01407-5"}),
         e(NewsList, {newsType: "Non Media News", newsTitle: "COVID-19 Vaccine Janssen: authorities in EU take steps to safeguard vaccine quality", newsSource: "European Medicine Agency (EMA)", newsDate: "June 11, 2021", newsLink: "https://www.ema.europa.eu/en/news/covid-19-vaccine-janssen-authorities-eu-take-steps-safeguard-vaccine-quality"}),    
         e(NewsList, {newsType: "Media News", newsTitle: "CDC plans emergency meeting on rare heart inflammation following COVID-19 vaccines", newsSource: "CBS News", newsDate: "June 11, 2021", newsLink: "https://www.cbsnews.com/news/covid-19-vaccine-cdc-meeting-myocarditis-heart-inflammation/"}),
         e(NewsList, {newsType: "Media News", newsTitle: "Rural Communities Fall Farther Behind In COVID-19 Vaccination Rates", newsSource: "NPR", newsDate: "June 11, 2021", newsLink: "https://www.npr.org/sections/health-shots/2021/06/11/1005367753/rural-communities-fall-farther-behind-in-covid-19-vaccination-rates"}),    
         e(NewsList, {newsType: "Media News", newsTitle: "J&J doses to be released, but many will be tossed", newsSource: "AP News", newsDate: "June 11, 2021", newsLink: "https://apnews.com/article/government-and-politics-coronavirus-pandemic-business-health-d67646ba072e5eb4e574005174d1c184"}),    
         e(NewsList, {newsType: "Non Media News", newsTitle: "Comparison of Symptoms and RNA Levels in Children and Adults With SARS-CoV-2 Infection in the Community Setting", newsSource: "Jama Network", newsDate: "June 11, 2021", newsLink: "http://jamanetwork.com/article.aspx?doi=10.1001/jamapediatrics.2021.2025"})    
   ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(NewsApp), 
  //e(Welcome, {name: "Person"}),
  document.querySelector('#article-main-june2021')
  );
});
