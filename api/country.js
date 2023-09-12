const countryInfo = document.querySelector('.country-info');
async function getCountryInfo() {
  try {
   
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
   
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomCountry = data[randomIndex];

    countryInfo.innerHTML = `
      <h2>Country Name: ${randomCountry.name.common}</h2>
      <p>Capital of Country: ${randomCountry.capital || 'N/A'}</p>
      <p>Total Population: ${randomCountry.population || 'N/A'}</p>
      <p>Region: ${randomCountry.region || 'N/A'}</p>
      <p>Subregion: ${randomCountry.subregion || 'N/A'}</p>
      <p>Timezones: ${randomCountry.timezones || 'N/A'}</p>
    `;
  } catch (error) {
    console.error('Error while fetching data:', error);
    countryInfo.innerHTML = '<p>Failed to fetch country information. </p>';
  }
}

// window.addEventListener('load', getCountryInfo);
document.getElementById('myButton').addEventListener('click' , getCountryInfo);
