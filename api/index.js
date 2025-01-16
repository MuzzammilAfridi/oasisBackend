
const experss = require('express')
const mongoose = require('mongoose')
const userRoutes = require('../routes/userRoutes')
const productRoutes = require('../routes/productRoutes')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const path = require('path')

 


require('dotenv').config(); 

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("mongo db is connected Successfully")
).catch((err)=>{
    console.log(err); 
    
})  

const app = experss()

// const _dirname = path.resolve();

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

// app.use(experss.static(path.join(_dirname, "/Oasis/dist")))
// app.get('*', (req, res)=>{
//     res.sendFile(path.resolve(_dirname, "Oasis", "dist", "index.html"))
// })



const PORT = process.env.PORT || 7070;
const HOST = '0.0.0.0';

app.listen(PORT, () => {
    console.log(`Server is running on http://localhot:${PORT}`);
});

module.exports = (req, res) => {
  app(req, res);
};



