//Levantar server
import {createServer} from "node:http"

//Crear servidor

const http = createServer((req,res)=>{
    res.end()
})

//configuraciones

const config={
    hostname: "127.6.9.26",
    port: "3000"
}

http.listen(config,()=>{
    console.log("servidor activo")
})