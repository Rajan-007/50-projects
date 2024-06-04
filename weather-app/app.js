
async function fetchWeather(){

    const city = document.getElementById('cityInput').value;
    const apikey = '9de474f459fe40ebb1143859240406';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`

    try{
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    }
    catch(error){
        console.error("error:",error)
        document.getElementById('weatherResult').innerHTML =` <h2>Failed to load</h2>
        <p> try another city </p>`
    }

}

function displayWeather(data){
    const weatherText = `<div class="flex flex-col justify-center " >
        <h2 class="text-lg">${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <p>wind speed: ${data.current.wind_kph}kph</p>
        <img class='h-40 w-40 mx-auto ' src="https:${data.current.condition.icon}" alt="Weather Icon">
    </div> `;

    document.getElementById('weatherResult').innerHTML = weatherText;
 }
 