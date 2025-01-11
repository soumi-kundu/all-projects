import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){
    const URL="https://images.unsplash.com/photo-1733164847768-694d4bd1ecf7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL="https://media.istockphoto.com/id/1074030960/photo/winter-scene-background-frosted-pine-branches.jpg?s=612x612&w=0&k=20&c=ONTUKOpZRGeQWHAxpkhBMevZ9m_QsOcmsYT7mcOd7vg=";
    const HOT_URL="https://media.istockphoto.com/id/2163514304/photo/boy-drinking-water-from-a-bottle-on-a-sunny-hot-day.jpg?s=612x612&w=0&k=20&c=cVsmWStmjw8nKR1Xax40a_Nd88yHCZdInYWdRVULujk=";
    const RAINY_URL="https://media.istockphoto.com/id/1339250699/photo/back-umbrella-in-the-rain-in-vintage-tone.jpg?s=612x612&w=0&k=20&c=m97op4n9d55pUZ7VEa7et3QLO_Wy-kb4Tl_w30Yg32Y=";
return (
<div className="InfoBox">
    
    <div className="card">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80
          ?RAINY_URL 
          :info.temp>15
          ?HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
           
          }
        </Typography>
        <Typography variant="body2"  sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature={info.temp}&deg;c</p>
         <p>Humidity={info.humidity}</p>
         <p>Min Temp={info.tempMin}&deg;c</p>
         <p>Max Temp={info.tempMax}&deg;c</p>
         <p>The weather feels ={info.feelLike}&deg;c</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
</div>
)
}