function navigateTo(sectionId) {
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('hidden');
    });
    document.querySelector(sectionId).classList.remove('hidden');
  }


  let cooldown = false;
  


  // Initialize points
let points = 0;

// Reference to points display and button
const pointsDisplay = document.getElementById('points');
const snapshotButton = document.getElementById('snapshot-button');

// Function to update points
function updatePoints() {
  points += 10;
  pointsDisplay.innerText = points; // Update points on the page
}

// Add event listener to the button
snapshotButton.addEventListener('click', () => {
  updatePoints(); // Increase points when the button is clicked
  alert('Picture taken! Points increased by 10.');
});
