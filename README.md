🎓 University Admissions Landing Pages — Full Stack Mini Project

This project is a full-stack mini-assignment designed for a Technical Business Analyst / Web Developer evaluation.
It includes two fully responsive landing pages, a lead submission system, mock APIs, and full Netlify deployment.

-------------------------------------------------------------------------------------------------------------

🚀 Live Demo (Netlify Deployment)

🔗 https://edu-admissions-lp.netlify.app

Both landing pages (LP-1 & LP-2) can be accessed directly from here.
-----------------------------------------------------------------------------------------------------------

📂 GitHub Repository

🔗 https://github.com/TarunK140/university-assignment
-----------------------------------------------------------------------------------------------------------
📌 Project Features
🎨 1. Two Fully Designed Landing Pages

LP-1 (index.html) — Starlight University

LP-2 (lp2.html) — Riverview Tech University

Each page includes:

University overview

Courses offered

Facilities

* Placement highlights

* Modal pop-up for course-wise fee structure

* Downloadable professional brochure

* Navigation between universities
------------------------------------------------------------------------------------------------------------
📝 2. Lead Form With API Integration

Each landing page contains a lead form with:

* Full Name

* Email

* Phone Number

* State

* Course Interested

* Intake Year

* Consent Checkbox

✔ Submits data to a Pipedream endpoint
✔ Displays success/error message without reload
------------------------------------------------------------------------------------------------------------
💻 3. Backend API (For Development Mode Only)

A simple Express.js backend serves JSON data during local development.

API Endpoints

GET /api/university/:id

GET /api/university/:id/fees

⚠️ Netlify cannot call localhost APIs,
so production uses a static JSON fallback inside main.js.
-----------------------------------------------------------------------------------------------------------
.

🧩 4. Modern Frontend (UX-focused)

* Clean & polished UI

* Glass-effect cards

* Smooth modal animations

* Fully mobile-responsive

* Dark/Light theme toggle

* Optimized layout grid
----------------------------------------------------------------------------------------------------------
  🛠️ Technologies Used
Layer	       Tools

Frontend  	HTML, CSS, JavaScript

Backend (Mock)  	Node.js, Express.js

Deployment  	Netlify

Automation	  Pipedream

Version Control  	Git, GitHub
----------------------------------------------------------------------------------------------------------
## 📁 Project Structure

university-assignment/
│
├── backend/ # Mock API server (Express.js)
│ ├── server.js
│ ├── data/
│ └── routes/
│
├── frontend/
│ ├── index.html # LP1
│ ├── lp2.html # LP2
│ ├── assets/
│ ├── css/styles.css
│ ├── js/main.js
│ └── brochure/ # PDF brochures
│
├── netlify.toml # Deploy config
└── README.md

----------------------------------------------------------------------------------------
⚙️ How to Run Locally

1️⃣ Clone the repository

git clone https://github.com/TarunK140/university-assignment

cd university-assignment


2️⃣ Start the Backend

-> cd backend

-> npm install

Backend runs at:

👉 http://localhost:5000

3️⃣ Open the Frontend
Option A — Live Server (Recommended)

Open project in VS Code

Right-click → Open With Live Server

Option B — Manual

Open:

  frontend/index.html
  ---------------------------------------------------------------------------------------------------------
🌐 Deployment (Netlify)

Deployment is automatic via GitHub → Netlify build.

netlify.toml ensures the correct folder is deployed:

[build]

  base = "frontend"
  
  publish = "frontend"
  ---------------------------------------------------------------------------------------------------------
  📘 Brochure PDFs

Each university has a professionally designed brochure with:

University logo

Campus and classroom photos

Courses

Facilities

Fee structure

Placement statistics

QR link

Beautiful layout

Stored at:
  frontend/assets/brochure/
  -------------------------------------------------------------------------------------------------------
  🏆 Challenges & Solutions
  
1️⃣ Netlify couldn't call localhost API

Problem: CORS + no backend in production

Solution: Static JSON fallback inside main.js.
----------------------------------------------------------------------------------------------------------
2️⃣ LP-1 ↔ LP-2 navigation issue

Problem: Wrong paths

Solution: Correct → href="index.html" and href="lp2.html"
-----------------------------------------------------------------------------------------------------------
3️⃣ Mobile responsiveness issues

Problem: Buttons overflowing screen

Solution: Grid + media queries + flex fixes
----------------------------------------------------------------------------------------------------------
4️⃣ Fee modal not opening

Problem: API failure

Solution: Replaced with offline JSON fallback
-----------------------------------------------------------------------------------------------------------
🙋‍♂️ Author

Tarun Kumar

MCA (AI & ML), Lovely Professional University

Aspiring Data Analyst | Business Analyst | Frontend Developer
---------------------------------------------------------------------------------------------------------
