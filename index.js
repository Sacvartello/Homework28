//Task1
const fs = require('fs/promises')

const promise = fs.readFile('./file.txt', 'utf-8')
promise.then(data=>{
    const strArr = data.split('\n').filter(el =>'  ')
    // console.log(strArr.length);
    const randomIndex = Math.round(Math.random()*strArr.length)
    console.log(strArr[randomIndex]);
})
//Task2
const http = require('http')
const exp = require('express')
const app = exp()
const bodyParser = exp.json()
const server = http.createServer(app)


server.listen(5000)


app.get('/task',(req, res)=>{
    const prom1 = fs.readFile('./dist/index.html', 'utf-8')
    prom1.then(data=>{
        console.log(data);
        res.status(200).send(data)
    })
})