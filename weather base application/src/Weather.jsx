import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function Weather(){
    const[weather,setweather]=useState({
        city:"Delhi",
        feelLike: 19.52,
        humidity: 59,
        temp: 19.93,
        tempMax: 19.93,
        tempMin: 19.93,
        weather: "clear sky",
    });
    let updateInfo=(result)=>{
        setweather(result);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>weather app  </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weather}/> 
        </div>
    );
}