/**
 * Created by Richard on 16/8/11.
 */

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


let server = app.listen(8081,() => {
    "use strict"
    console.log(__dirname)
})
