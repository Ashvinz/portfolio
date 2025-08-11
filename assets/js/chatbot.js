document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("chatbot-button");
  const modal = document.getElementById("chatbot-modal");
  const close = document.getElementById("chatbot-close");
  const actionBtns = document.querySelectorAll("#chatbot-action-buttons button");
  const msgBox = document.getElementById("chatbot-messages");
  const input = document.getElementById("chatbot-input");
  const send = document.getElementById("chatbot-send");

  // My Data
  const myDetails = {
  // 1️⃣ Greetings & Small Talk
  greetings: {
    keywords: ["hi", "hello", "hey", "good morning", "good evening"],
    reply: "👋 Hey there! I’m Aswin kumar - your friendly portfolio assistant. How can I help you explore my work?"
  },
  thanks: {
    keywords: ["thanks", "thank you", "appreciate"],
    reply: "😊 Glad I could help!"
  },
  how_are_you: {
    keywords: ["how are you", "how's it going", "how do you do"],
    reply: "I’m doing great and ready to showcase Aswin’s portfolio! 🚀"
  },
  native: {
    keywords: ["native", "Place", "Address", "where are you from", "where do you live"],  
    reply: "🌍 I’m from Nagercoil, Kanyakumari"
  },
  native_language: {
    keywords: ["native language", "language", "what language do you speak", "what is your mother tongue"],
    reply: "🗣️ My native language is Tamil, but I also about English"
  },  
  father_name: {
    keywords: ["father name", "father's name", "what is your father's name", "who is your father"],
    reply: "👨‍👦 My father's name is Mr. Retna Kumar."
  },
  mother_name: {
    keywords: ["mother name", "mother's name", "what is your mother's name", "who is your mother"],
    reply: "👩‍👦 My mother's name is Mrs. Nisha"
  },
  hobbies: {
    keywords: ["hobbies", "interests", "what do you like to do", "what are your hobbies"],
    reply: "🎨 Hobbies:\n- Reading Books"
  },
  likes: {
    keywords: ["likes", "what do you like", "what are your interests"], 
    reply: "👍 Likes:\n- Exploring new technologies\n- Solving complex problems\n- Collaborating with others"
  },
  dislikes: {
    keywords: ["dislikes", "what do you dislike", "what are your pet peeves"],
    reply: "👎 Dislikes:\n- Injustice\n- Inefficiency\n- Lack of communication"
  },

  // 2️⃣ Purpose
  purpose: {
    keywords: ["purpose", "goal", "aim", "what can you do"],
    reply: "🎯 My purpose is to present Aswin's skills, experiences, and projects in an interactive and friendly way."
  },

  // 3️⃣ About Me
  about_me: {
    keywords: ["about you", "about me", "who are you", "tell me about yourself", "who is Aswin", "who is the owner of this portfolio" ],
    reply: "💡 I'm Aswin Kumar, a Data Scientist & Analyst passionate about transforming data into actionable insights. Skilled in Python, Machine Learning, AI, Data Visualization, and Cloud tools. I build impactful end-to-end data solutions."
  },

  future_goals: {
    keywords: ["future goals", "aspirations", "what's next", "future plans"],
    reply: "🚀 Future Goals:\n- Mastering advanced AI techniques\n- Leading impactful data projects\n- Contributing to open-source data science initiatives\n- Mentoring aspiring data professionals"
  },  

  pattern_study: {
    keywords: ["pattern study", "pattern recognition", "data patterns", "how do you analyze data"],
    reply: "🔍 Pattern Study:\nI analyze data patterns using statistical methods, machine learning algorithms, and visualization techniques to uncover insights and trends that drive decision-making."
  },  

  time_spend: {
    keywords: ["time spend", "how do you manage time", "time management", "how do you prioritize tasks"],
    reply: "⏳ Time Management:\nI prioritize tasks using the Eisenhower Matrix, focusing on what’s important and urgent. I use tools like Notion and Google Calendar to stay organized and ensure I allocate time effectively for each project."
  },
  DOB: {
    keywords: ["DOB", "date of birth", "when were you born", "your birthday"],
    reply: "🎂 My date of birth is 11th March 2003."
  },


  // 4️⃣ Resume
  resume: {
    keywords: ["resume", "cv", "profile", "biodata", "where is your resume", "share your resume"],
    reply: '📄 <a href="https://drive.google.com/file/d/1YsWSDJamghPOZYTzWzM5V61yMuYmIwwe/view?usp=sharing" target="_blank">Click here to view my Resume (PDF)</a>'
  },

  // 5️⃣ Skills
  skills: {
    keywords: ["skills", "abilities", "stack", "what tools do you use", "technologies"],
    reply: "⚡ Skills:\nDocker, Git, Airflow, Excel, PowerBI, Tableau, MySQL, Firebase, MongoDB, Python, NumPy, Pandas, Scikit-learn, Matplotlib, Flask, Django, FastAPI, ReactAPI, Machine Learning, Deep Learning, NLP, LangChain, Hugging Face, OpenAI, LLMs, Linux."
  },

  // 6️⃣ Education
  education: {
    keywords: ["education", "study", "qualification", "where did you study", "your degree"],
    reply: "🎓 Education:\n- Vins Christian College of Engineering, 2024 Pass-out, CGPA: 7.86\n- Besant Technologies: Data Science course completed in 2025."
  },

  // 7️⃣ Internships
  internships: {
    keywords: ["internship", "internships", "experience", "work experience"],
    reply: "💼 Internships:\n- **PWC** – Data Analyst Intern (Call Center Trends, Customer Retention)\n- **TCS** – Data Virtualization Intern (Empowering Business with Insights)\n- **Accenture** – Data Analytics & Visualization Virtual Intern"
  },

  // 8️⃣ Projects
  // 6️⃣ Projects
  project_dominos: {
    keywords: ["dominos", "sales prediction"],
    reply: "📊 Dominos Sales Prediction — Forecasting sales with ML & DL models."
  },
  project_airflow: {
    keywords: ["airflow project", "job automation"],
    reply: "🤖 Job Application Automation — Apache Airflow + DeepSeek."
  },
  project_llm: {
    keywords: ["symptoms to disease", "llm project"],
    reply: "🧠 Symptoms-to-Disease Predictor — LLM + Hugging Face."
  },
  project_ml_models: {
    keywords: ["predictive analysis", "basic ml models"],
    reply: "📈 Predictive Analysis — Regression, Classification, Clustering models."
  },
  project_face_detection: {
    keywords: ["face detection", "computer vision"],
    reply: "📷 Face Detection using OpenCV & Haar cascades."
  },
  project_pipeline: {
    keywords: ["data pipeline", "elt process"],
    reply: "🔄 Data Pipeline & ELT — Data ingestion, transformation, and loading."
  },
  project_powerbi: {
    keywords: ["budget analysis", "sales analysis", "powerbi"],
    reply: "📊 Budget & Sales Analysis using PowerBI."
  },
  project_banking: {
    keywords: ["banking analysis", "python mysql"],
    reply: "🏦 Banking Data Analysis — Python + MySQL."
  },
  project_chatbot: {
    keywords: ["ai chatbot", "chatbot project"],
    reply: "🤖 AI Chatbot — NLP-powered conversational assistant."
  }
};


  // Function to match keywords
  function getReply(userInput) {
    const lowerInput = userInput.toLowerCase();
    for (let key in myDetails) {
      if (myDetails[key].keywords.some(k => lowerInput.includes(k.toLowerCase()))) {
        return myDetails[key].reply;
      }
    }
    return "I’m not sure about that. Could you be more specific?";
  }

  // Open
  btn.onclick = () => {
    modal.style.display = "flex";
    input.focus();
  };

  // Close
  close.onclick = () => modal.style.display = "none";
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") modal.style.display = "none";
  });

  // Add Message
  function addMessage(sender, text) {
    const div = document.createElement("div");
    div.className = sender;
    div.innerHTML = text; // ✅ Allow clickable links
    msgBox.appendChild(div);
    msgBox.scrollTop = msgBox.scrollHeight;
  }

  // Send Message
  function sendMessage(text, sender = "user") {
    if (!text) return;
    addMessage(sender, text);
    input.value = "";
    if (sender === "user") {
      setTimeout(() => {
        const reply = getReply(text);
        addMessage("ai", reply);
      }, 500);
    }
  }

  send.onclick = () => sendMessage(input.value.trim());
  input.addEventListener("keypress", e => {
    if (e.key === "Enter") sendMessage(input.value.trim());
  });

  // Quick Action Buttons
  actionBtns.forEach(btn => {
    btn.onclick = () => {
      input.value = btn.innerText;
      input.focus();
    };
  });
});
