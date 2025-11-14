🎓 University Admissions Landing Pages — Full Stack Mini Project

This project is a full-stack mini-assignment designed for a Technical Business Analyst / Web Developer evaluation.
It consists of two fully responsive university landing pages, a lead submission system,
a mock backend API, and a full Netlify deployment.

🚀 Live Demo (Netlify Deployment)

🔗 https://edu-admissions-lp.netlify.app

Both landing pages (LP-1 & LP-2) can be accessed directly from the home page.

📂 GitHub Repository

🔗 https://github.com/TarunK140/university-assignment

📌 Project Features
🎨 1. Two Fully Designed Landing Pages

LP-1(index.html) — Starlight University
LP-2 — Riverview Tech University

Each page includes:

University overview

Courses offered

Facilities

Placement highlights

Modal pop-up for course-wise fee structure

Downloadable professional brochure

Navigation between both universities

📝 2. Lead Form with API Integration

Each landing page contains a lead capture form:

Full Name

Email

Phone Number

State

Course Interested

Intake Year

Consent Checkbox

✔ Form submits data to a Pipedream endpoint
✔ Displays success or error message without reloading the page

💻 3. Backend API (Mock for Development)

A simple Express.js API was used locally to provide JSON data during development:

API Endpoints
GET /api/university/:id
GET /api/university/:id/fees


Note:
Netlify cannot call localhost APIs, so a static JSON fallback is used on production.

🧩 4. Modern Frontend with Smooth UI & UX

Beautiful, polished UI

Glass-effect cards

Interactive modal animations

Fully mobile-responsive design

Dark/Light theme toggle

Clean color palette

Optimized layout grid

🛠️ Technologies Used
Layer	Tools
Frontend	HTML, CSS, JavaScript
Backend (Mock)	Node.js, Express.js
Deployment	Netlify
Automation	Pipedream
Version Control	Git & GitHub
📁 Project Folder Structure
university-assignment/
│
├── backend/              # Mock API server (Express.js)
│   ├── server.js
│   ├── data/
│   └── routes/
│
├── frontend/             # Landing pages (Netlify hosted)
│   ├── index.html        # LP-1 (Starlight University)
│   ├── lp2.html          # LP-2 (Riverview Tech University)
│   ├── assets/
│   │   ├── css/styles.css
│   │   ├── js/main.js
│   │   └── brochure/     # PDF brochures
│
├── netlify.toml          # Deployment configuration
└── README.md

⚙️ How to Run Locally
1️⃣ Clone the repository
git clone https://github.com/TarunK140/university-assignment
cd university-assignment

2️⃣ Start the backend
cd backend
npm install
npm start


Backend will run on:

http://localhost:5000

3️⃣ Open the frontend

Using VS Code:

Right-click → Open With Live Server


Or open index.html manually in the browser.

🌐 Deployment (Netlify)

Deployment is fully automated:

Push code to GitHub

Netlify detects changes

Auto-build + auto-deploy

The deployment configuration (netlify.toml) ensures Netlify serves the correct folder:

[build]
  base = "frontend"
  publish = "frontend"

📘 Brochure PDFs

Each university has a custom professional brochure including:

University logo

Photo sections (classrooms, labs, library, hostel)

Courses

Fee structure

Facilities

Placement stats

QR linking to landing page

Stored at:

frontend/assets/brochure/

🏆 Challenges & Solutions
1️⃣ API not loading on Netlify (CORS + localhost issue)

Netlify cannot fetch APIs running on localhost.
✔ Solution: Used static JSON fallback inside main.js.

2️⃣ Navigation issues between LP-1 & LP-2

Links were breaking due to folder path differences.
✔ Solution: Corrected paths to index.html and lp2.html.

3️⃣ Mobile responsiveness issues

Buttons were overflowing the screen.
✔ Solution: Refined grid + added media queries.

4️⃣ Fee modal not opening

Caused by missing API response.
✔ Solution: Replaced with offline JavaScript data.

🙋‍♂️ Author

Tarun Kumar
MCA (AI & ML) — Lovely Professional University
Aspiring Data Analyst / Business Analyst / Frontend Engineer
