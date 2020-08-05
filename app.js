window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimeZone = document.querySelector('.location-timezone');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long = position.coords.longitude;
            lat = position.coords.latitude

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2a551674edbf192f1db464248ea597ec`

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    console.log(data.weather[0].description);
                    console.log(data.timezone);

                    const {temp} = data.main;
                    const {description} = data.weather[0];
                    const {timezone} = data;
                    // Set DOM Elements from the API
                    temperatureDegree.textContent = temp;
                    temperatureDescription.textContent = description;
                    locationTimeZone.textContent = timezone;
                });
        });
    }else{
        h1.textContent = "Hey this is not working"
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({"color": "white"});
    }
});      