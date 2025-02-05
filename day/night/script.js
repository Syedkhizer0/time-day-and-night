function updateBackground() {
  const now = new Date();
  const hour = now.getHours();
  const background = document.getElementById('background');
  const icon = document.getElementById('icon');

  
  let color;
  if (hour >= 6 && hour < 12) {
    color = 'linear-gradient(135deg, #ff7e5f, #feb47b)'; 
    icon.textContent = '☀️'; 
  } else if (hour >= 12 && hour < 18) {
    color = 'linear-gradient(135deg, #feb47b, #ffcc99)';
    icon.textContent = '☀️';
  } else if (hour >= 18 && hour < 21) {
    color = 'linear-gradient(135deg, #ffcc99, #d291bc)'; 
    icon.textContent = '🌙'; 
  } else {
    color = 'linear-gradient(135deg, #2c3e50, #4ca1af)'; 
    icon.textContent = '🌙'; 
  }

  background.style.backgroundImage = color;
}


setInterval(updateBackground, 60000);


updateBackground();