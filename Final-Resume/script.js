var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var SkillsElement = document.getElementById('Skills');
    var usernameElement = document.getElementById('username');
    var editButton = document.getElementById('editButton');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && SkillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var phone_1 = phoneElement.value;
        var education_1 = educationElement.value;
        var experience_1 = experienceElement.value;
        var Skills_1 = SkillsElement.value;
        //picture Element
        var profilePicturFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePicturFile ? URL.createObjectURL(profilePicturFile) : "";
        // create resume output
        var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n        <p><b>Name:</b>").concat(name_1, "</p>\n        <p><b>Email:</b>").concat(email_1, "</p>\n        <p><b>Phone:</b>").concat(phone_1, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education_1, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience_1, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(Skills_1, "</p>");
        var downloadLink = document.createElement("button");
        downloadLink.textContent = "Download Resume";
        downloadLink.addEventListener("click", function () {
            window.print();
        });
        var resumeOutputElement_1 = document.getElementById('resumeOutput');
        if (resumeOutputElement_1) {
            resumeOutputElement_1.innerHTML = resumeOutput;
            resumeOutputElement_1.appendChild(downloadLink);
        }
        else {
            console.error("The resume output elements are missing");
        }
        //---------------------------------------------------------------------
        if (resumeOutputElement_1) {
            var shareButton = document.createElement("button");
            shareButton.textContent = "Share Resume";
            if (resumeOutputElement_1) {
                resumeOutputElement_1.appendChild(shareButton);
            }
            var username_1 = usernameElement.value;
            'http://127.0.0.1:5500/index.html'; // Replace with the actual CV URL
            shareButton.addEventListener("click", function () {
                if (navigator.share) {
                    navigator.share({
                        title: "My Resume",
                        text: "Check out my resume!",
                        url: window.location.href + "?user=" + username_1,
                    })
                        .then(function () { return console.log("Share successful"); })
                        .catch(function (error) { return console.error("Error sharing:", error); });
                }
                else {
                    console.error("Web Share API not supported");
                }
            });
        }
        //     shareButton.addEventListener("click", () => {
        //         // Implement share functionality here
        //         // For example, you can use the Web Share API
        //         if (navigator.share) {
        //             navigator.share({
        //                 title: "My Resume",
        //                 text: "Check out my resume!",
        //                 url: window.location.href
        //             })
        //             .then(() => console.log("Share successful"))
        //             .catch((error) => console.error("Error sharing:", error));
        //         } else {
        //             console.error("Web Share API not supported");
        //         }
        //       // ...
        //     });
        //   }
        //-----------------------------------------------------
        // Edit button functionality
        editButton.addEventListener('click', function () {
            nameElement.value = name_1;
            emailElement.value = email_1;
            phoneElement.value = phone_1;
            educationElement.value = education_1;
            experienceElement.value = experience_1;
            SkillsElement.value = Skills_1;
            // Clear the resumeOutput element
            if (resumeOutputElement_1) {
                resumeOutputElement_1.innerHTML = '';
            }
        });
    }
    else {
        console.error("One or More output elements are missing");
    }
});
