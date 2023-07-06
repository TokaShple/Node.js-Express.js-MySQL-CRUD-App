import { productSchema } from "../../../../database/models/product.model.js";
import { userSchema } from "../../../../database/models/user.model.js";

export const getAllProducts=async(req,res)=>{
let products=await productSchema.findAll();
res.json({message:"DONE!",products});
};

export const searchProduct=async(req,res)=>{
  let {id}=req.body;
  let product=await productSchema.findOne({where:{id}});
  if(products){res.json({message:"DONE!",product})}
  else{res.json({message:"NOT FOUND!"})}
}

export const getProduct=async(req,res)=>{
  let{price}=req.body;
  let products=await productSchema.findAll({where:{price:{[Op.gte]:3000}}})
  if(products.length>0){res.json({message:"DONE!",products})}
  else{res.json({message:"NOT FOUND!"})}
}

export const addProduct=async(req,res)=>{
  try{
  let{name,description,price/*,userId*/}=req.body;
  let products = await productSchema.create({name,description,price/*,userId*/});
  res.json({message:"DONE!",produucts})
  }
  catch(error){
    console.log(error);
    res.json(error);
  }
};

export const deleteProduct = async(req,res)=>{
  try{
  let{id}=req.body;
  let products=await productSchema.findOne({where:{id}});
  if(products){
    if(products.id==id){
      let{id}=req.body;
      let products=await productSchema.destroy({where:{id}});
      res.json({message:"DONE!",products})
    }
    else{res.json({message:"NOT AUTHORIZED!"})}
  }
  else{
    res.json({message:"NOT FOUND!"})
  }
  }
  catch(error){
    res.json(error)
  }
};

export const updateProduct=async(req,res)=>{
  try{
  let{id}=req.body;
  let products=await productSchema.findOne({where:{id}});
  if(products){
    if(products.id==id){
      let{name,description,price,userId}=req.body;
      await productSchema.update({name,description,price,userId},{where:{id}});
      res.json({message:"DONE!"},products)
    }
    else{res.json({message:"NOT AUTHORIZED!"})}
  }
  else{
    res.json({message:"NOT FOUND!"})
  }
  }
  catch(error){
    res.json(error)
  }
};
