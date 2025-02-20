// Fetch and load the header content dynamically
function loadHeader() {
  fetch('/includes/header.html') // Path to the header file
    .then(response => response.text()) // Get the file as text
    .then(data => {
      // Insert the header content into the header-container
      document.getElementById('header-container').innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementByTag('hamburger-icon').addEventListener('click', function() {
        console.log("Hamburger clicked!");
        const nav = document.getElementById('nav-menu');
        nav.classList.toggle('active');

            // Close the menu when clicking any menu item
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navMenu.classList.remove('active'); // Remove 'active' class to hide menu
            hamburger.classList.remove('active'); // Optionally hide the hamburger icon
        });
    });
    });
});



