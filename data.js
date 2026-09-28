// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    // Personal information object
    owner: {
        name: "Jake Xiang",        // TODO: Add your name
        title: "Data Engineer and Data Science Student at UC Berkeley",      // TODO: Add your professional title
        email: "jakex@berkeley.edu", // TODO: Add your email
        location: "San Mateo, California",  // TODO: Add your location
        bio: "I am passionate about buidling using new technologies in the context of data whether it be data pipelining or producing data models. Besides my academic and professional passions, I enjoy watching films, playing sports, and nature." // TODO: Add your bio
    },
    
    // Skills as an array
    skills: [
        "Python",   // TODO: Replace with your actual skills
        "SQL",  // TODO: Add more skills
        "Java",    // TODO: Students should have at least 5 skills
        // TODO: Add more skills - aim for 5-7 skills total
        "Full Stack Development",
        "Data Engineering",
        "Data Science"
    ],
    
    // Projects as array of objects
    projects: [
        {
            title: "Web Directory with Chatbot and Smart Member Matching",
            description: "Built a fullstack alumni portal with React, Flask, and Google OAuth that grew alumni outreach. Used a Graph Convolutional Network for profile recommendations with a 0.82 ROC AUC",
            technologies: ["React", "PyTorch", "NetworkX", "HTML", "Flask", "JavaScript", "Python", "OpenAI", "Airtable"], // Array of technologies used
            completionDate: "2026-05-15",   // When you completed it
            featured: true                   // Is this a featured project?
        },
        {
            title: "Universal Health Services Revenue Forecasting",
            description: "Built linear and ARIMA time series regression models to forecast revenue and improve monthly revenue predictions. Applied Ridge Regression, Random Forest, Gradient Boosting, and Stacking Regressors to achieve an R squared above 0.8.",
            technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Statsmodels", "TensorFlow", "Keras"],
            completionDate: "2025-12-12",
            featured: false
        }
        // TODO: Add more projects during class
    ],
    
    // Contact and availability information
    // Full-time availability confirmed; freelance and part-time preferences are preserved.
    availability: {
        freelance: false,    // TODO: Set to true if available for freelance work
        fullTime: true,     // TODO: Set to true if seeking full-time position
        partTime: true       // TODO: Set to true if available for part-time work
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:
// console.log("Owner name:", portfolio.owner.name);
// console.log("First skill:", portfolio.skills[0]);
// console.log("Number of projects:", portfolio.projects.length);
console.log("Owner name:", portfolio.owner.name);
console.log("First skill:", portfolio.skills[0]);
console.log("Number of projects:", portfolio.projects.length);

// TODO: Students will learn to access nested properties
// console.log("Email:", portfolio.owner.email);
// console.log("Second project:", portfolio.projects[1]);
// console.log("Available for freelance?", portfolio.availability.freelance);
console.log("Email:", portfolio.owner.email);
console.log("Second project:", portfolio.projects[1]);
console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
// let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
// console.log("Summary:", summary);
let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills and ${portfolio.projects.length} projects.`;
console.log("Summary:", summary);

// Find featured projects using a basic for loop.
for (let i = 0; i< portfolio.projects.length;i++) {
    if (portfolio.projects[i].featured === true) {
        console.log("Featured:", portfolio.projects[i].title);
    }
}

// Convert the portfolio to formatted JSON for console exploration.
let dataAsJSON = JSON.stringify(portfolio, null, 2);
console.log("Portfolio as JSON:", dataAsJSON);
