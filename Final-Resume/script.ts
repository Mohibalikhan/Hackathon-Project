document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

    const profilePictureInput=document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement=document.getElementById('name') as HTMLInputElement;
    const emailElement=document.getElementById('email') as HTMLInputElement;
    const phoneElement=document.getElementById('phone') as HTMLInputElement;
    const educationElement=document.getElementById('education') as HTMLInputElement;
    const experienceElement=document.getElementById('experience') as HTMLInputElement;
    const SkillsElement=document.getElementById('Skills') as HTMLInputElement;


    const usernameElement =document.getElementById('username') as HTMLInputElement;

    const editButton = document.getElementById('editButton') as HTMLButtonElement;
    

    if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && SkillsElement&&usernameElement ){

        const name=nameElement.value;
        const email=emailElement.value;
        const phone=phoneElement.value;
        const education=educationElement.value;
        const experience=experienceElement.value;
        const Skills=SkillsElement.value;

        

        //picture Element
        const profilePicturFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePicturFile ? URL.createObjectURL(profilePicturFile) : "";

        // create resume output
        const resumeOutput=`
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
        <p><b>Name:</b>${name}</p>
        <p><b>Email:</b>${email}</p>
        <p><b>Phone:</b>${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${Skills}</p>`;


        const downloadLink=document.createElement("button");
        downloadLink.textContent="Download Resume";
        downloadLink.addEventListener("click",()=>{
            window.print()
        })
        

        const resumeOutputElement = document.getElementById('resumeOutput')
        if(resumeOutputElement){
            resumeOutputElement.innerHTML=resumeOutput;

            resumeOutputElement.appendChild(downloadLink)
            
        }
        else{
            console.error("The resume output elements are missing")
        }

//---------------------------------------------------------------------


if (resumeOutputElement) {
    const shareButton = document.createElement("button");
    shareButton.textContent = "Share Resume";
    if (resumeOutputElement) {
      resumeOutputElement.appendChild(shareButton);
    }
  
    const username = usernameElement.value;  'http://127.0.0.1:5500/index.html'; // Replace with the actual CV URL
    shareButton.addEventListener("click", () => {
      if (navigator.share) {
        navigator.share({
          title: "My Resume",
          text: "Check out my resume!",
          url: window.location.href + "?user=" + username,


        })
        .then(() => console.log("Share successful"))
        .catch((error) => console.error("Error sharing:", error));
      } else {
        console.error("Web Share API not supported");
      }
    });
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
    else{
        console.error("One or More output elements are missing")
    }
});







