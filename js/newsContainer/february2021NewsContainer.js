'use strict';

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

class February2021NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Non Media News", newsTitle: "Loneliness in America: How the Pandemic Has Deepened an Epidemic of Loneliness and What We Can Do About It", newsSource: "Harvard University Graduate School of Education", newsDate: "February 2021", newsLink: "https://mcc.gse.harvard.edu/reports/loneliness-in-america"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "What could cause the long-term effects of COVID-19 on sperm parameters and male fertility?", newsSource: "Oxford Academics", newsDate: "February 9, 2021", newsLink: "https://doi.org/10.1093/qjmed/hcab028"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Coinfection with influenza A virus enhances SARS-CoV-2 infectivity", newsSource: "Nature", newsDate: "February 17, 2021", newsLink: "https://doi.org/10.1038/s41422-021-00473-1"}),
e(NewsList, {newsType: "Media News", newsTitle: "Epidemic, Endemic, Pandemic: What are the Differences?", newsSource: "Public Health Columbia", newsDate: "February 19, 2021", newsLink: "https://www.publichealth.columbia.edu/public-health-now/news/epidemic-endemic-pandemic-what-are-differences"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "COVID-19 and human papillomavirus: Paradoxical immunity", newsSource: "Wiley Online Library", newsDate: "February 24, 2021", newsLink: "https://doi.org/10.1111/jocd.14022"}),               
e(NewsList, {newsType: "Non Media News", newsTitle: "Evaluation of SARS-CoV-2 in Human Semen and Effect on Total Sperm Number: A Prospective Observational Study", newsSource: "World Journal of Men's Health", newsDate: "February 24, 2021", newsLink: "https://doi.org/10.5534/wjmh.200192"}),               
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(February2021NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "February , 2021", newsLink: ""}),
  document.querySelector('#article-main-january2021')
  );
});
