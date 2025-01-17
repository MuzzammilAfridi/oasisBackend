
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
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

const app = express()

// const _dirname = path.resolve();

app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.json());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'https://oasis-rho-pink.vercel.app'); // Allow your frontend origin
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // Allow required HTTP methods
//     res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow credentials (cookies, authorization headers, etc.)
//     next();
//   });

// app.use(cors({
//                 //   https://oasis-rho-pink.vercel.app'
//                 //   https://oasis-rho-pink.vercel.app/
//     // origin : ['https://oasis-rho-pink.vercel.app'],
//     origin : ['https://oasis-rho-pink.vercel.app', 'http://localhost:5173/'],
//     methods : ['GET', 'POST'],
//     credentials : true
// }))

app.use(cors({ origin: 'https://oasis-rho-pink.vercel.app' }));


app.options('*', cors())

// const corsOptions = {
//     origin: 'https://oasis-rho-pink.vercel.app',  // Add your frontend URL here
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true,  // If you are using cookies or authentication
// };   
// app.use(cors(corsOptions));  
  




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




