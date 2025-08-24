import express from "express";

const app = express();

// This gets executed for all the request irrespective of the HTTP Method used.
// app.use((req, res) => {
//     console.log('Inside my app.use()');
//     res.send('Hello from server');
// });

// Routes
app.get('/users', (req, res) => {
    res.send('Getting all the users');
});

app.post('/users', (req, res) => {
    res.send('Creating a user in the database');
});


app.get('/cat', (req, res) => {
    res.send('<h1>Meewooowwww</h1>');
});

app.get('/dog', (req, res) => {
    res.send('Woof Woooof Woooof');
});

// app.get('/r/dog', (req, res) => {
//     res.send("Dog Subreditt");
// });

// app.get('/r/cat', (req, res) => {
//     res.send("Cat Subreditt");
// });

// app.get('/r/oranges', (req, res) => {
//     res.send("Oranges Subreditt");
// });

// app.get('/r/apples', (req, res) => {
//     res.send("Apples Subreditt");
// });

// https://developer.mozilla.org/en-US/search?q=abc

// PATH PARAMS
app.get('/r/:subredit', (req, res) => {
    const { subredit } = req.params;
    // make a database call to fetch details for the particular subredit
    // build page to display the result
    res.send(`${subredit} Subredit`);
});


// http://localhost:1234/search?q=paragraph&name=max&age=23&mode=dark

// QUERY PARAMS Example
app.get('/search', (req, res) => {
    const { q = 'Nothing' } = req.query;
    res.send(`You are search for ${q}`);
});

app.listen(1234, () => {
    console.log('server started at port 1234');
});








