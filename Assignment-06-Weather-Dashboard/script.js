document.getElementById('fetchBtn').addEventListener('click', async () => {
    const loader = document.getElementById('loader');
    const errorMsg = document.getElementById('errorMsg');
    const weatherResult = document.getElementById('weatherResult');
    const tempElement = document.getElementById('temperature');

    // 1. Reset UI and Show Loader
    loader.classList.remove('hidden');
    errorMsg.classList.add('hidden');
    weatherResult.classList.add('hidden');

    try {
        // 2. Fetch data (Coordinates for Bangalore)
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true');
        
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();

        // 3. Update UI with data
        tempElement.innerText = data.current_weather.temperature;
        
        // Hide loader and show results
        loader.classList.add('hidden');
        weatherResult.classList.remove('hidden');

    } catch (error) {
        // 4. Handle Error State
        console.error("Fetch Error:", error);
        loader.classList.add('hidden');
        errorMsg.classList.remove('hidden');
    }
});