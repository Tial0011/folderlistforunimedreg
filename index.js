document.addEventListener("DOMContentLoaded", () => {
  const foldersContainer = document.getElementById("folders");
  const fileImagesContainer = document.getElementById("fileImages");

  // ✅ File list
  const files = [
    "Student Data Form",
    "Student’s Information Form",
    "Health Centre Form",
    "Student’s Registration Form",
    "Admission Clearance Form",
    "Hostel Allocation Slip",
    "Receipt of Acceptance Fee Payment",
    "Receipt of School Fees Payment",
    "JAMB Result Slip",
    "O’Level Results",
    "NIN Slip",
    "Certificate of Origin",
    "Birth Certificate",
    "Attestation Letters (2)",
  ];

  // ✅ Map each file → image location (just update these paths)
  const fileImages = {
    "Student Data Form": "accFee.jpeg",
    "Student’s Information Form": "./imgs/InformationForm.jpeg",
    "Health Centre Form": "./imgs/MedicalForm.jpeg",
    "Student’s Registration Form": "./imgs/RegistrationForm.jpeg",
    "Admission Clearance Form": "./imgs/AdmissionClearanceForm.jpeg",
    "Hostel Allocation Slip": "./imgs/HostelAll.jpeg",
    "Receipt of Acceptance Fee Payment": "./imgs/accFee.jpeg",
    "Receipt of School Fees Payment": "./imgs/EvidenceOfSchoolFeesPayment.jpeg",
    "JAMB Result Slip": "./img/JambReg.jpeg",
    "O’Level Results": "imgs/Olevel.jpeg",
    "NIN Slip": "./imgs/NinSlip.jpeg",
    "Certificate of Origin": "./imgs/CertificateOfOrigin.jpeg",
    "Birth Certificate": "imgs/CertificateOfBirth.jpeg",
    "Attestation Letters (2)": "./imgs/attestation.jpeg",
  };

  // ✅ Generate 4 folders dynamically
  for (let i = 1; i <= 4; i++) {
    const folder = document.createElement("div");
    folder.classList.add("folder");

    // Folder button
    const button = document.createElement("button");
    button.classList.add("folder-btn");
    button.textContent = `📂 Folder ${i}`;
    folder.appendChild(button);

    // Dropdown
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");

    // Progress bar
    const progressContainer = document.createElement("div");
    progressContainer.classList.add("progress-container");
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressContainer.appendChild(progressBar);
    dropdown.appendChild(progressContainer);

    // Add checkboxes for all files
    files.forEach((file) => {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(" " + file));
      dropdown.appendChild(label);

      // Checkbox logic
      checkbox.addEventListener("change", () => {
        // Strike through completed
        if (checkbox.checked) {
          label.classList.add("completed");
        } else {
          label.classList.remove("completed");
        }

        // Update progress bar
        const total = dropdown.querySelectorAll(
          "input[type='checkbox']"
        ).length;
        const checked = dropdown.querySelectorAll(
          "input[type='checkbox']:checked"
        ).length;
        const percent = (checked / total) * 100;
        progressBar.style.width = percent + "%";

        // Optional: change color of bar based on completion %
        if (percent < 40) {
          progressBar.style.background = "#e63946"; // red
        } else if (percent < 80) {
          progressBar.style.background = "#f4a261"; // orange
        } else {
          progressBar.style.background = "#2a9d8f"; // green
        }
      });
    });

    folder.appendChild(dropdown);
    foldersContainer.appendChild(folder);

    // Toggle dropdown on click
    button.addEventListener("click", () => {
      dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
    });
  }

  // ✅ Render file images section
  files.forEach((file) => {
    const wrapper = document.createElement("div");
    const img = document.createElement("img");
    img.src = fileImages[file]; // location from map
    img.alt = file;
    const caption = document.createElement("p");
    caption.textContent = file;

    wrapper.appendChild(img);
    wrapper.appendChild(caption);
    fileImagesContainer.appendChild(wrapper);
  });
});
