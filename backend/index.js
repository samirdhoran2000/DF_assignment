require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");
const cors = require('cors');
const app = express();
const { db}=require('./model/index.js')
const PORT = process.env.PORT || 3000;

const {router:userRouter} =require('./routes/user.routes.js')

app.use(cors({
origin:'*'
}))
app.use(express.json());
app.use("/user", userRouter);



app.listen(PORT, () => {
  
  db();
  console.log(`server is running on http://127.0.0.1:${PORT}`);
});
