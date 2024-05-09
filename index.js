const express = require('express');
const fs = require('fs');

const app = express();

const cors = require('cors')

app.use(cors())


app.get('/product-data', (req, res) => {
       try{
        const  Data = fs.readFileSync('./constant.json', 'utf-8');
       const sendData = JSON.parse(Data);
       res.json(sendData)
       } catch(error){
        res.send(error)
       }
})


app.get('/banner-data', (req, res) => {
    try{
        const  Data = fs.readFileSync('./bannerData.json', 'utf-8');
       const sendData = JSON.parse(Data);
       res.json(sendData)
       } catch(error){
        res.send(error)
       }
})


app.listen(3002, () => {
    console.log('Listening...')
})