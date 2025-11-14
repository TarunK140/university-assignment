// ------------ GET MODAL ELEMENTS ------------
const modalBackdrop = document.getElementById("modal-backdrop");
const modalContent = document.getElementById("modal-content");

// ------------ FETCH UNIVERSITY DATA ------------
async function fetchUniversity(id) {
  try {
    const res = await fetch(`http://localhost:5000/api/university/${id}`);
    return await res.json();
  } catch (err) {
    console.error("Error fetching university:", err);
  }
}

// ---------- STATIC FEES DATA (WORKS ON NETLIFY) ----------
const feeData = {
  uni1: [
    { name: "B.Sc Computer Science", fees_min: "80,000", fees_max: "1,20,000" },
    { name: "BBA", fees_min: "90,000", fees_max: "1,50,000" },
    { name: "MCA", fees_min: "1,00,000", fees_max: "1,80,000" }
  ],

  uni2: [
    { name: "B.E Computer Science", fees_min: "1,20,000", fees_max: "2,00,000" },
    { name: "B.Tech AI & ML", fees_min: "1,50,000", fees_max: "2,50,000" }
  ]
};

// ------------ FEES MODAL HANDLING ------------
// ------------ FEES MODAL HANDLING (polished) ------------
document.querySelectorAll(".fees-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const uniKey = btn.dataset.uni;
    const data = feeData[uniKey] || [];

    modalContent.innerHTML = `
      <h2>Fee Structure</h2>
      <ul class="fee-list">
        ${data.map(f => `<li><strong>${f.name}</strong><br><small>₹${f.fees_min} - ₹${f.fees_max}</small></li>`).join('')}
      </ul>
      <button class="close-modal">Close</button>
    `;

    modalBackdrop.classList.add("show");
  });
});

// close
modalBackdrop.addEventListener("click", (e) => {
  if (e.target.id === "modal-backdrop" || e.target.classList.contains("close-modal")) {
    modalBackdrop.classList.remove("show");
  }
});



function closeModal() {
  modalBackdrop.style.display = "none";
}

// ------------ LEAD FORM SUBMISSION ------------
const form = document.getElementById("lead-form");
const toast = document.getElementById("form-toast");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const endpoint = document.getElementById("pd-endpoint").value;

    try {
      await fetch(endpoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      });

      toast.style.display = "block";
      toast.textContent = "Thank you! Your form has been submitted.";
      toast.style.background = "#d2f8d2";

      form.reset();

      setTimeout(() => {
        toast.style.display = "none";
      }, 3000);

    } catch (error) {
      toast.style.display = "block";
      toast.textContent = "Error submitting form!";
      toast.style.background = "#ffd2d2";
    }
  });
}

// ========== DARK MODE TOGGLE ==========
const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

