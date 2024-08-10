// JavaScript code for interactive elements
// For now, we'll add basic functionality

// Example: Add some hover effects or interactive features
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#004d00'; // Darker green on hover
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#008000'; // Original green
        });
    });
});
