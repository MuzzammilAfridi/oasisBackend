
const experss = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')




mongoose.connect('mongodb://127.0.0.1:27017/oasis')
.then(()=>console.log("mongo db is connected Successfully")
).catch((err)=>{
    console.log(err);
    
})

const app = experss()
app.use(cookieParser())
app.use(experss.json())
app.use(bodyParser.json());
app.use(cors({
    origin : ['http://localhost:5173'],
    methods : ['GET', 'POST'],
    credentials : true
}))
app.use(fileUpload({
    useTempFiles : true
  }))

app.use('/', userRoutes)
app.use('/product', productRoutes)

app.listen(7070, ()=>{
    console.log("Server is working");
    
})