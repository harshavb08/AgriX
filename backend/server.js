import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
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
    from: process.env.FROM_MAILID,
    host: 'smtp.gmail.com', // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
    auth: {
        user: process.env.FROM_MAILID,
        pass: process.env.FROM_MAILID_PASSWORD
    }
});


// mine

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch((error) => {
//     console.log(error.reason);
// });

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {}, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected to database');
    }
});

console.log(process.env.MONGODB_URL);

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

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})
