import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1526066843114-f1623fde3476?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHN1biUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1667100801847-75d50daf3f25?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxxNzFJSFZvanlJNHx8ZW58MHx8fHx8";
    const RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";

    return (
        <div className="InfoBox">
            
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={
                    info.humidity > 80
                     ? RAIN_URL 
                     : info.temp > 15 
                     ? HOT_URL 
                     : COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}{
                    info.humidity > 80
                     ? <ThunderstormIcon />
                     : info.temp > 15 
                     ? <WbSunnyIcon /> 
                     : <AcUnitIcon />}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"} >
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
            
            </Card>
            </div>
        </div>
    );
}