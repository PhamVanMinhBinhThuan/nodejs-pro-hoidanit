// const express = require('express')
import express from "express";
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World abc!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log("env port: ", process.env.PORT)
})
