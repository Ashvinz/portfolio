AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Analyst Virtual Intern",
    cardImage: "assets/images/experience-page/pwc.png",
    place: "PwC",
    time: "(Oct - Nov, 2024)",
    desp: "<li>Worked on projects related to Call Centre Trends and Customer Retention.</li><li>Analyzed call center data to identify key trends and bottlenecks, leading to actionable insights.</li> <li>Developed retention strategies using customer data, resulting in improved client satisfaction metrics.</li>",
  },
  {
    title: "Data Virtual Intern",
    cardImage: "assets/images/experience-page/tcs.png",
    place: "Tata Consultancy Services",
    time: "(Nov - Dec, 2024)",
    desp: "<li>Focused on Data Visualization: Empowering Business with Effective Insights.</li><li>Designed interactive dashboards to visualize business data effectively using tools like Power BI and Tableau./li><li>Presented insights that streamlined business processes and enhanced decision-making efficiency.</li>",
  },
  {
    title: "Data Analyst Virtual Intern",
    cardImage: "assets/images/experience-page/accenture.jpg",
    place: "Accenture",
    time: "(Dec, 2024)",
    desp: "<li>Engaged in a Data Analytics and Visualization Job Simulation</li><li>Utilized Python and SQL to analyze datasets and extract meaningful insights.</li>,<li>Created dynamic visualizations and reports that addressed business requirements and improved operational performance.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

