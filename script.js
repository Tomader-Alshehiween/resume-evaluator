const form = document.getElementById("resume-form");

form.addEventListener("submit", function (event) {
  // Prevent page reload
  event.preventDefault();

  // Read values
  const jobDescription = document.getElementById("job-description").value;
  const customPrompt = document.getElementById("custom-prompt").value;
  const fileInput = document.getElementById("resume-file");

  // Results area
  const results = document.getElementById("results");

  console.log("Job Description:", jobDescription);
  console.log("Custom Prompt:", customPrompt);
  console.log("File Input:", fileInput);

  // Validation
  if (jobDescription.trim() === "") {
    results.textContent = "Please enter a job description.";
    return;
  }

  if (fileInput.files.length === 0) {
    results.textContent = "Please upload a PDF resume.";
    return;
  }

  // Get uploaded filename
  const fileName = fileInput.files[0].name;

  // Success message
  results.textContent =
    `Evaluating ${fileName} against the job description... (ChatGPT integration coming in Stage 5)`;
});