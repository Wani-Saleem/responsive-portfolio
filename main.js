var typed = new Typed(".text", {
    strings: ["Front-End Developer", "Back-End Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    var name = document.querySelector('input[type="text"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var subject = document.querySelector('input[type="text"]').value;
    var message = document.querySelector('textarea').value;

    // Log the data to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Subject: " + subject);
    console.log("Message: " + message);

    // Show the "Successfully Submitted" message using an alert or custom message box
    alert("Successfully Submitted");

    // Reset the form after submitting (optional)
    document.getElementById("contactForm").reset();
}