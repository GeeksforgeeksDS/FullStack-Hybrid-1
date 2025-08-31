const express = require('express');
const { BadRequest } = require('./ApiError');

const app = express();

app.use(express.json());

const verifyKey = (req, res, next) => {
    const { key } = req.query;
    if (key !== 'apple') {
        return res.send('Invalid Key');
    }
    return next();
}

// app.use((req, res, next) => {
//     req.username = 'Max';
//     console.log('Inside my first middleware');
//     return next();
//     console.log('Inside my first middleware after calling next');
// });

// app.use((req, res, next) => {
//     console.log('Inside my second middleware');
//     return next()
//     console.log('Inside my second middleware afer calling next');
// });

app.get('/greet', (req, res) => {
    const { username = 'Anonymous' } = req;
    console.log('Inside greet route');
    if (true) {
        throw new BadRequest('Something went wrong with greet');
    }
    res.send(`Hello from ${username}`);
})

app.get('/cat', (req, res) => {
    console.log('Inside my cat middleware.');
    res.send('Meeooowww Meeooowww');
});

app.get('/secret', verifyKey, (req, res) => {
    res.send('Sometime i wear headphones in public so that i dont have to talk to anyone');
});


// Global Error Handler
app.use((err, req, res, next) => {
    const { message = 'Internal Server Error', status = 500 } = err;
    res.status(status).json({ message });
});

app.listen(1234, () => {
    console.log('server started at port 1234');
})