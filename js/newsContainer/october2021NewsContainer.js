'use strict';

class October2021NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Non Media News", newsTitle: "The combined treatment of Molnupiravir and Favipiravir results in a potentiation of antiviral efficacy in a SARS-CoV-2 hamster infection model", newsSource: "Science Direct", newsDate: "October 2021", newsLink: "https://www.sciencedirect.com/science/article/pii/S2352396421003881"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Anxiety, depression, insomnia, and trauma-related symptoms following COVID-19 infection at long-term follow-up", newsSource: "Science Direct", newsDate: "October 2021", newsLink: "https://www.sciencedirect.com/science/article/pii/S2666354621001186"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Human exposure to respiratory aerosols in a ventilated room: Effects of ventilation condition, emission mode, and social distancing", newsSource: "Science Direct", newsDate: "October 2021", newsLink: "https://www.sciencedirect.com/science/article/abs/pii/S2210670721003735"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "The durability of immunity against reinfection by SARS-CoV-2: a comparative evolutionary study", newsSource: "Lancet", newsDate: "October 1, 2021", newsLink: "https://doi.org/10.1016/S2666-5247(21)00219-6"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "COVID-19 and global equity for health: The good, the bad, and the wicked", newsSource: "PLOS", newsDate: "October 1, 2021", newsLink: "https://doi.org/10.1371/journal.pmed.1003797"}),               
e(NewsList, {newsType: "Media News", newsTitle: "Why it’s not possible for the Covid vaccines to contain a magnetic tracking chip that connects to 5G", newsSource: "CNBC", newsDate: "October 1, 2021", newsLink: "https://www.cnbc.com/2021/10/01/why-the-covid-vaccines-dont-contain-a-magnetic-5g-tracking-chip.html"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "FDA to Hold Advisory Committee Meetings to Discuss Emergency Use Authorization for Booster Doses and COVID-19 Vaccines for Younger Children", newsSource: "U.S. Food and Drug Administration", newsDate: "October 1, 2021", newsLink: "https://www.fda.gov/news-events/press-announcements/fda-hold-advisory-committee-meetings-discuss-emergency-use-authorization-booster-doses-and-covid-19"}),
e(NewsList, {newsType: "Media News", newsTitle: "Justice Department argues Texas ban on school mask mandates violates disabled students’ rights", newsSource: "Texas Tribune", newsDate: "October 1, 2021", newsLink: "https://www.texastribune.org/2021/10/01/texas-schools-mask-mandates-justice-department/"}),
e(NewsList, {newsType: "Media News", newsTitle: "Vaccinated people are less likely to spread Covid, new research finds", newsSource: "NBC News", newsDate: "October 1, 2021", newsLink: "https://www.nbcnews.com/health/health-news/vaccinated-people-are-less-likely-spread-covid-new-research-finds-n1280583/"}),
e(NewsList, {newsType: "Media News", newsTitle: "Many are searching for vaccine mandate loopholes. These are the people trying to stop them.", newsSource: "Washington Post", newsDate: "October 2, 2021", newsLink: "https://www.washingtonpost.com/lifestyle/2021/10/02/vaccine-mandate-office-loophole/"}),
e(NewsList, {newsType: "Media News", newsTitle: "Unvaccinated care workers should get another job, says Javid", newsSource: "Guardian", newsDate: "October 2, 2021", newsLink: "https://www.theguardian.com/politics/2021/oct/02/covid-unvaccinated-care-workers-should-get-another-job-says-javid"}),               
e(NewsList, {newsType: "Media News", newsTitle: "Alabama to use Covid rescue funds to build prisons", newsSource: "NBC News", newsDate: "October 2, 2021", newsLink: "https://www.nbcnews.com/news/us-news/alabama-use-covid-rescue-funds-build-prisons-n1280624"}),
               
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(October2021NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "October , 2021", newsLink: ""}),
  document.querySelector('#article-main-october2021')
  );
});
