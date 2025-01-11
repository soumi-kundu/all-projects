import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css" ;
import { useState } from 'react';
export default function SearchBox({updateInfo}){
  let[city,setCity]=useState("");
  let[err,seterr]=useState(false);

  const API_URL="https://api.openweathermap.org/data/2.5/weather";
  const API_KEY="64426371eb22c1d77d15b776280c9f90";


  let getweatherInfo=async()=>{
    try{
    let response=await fetch(
      `${API_URL}?q=${city} &appid=${API_KEY}&units=metric`
    );
    let jsonResponse=await response.json();
  
    let result={
      city:city,
      temp:jsonResponse.main.temp,
      tempMin:jsonResponse.main.temp_min,
      tempMax:jsonResponse.main.temp_max,
      humidity:jsonResponse.main.humidity,
      feelLike:jsonResponse.main.feels_like,
      weather:jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
  }catch(err){
    throw err;
  }
  };

      let handelChange=(evt) =>{
      setCity (evt.target.value);
        };
      let handelSubmit=async(evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
       let Info=await getweatherInfo();
       updateInfo(Info);
      }catch(err){
        seterr(true)
      }
      };
    return(
    <div className="searchbox">
        <form onSubmit={handelSubmit}>
        <TextField 
        id="city"
         label="city name" 
         variant="outlined" 
          required 
          value={city}
          onChange={handelChange}/>
        <br></br>
        <br></br>
        <Button variant="contained" type="submit" >
        Search
      </Button>
      {err &&  <p style={{color:"red"}}>no such place exists!</p>}
        </form>
    </div>
    );
}