//PROGRAM : Task is to Display Weather info & Country info using api

//NAME : sravankumar

//VERSION : 01

//DATE : 16/9/2022

//EMAIL ID: sravankumar.battu@chubb.com

//CAVETAS : na

 

//country api : https://restcountries.com/v2/all

//weather api : https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=7ae326a7b1cfa067b29e76c1850b3397




function fetchCountry()

{

    let country=document.getElementById('country').value;

 

    const country_url= `https://restcountries.com/v2/name/${country}`;

 

   

    fetch(country_url)

   

    .then(

        (data)=>{

            return data.json();

        }

    )

    .then((data)=>{

   

       

        JSON.stringify(data);

        for(let i=0;i<data.length;i++)

        {

            if(data[i].name==country)

            {

                   

       

            let table = document.getElementById("table");

       

            let row_count = table.rows.length;

       

            let row = table.insertRow(row_count);

       

            row.insertCell(0).innerHTML = data[i].name;

            row.insertCell(1).innerHTML = data[i].capital;

            row.insertCell(2).innerHTML = data[i].region;

            let img_url=data[i].flags.png;

            document.getElementById("topic").src=img_url;    

            }

        }

       

           

    })

    .catch((err)=>{

        console.log(err);

    })

}

 

function getWeather(){

    let country=document.getElementById('country').value;

    const weather_url=`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=7ae326a7b1cfa067b29e76c1850b3397`

    fetch(weather_url)

    .then((data)=>{

        return data.json();

    })

    .then((data)=>{

        JSON.stringify(data);

       

        let table = document.getElementById("table2");

       

        let row_count = table.rows.length;

       

        let row = table.insertRow(row_count);

       

        row.insertCell(0).innerHTML = data.weather[0].description;

        row.insertCell(1).innerHTML = data.main.temp;

        row.insertCell(2).innerHTML = data.main.pressure;    

           

    })

    .catch((err)=>{

        console.log(err);

    })

}