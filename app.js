window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let locationIcon = document.querySelector('.weather-icon')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            

            const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=2a551674edbf192f1db464248ea597ec`


            

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    console.log(data.current.weather[0].description);
                   

                    const {temp} = data.current;
                    const {description, icon} = data.current.weather[0];
                    const {timezone} = data;
                    

                    // Set DOM Elements from the API
                    temperatureDegree.textContent = temp;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = timezone;
                    locationIcon.innerHTML = `<img src="icons/${icon}.png">`;

                });
        });
    }else{
        h1.textContent = "Hey this is not working"
    }
});      