// Fetch and load the header content dynamically
function loadHeader() {
  fetch('/includes/header.html') // Path to the header file
    .then(response => response.text()) // Get the file as text
    .then(data => {
      // Insert the header content into the header-container
      document.getElementById('header-container').innerHTML = data;
    })
}