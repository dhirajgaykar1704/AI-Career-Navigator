// AI Career Navigator Application

// Assessment Questions
const questions = [
    {
        id: 1,
        text: "Which aspect of AI interests you the most?",
        options: [
            { text: "Building and training machine learning models", score: { ml: 5, ds: 3, research: 4, ethics: 1, nlp: 2, cv: 2 } },
            { text: "Analyzing data to extract insights", score: { ml: 3, ds: 5, research: 2, ethics: 1, nlp: 2, cv: 2 } },
            { text: "Advancing the theoretical foundations of AI", score: { ml: 2, ds: 2, research: 5, ethics: 3, nlp: 2, cv: 2 } },
            { text: "Ensuring AI systems are fair and ethical", score: { ml: 1, ds: 2, research: 3, ethics: 5, nlp: 2, cv: 1 } },
            { text: "Making computers understand human language", score: { ml: 2, ds: 3, research: 3, ethics: 2, nlp: 5, cv: 1 } },
            { text: "Teaching computers to see and understand images", score: { ml: 3, ds: 2, research: 3, ethics: 1, nlp: 1, cv: 5 } }
        ]
    },
    {
        id: 2,
        text: "Which skills do you enjoy using or would like to develop?",
        options: [
            { text: "Programming and software engineering", score: { ml: 5, ds: 3, research: 3, ethics: 2, nlp: 4, cv: 4 } },
            { text: "Statistical analysis and mathematics", score: { ml: 4, ds: 5, research: 4, ethics: 2, nlp: 3, cv: 3 } },
            { text: "Research and academic writing", score: { ml: 2, ds: 3, research: 5, ethics: 4, nlp: 3, cv: 3 } },
            { text: "Policy development and ethical frameworks", score: { ml: 1, ds: 2, research: 3, ethics: 5, nlp: 2, cv: 1 } },
            { text: "Linguistics and language processing", score: { ml: 2, ds: 3, research: 3, ethics: 2, nlp: 5, cv: 1 } },
            { text: "Image processing and visual recognition", score: { ml: 3, ds: 2, research: 3, ethics: 1, nlp: 1, cv: 5 } }
        ]
    },
    {
        id: 3,
        text: "What type of problems do you enjoy solving?",
        options: [
            { text: "Building systems that learn from data", score: { ml: 5, ds: 4, research: 3, ethics: 2, nlp: 3, cv: 3 } },
            { text: "Finding patterns and insights in complex datasets", score: { ml: 3, ds: 5, research: 3, ethics: 2, nlp: 3, cv: 3 } },
            { text: "Developing new algorithms and theoretical approaches", score: { ml: 3, ds: 2, research: 5, ethics: 2, nlp: 3, cv: 3 } },
            { text: "Addressing societal impacts and ethical dilemmas", score: { ml: 1, ds: 2, research: 3, ethics: 5, nlp: 2, cv: 2 } },
            { text: "Making computers understand and generate text", score: { ml: 3, ds: 3, research: 3, ethics: 2, nlp: 5, cv: 1 } },
            { text: "Enabling computers to interpret visual information", score: { ml: 3, ds: 2, research: 3, ethics: 1, nlp: 1, cv: 5 } }
        ]
    },
    {
        id: 4,
        text: "What is your preferred work environment?",
        options: [
            { text: "Tech company or startup", score: { ml: 5, ds: 4, research: 2, ethics: 3, nlp: 4, cv: 4 } },
            { text: "Data-driven organization", score: { ml: 3, ds: 5, research: 2, ethics: 3, nlp: 3, cv: 3 } },
            { text: "Academic or research institution", score: { ml: 2, ds: 3, research: 5, ethics: 4, nlp: 3, cv: 3 } },
            { text: "Policy, governance, or non-profit", score: { ml: 1, ds: 2, research: 3, ethics: 5, nlp: 2, cv: 1 } },
            { text: "NLP-focused company or research lab", score: { ml: 3, ds: 3, research: 4, ethics: 2, nlp: 5, cv: 2 } },
            { text: "Computer vision or robotics company", score: { ml: 3, ds: 2, research: 3, ethics: 1, nlp: 1, cv: 5 } }
        ]
    },
    {
        id: 5,
        text: "Which of these technologies are you most excited about?",
        options: [
            { text: "Deep learning and neural networks", score: { ml: 5, ds: 3, research: 4, ethics: 2, nlp: 4, cv: 4 } },
            { text: "Big data analytics and visualization", score: { ml: 3, ds: 5, research: 2, ethics: 3, nlp: 3, cv: 3 } },
            { text: "Cutting-edge AI research areas", score: { ml: 3, ds: 2, research: 5, ethics: 3, nlp: 3, cv: 3 } },
            { text: "Responsible AI and fairness tools", score: { ml: 2, ds: 3, research: 3, ethics: 5, nlp: 2, cv: 2 } },
            { text: "Language models and chatbots", score: { ml: 3, ds: 3, research: 3, ethics: 2, nlp: 5, cv: 1 } },
            { text: "Computer vision and image recognition", score: { ml: 3, ds: 2, research: 3, ethics: 1, nlp: 1, cv: 5 } }
        ]
    }
];

// Career Paths Data
const careerPaths = {
    ml: {
        id: "ml",
        title: "Machine Learning Engineer",
        description: "As a Machine Learning Engineer, you'll design and implement machine learning models and systems. You'll work on creating algorithms that allow computers to learn from data and make predictions or decisions.",
        icon: "fas fa-brain",
        skills: [
            "Python programming",
            "TensorFlow/PyTorch",
            "Data structures & algorithms",
            "Statistical modeling",
            "Software engineering",
            "Cloud platforms (AWS, GCP, Azure)"
        ],
        learningPath: [
            {
                step: 1,
                title: "Master Programming Fundamentals",
                description: "Strengthen your Python skills and understand data structures and algorithms.",
                resources: [
                    "Python for Data Science and Machine Learning Bootcamp (Udemy)",
                    "Data Structures and Algorithms Specialization (Coursera)"
                ]
            },
            {
                step: 2,
                title: "Build ML Foundations",
                description: "Learn the core concepts of machine learning and statistical modeling.",
                resources: [
                    "Machine Learning by Andrew Ng (Coursera)",
                    "Introduction to Statistical Learning (Book)"
                ]
            },
            {
                step: 3,
                title: "Deep Learning Specialization",
                description: "Master neural networks and deep learning frameworks.",
                resources: [
                    "Deep Learning Specialization by Andrew Ng (Coursera)",
                    "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (Book)"
                ]
            },
            {
                step: 4,
                title: "MLOps and Deployment",
                description: "Learn to deploy and maintain ML models in production.",
                resources: [
                    "Machine Learning Engineering for Production (MLOps) Specialization (Coursera)",
                    "Designing Machine Learning Systems (Book)"
                ]
            }
        ],
        marketInsights: {
            demand: "Very High",
            salary: "$110,000 - $170,000",
            growth: "22% growth expected over the next decade",
            topEmployers: "Google, Amazon, Microsoft, Meta, startups"
        }
    },
    ds: {
        id: "ds",
        title: "Data Scientist",
        description: "As a Data Scientist, you'll analyze and interpret complex data to help organizations make better decisions. You'll extract insights from large datasets and communicate findings to stakeholders.",
        icon: "fas fa-chart-line",
        skills: [
            "Statistical analysis",
            "Data visualization",
            "Python/R programming",
            "SQL and database management",
            "Machine learning",
            "Business acumen"
        ],
        learningPath: [
            {
                step: 1,
                title: "Build Statistical Foundations",
                description: "Master statistics and probability theory.",
                resources: [
                    "Statistics with R Specialization (Coursera)",
                    "Think Stats: Exploratory Data Analysis in Python (Book)"
                ]
            },
            {
                step: 2,
                title: "Learn Data Analysis Tools",
                description: "Become proficient with Python, R, and SQL for data analysis.",
                resources: [
                    "Data Analysis with Python (Coursera)",
                    "SQL for Data Science (Coursera)"
                ]
            },
            {
                step: 3,
                title: "Master Data Visualization",
                description: "Learn to create compelling visualizations to communicate insights.",
                resources: [
                    "Data Visualization with Tableau Specialization (Coursera)",
                    "Storytelling with Data (Book)"
                ]
            },
            {
                step: 4,
                title: "Applied Machine Learning",
                description: "Apply machine learning techniques to solve real-world problems.",
                resources: [
                    "Applied Data Science with Python Specialization (Coursera)",
                    "Feature Engineering for Machine Learning (Book)"
                ]
            }
        ],
        marketInsights: {
            demand: "High",
            salary: "$100,000 - $160,000",
            growth: "28% growth expected over the next decade",
            topEmployers: "Tech companies, finance, healthcare, consulting firms"
        }
    },
    research: {
        id: "research",
        title: "AI Research Scientist",
        description: "As an AI Research Scientist, you'll advance the field of AI through innovative research. You'll develop new algorithms and approaches to solve complex problems and publish your findings.",
        icon: "fas fa-microchip",
        skills: [
            "Advanced mathematics",
            "Deep learning architectures",
            "Research methodology",
            "Academic writing",
            "Programming",
            "Critical thinking"
        ],
        learningPath: [
            {
                step: 1,
                title: "Build Strong Mathematical Foundations",
                description: "Master linear algebra, calculus, probability, and statistics.",
                resources: [
                    "Mathematics for Machine Learning Specialization (Coursera)",
                    "Deep Learning (Book by Goodfellow, Bengio, and Courville)"
                ]
            },
            {
                step: 2,
                title: "Advanced Machine Learning",
                description: "Deepen your understanding of machine learning algorithms and theory.",
                resources: [
                    "Advanced Machine Learning Specialization (Coursera)",
                    "Pattern Recognition and Machine Learning (Book by Bishop)"
                ]
            },
            {
                step: 3,
                title: "Research Methodology",
                description: "Learn how to conduct and publish research in AI.",
                resources: [
                    "How to Read and Write Research Papers (Stanford CS230)",
                    "Research Methods for Computer Science (Online Course)"
                ]
            },
            {
                step: 4,
                title: "Specialization in a Research Area",
                description: "Focus on a specific area of AI research that interests you.",
                resources: [
                    "Attend conferences like NeurIPS, ICML, ICLR",
                    "Join research communities and read papers on arXiv"
                ]
            }
        ],
        marketInsights: {
            demand: "High for PhDs",
            salary: "$120,000 - $200,000",
            growth: "15% growth expected over the next decade",
            topEmployers: "Research labs, universities, Google DeepMind, OpenAI"
        }
    },
    ethics: {
        id: "ethics",
        title: "AI Ethics Specialist",
        description: "As an AI Ethics Specialist, you'll ensure AI systems are developed and deployed ethically. You'll address bias, fairness, and transparency in AI applications and help develop ethical guidelines.",
        icon: "fas fa-balance-scale",
        skills: [
            "Ethical frameworks",
            "Policy development",
            "Bias detection & mitigation",
            "Interdisciplinary communication",
            "Technical understanding of AI",
            "Critical analysis"
        ],
        learningPath: [
            {
                step: 1,
                title: "Understand AI Fundamentals",
                description: "Build a solid understanding of how AI systems work.",
                resources: [
                    "AI For Everyone (Coursera)",
                    "Elements of AI (Free Online Course)"
                ]
            },
            {
                step: 2,
                title: "Study Ethics and Philosophy",
                description: "Learn ethical frameworks and philosophical approaches to technology.",
                resources: [
                    "Ethics in AI (Oxford University Online Course)",
                    "Ethics of Artificial Intelligence and Robotics (Stanford Encyclopedia of Philosophy)"
                ]
            },
            {
                step: 3,
                title: "Fairness in Machine Learning",
                description: "Learn to detect and mitigate bias in AI systems.",
                resources: [
                    "Fairness in Machine Learning (fairmlbook.org)",
                    "Fairness and Machine Learning (Book by Barocas, Hardt, and Narayanan)"
                ]
            },
            {
                step: 4,
                title: "AI Policy and Governance",
                description: "Understand the regulatory landscape and policy approaches to AI.",
                resources: [
                    "AI Policy and Governance (MIT Media Lab Course)",
                    "The Oxford Handbook of Ethics of AI (Book)"
                ]
            }
        ],
        marketInsights: {
            demand: "Growing rapidly",
            salary: "$90,000 - $150,000",
            growth: "30% growth expected over the next decade",
            topEmployers: "Tech companies, non-profits, government, academia"
        }
    },
    nlp: {
        id: "nlp",
        title: "NLP Engineer",
        description: "As an NLP Engineer, you'll develop systems that can understand, interpret, and generate human language. You'll build chatbots, translation systems, sentiment analysis tools, and more.",
        icon: "fas fa-comments",
        skills: [
            "Computational linguistics",
            "Transformer models",
            "Text processing",
            "Python, NLTK, spaCy",
            "Deep learning",
            "Data preprocessing"
        ],
        learningPath: [
            {
                step: 1,
                title: "Master Python and NLP Libraries",
                description: "Learn Python programming and NLP-specific libraries.",
                resources: [
                    "Natural Language Processing with Python (Book)",
                    "spaCy Course (Free Online Course)"
                ]
            },
            {
                step: 2,
                title: "Understand Linguistic Foundations",
                description: "Learn the basics of linguistics and how they apply to NLP.",
                resources: [
                    "Introduction to Linguistics for Natural Language Processing (Stanford Online)",
                    "Speech and Language Processing (Book by Jurafsky and Martin)"
                ]
            },
            {
                step: 3,
                title: "Deep Learning for NLP",
                description: "Master transformer models and other deep learning approaches for NLP.",
                resources: [
                    "Natural Language Processing Specialization (Coursera)",
                    "Hugging Face Transformers Documentation and Tutorials"
                ]
            },
            {
                step: 4,
                title: "Build Advanced NLP Applications",
                description: "Create complex NLP systems like chatbots, translation tools, etc.",
                resources: [
                    "Advanced NLP with TensorFlow 2 (O'Reilly)",
                    "Building NLP Applications with PyTorch (Udemy)"
                ]
            }
        ],
        marketInsights: {
            demand: "Very High",
            salary: "$110,000 - $170,000",
            growth: "25% growth expected over the next decade",
            topEmployers: "Google, Amazon, Microsoft, Meta, NLP startups"
        }
    },
    cv: {
        id: "cv",
        title: "Computer Vision Engineer",
        description: "As a Computer Vision Engineer, you'll create systems that can process, analyze, and understand visual data from the world. You'll develop image recognition, object detection, and visual understanding systems.",
        icon: "fas fa-eye",
        skills: [
            "Image processing",
            "CNN architectures",
            "OpenCV",
            "Python, TensorFlow, PyTorch",
            "Deep learning",
            "3D vision (optional)"
        ],
        learningPath: [
            {
                step: 1,
                title: "Learn Image Processing Fundamentals",
                description: "Understand how digital images work and basic processing techniques.",
                resources: [
                    "Digital Image Processing (Book by Gonzalez and Woods)",
                    "OpenCV Python Tutorials (Official Documentation)"
                ]
            },
            {
                step: 2,
                title: "Master Computer Vision Libraries",
                description: "Become proficient with OpenCV and other CV libraries.",
                resources: [
                    "PyImageSearch Tutorials",
                    "Computer Vision: Algorithms and Applications (Book by Szeliski)"
                ]
            },
            {
                step: 3,
                title: "Deep Learning for Computer Vision",
                description: "Learn CNN architectures and deep learning approaches for CV.",
                resources: [
                    "Deep Learning for Computer Vision (Stanford CS231n)",
                    "Practical Deep Learning for Computer Vision (Book)"
                ]
            },
            {
                step: 4,
                title: "Advanced Computer Vision Applications",
                description: "Build complex CV systems like object detection, segmentation, etc.",
                resources: [
                    "Advanced Computer Vision with TensorFlow (Coursera)",
                    "Hands-On Computer Vision with PyTorch (Book)"
                ]
            }
        ],
        marketInsights: {
            demand: "High",
            salary: "$110,000 - $170,000",
            growth: "22% growth expected over the next decade",
            topEmployers: "Autonomous vehicle companies, robotics, tech giants, security firms"
        }
    }
};

// DOM Elements
const startAssessmentBtn = document.getElementById('start-assessment');
const assessmentSection = document.getElementById('assessment');
const introSection = document.getElementById('intro');
const questionContainer = document.getElementById('question-container');
const prevQuestionBtn = document.getElementById('prev-question');
const nextQuestionBtn = document.getElementById('next-question');
const submitAssessmentBtn = document.getElementById('submit-assessment');
const resultsSection = document.getElementById('results');
const primaryResultDiv = document.getElementById('primary-result');
const alternativeResultsDiv = document.getElementById('alternative-results');
const skillAssessmentSection = document.getElementById('skill-assessment');
const skillsContainer = document.getElementById('skills-container');
const analyzeSkillsBtn = document.getElementById('analyze-skills');
const learningPathSection = document.getElementById('learning-path');
const learningContainer = document.getElementById('learning-container');
const jobMarketVisualization = document.getElementById('job-market-visualization');

// State
let currentQuestionIndex = 0;
let userAnswers = [];
let careerScores = { ml: 0, ds: 0, research: 0, ethics: 0, nlp: 0, cv: 0 };
let skillLevels = {};

// Event Listeners
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    startAssessmentBtn.addEventListener('click', startAssessment);
    prevQuestionBtn.addEventListener('click', showPreviousQuestion);
    nextQuestionBtn.addEventListener('click', showNextQuestion);
    submitAssessmentBtn.addEventListener('click', submitAssessment);
    analyzeSkillsBtn.addEventListener('click', analyzeSkills);
    
    // Filter buttons for career paths
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Filter functionality would be implemented here
        });
    });
}

function startAssessment() {
    introSection.classList.add('hidden');
    assessmentSection.classList.remove('hidden');
    renderQuestion(currentQuestionIndex);
}

function renderQuestion(index) {
    const question = questions[index];
    
    let html = `
        <div class="question">
            <h3>Question ${index + 1} of ${questions.length}</h3>
            <p>${question.text}</p>
            <div class="options">
    `;
    
    question.options.forEach((option, optionIndex) => {
        const isSelected = userAnswers[index] === optionIndex;
        html += `
            <div class="option ${isSelected ? 'selected' : ''}">
                <input type="radio" name="q${question.id}" id="q${question.id}_opt${optionIndex}" 
                    ${isSelected ? 'checked' : ''} value="${optionIndex}">
                <label for="q${question.id}_opt${optionIndex}">${option.text}</label>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    questionContainer.innerHTML = html;
    
    // Add event listeners to options
    document.querySelectorAll(`input[name="q${question.id}"]`).forEach(input => {
        input.addEventListener('change', (e) => {
            userAnswers[index] = parseInt(e.target.value);
            
            // Update UI to show selected option
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            e.target.parentElement.classList.add('selected');
        });
    });
    
    // Update navigation buttons
    prevQuestionBtn.disabled = index === 0;
    
    if (index === questions.length - 1) {
        nextQuestionBtn.classList.add('hidden');
        submitAssessmentBtn.classList.remove('hidden');
    } else {
        nextQuestionBtn.classList.remove('hidden');
        submitAssessmentBtn.classList.add('hidden');
    }
}

function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion(currentQuestionIndex);
    }
}

function showNextQuestion() {
    // Only proceed if user has answered the current question
    if (userAnswers[currentQuestionIndex] !== undefined) {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            renderQuestion(currentQuestionIndex);
        }
    } else {
        alert('Please select an answer before proceeding.');
    }
}

function submitAssessment() {
    // Check if all questions are answered
    if (userAnswers.length < questions.length) {
        alert('Please answer all questions before submitting.');
        return;
    }
    
    // Calculate career scores
    calculateCareerScores();
    
    // Show results
    assessmentSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    
    // Render results
    renderResults();
    
    // Prepare skill assessment
    prepareSkillAssessment();
}

function calculateCareerScores() {
    // Reset scores
    careerScores = { ml: 0, ds: 0, research: 0, ethics: 0, nlp: 0, cv: 0 };
    
    // Calculate scores based on user answers
    userAnswers.forEach((answerIndex, questionIndex) => {
        const question = questions[questionIndex];
        const selectedOption = question.options[answerIndex];
        
        // Add scores for each career path
        for (const [path, score] of Object.entries(selectedOption.score)) {
            careerScores[path] += score;
        }
    });
}

function renderResults() {
    // Sort career paths by score
    const sortedPaths = Object.entries(careerScores)
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0]);
    
    const primaryPath = sortedPaths[0];
    const alternativePaths = sortedPaths.slice(1, 3);
    
    // Render primary result
    primaryResultDiv.innerHTML = `
        <div class="result-card primary">
            <div class="result-header">
                <i class="${careerPaths[primaryPath].icon}"></i>
                <h3>${careerPaths[primaryPath].title}</h3>
            </div>
            <div class="result-body">
                <p>${careerPaths[primaryPath].description}</p>
                <h4>Key Skills:</h4>
                <ul>
                    ${careerPaths[primaryPath].skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
                <div class="match-score">
                    <span>Match Score: ${Math.round((careerScores[primaryPath] / 25) * 100)}%</span>
                </div>
            </div>
        </div>
    `;
    
    // Render alternative results
    alternativeResultsDiv.innerHTML = alternativePaths.map(path => `
        <div class="result-card alternative">
            <div class="result-header">
                <i class="${careerPaths[path].icon}"></i>
                <h3>${careerPaths[path].title}</h3>
            </div>
            <div class="result-body">
                <p>${careerPaths[path].description}</p>
                <div class="match-score">
                    <span>Match Score: ${Math.round((careerScores[path] / 25) * 100)}%</span>
                </div>
            </div>
        </div>
    `).join('');
}

function prepareSkillAssessment() {
    // Get primary career path
    const primaryPath = Object.entries(careerScores)
        .sort((a, b) => b[1] - a[1])[0][0];
    
    // Get skills for primary path
    const skills = careerPaths[primaryPath].skills;
    
    // Render skill assessment
    skillsContainer.innerHTML = skills.map((skill, index) => `
        <div class="skill-item" data-skill="${skill.toLowerCase().replace(/\s+/g, '-')}">
            <div class="skill-name">
                <span>${skill}</span>
                <span class="skill-rating" id="rating-${index}">Not Rated</span>
            </div>
            <div class="skill-level" data-index="${index}">
                <button class="level-btn" data-level="1">1</button>
                <button class="level-btn" data-level="2">2</button>
                <button class="level-btn" data-level="3">3</button>
                <button class="level-btn" data-level="4">4</button>
                <button class="level-btn" data-level="5">5</button>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to skill level buttons
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const level = parseInt(e.target.dataset.level);
            const skillIndex = parseInt(e.target.parentElement.dataset.index);
            const skillName = skills[skillIndex];
            
            // Update UI
            const skillItem = e.target.closest('.skill-item');
            skillItem.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Update rating text
            const ratingText = document.getElementById(`rating-${skillIndex}`);
            const ratings = ['Not Rated', 'Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'];
            ratingText.textContent = ratings[level];
            
            // Store skill level
            skillLevels[skillName] = level;
        });
    });
    
    // Show skill assessment section
    resultsSection.classList.add('hidden');
    skillAssessmentSection.classList.remove('hidden');
}

function analyzeSkills() {
    // Check if all skills are rated
    const primaryPath = Object.entries(careerScores)
        .sort((a, b) => b[1] - a[1])[0][0];
    const skills = careerPaths[primaryPath].skills;
    
    const unratedSkills = skills.filter(skill => !skillLevels[skill]);
    
    if (unratedSkills.length > 0) {
        alert('Please rate all skills before proceeding.');
        return;
    }
    
    // Generate learning path
    generateLearningPath(primaryPath);
    
    // Show learning path section
    skillAssessmentSection.classList.add('hidden');
    learningPathSection.classList.remove('hidden');
}

function generateLearningPath(careerPathId) {
    const path = careerPaths[careerPathId];
    
    // Calculate average skill level
    const skills = path.skills;
    const skillValues = skills.map(skill => skillLevels[skill]);
    const avgSkillLevel = skillValues.reduce((sum, level) => sum + level, 0) / skillValues.length;
    
    // Generate personalized learning path
    let learningPathHtml = `
        <div class="learning-path-intro">
            <h3>Based on your skill assessment (Average: ${avgSkillLevel.toFixed(1)}/5)</h3>
            <p>Here's a personalized learning path to help you become a successful ${path.title}:</p>
        </div>
    `;
    
    // Add learning steps
    path.learningPath.forEach(step => {
        learningPathHtml += `
            <div class="learning-step">
                <div class="step-number">${step.step}</div>
                <div class="step-content">
                    <h3>${step.title}</h3>
                    <p>${step.description}</p>
                    <div class="resources">
                        <h4>Recommended Resources:</h4>
                        <ul>
                            ${step.resources.map(resource => `<li>${resource}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    });
    
    learningContainer.innerHTML = learningPathHtml;
    
    // Generate job market visualization
    generateJobMarketVisualization(careerPathId);
}

function generateJobMarketVisualization(careerPathId) {
    const marketData = careerPaths[careerPathId].marketInsights;
    
    const visualizationHtml = `
        <div class="market-data">
            <div class="market-item">
                <h4>Demand</h4>
                <p class="highlight">${marketData.demand}</p>
            </div>
            <div class="market-item">
                <h4>Salary Range</h4>
                <p class="highlight">${marketData.salary}</p>
            </div>
            <div class="market-item">
                <h4>Growth Projection</h4>
                <p class="highlight">${marketData.growth}</p>
            </div>
            <div class="market-item">
                <h4>Top Employers</h4>
                <p>${marketData.topEmployers}</p>
            </div>
        </div>
        <div class="market-note">
            <p><i class="fas fa-info-circle"></i> Data based on industry reports and job market analysis as of 2023.</p>
        </div>
    `;
    
    jobMarketVisualization.innerHTML = visualizationHtml;
}