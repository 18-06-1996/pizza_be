const foodModel=require('../models/foodmodel')

const foodRouter=require('express').Router();

foodRouter.post("/createfood",async (req,res)=>{
    const {
        name,
        varients,
        prices,
        image,
        category,
        description

    }= req.body;

    const foodNew= new foodModel({
        name,
        varients,
        prices,
        image,
        category,
        description
    });

    foodNew.save().then((response)=>{
        if(response && response._id){
            return res.status(200).json({
                success:true,
                message:"Food created successfully",
                data:response
            })
        }
    }).catch((error)=>{
        return res.status(401).json({
            success:false,
            message:"Food created failed",
            error:error
    })

    })

})


module.exports= FoodRouter;
   