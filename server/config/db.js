const mongoose = require ('mongoose')

const db = 'mongodb+srv://vitorema:vt792htqal@projetointegrado.euncn5b.mongodb.net/properties?retryWrites=true&w=majority'

const connection = mongoose.connect(db, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

module.exports = connection