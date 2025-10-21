const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        mongoose.connect(process.env.MONGODB_URI,{
              useNewUrlParser: true, 
              useUnifiedTopology: true,
               ssl: true,
                tls: true,                 // ✅ use only 'tls'
                tlsAllowInvalidCertificates: false
        })
        console.log(' Database connected successFully.. ');
        
    } catch (error) {
        console.log(error.message);
        
    }
}
module.exports = connectDB