// JavaScript for tab navigation
function showTab(tabName) {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      // Hide all sections by default
      section.style.display = 'none';
    });
  
    // Show the selected section
    const activeSection = document.getElementById(tabName);
    if (activeSection) {
      activeSection.style.display = 'block';
    }
  }
  
  // Initially display the About Me section when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    showTab('about');
  });
  