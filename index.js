const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '722c78dc90mshaf3d288edac101ap17574ejsnda5962c4bb24',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather=(city)=>{
    document.getElementById('cityName').innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        document.getElementById('cloud_pct').innerHTML=response.cloud_pct
        
        document.getElementById('temp').innerHTML=response.temp

        document.getElementById('feels_like').innerHTML=response.feels_like
        
        document.getElementById('humidity').innerHTML=response.humidity
        document.getElementById('min_temp').innerHTML=response.min_temp
        document.getElementById('max_temp').innerHTML=response.max_temp
        
        document.getElementById('wind_speed').innerHTML=response.wind_speed
        document.getElementById('sunrise').innerHTML=response.sunrise
        document.getElementById('sunset').innerHTML=response.sunset
        

        //document.getElementById('cloud_pct2').innerHTML=10
        document.getElementById('temp2').innerHTML=response.temp
        
        document.getElementById('wind_speed2').innerHTML=response.wind_speed

        document.getElementById('cloud_pct_2').innerHTML=response.cloud_pct
        
    })
    .catch(err => console.error(err));
}


// document.getElementById('submit')
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
}) 

getWeather("Delhi");
// console.log(city.value); 

let table_arr=["Kolkata","Delhi","Mumbai","Chennai","Patna","Ranchi"];



