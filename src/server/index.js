const dotenv = require('dotenv');
dotenv.config();
const fetch = require("node-fetch")
const BASE_URL = 'https://api.meaningcloud.com/sentiment-2.1?'
const KEY = process.env.API_KEY


const mockAPIResponse = require('./mockAPI.js')

const PORT = 8081

var path = require('path')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors())

app.use(express.static('dist'))

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
  if (error) throw new Error(error)
  //console.log(`Server listening on port ${PORT}!`)
})

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  // res.sendFile(path.resolve('src/client/views/index.html'))
  res.sendFile(path.resolve('dist/index.html'))
})

// CORS problme is that you send all object and this is big to send
// don't send Object returned from fetch as is not to get CORS error
// this error for big and long result requests

let getData = async (url = '') => {
  console.log('URL -> ', url)
  var request = await fetch(url)
  try {
    // Transform into JSON
    var projectData = await request.json()
   // console.log('El GetData =>', projectData)
    let res = {}
    res.score_tag = projectData.score_tag;
    res.agreement = projectData.agreement;
    res.subjectivity = projectData.subjectivity;
    res.confidence = projectData.confidence;
    res.irony = projectData.irony;

    // console.log("RES 9 ", res)

    return res
  }
  catch (error) {
    console.log("error MOST", error);
    // appropriately handle the error
  }
}

let JSONDataM = {};
app.post('/msg', async (req, res) => {

  let inUrl = req.body.url
  let URL = `${BASE_URL}key=${KEY}&url=${inUrl}&lang=en`
  JSONDataM = await getData(URL)
// console.log('DDD',JSONDataM)
})

//GET route returns data object
app.get('/data', (req, res) =>
  res.send(JSONDataM))


app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})

// export { getData }// for testing 