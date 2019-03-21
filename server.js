const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000;

// enable cors for all apis
app.use(cors())

const paitentList = [
    {
        name : "p2",
        age : 'a2', 
        symptom: 's2'
    },
    {
        name : "p2",
        age : 'a2', 
        symptom: 's2'
    },
    {
        name : "p2",
        age : 'a2', 
        symptom: 's2'
    },
]

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/paitent', (req, res) => res.send(
    paitentList
));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))