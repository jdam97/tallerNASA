//Levantar server
import {createServer} from "node:http";



//Crear servidor

const http = createServer((req,res)=>{
    if(req.url == "/post"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-07-06&end_date=2023-07-06&api_key=iapBz6UPc9Er7shZjwWJtnuQFzX2DfCxHsQrUDzc")
        .then(res => res.json())
        .then(data => console.log(data))
        res.end();
    }}
    
)

//configuraciones

const config={
    hostname: "127.6.9.26",
    port: "3000"
}

http.listen(config,()=>{
    console.log(`Server running at: ${config.hostname}: ${config.port}`)

})

