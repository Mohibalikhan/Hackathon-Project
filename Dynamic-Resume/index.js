"use strict";
const form = document.getElementById('resume-form');
const outputDiv = document.getElementById('resume-output');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const resumeData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        education: formData.get('education'),
        experience: formData.get('experience'),
        skills: formData.get('skills'),
    };
    const resumeHtml = generateResumeHtml(resumeData);
    outputDiv.innerHTML = resumeHtml;
});
function generateResumeHtml(resumeData) {
    return `
      <h1>${resumeData.name}</h1>
      <p><b>Email</b>: ${resumeData.email}</p>
      <p><b>Phone</b>: ${resumeData.phone}</p>
  
    
      <p><b>Education:</b></p>
      <p>${resumeData.education}</p>
  
      <p><b>Work Experience</b></p>
      <p>${resumeData.experience}</p>

      <p><b>Skills</b></p>
      <p>${resumeData.skills}</p>
    `;
}
