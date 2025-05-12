// Function to handle the navigation and update the section
function changeSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.classList.remove('active'));

    // Show the selected section
    const activeSection = document.getElementById(section);
    activeSection.classList.add('active');

    // Update the URL without refreshing the page
    history.pushState(null, '', `#${section}`);
}

// Set up event listeners for navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const section = link.getAttribute('data-section');
        changeSection(section);
    });
});

// Check the URL hash when the page loads and show the corresponding section
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        changeSection(hash);
    } else {
        changeSection('about'); // Default section to show on load
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        changeSection(hash);
    }
});