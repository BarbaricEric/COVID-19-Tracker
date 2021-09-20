'use strict';

class July2020NewsApp extends React.Component {
 render() {
      return e("div", null,
e(NewsList, {newsType: "Non Media News", newsTitle: "Outcomes of Cardiovascular Magnetic Resonance Imaging in Patients Recently Recovered From Coronavirus Disease 2019 (COVID-19)", newsSource: "Jama Network", newsDate: "July 27, 2020", newsLink: "http://jamanetwork.com/article.aspx?doi=10.1001/jamacardio.2020.3557"}),               
         ); 
 }
}

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
  e(July2020NewsApp), 
  //e(Welcome, {name: "Person"}), e(NewsList, {newsType: "Non Media News", newsTitle: "", newsSource: "", newsDate: "July , 2020", newsLink: ""}),
  document.querySelector('#article-main-jul2021')
  );
});
