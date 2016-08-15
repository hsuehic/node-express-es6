/**
 * Created by Richard on 16/8/11.
 */

import  express from 'express'

let app = express()

app.get('/', (req, res) => {
    "use strict"

    res.send('Hello World')
})

app.get('/index.html', (req,res) =>{
    res.sendFile(__dirname + '/static/' +  'index.html')
})

app.get('/api/login', (req, res) => {
    let response = {
        username:req.query.username,
        password: req.query.password
    }

    console.log(response)
    res.end(JSON.stringify(response))
})


let server = app.listen(8081,() => {
    "use strict"

    let host = server.address().address
    console.log(host)
    let port = server.address().port
    console.log(port)
    console.log(`Example app listening at http://${host}:${port}`)
})
