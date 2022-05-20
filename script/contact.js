//This function is called when the contact form is submitted.
function validateForm() {
    //First, the input elements are retrieved from the DOM.
    var name = document.contactForm.contactName;
    var email = document.contactForm.contactEmail;
    var message = document.contactForm.contactMessage;
    
    //For each element in the DOM, the value is checked.
    //If the value is empty or null, the user will be alerted.
    //The function returns false so the form does not submit 
    if (name.value == "" || name.value == null) {
        alert("Name can't be blank");
        return false;
    }
    else if (email.value == "" || email.value == null) {
        alert("You need to include your email");
        return false;
    }
    else if (message.value == "" || message.value == null) {
        alert("You need to write a message");
        return false;
    }
    else {
        //If the values arent empty or null then the message will be sent
        //The function returns true so the form can submit 
        alert("Your Message has been sent");
        return true;
    }
  } 