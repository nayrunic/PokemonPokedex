const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost/pokemon-pokedex'

mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err) => {
    if(err){
        console.log('err: ',err);
    }else{
        console.log('Database connected ',MONGO_URI);
    }
})