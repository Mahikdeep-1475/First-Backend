require('dotenv').config()
const express = require('express') //or import express from "express"
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{ 
    res.send('meckydotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h2>Please login here to proceed</h2>')
})

app.get('/loggedin',(req,res)=>{
    res.send('<h3>You have successfully logged in</h3>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})