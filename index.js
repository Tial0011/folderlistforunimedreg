document.addEventListener("DOMContentLoaded", () => {
  const foldersContainer = document.getElementById("folders");

  // List of files
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

  // Generate 4 folders dynamically
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

    // Add all files as checkboxes
    files.forEach((file) => {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(" " + file));
      dropdown.appendChild(label);

      // Checkbox logic
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          label.classList.add("completed");
        } else {
          label.classList.remove("completed");
        }

        const total = dropdown.querySelectorAll(
          "input[type='checkbox']"
        ).length;
        const checked = dropdown.querySelectorAll(
          "input[type='checkbox']:checked"
        ).length;
        const percent = (checked / total) * 100;
        progressBar.style.width = percent + "%";
      });
    });

    folder.appendChild(dropdown);
    foldersContainer.appendChild(folder);

    // Toggle dropdown
    button.addEventListener("click", () => {
      dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
    });
  }
});
