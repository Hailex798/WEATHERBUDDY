const Submit = document.getElementById("submitBtn");
const City = document.getElementById("cityName");
const displayCity = document.getElementById("city_name");
const temp = document.getElementById("temp");
const tempStatus = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle_layer")

const weatherInfo = async(event) => {
        event.preventDefault();
        let cityVal = City.value
        // IF EMPTY CITY NAME: SUBMIT
        if(cityVal === ""){
                displayCity.innerText = "Enter a City Name!"
                dataHide.classList.add("data_hide");
        }else{  
                try{
                        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=765aa0c28b15c2ca3c4ed04d92dcab15`;
                        const res = await fetch(url);
                        const data = await res.json();
                        const arr = [data];
                        displayCity.innerText = `${arr[0].name}, ${arr[0].sys.country}`
                        //TEMPERATURE INFO
                        temp.innerText = "";
                        $('#temp').unbind().append(arr[0].main.temp + '&deg;C');
                        //TEMPERATURE STATUS - CLOUDS/RAINY/FOG ETC.
                        const tempIcon = arr[0].weather[0].main;
                        if(tempIcon == "Clear"){
                                tempStatus.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>"
                        }else if(tempIcon == "Clouds"){
                                tempStatus.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
                                console.log(tempStatus.innerHTML);
                        }else if(tempIcon == "Rain"){
                                tempStatus.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
                        }else if(tempIcon == "Snow"){
                                tempStatus.innerHTML = "<i class='fas fa-snowflake' style='color: #009ad8;'></i>"
                        }else{
                                tempStatus.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>"
                        }
                        dataHide.classList.remove("data_hide");

                }catch{ //IF INVALID CITY NAME: SUBMIT
                        dataHide.classList.add("data_hide");
                        displayCity.innerText = "Enter a Valid City Name!"
                }
        }
}

Submit.addEventListener('click', weatherInfo)


//SET DAY, DATE, YEAR
        let date = new Date();
        //SET YEAR
        let year = document.querySelector("#year")
        year.innerText = date.getFullYear()
        //SET DAY
        let day = document.querySelector("#day");
        let weekDay = new Array(7);
        weekDay[0] = "Sunday";
        weekDay[1] = "Monday";
        weekDay[2] = "Tuesday";
        weekDay[3] = "Wednesday";
        weekDay[4] = "Thursday";
        weekDay[5] = "Friday";
        weekDay[6] = "Saturday";
        day.innerText = weekDay[date.getDay()];
        //SET DATE
        let dateMonth = document.querySelector("#today_date");
        let Month = new Array(12);
        Month = [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ]
        dateMonth.innerText = `${date.getDate()} ${Month[date.getMonth()]}`;