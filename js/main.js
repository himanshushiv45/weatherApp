// console.log(document);

function getCity(city) {
  const myAPI = "5de2a94a44083780ba75b17d9e05b4dd";
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myAPI}&units=metric`
  ).then((response) => {
    // console.log(response)
    return response.json();
  }).then((data) => {
    console.log(data);

    document.getElementById("city").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("icon").innerText = data.weather[0].icon;
    document.getElementById("main").innerText = data.weather[0].main;
    document.getElementById("humidity").innerText = data.main.humidity;
    document.getElementById("wind").innerText = data.wind.speed;
  })
    .catch((error) => {
      console.log("City not found");
    });
}

getCity("nagpur");    //default

// --------------------------------------------------
function readValue() {
  const cityname = document.getElementById("input").value;
  getCity(cityname);
}

setInterval(() => {
  let newDate = document.getElementById("newDate").innerText = new Date().toLocaleTimeString();
}, 1000)
console.log(newDate)

