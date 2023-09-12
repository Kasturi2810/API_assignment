async function fetchWeatherData() {
    const apiKey = '94b8733db80e5ec537fb70248d20521c';
    // 1.London 2.Paris 3.New York 4.Japan 5.Russia 6.Delhi 7.India
    
    //const city = 'Nandyal'; 
    const city = prompt("Enter City Name: ");
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
  
      const tempe = data.main.temp;
      const weatherDescription = data.weather[0].description;
 
      const Container = document.querySelector('.weather-data');
      Container.innerHTML = `
        <p>City Name: ${city}</p>
        <p>Temperature: ${tempe}°C</p>
        <p>Weather Description: ${weatherDescription}</p>
      `;
    } catch (error) {
      console.error('Error fetching while weather data:', error);
      const weatherContainer = document.querySelector('.weather-data');
      weatherContainer.innerHTML = '<p>Unable to fetch weather data.</p>';
    }
  }
  
  window.addEventListener('load', fetchWeatherData);
  