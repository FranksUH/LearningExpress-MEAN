express = require('express');
bodyParser = require('body-parser');
require('./data-layer/db'); //ensure database connection is stablished

const port = process.env.PORT || 4000;
articleRoutes = require('./api/routes/articleRoutes');

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//error handling middleware
app.use((err, _, res, next) => {

    if(err){ //process errors
        console.log(err);
        res.status(500)
           .send(`Error: ${err}`)
           .json(err);
    }

    if(res.body){
        next();
    }
});

//cors middleware
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // allow preflight
    if (req.method === 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});

//config routes
articleRoutes(app);


//start server
app.listen(port, () => {
    console.log(`Express started on http://localhost:${port}`, 'Press Ctrl + C to stop it')
});