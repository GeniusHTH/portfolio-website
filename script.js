const toggleBtn = document.getElementById("dark-mode-btn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});
const darkModeToggle = document.querySelector('#dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
   document.body.classList.toggle('dark-mode');
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Wait for page to fully load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
// Prevent scroll jump during page load
window.addEventListener('load', () => {
    // Scroll to top after everything loads
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    
    // Re-enable smooth scroll after load
    setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const aboutText = document.getElementById('typed-about-text');
    const originalText = aboutText.textContent;
    
    // Reset for animation
    aboutText.style.width = '0';
    aboutText.textContent = '';
    
    setTimeout(() => {
      aboutText.style.animation = 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite';
      aboutText.textContent = originalText;
      aboutText.style.width = '100%';
    }, 1000); // 1s delay after page load
  });
  const typeSound = new Audio('typewriter-key.mp3');
// Play sound in type() function
// Wait for the page to fully load
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});