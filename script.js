window.onload = function() {
    const characterOptions = document.querySelectorAll('.character-option');
    const characterDisplay = document.getElementById('character');
    const gameInterface = document.getElementById('game-interface'); // Assuming you have a game interface section

    characterOptions.forEach(option => {
        option.addEventListener('click', function() {
            const newSrc = this.src;
            characterDisplay.src = newSrc;

            // Show game interface or additional content
            gameInterface.style.display = 'block'; // Assuming the game interface is hidden initially
        });
    });
};
