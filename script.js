// script.js

// Select all the boxes and the total price display
const boxes = document.querySelectorAll('.box');
const totalPrice = document.getElementById('total');

// Function to handle box click
boxes.forEach((box) => {
  const radioButton = box.querySelector('input[type="radio"]');

  // Add a click listener to each radio button
  radioButton.addEventListener('change', () => {
    // Close any open box
    boxes.forEach((b) => b.classList.remove('active'));

    // Open the selected box
    if (radioButton.checked) {
      box.classList.add('active');

      // Update total price
      const price = box.getAttribute('data-price');
      totalPrice.textContent = price;
    }
  });
});
