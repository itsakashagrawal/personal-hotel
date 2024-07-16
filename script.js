document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var rating = document.getElementById("rating").value;
    var comments = document.getElementById("comments").value;
    
    // Simulate sending data to a server (in a real scenario, this would be an AJAX request)
    setTimeout(function() {
        // Clear form
        document.getElementById("feedbackForm").reset();
        
        // Display confirmation message
        document.getElementById("confirmationMessage").textContent = "Thank you, " + name + ", for your feedback!";
        
        // Clear confirmation message after 3 seconds
        setTimeout(function() {
            document.getElementById("confirmationMessage").textContent = "";
        }, 3000);
    }, 1000); // Simulated delay
});
