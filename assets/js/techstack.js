AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langName: "Excel",
    langIcon: "fas fa-file-excel", // Use FontAwesome class for icon
    langDesc: "<li>Excel is a spreadsheet application used for data analysis, visualization, and management.</li>",
  },
  {
    langName: "Power BI",
    langIcon: "fas fa-chart-bar", // Use FontAwesome class for icon
    langDesc: "<li>Power BI is a data visualization tool used for transforming raw data into informative insights.</li>",
  },
  {
    langName: "Tableau",
    langIcon: "fas fa-table", // Use FontAwesome class for icon
    langDesc: "<li>Tableau is a data visualization tool used for creating interactive and shareable dashboards.</li>",
  },
  {
    langName: "HTML",
    langIcon: "fab fa-html5", // Use FontAwesome class for icon
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
  },
  {
    langName: "CSS",
    langIcon: "fab fa-css3-alt", // Use FontAwesome class for icon
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langName: "MY-SQL",
    langIcon: "fas fa-database", // Use FontAwesome class for icon
    langDesc: "<li>MySQL is an open-source relational database management system based on SQL – Structured Query Language.</li>",
  },
  {
    langName: "Firebase",
    langIcon: "fas fa-fire", // Use FontAwesome class for icon
    langDesc: "<li>Firebase is a cloud-based platform by Google that provides backend services such as authentication, real-time database, hosting, and cloud functions for mobile and web applications.</li>",
  },
  {
    langName: "MongoDB",
    langIcon: "fas fa-leaf", // Use FontAwesome class for icon
    langDesc: "<li>MongoDB is a NoSQL document-oriented database that uses JSON-like documents with optional schemas, providing scalability and flexibility for modern applications.</li>",
  },
  {
    langName: "Python",
    langIcon: "fab fa-python", // Use FontAwesome class for icon
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
  {
    langName: "Machine Learning",
    langIcon: "fas fa-robot", // Use FontAwesome class for icon
    langDesc: "<li>Machine Learning is a field of artificial intelligence that uses algorithms to allow computers to learn from and make decisions based on data.</li>",
  },
  {
    langName: "Deep Learning",
    langIcon: "fas fa-robot", // Use FontAwesome class for icon
    langDesc: "<li>Deep Learning is a subset of machine learning that uses neural networks with many layers to analyze and learn from data.</li>",
  },
  {
    langName: "NLP",
    langIcon: "fas fa-language", // Use FontAwesome class for icon
    langDesc: "<li>Natural Language Processing is a branch of artificial intelligence that enables machines to understand, interpret, and generate human language.</li>",
  },
  {
    langName: "LangChain",
    langIcon: "fas fa-code-branch", // Generic icon
    langDesc: "<li>LangChain is a framework for developing applications powered by language models. It enables chaining components like LLMs, agents, and tools for advanced workflows.</li>",
  },
  {
    langName: "Hugging Face",
    langIcon: "fas fa-smile", // Generic icon
    langDesc: "<li>Hugging Face provides open-source libraries and APIs for working with transformers, large language models, and datasets for NLP and other ML tasks.</li>",
  },
  {
    langName: "OpenAI API",
    langIcon: "fas fa-cloud", // Generic icon
    langDesc: "<li>OpenAI API allows developers to access powerful AI models like GPT-4 for text generation, completion, embedding, and more within applications.</li>",
  },
  {
    langName: "LLMs",
    langIcon: "fas fa-brain", // Use existing icon
    langDesc: "<li>Large Language Models (LLMs) are advanced deep learning models trained on massive text data, capable of understanding and generating human-like language.</li>",
  },
  {
    langName: "RAG",
    langIcon: "fas fa-file-alt", // Generic document icon
    langDesc: "<li>Retrieval-Augmented Generation (RAG) combines information retrieval with language generation to produce contextually accurate and relevant answers.</li>",
  },
  {
    langName: "Prompt Engineering",
    langIcon: "fas fa-keyboard", // Generic input icon
    langDesc: "<li>Prompt Engineering involves designing effective prompts to guide LLMs for accurate, relevant, and safe outputs across use cases.</li>",
  },
  {
    langName: "NumPy",
    langIcon: "fas fa-cubes", // Use FontAwesome class for icon
    langDesc: "<li>NumPy is a core library for scientific computing in Python, used for working with arrays and matrices.</li>",
  },
  {
    langName: "Pandas",
    langIcon: "fas fa-database", // Use FontAwesome class for icon
    langDesc: "<li>Pandas is a Python library used for data manipulation and analysis, providing data structures like DataFrame.</li>",
  },
  {
    langName: "Scikit-learn",
    langIcon: "fas fa-brain", // Use FontAwesome class for icon
    langDesc: "<li>Scikit-learn is a machine learning library for Python that provides simple and efficient tools for data mining and data analysis.</li>",
  },
  {
    langName: "Matplotlib",
    langIcon: "fas fa-chart-line", // Use FontAwesome class for icon
    langDesc: "<li>Matplotlib is a plotting library for the Python programming language and is used to create static, animated, and interactive visualizations.</li>",
  },
  {
    langName: "Flask",
    langIcon: "fas fa-flask", // Use FontAwesome class for icon
    langDesc: "<li>Flask is a web framework for Python used for building web applications.</li>",
  },
  {
    langName: "Django",
    langIcon: "fas fa-leaf", // Use FontAwesome class for icon
    langDesc: "<li>Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design.</li>",
  },
  {
    langName: "FastAPI",
    langIcon: "fas fa-rocket", // Use FontAwesome class for icon
    langDesc: "<li>FastAPI is a modern web framework for building APIs with Python 3.7+ based on standard Python type hints and asynchronous programming.</li>",
  },
  {
    langName: "Git",
    langIcon: "fab fa-git-alt", // Use FontAwesome class for icon
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langName: "Docker",
    langIcon: "fab fa-docker", // Use FontAwesome class for icon
    langDesc: "<li>Docker is a platform used to develop, ship, and run applications inside lightweight containers.</li>",
  },

];

// Modified display function
const displayTechStacksCards = () => {
  const entireCardTemplate =
    techStack.map((stack) => {
      return `        
        <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
            <div class="tech_card">
                <div class="card_header">
                    <header>
                        <div class="text-center langName">
                            <h4><i class="${stack.langIcon}" class="lang_icon"></i> ${stack.langName}</h4>
                        </div>
                    </header>
                    <ul class="description">
                    ${stack.langDesc}
                </ul>
                </div>
            </div>
        </div>
      `;
    }).join('');
  techStackCards.innerHTML = entireCardTemplate;
};

document.addEventListener("DOMContentLoaded", displayTechStacksCards);