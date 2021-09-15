'use strict';

class October2021NewsApp extends React.Component {
 render() {
      return e("div", null, 
e(NewsList, {newsType: "Non Media News", newsTitle: "Anxiety, depression, insomnia, and trauma-related symptoms following COVID-19 infection at long-term follow-up", newsSource: "Science Direct", newsDate: "October 2021", newsLink: "https://www.sciencedirect.com/science/article/pii/S2666354621001186"}),
e(NewsList, {newsType: "Non Media News", newsTitle: "Human exposure to respiratory aerosols in a ventilated room: Effects of ventilation condition, emission mode, and social distancing", newsSource: "Science Direct", newsDate: "October 2021", newsLink: "https://www.sciencedirect.com/science/article/abs/pii/S2210670721003735"}),               
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
