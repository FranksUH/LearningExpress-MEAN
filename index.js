const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('This is the default page for our Express server')
});

// custom 404 page
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found')
});

app.listen(port, () => {
    console.log(`Express started on http://localhost:${port}`, 'Press Ctrl + C to stop it')
});