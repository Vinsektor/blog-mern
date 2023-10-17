/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
    .connect('mongodb+srv://vinsektor:Provisex2000@cluster0.fijnbkj.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.post('/auth/login', (req, res) => {
    const token = jwt.sign(
        {
            email: req.body.email,
            fullName: 'Вася Пупкин',
        },
        'secret123',
    );

    res.json({
        success: true,
        token,
    });
});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    return console.log('Server OK');
});
