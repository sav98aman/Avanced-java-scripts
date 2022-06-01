// const spi_key="d9c8b172a997f9ac3487313a76ce843f"

// https://api.openweathermap.org/data/2.5/weather?q=patna&appid=d9c8b172a997f9ac3487313a76ce843f

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

async function getdata(lat,log){
    const city=document.getElementById("city").value;

    // let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9c8b172a997f9ac3487313a76ce843f`;  

    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=d9c8b172a997f9ac3487313a76ce843f`;
    try{
    let res=await fetch(url);
    let data=res.json()
    // console.log(data)
    append(data)
    }catch(err){
        console.log(err)
    }
}
function append(data){
    // document.querySelector(".data").innerHTML=null;
    // let h3=document.createElement("h3")
    // h3.innerText=data.name;
    
    // let p1=document.createElement('p')
    // p1.innerText="Current temp:"+data.main.temp;
    // console.log(p1)

    // let p2=document.createElement('p');
    // p2.innerText=`Min temp: ${data.main.temp_min}`;

    // let p3=document.createElement('p');
    // p3.innerText=`Max temp: ${data.main.temp_min}`;

    // document.querySelector(".data").append(h3,p2,p3)

    let iframe=document.getElementById("gmap_canvas")
    iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}

// curents loaction 

function getloactionwhether(){
    navigator.geolocation.getCurrentPosition(success);

    function success(position){
        const latitude=position.coords.latitude;
        const logitude=position.coords.logitude;

        console.log(latitude,logitude)
        // getdata(latitude,logitude)
    }
}
getloactionwhether()