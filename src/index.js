/**
 * Created by Richard on 16/8/11.
 */

import  http from 'http'
import  express from 'express'
import  path from 'path'

let app = express()

app.get('/', (req, res) => {
    "use strict"
    res.send('Hello World')
})

let staticPath = path.resolve(__dirname + '/static')
app.use(express.static(staticPath))
console.log(staticPath)
console.log(__dirname)
app.get('/api/login', (req, res) => {
    let response = {
        username:req.query.username,
        password: req.query.password
    }

    console.log(response)
    res.end(JSON.stringify(response))
})

app.get('/test', (req, res) => {
    http.get({
        hostname: 'www.baidu.com',
        port: 80,
        path: '/',
        agent: false
    },(resp) => {
        res.send('Test over')
        resp.on('data',(chunk) =>{
            console.log(chunk)
        })
        resp.on('end', () => {
            //res.send('end')
            //res.end()
            console.log('end')
        })
    })
})

let server = app.listen(8081,() => {
    "use strict"
    console.log(__dirname)
})
