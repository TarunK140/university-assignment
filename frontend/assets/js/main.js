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

// ------------ FEES MODAL HANDLING ------------
document.querySelectorAll(".fees-btn").forEach(btn => {
  btn.addEventListener("click", async () => {
    const uniId = btn.dataset.uni;

    const response = await fetch(`http://localhost:5000/api/university/${uniId}/fees`);
    const data = await response.json();

    if (!data) return alert("Error loading fees!");

    modalContent.innerHTML = `
      <h3>Fee Structure</h3>
      ${data.map(course => `
        <p><b>${course.name}</b>: ₹${course.fees_min} - ₹${course.fees_max}</p>
      `).join("")}
      <button onclick="closeModal()">Close</button>
    `;

    modalBackdrop.style.display = "flex";
  });
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

