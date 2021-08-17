'use strict';

const e = React.createElement;

class NewsList extends React.Component {
  render() {
    return e("div", {class: "article-container"},
    e("div", {class: "news-box news-box-a"},
    e("i", {class: "fas fa-exclamation-circle fa-2x"}, this.props.newsType),
    e("h3", null, this.props.newsTitle), 
    e("p", {class: "price"}, "Source: ", this.props.newsSource, ", Accessed on ", this.props.newsDate), 
    e("a", {target: "_blank", href: `${this.props.newsLink}`, class: "btn"}, "Link to Article")),  
    e("div", {class: "news-box news-box-b"}, 
    e("img", {src: "img/coronavirus-19-mobile.jpg",alt: "COVID-19 News Image"
    }))
    );
  }
}

class August2021NewsApp extends React.Component {
 render() {
      return e("div", null, 
e(NewsList, {newsType: "Non Media News", newsTitle: "Immune cell residency in the nasal mucosa may partially explain respiratory disease severity across the age range", newsSource: "Nature", newsDate: "August 5, 2021", newsLink: "https://doi.org/10.1038/s41598-021-95532-3"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Poor nasal immunity can lead to severe COVID-19", newsSource: "Nature", newsDate: "August 10, 2021", newsLink: "https://doi.org/10.1038/s41577-021-00610-2"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Persistent Endotheliopathy in the Pathogenesis of Long COVID Syndrome", newsSource: "Wiley Online Library", newsDate: "August 10, 2021", newsLink: "https://doi.org/10.1111/jth.15490"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Oxford/AstraZeneca vaccine: rare blood clot syndrome has high mortality rate", newsSource: "Guardian", newsDate: "August 11, 2021", newsLink: "https://www.theguardian.com/world/2021/aug/11/oxfordastrazeneca-vaccine-rare-blood-clot-syndrome-has-high-mortality-rate"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Distinct Lipid Metabolic Dysregulation in Asymptomatic COVID-19", newsSource: "Cell", newsDate: "August 11, 2021", newsLink: "https://doi.org/10.1016/j.isci.2021.102974"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Ground vibrations recorded by fiber-optic cables reveal traffic response to COVID-19 lockdown measures in Pasadena, California", newsSource: "Nature", newsDate: "August 11, 2021", newsLink: "https://doi.org/10.1038/s43247-021-00234-3"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Three Doses of an mRNA Covid-19 Vaccine in Solid-Organ Transplant Recipients", newsSource: "New England Journal of Medicine", newsDate: "August 12, 2021", newsLink: "https://www.nejm.org/doi/full/10.1056/NEJMc2108861"}),
e(NewsList, {newsType: "Media News", newsTitle: "French police investigate rising number of fake Covid vaccine certificates", newsSource: "Guardian", newsDate: "August 13, 2021", newsLink: "https://www.theguardian.com/world/2021/aug/13/french-police-investigate-rising-number-of-fake-covid-vaccine-certificates"}),
e(NewsList, {newsType: "Media News", newsTitle: "Dr. Scott Gottlieb expects coronavirus to be an ‘endemic’ virus in U.S. after delta surge", newsSource: "CNBC", newsDate: "August 13, 2021", newsLink: "https://www.cnbc.com/2021/08/13/dr-scott-gottlieb-expects-coronavirus-to-be-an-endemic-virus-in-us-after-delta-surge.html"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "ACP Joins Other Medical Organizations in Calling for Employers to Require COVID-19 Vaccines for All Health Care Workers", newsSource: "American College of Physicians", newsDate: "August 13, 2021", newsLink: "https://www.acponline.org/advocacy/acp-advocate/archive/august-13-2021/acp-joins-other-medical-organizations-in-calling-for-employers-to-require-covid-19-vaccines-for-all"}),
e(NewsList, {newsType: "Media News", newsTitle: "U.S. Homeland Security warns fresh COVID-19 restrictions could spark violent attacks", newsSource: "Reuters", newsDate: "August 13, 2021", newsLink: "https://www.reuters.com/world/us/homeland-security-warns-fresh-covid-19-restrictions-could-spark-violent-attacks-2021-08-13/"}),
e(NewsList, {newsType: "Media News", newsTitle: "Who can ask about your vaccine status? Here’s what you need to know about HIPAA", newsSource: "PBS", newsDate: "August 13, 2021", newsLink: "https://www.pbs.org/newshour/health/who-can-ask-about-your-vaccine-status-heres-what-you-need-to-know-about-hipaa"}),
e(NewsList, {newsType: "Media News", newsTitle: "Battling misinformation, nursing homes weigh whether to require vaccination for staff", newsSource: "CBS News", newsDate: "August 13, 2021", newsLink: "https://www.cbsnews.com/news/nursing-homes-require-vaccination-staff/"}),
e(NewsList, {newsType: "Media News", newsTitle: "After big county fair, virus hits hard in rural Mississippi", newsSource: "AP News", newsDate: "August 13, 2021", newsLink: "https://apnews.com/article/lifestyle-business-health-coronavirus-pandemic-mississippi-a867788ad18baf16ca710657dabad264"}),
e(NewsList, {newsType: "Media News", newsTitle: "Booster jabs for rich countries will cause more deaths worldwide, say experts", newsSource: "Guardian", newsDate: "August 13, 2021", newsLink: "https://www.theguardian.com/society/2021/aug/13/covid-booster-jabs-for-rich-countries-will-cause-more-deaths-worldwide-say-experts"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Excess of COVID-19 cases and deaths due to fine particulate matter exposure during the 2020 wildfires in the United States", newsSource: "Science Magazine", newsDate: "August 13, 2021", newsLink: "https://doi.org/10.1126/sciadv.abi8789"}),
e(NewsList, {newsType: "Media News", newsTitle: "Get the vaccine or get fired? In Shenandoah Valley, some nurses choose termination.", newsSource: "Washington Post", newsDate: "August 14, 2021", newsLink: "https://www.washingtonpost.com/local/vaccine-mandate-nurses-virginia-covid/2021/08/13/493c906a-fad3-11eb-9c0e-97e29906a970_story.html"}),
e(NewsList, {newsType: "Media News", newsTitle: "No, the surge in Covid cases across the U.S. is not due to migrants or immigrants", newsSource: "NBC News", newsDate: "August 14, 2021", newsLink: "https://www.nbcnews.com/news/latino/no-surge-covid-cases-us-not-due-migrants-immigrants-rcna1656"}),
e(NewsList, {newsType: "Media News", newsTitle: "‘This is a public health issue’: can Covid-era music festivals ever be safe?", newsSource: "Guardian", newsDate: "August 14, 2021", newsLink: "https://www.theguardian.com/world/2021/aug/14/outdoor-music-festivals-covid-coronavirus"}),
e(NewsList, {newsType: "Media News", newsTitle: "UK universities open vaccination centres on campus to encourage student uptake", newsSource: "Guardian", newsDate: "August 14, 2021", newsLink: "https://www.theguardian.com/education/2021/aug/14/freshers-urged-have-covid-jab-uk-universities-set-up-vaccination-centres"}),
e(NewsList, {newsType: "Media News", newsTitle: "More US cities requiring proof of vaccination to go places", newsSource: "AP News", newsDate: "August 13, 2021", newsLink: "https://apnews.com/article/joe-biden-business-health-coronavirus-pandemic-6ae309aff77864cb108fbf9a2dbcf449"}),
e(NewsList, {newsType: "Media News", newsTitle: "Unvaccinated workers could end up paying $50 more for health insurance — per paycheck", newsSource: "CBS News", newsDate: "August 13, 2021", newsLink: "https://www.cbsnews.com/news/covid-vaccine-insurance-premiums/"}),
e(NewsList, {newsType: "Media News", newsTitle: "Mississippi seeks doctors, nurses and ventilators as Covid patients pack ICU beds", newsSource: "CNBC", newsDate: "August 13, 2021", newsLink: "https://www.cnbc.com/2021/08/13/mississippi-seeks-doctors-nurses-and-ventilators-as-covid-patients-pack-icu-beds.html"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Protective heterologous T cell immunity in COVID-19 induced by the trivalent Measles-Mumps-Rubella and Tetanus-Diptheria-Pertussis vaccine antigens", newsSource: "Cell", newsDate: "August 13, 2021", newsLink: "https://doi.org/10.1016/j.medj.2021.08.004"}),
e(NewsList, {newsType: "Media News", newsTitle: "The number of kids hospitalized with Covid in the U.S. hits a record high", newsSource: "CNBC", newsDate: "August 14, 2021", newsLink: "https://www.cnbc.com/2021/08/14/the-number-of-kids-hospitalized-with-covid-in-the-us-hits-a-record-high.html"}),
e(NewsList, {newsType: "Media News", newsTitle: "New Covid variants ‘would set us back a year’, experts warn UK government", newsSource: "Guardian", newsDate: "August 14, 2021", newsLink: "https://www.theguardian.com/world/2021/aug/15/new-covid-variants-will-set-us-back-a-year-experts-warn-uk-government"}),
e(NewsList, {newsType: "Media News", newsTitle: "Fired Tennessee vaccinations director planning to leave state with her family", newsSource: "NBC News", newsDate: "August 14, 2021", newsLink: "https://www.nbcnews.com/news/us-news/fired-tennessee-vaccinations-director-planning-leave-state-n1276832"}),
e(NewsList, {newsType: "Media News", newsTitle: "‘I feel defeated’: Mask and vaccine mandates cause new divides as officials try to head off virus surge", newsSource: "Washington Post", newsDate: "August 15, 2021", newsLink: "https://www.washingtonpost.com/health/2021/08/14/mask-vaccination-mandates/"}),
e(NewsList, {newsType: "Media News", newsTitle: "The Delta Variant Is Already Leaving Its Mark on Business", newsSource: "Wall Street Journal", newsDate: "August 15, 2021", newsLink: "https://www.wsj.com/articles/-delta-variant--business-economy-11629049694"}),
e(NewsList, {newsType: "Media News", newsTitle: "Virus claims more young victims as deaths climb yet again", newsSource: "AP News", newsDate: "August 15, 2021", newsLink: "https://apnews.com/article/health-coronavirus-pandemic-5e56dc3f817e3eaca1f48511c3be8549"}), 
e(NewsList, {newsType: "Media News", newsTitle: "US could see 200,000 Covid cases a day again: ‘Unvaccinated are sitting ducks’", newsSource: "Guardian", newsDate: "August 15, 2021", newsLink: "https://www.theguardian.com/us-news/2021/aug/15/us-covid-delta-cases-unvaccinated-sitting-ducks"}), 
e(NewsList, {newsType: "Media News", newsTitle: "The Texas Covid crisis worsens – why is the governor resisting masks?", newsSource: "Guardian", newsDate: "August 15, 2021", newsLink: "https://www.theguardian.com/us-news/2021/aug/15/texas-covid-coronavirus-crisis-austin-greg-abbott"}), 
e(NewsList, {newsType: "Media News", newsTitle: "Kentucky school district cancels classes due to COVID cases", newsSource: "AP News", newsDate: "August 16, 2021", newsLink: "https://apnews.com/article/health-education-coronavirus-pandemic-kentucky-ff5162f3cfa509ae6bbca793a982cf37"}), 
e(NewsList, {newsType: "Media News", newsTitle: "Forget Beating Covid-19. Europe Is Preparing to Live With It.", newsSource: "Wall Street Journal", newsDate: "August 16, 2021", newsLink: "https://www.wsj.com/articles/forget-beating-covid-19-europe-is-preparing-to-live-with-it-11629118024"}), 
e(NewsList, {newsType: "Media News", newsTitle: "Overwhelmed Philippines hospitals hit by staff resignations", newsSource: "Reuters", newsDate: "August 16, 2021", newsLink: "https://www.reuters.com/world/asia-pacific/overwhelmed-philippines-hospitals-hit-by-staff-resignations-2021-08-16/"}), 
e(NewsList, {newsType: "Media News", newsTitle: "Nearly a third of U.S. workers under 40 considered changing careers during the pandemic", newsSource: "Washington Post", newsDate: "August 16, 2021", newsLink: "https://www.washingtonpost.com/business/2021/08/16/us-workers-want-career-change/"}),  
e(NewsList, {newsType: "Media News", newsTitle: "Vaccine effectiveness against SARS-CoV-2 transmission and infections among household and other close contacts of confirmed cases, the Netherlands, February to May 2021 ", newsSource: "Eurosurveillance", newsDate: "August 2021", newsLink: "https://doi.org/10.2807/1560-7917.ES.2021.26.31.2100640"}),
e(NewsList, {newsType: "Media News", newsTitle: "Texas requests five mortuary trailers in anticipation of Covid deaths", newsSource: "NBC News", newsDate: "August 16, 2021", newsLink: "https://www.nbcnews.com/politics/politics-news/texas-requests-five-mortuary-trailers-anticipation-covid-deaths-n1276924"}),
e(NewsList, {newsType: "Media News", newsTitle: "U.S. to Advise Boosters for Most Americans 8 Months After Vaccination", newsSource: "NY Times", newsDate: "August 16, 2021", newsLink: "https://www.nytimes.com/2021/08/16/us/politics/booster-shots.html"}),
e(NewsList, {newsType: "Media News", newsTitle: "‘We are on fire’: Five U.S. states set new records for Covid cases as hospitalizations rise ", newsSource: "CNBC", newsDate: "August 16, 2021", newsLink: "https://www.cnbc.com/2021/08/16/we-are-on-fire-five-us-states-set-new-records-for-covid-cases-as-hospitalizations-rise-.html"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Pfizer and BioNTech Announce Submission of Initial Data to U.S. FDA to Support Booster Dose of COVID-19 Vaccine", newsSource: "Pfizer and BioNTech", newsDate: "August 16, 2021", newsLink: "https://www.pfizer.com/news/press-release/press-release-detail/pfizer-and-biontech-announce-submission-initial-data-us-fda"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "NIH scientists develop faster COVID-19 test", newsSource: "National Institutes of Health", newsDate: "August 16, 2021", newsLink: "https://www.nih.gov/news-events/news-releases/nih-scientists-develop-faster-covid-19-test"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "A grim warning from Israel: Vaccination blunts, but does not defeat Delta ", newsSource: "Science Magazine", newsDate: "August 16, 2021", newsLink: "https://www.sciencemag.org/news/2021/08/grim-warning-israel-vaccination-blunts-does-not-defeat-delta"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Association of Age and Pediatric Household Transmission of SARS-CoV-2 Infection", newsSource: "Jama Network", newsDate: "August 16, 2021", newsLink: "http://jamanetwork.com/article.aspx?doi=10.1001/jamapediatrics.2021.2770"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "SARS-CoV-2 variant prediction and antiviral drug design are enabled by RBD in vitro evolution", newsSource: "Nature", newsDate: "August 16, 2021", newsLink: "https://doi.org/10.1038/s41564-021-00954-4"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Evolutionary analysis of the Delta and Delta Plus variants of the SARS-CoV-2 viruses", newsSource: "Science Direct", newsDate: "August 16, 2021", newsLink: "https://www.sciencedirect.com/science/article/pii/S0896841121001232"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Intimate Partner Aggression During the COVID-19 Pandemic: Associations With Stress and Heavy Drinking", newsSource: "American Psychological Association", newsDate: "August 16, 2021", newsLink: "https://doi.org/10.1037/vio0000395"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Association of Vaccine Type and Prior SARS-CoV-2 Infection With Symptoms and Antibody Measurements Following Vaccination Among Health Care Workers", newsSource: "Jama Network", newsDate: "August 16, 2021", newsLink: "http://jamanetwork.com/article.aspx?doi=10.1001/jamainternmed.2021.4580"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Bell's palsy following vaccination with mRNA (BNT162b2) and inactivated (CoronaVac) SARS-CoV-2 vaccines: a case series and nested case-control study", newsSource: "Lancet", newsDate: "August 16, 2021", newsLink: "https://doi.org/10.1016/S1473-3099(21)00451-5"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Vaccine nationalism and the dynamics and control of SARS-CoV-2", newsSource: "Science Magazine", newsDate: "August 17, 2021", newsLink: "https://doi.org/10.1126/science.abj7364"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Redox imbalance links COVID-19 and myalgic encephalomyelitis/chronic fatigue syndrome", newsSource: "PNAS", newsDate: "August 17, 2021", newsLink: "https://doi.org/10.1073/pnas.2024358118"}),
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(August2021NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "August , 2021", newsLink: ""}),
  document.querySelector('#article-main-aug2021')
  );
});
