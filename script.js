document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    var templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      budget: document.getElementById("budget").value,
      message: document.getElementById("message").value,
    };

    // Send email
    emailjs.send("service_gd6vfyv", "template_e1ghx6a", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent!");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Failed to send the message. Please try again later.");
      }
    );
  });
