"use strict";
var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const SkillsElement = document.getElementById('Skills');
    const editButton = document.getElementById('editButton');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && SkillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const Skills = SkillsElement.value;
        // create resume output
        const resumeOutput = `
        <h2>Resume</h2>
        <p><b>Name:</b>${name}</p>
        <p><b>Email:</b>${email}</p>
        <p><b>Phone:</b>${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${Skills}</p>`;
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The resume output elements are missing");
        }
        // Edit button functionality
        editButton.addEventListener('click', function () {
            nameElement.value = name;
            emailElement.value = email;
            phoneElement.value = phone;
            educationElement.value = education;
            experienceElement.value = experience;
            SkillsElement.value = Skills;
            // Clear the resumeOutput element
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = '';
            }
        });
    }
    else {
        console.error("One or More output elements are missing");
    }
});
