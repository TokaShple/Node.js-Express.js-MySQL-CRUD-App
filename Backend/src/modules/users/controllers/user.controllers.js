import { Op, where } from "sequelize";
import { userSchema } from "../../../../database/models/user.model.js";

export const getAllUsers=async(req,res)=>{
let users=await userSchema.findAll();
res.json({message:"DONE!",users});
};

export const searchUser=async(req,res)=>{
  let {id}=req.body;
  let users=await userSchema.findOne({where:{id}});
  if(users){res.json({message:"DONE!",users})}
  else{res.json({message:"NOT FOUND!"})}
}

export const getUser=async(req,res)=>{
  let{name,age}=req.body;
  let users=await userSchema.findAll({where:{age:{[Op.lte]:30}},
                                            name:{[Op.like]:'a%'}
                                    })
  if(users.length>0){res.json({message:"DONE!",users})}
  else{res.json({message:"NOT FOUND!"})}
}

export const addUser=async(req,res)=>{
  try{
  let{name,email,password,age}=req.body;
  let users = await userSchema.create({name,email,password,age});
  res.json({message:"DONE!",users})
  }
  catch(error){
    console.log(error);
    res.json(error);
  }
};

export const deleteUser = async(req,res)=>{
  try{
  let{id}=req.body;
  let users=await userSchema.findOne({where:{id}});
  if(users){
    if(users.id==id){
      let{id}=req.body;
      let users=await userSchema.destroy({where:{id}});
      res.json({message:"DONE!",users})
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

export const updateUser=async(req,res)=>{
  try{
  let{id}=req.body;
  let users=await userSchema.findOne({where:{id}});
  if(users){
    if(users.id==id){
      let{name,email,password,age}=req.body;
      await userSchema.update({name,email,password,age},{where:{id}});
      res.json({message:"DONE!"},users)
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
