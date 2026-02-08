AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Dominos-Sales-Prediction, Deep Learning & Machine Learning",
    cardImage: "assets/images/project-page/proj_12.webp",
    description: "📊 Forecasting pizza sales using ARIMA, Prophet, LSTM & more to power smart, data-driven decisions.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/Ashvinz/Dominos-Sales-Prediction/blob/main/dominos_sales_prediction.ipynb"
  },
  {
    title: "Job Application Automation using Airflow & DeepSeek",
    cardImage: "assets/images/project-page/Airflow_automation.webp",
    description: "🔁 Automatically applies to job listings using keyword-based matching from company websites and sends emails — orchestrated with Apache Airflow & DeepSeek LLM.",
    tagimg: "https://www.svgrepo.com/show/354199/apache-airflow-icon.svg",
    Previewlink: "",
    Githublink: "https://github.com/Ashvinz/airflow-newjob-vacancy-matcher"
  },
  {
    title: "Symptom to Disease Prediction using LLMs",
    cardImage: "assets/images/project-page/llm_proj_1.webp",
    description: "🧠 Predicts possible diseases based on patient symptoms using advanced LLM pipelines, LangChain agents, and Prompt Engineering.",
    tagimg: "https://www.svgrepo.com/show/475656/brain.svg",
    Previewlink: "",
    Githublink: "https://github.com/Ashvinz/LLM-symptom-disease-predictor"
  },
  {
    title: "ML & DL Models, Predictive Analysis in Python",
    cardImage: "assets/images/project-page/proj_10.webp",
    description: "A Data Science-driven predictive analysis project leveraging ML & DL models.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/Ashvinz/Predictive-Analytics-with-ML-DL"
  },
  {
    title: "Face Detection using CNN , Deep Learning",
    cardImage: "assets/images/project-page/proj_8.webp",
    description: "A deep learning-based face detection model using Convolutional Neural Networks (CNN).",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "",
    Githublink: "https://github.com/Ashvinz/Face-Detection-Gender-Classification-using-CNN"
  },
  {
    title: "AI-Powered Travel Chatbot using Django, NLP & Machine Learning",
    cardImage: "assets/images/project-page/proj_11.webp",
    description: "An intelligent travel assistant chatbot built with Django, NLP, and Machine Learning to enhance customer experience through automated travel assistance.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/Ashvinz/TravelEase-AI-TravelApp"
  },
  {
    title: "Data Processing Pipeline , Python",
    cardImage: "assets/images/project-page/proj_9.webp",
    description: "A project demonstrating data processing techniques such as data cleaning, transformation, integration, and aggregation for large-scale datasets.",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "",
    Githublink: "https://github.com/Ashvinz/Data-Processing-Pipeline/blob/main/Flight_Fare_Prediction.ipynb"
  },
  {
    title: "Sales Analysis Dashboard, PowerBI",
    cardImage: "assets/images/project-page/Sales_Analysis_Image.webp",
    description: "Sales Analysis Dashboard Built using PowerBI.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "assets/images/preview/Sales_proj.png.webp",
    Githublink: "https://github.com/Ashvinz/PowerBI-Dashboard/blob/main/Sales%20and%20Budget%20Analysis.pbit",
  },
  {
    title: "Heart Disease Analysis, PowerBI",
    cardImage: "assets/images/project-page/proj_3.webp",
    description: "Heart Disease Analysis Dashboard Built using PowerBI.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "assets/images/preview/Heart_proj.webp",
    Githublink: "https://github.com/Ashvinz/PowerBI-Dashboard/blob/main/Heart%20Disease%20Analysis.pbit",
  },
  {
    title: "Python-MySQL Banking Insights , Data Analysis",
    cardImage: "assets/images/project-page/proj_7.webp",
    description: "A project demonstrating data extraction, transformation, and analysis using MySQL and Python for banking insights.",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "",
    Githublink: "https://github.com/Ashvinz/python-mysql-banking",
  },

];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
