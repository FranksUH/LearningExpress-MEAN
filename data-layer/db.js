// Code to connect global MongoDB server
var MongoDB = new require('mongodb').MongoClient;
var globalCS = 'mongodb+srv://m001-student:m001-student@blog-data.gpwmc.mongodb.net/blog-data?retryWrites=true&w=majority'
var localCS = 'mongodb://localhost:27017'  //to use mongoDB locally

var client = new MongoDB(localCS, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
 });

client.connect((err, cl) => {
    if(err) {
        console.log('Error: ', err);
    }
    else{        
        const collection = cl.db('practiceExpress').collection('blog-data');
        
        cl.close();
    }
});