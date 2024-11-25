document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.getElementById('contact-form');

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Construct the message to display
        const popupMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

        // Show the popup with the entered details
        alert(popupMessage);
    });
});
function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var city = document.getElementById('city').value; // New
    var place = document.getElementById('place').value; // New
    var selectedIssues = [];
    var selectElement = document.getElementById('issues');
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].selected) {
        selectedIssues.push(selectElement.options[i].value);
      }
    }
    // Display popup message with all form data
    alert("Name: " + name + "\nEmail: " + email + "\nCity: " + city + "\nPlace: " + place + "\nSelected issues: " + selectedIssues.join(", "));
  }
  