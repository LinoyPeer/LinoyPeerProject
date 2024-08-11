// מפתח API אישי
const keyValue = "11ab51a560097de7e6d5afea21f4e96b";

// קליטת נתונים מHTML
const nameDiv = document.getElementById('nameDiv');
const tempDiv = document.getElementById('tempDiv');
const timeDiv = document.getElementById('timeDiv');
const imgSrc = document.getElementById('imgSrc');
const sunriseDiv = document.getElementById('sunriseDiv');
const sunsetDiv = document.getElementById('sunsetDiv');
const windDiv = document.getElementById('windDiv');
const humidityDiv = document.getElementById('humidityDiv');

// הגדרת מערך המכיל את כל הDIV ועיצוב כל אחד  מהם
const divs = [nameDiv, tempDiv, timeDiv, sunriseDiv, sunsetDiv, windDiv, humidityDiv, imgSrc];
const fontSizes = ["30px", "30px", "25px", "30px", "30px", "30px", "40px", "18px"];
divs.forEach(div => div.style.display = "none");

function weatherOfCity(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyValue}&units=metric`)
        .then((response) => response.json())
        .then((data) => {

            // שם
            nameDiv.innerHTML = `
            <h1>Name</h1>
            <hr>
            <br>
            <p style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); font-size:40px; margin-top:-20px">${city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}</p>`;

            // שעה
            let time = new Date((data.dt) * 1000).toLocaleTimeString();
            timeDiv.innerHTML = `
            <h1>Time</h1>
            <hr>
            <h2>UTC+3 time</h2
            <br> 
            <p>${time}<p>
            <img src="./images/clockImg.png" alt="Time-Img" width="110px" height="110px" style="margin-top: 1rem;" style="margin-left: 23rem; " style="border-radius: 10px;">
            `;

            // טמפרטורה
            tempDiv.innerHTML = `
            <h1>Temperature</h1>
            <hr>
            <br>
            <p>${data.main.temp}°C</p>
            <img src="./images/TempImg.png" alt="Temp-Img" width="120px" height="80px" style="border-radius: 10px style="margin-top: 15rem; ">
            `;

            // תמונה
            let imgCityWeather = data.weather[0].icon;
            let imgOfWeather = document.createElement('img');
            imgOfWeather.src = `https://openweathermap.org/img/wn/${imgCityWeather}.png`;
            imgOfWeather.style.width = '5rem';
            imgOfWeather.style.height = '5rem';
            imgSrc.innerHTML = '';
            imgSrc.appendChild(imgOfWeather);


            // זריחה
            let sunriseTime = new Date((data.sys.sunrise) * 1000).toLocaleTimeString();
            sunriseDiv.innerHTML = `
            <h1>Sunrise</h1>
            <hr>
            <h2>UTC+3 time</h2
            <br>
            <p>${sunriseTime}</p>`;

            // שקיעה
            let sunsetTime = new Date((data.sys.sunset) * 1000).toLocaleTimeString();
            sunsetDiv.innerHTML = `
            <h1>Sunset</h1>
            <hr>
            <h2>UTC+3 time</h2
            <br>
            <p>${sunsetTime}</p>
            <img src="./images/SunImg.png" alt="Sun-Img" width="150px" height="150px" style="margin-top: 9rem;" style="margin-left: 23rem; " style="border-radius: 10px;">`;

            // רוח
            windDiv.innerHTML = `
            <h1>Wind</h1>
            <hr>
            <br>
            <p>${data.wind.speed} m/s </p>
            <img src="./images/WindImg.png" alt="Wind-Img" width="190px" height="200px" style="margin-top: 4;" style="margin-left: 23rem; " style="border-radius: 10px;">
            `;

            // לחות
            humidityDiv.innerHTML = `
            <h1>Humidity</h1>
            <hr>
            <br>
            <p>${data.main.humidity}%</p>`;
        })
        .catch((error) => {
            console.log(error);
        });
}

// כפתור
document.getElementById('btn').addEventListener('click', () => {
    divs.forEach((div, index) => {
        div.style.display = "block";
        weatherOfCity(document.getElementById('cityInput').value);
        div.style.fontSize = fontSizes[index];
    })
});
