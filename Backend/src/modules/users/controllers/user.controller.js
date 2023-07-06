import { userSchema } from "../../../../database/models/user.model.js";

export const getAllUsers=async(req,res)=>{
let users=await userSchema.findAll();
res.json({message:"DONE!",users});
  /*query.execute(`SELECT * FROM users`,(err,data)=>{
    if(err){
      return res.json({message:"ERROR!",err});
    }
      return res.json({message:"DONE!",data});
  })*/
};

export const addUser=async(req,res)=>{
  let{name,email,password,age}=req.body;
  let users = await userSchema.create({name,email,password,age});
  res.json({message:"DONE!",users};)
  /*let {name}=req.body;
  query.execute(`SELECT * FROM users WHERE name='${name}'`,(err,data)=>{
    if (err){return res.json({message:"Error!",err});}
    if(data && data.length>0){res.json({message:"User Already Exist!"})}
    else{
      let{name,age,email}=req.body;
      query.execute(`INSERT INTO users (name,age,email) Values ('${name}',${age},'${email}')`,(err,data)=>{
        if(err){
          res.json({message:"Error!",err});
        }else{
          res.json({message:"User Added!",data});
        }
      })
    }
  })*/
};

export const deleteUser = async(req,res)=>{
  let{id}=req.body;
  let sers=await userSchema.destroy({where{id}});
  res.json({message:"DONE!",users};)
  /* let{id}=req.body;
  query.execute(`SELECT * FROM products WHERE id = ${id}`,(err,data)=>{
    if(err){return res.json({message:"Error!",err});}
    if (!data){return res.json({message:'User Not Found!'});}
    else{
      let{id}=req.body;
      query.execute(`DELETE FROM users WHERE id=${id}`,(err,data)=>{
        if(err){
          return res.json({message:"ERROR!",err});
        }else{
          return res.json({message:"User Deleted!",data});
        }
      })
    }
  })*/
};

export const updateUser=async(req,res)=>{
  let{id,name,email,password,age}=req.body;
  let users=await userSchema.update({name},{email},{age},{password},{where:id})
  users[0]?res.json({meassage:"DONE!",users}):res.json({meassage:"Not Found!",users})
/*query.execute(`UPDATE users SET name='${name}',age=${age},email='${email}'`,(err,data)=>{
if(err){
return res.json({message:"ERROR!",err});
}
return res.json({message:"User Updated!",data});
})*/
};

/*export const getAllUsersAndProducts=async(req,res)=>{

  query.execute(`SELECT * FROM users,products`,(err,data)=>{
    if(err){
      return res.json({message:"ERROR!",err});
    }
    return res.json({message:"DONE!",data});
  })
}
*/