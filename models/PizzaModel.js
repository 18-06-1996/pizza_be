const mongoose= require('mongoose')

const pizzaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      varients: {
        type: Array,
        required: true,
      },
      prices: {
        type: Array,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      description: {
          type: String,
          required: false,
        }
      
    },{
        timestamps:true,
    }
    )
    
const pizzaModel = mongoose.model('pizzas', pizzaSchema)

module.exports=pizzaModel