import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import data from './Data/data.js'
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js'
import orderRouter from './routers/orderRouter.js';
import departmentRouter from './routers/departmentRouter.js';
import blogRouter from './routers/blogRouter.js';

// give mailing feature to the app without using any third party service
import mailer from 'express-mailer';



dotenv.config();

const app = express();

// mine
mailer.extend(app, {
    from: 'agrixcultcode@outlook.com',
    host: 'smtp.gmail.com', // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
        user: 'agrixcultcode@outlook.com',
        pass: 'agrix@hhrsv'
    }
});


// mine

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/AgriX', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log(error.reason);
});

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)
app.use('/api/departments', departmentRouter)
app.use('/api/blogs', blogRouter)

app.use('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})




app.get('/api/phones', (req, res) => {
    res.send(data.phones)
})



app.get('/', (req, res) => {
    res.send('Server Started')
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})