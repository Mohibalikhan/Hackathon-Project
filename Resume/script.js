// Function to toggle the visibility of sections
function toggleSection(buttonId, sectionId, showText, hideText) {
    var button = document.getElementById(buttonId);
    var section = document.getElementById(sectionId);
    if (button && section) {
        button.addEventListener('click', function () {
            if (section.style.display === "none") {
                section.style.display = "block";
                button.textContent = hideText;
                button.className = "toggle-on";
            }
            else {
                section.style.display = "none";
                button.textContent = showText;
                button.className = "toggle-off";
            }
        });
    }
}
// Toggle Experience Section
toggleSection('toggle-experience', 'experience-section', 'Show Experience', 'Hide Experience');
// Toggle Skills Section
toggleSection('toggle-skills', 'skills-section', 'Show Skills', 'Hide Skills');
