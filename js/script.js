/**
 * Rolls a specified number of dice and displays the results.
 * Updates the text content and images in the designated areas of the webpage.
 */
function rollDice() {
    // Get the number of dice to roll from the input element
    const numOfDice = document.getElementById('numOfDice').value;
    // Check if the number of dice is between 1 and 10
    if (numOfDice < 1 || numOfDice > 10) {
        alert('Please enter a number between 1 and 10.');
        return;
    }

    // Get the elements to display the dice result and images
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    // Arrays to store the values and image elements of the rolled dice
    const values = [];
    const images = [];

    // Roll each die and store its value and corresponding image
    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1; // Random value between 1 and 6
        values.push(value); // Store the die value
        images.push(`<img src="dice_image/${value}.png" alt="dice-${value}">`); // Store the die image
    }

    // Update the text content to show the values of the rolled dice
    diceResult.textContent = `dice: ${values.join(', ')}`;
    // Update the inner HTML to display the images of the rolled dice
    diceImages.innerHTML = images.join('');

    // Add a fancy animation to the dice result text
    diceResult.animate([
        { transform: 'translateY(0)' },
        { transform: 'translateY(-1rem)' },
        { transform: 'translateY(0)' },
    ], {
        duration: 200,
        iterations: 2,
    });

    // Add a fancy animation to the dice images
    const animation = diceImages.animate([
        { opacity: 0 },
        { opacity: 1 },
    ], {
        duration: 200,
        iterations: 2,
    });

    // Add a fancy effect to each die image
    images.forEach((image) => {
        const dieImage = diceImages.querySelector(`img[src="${image}"]`);
        dieImage.animate([
            { filter: 'grayscale(100%)' },
            { filter: 'grayscale(0%)' },
        ], {
            duration: 200,
            iterations: 2,
        });
    });
}

