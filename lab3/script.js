function printDate() {
    const date = new Date();
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const dateString = date.toLocaleString("ru", options);
    document.getElementById("date").innerHTML = dateString;
}
function printTime() {
    const date = new Date();
    const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
        timeZone: "Asia/Chita",
    };
    const timeString = date.toLocaleString("ru", options);
    document.getElementById("time").innerHTML = timeString;
}

function tempString(temp) {
    temp -= 275.15;
    return (temp > 0 ? "+" : "") + Math.round(temp) + "°";
}

function windDirection(degree) {
    const circle = (degree + 22.5) % 360;
    if (circle < 45) return "С"
    else if (circle < 90) return "СВ"
    else if (circle < 135) return "В"
    else if (circle < 180) return "ЮВ"
    else if (circle < 225) return "Ю"
    else if (circle < 270) return "ЮЗ"
    else if (circle < 315) return "З"
    else return "СЗ";
}

function firstUpperCase(str) {
    return str[0].toUpperCase() + str.slice(1);
}

async function getWeatherBlag() {
    const apikey = "5802b8aa1b811fe85e3eb9dbb1e1678e";
    const blagId = "2026609";
    const url = "https://api.openweathermap.org/data/2.5/weather?lang=ru&id=" + blagId + "&appid=" + apikey;
    let response = await fetch(url);
    json = await response.json();
    document.getElementById("temp").innerHTML = tempString(json.main.temp);
    document.getElementById("feel").innerHTML = "По ощущению: " + tempString(json.main.feels_like);
    document.getElementById("sky").innerHTML = firstUpperCase(json.weather[0].description);
    document.getElementById("pressure").innerHTML = Math.round(json.main.pressure * 0.750062) + " мм рт. ст.";
    document.getElementById("humidity").innerHTML = json.main.humidity + " %";
    document.getElementById("wind").innerHTML = json.wind.speed + " м/c, " + windDirection(json.wind.deg);
    document.getElementById("weatherIcon").src = "images/" + json.weather[0].icon + ".png";
}

async function getWeatherOthers() {
    const apikey = "5802b8aa1b811fe85e3eb9dbb1e1678e";
    const ids = ["2026895", "2015833", "2014718", "2012593", "2016701", "2017487", "2015608"];
    let table = document.getElementById("regionTable");
    for (let i = 0; i < ids.length; i++) {
        const url = "https://api.openweathermap.org/data/2.5/weather?lang=ru&id=" + ids[i] + "&appid=" + apikey;
        let response = await fetch(url);
        json = await response.json();

        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        td1.innerHTML = json.name;
        td2.innerHTML = firstUpperCase(json.weather[0].description);
        td2.align = "right";
        td3.innerHTML = tempString(json.main.temp);
        td3.align = "right";
        td3.className = "numeric";

        table.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
    }
}

printDate();
printTime();
setInterval(() => { printTime() }, 1000);
getWeatherBlag();
getWeatherOthers()