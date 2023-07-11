//Levantar server
import {createServer} from "http";
import dotenv from "dotenv"
import fetch from "node-fetch";
dotenv.config();



//Crear servidor
const http = createServer((req,res)=>{
    if(req.url == "/asteroids"){
        fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-07-08&end_date=2023-07-08&api_key=u2wZjFHg2verwbRznwvShYS5dqZCRXwFUN5PSL6r")
        .then(res => res.json())
        .then((data) => {
            const asteroide = data.near_earth_objects["2023-07-08"];
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(`<h1> Api Nasa Asteroides</h1>`)
            asteroide.forEach((asteroid) => {
                res.write(`<h2> Nombre: ${asteroid.name}</h2>`)
                res.write(`<p>Diametro: ${asteroid.estimated_diameter.meters.estimated_diameter_max} meters</p>`)
                res.write(`<p>Fecha de aproximacion mas cercana: ${asteroid.close_approach_data[0].close_approach_date_full}</p>`);
                res.write(`<p>Velocidad relativa: ${asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</p>`);
                res.write(`<p>Distancia de la tierra: ${asteroid.close_approach_data[0].miss_distance.kilometers} km</p>`);
                res.write('<hr>');
            });
            res.end()
        })
        res.end();
    }}
    
)

//configuraciones

let config = JSON.parse(process.env.MY_CONFIG)

http.listen(config,()=>{
    console.log(`Server running at: ${config.hostname}: ${config.port}`)

})

